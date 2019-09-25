import React, { Component } from 'react';
import './Form.css';

class Form extends Component
{
    state = {nombre: '', email: ''};
    constructor(props) {
        super(props);
    }

    valueToState = ({name,value}) => {
        this.setState(state => {
            return { [name]: value};
        });
    };

    render(){
        return (
            <div className="Form">
                <pre>{JSON.stringify(this.state,null,2)}</pre>
                <form>
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        name = "nombre" 
                        type="text" 
                        placeholder="Ingresa tu nombre"
                        onChange={event => this.valueToState(event.target)}
                    />
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        name = "nombre" 
                        type="text" 
                        placeholder="Ingresa tu nombre"
                        onChange={event => this.valueToState(event.target)}
                    />
                </form>
            </div>
        );
    }

}



export default Form;