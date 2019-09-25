import React, { Component } from 'react';
import './Form.css';
import { Card } from 'react-bootstrap';


class Tarjetas extends Component
{
    state = {usuario: 'vegeta777', name: 'manco', last_name: 'lara', type_user: '1', city: 'valdivia'};
    constructor(props) {
        super(props);
    }
    render()
    {
        return(
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{this.state.usuario}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{this.state.name} {this.state.last_name}</Card.Subtitle>
                <Card.Text>
                Ciudad: {this.state.city}
                </Card.Text>
                <Card.Text>
                Puede escribir: {this.state.type_user}
                </Card.Text>
            </Card.Body>
            </Card>
        );
    }
}

export default Tarjetas;