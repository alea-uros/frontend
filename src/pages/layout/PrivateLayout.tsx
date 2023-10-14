import React, { FC } from 'react';
import { Container } from '@mui/material';
import Header from '../../components/header/Header';
import { LayoutPropsType } from '../../types/common/layout-props.type';

const PrivateLayout: FC<LayoutPropsType> = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  );
};

export default PrivateLayout;
