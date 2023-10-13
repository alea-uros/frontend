import React, {useState} from "react";
import {LoginPayloadDto} from "../../dtos/login/login-payload.dto";
import {Box, Button, Container, TextField} from "@mui/material";

const LoginForm: React.FC = () => {
    const [formData, setFormData] = useState<LoginPayloadDto>({
        email: '',
        password: '',
    });
    const handleSubmit = () => {

    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return(
        <Container>
            <Box>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        variant="outlined"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        margin="normal"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </Box>
        </Container>
    );
}

export default LoginForm;