// import React, {Component} from 'react';
import React from 'react';
import Plans from './Plans';

//this corresponds to pokedex

const EditTheseClients = props => {
    const clientsMapped = props.editClient.map((client, i) => (
    <Plans 
        key={i}
        client={client}
        textFn={props.textFn}
        deleteFn={props.deleteFn}
    />
    ))
    return(
            <div>
                <h1>Plans to be made</h1>
                <div className="client">
                {clientsMapped}
                </div>
            </div>
    )
}
export default EditTheseClients;