
import { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from './components/Heading';
import Subheading from './components/Subheading';
import { Container } from 'react-bootstrap';
import FormTask from './components/FormTask';

function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <Container>
        <Heading classroom='65i' enable={enabled}/>
        <Subheading/>
        <div className="text-center">
          <button className='btn btn-primary text-center' onClick={()=> setEnabled(!enabled)}>
            {enabled ? 'Desabilitar' : 'Habilitar'}</button>
        </div>
        <FormTask></FormTask>
      </Container>
    </div>
  );
}

export default App;
