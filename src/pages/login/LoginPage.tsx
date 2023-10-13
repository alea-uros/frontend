import {Box, Button, Container, TextField} from "@mui/material";
import React, {useState} from "react";
import {LoginPayloadDto} from "../../dtos/login/login-payload.dto";
import LoginForm from "../../components/login-form/LoginForm";

const LoginPage: React.FC = () => {
    return (
        <div>
           <h1>Login</h1>
            <LoginForm></LoginForm>
        </div>
    );
}