import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Contacto = () => {
    return (
        <div className='home'>
                <h1>Cuentanos, ¿En que te podemos ayudar? </h1>
                <Form className='formulario' >
      <Form.Group className="mb-3 text-center"  controlId="exampleForm.ControlInput1">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3 text-center" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <Button variant="danger">Enviar</Button>{' '}
        </div>
    );
};

export default Contacto;