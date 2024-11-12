import {Container} from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Login';
import Dashboard from './Dashboard';

const code = new URLSearchParams(window.location.search).get('code');

export default function App() {
    return code ? <Dashboard code={code}/> : <Login/>
}

