import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from './useAuth';

export default function Dashboard({code}){
    const accessToken = useAuth(code);
     return (
        <Container>
            <h1>{code}</h1>
        </Container>
     );
}