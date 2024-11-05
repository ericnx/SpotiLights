import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Login';

export default function App() {
    return (
      <Container 
        className='d-flex justify-content-center align-items-center flex-column vh-100 text-center'
      >
        <h1><b>SpotiLights</b></h1> 
        <p>Enjoy your music's lights.</p> 
        <Login/>
      </Container>
    )
}

