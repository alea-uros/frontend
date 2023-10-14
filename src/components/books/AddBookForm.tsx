import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useAddBookMutation } from '../../http/book/add-book';
import { AddBookPayloadType } from '../../types/book/add-book-payload.type';
import { useNavigate } from 'react-router-dom';
import { toBase64 } from '../../services/common/to-base-64';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

export type FormPayload = {
  title: string;
  description: string;
  type: string;
  date: Date | null;
  image: File | null;
  actors: { name: string }[];
};

const AddBookForm: React.FC = () => {
  const mutation = useAddBookMutation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormPayload>({
    title: '',
    description: '',
    type: '',
    date: null,
    image: null,
    actors: [],
  });

  const handleChange = (
    e:
      | React.ChangeEvent<
          | HTMLInputElement
          | HTMLTextAreaElement
          | { name?: string; value: unknown }
        >
      | SelectChangeEvent,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name as string]: value,
    });
  };

  const handleDateChange = (date: Date | null) => {
    setFormData({
      ...formData,
      date,
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setFormData({
      ...formData,
      image: file || null,
    });
  };

  const handleActorChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
  ) => {
    if (e.target.value !== '') {
      const updatedActors = [...formData.actors];
      updatedActors[index] = { name: e.target.value };
      setFormData({
        ...formData,
        actors: updatedActors,
      });
    }
  };

  const handleAddName = () => {
    setFormData({
      ...formData,
      actors: [...formData.actors, { name: '' }],
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const coverImage: string = formData.image
      ? await toBase64(formData.image)
      : '';

    const payload: AddBookPayloadType = {
      title: formData.title,
      description: formData.description,
      type: parseInt(formData.type),
      actors: formData.actors,
      releaseDate: formData.date,
      coverImage: coverImage.split(',')[1],
    };

    mutation.mutate(payload);
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      navigate(`/books/${mutation.data.id}`);
    }
  }, [mutation.isSuccess]);

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            variant="outlined"
            required
            inputProps={{ maxLength: 100 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            variant="outlined"
            multiline
            required
            inputProps={{ maxLength: 1000 }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Type</InputLabel>
            <Select
              label="Type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <MenuItem value={0}>Book</MenuItem>
              <MenuItem value={1}>Comic</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker
                label="Date"
                value={formData.date}
                onChange={handleDateChange}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <input
            required={true}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </Grid>
        <Grid item xs={12}>
          <b>Add actors:</b>
          {formData.actors.map((actor, index) => (
            <TextField
              key={index}
              fullWidth
              value={actor.name}
              onChange={(e) => handleActorChange(e, index)}
              variant="outlined"
            />
          ))}
          <IconButton onClick={handleAddName} color="primary">
            <AddCircleIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginTop: '16px' }}
      >
        Submit
      </Button>
    </form>
  );
};

export default AddBookForm;
