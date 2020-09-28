import React, {Component} from 'react';

//this receives data from Clients to be displayed on App
export default class ClientList extends Component{
    handleMove = () => {
        const {client} = this.props;
        let newClient = {
            first_name: client.first_name,
            last_name: client.last_name,
            email: client.email,
            plan: client.plan
        }

        this.props.importClientsFn(newClient);
        this.props.bringClientsFn();
    }

    // const {first_name} = this.props;

    render(){
        const{first_name, last_name, email, plan} = this.props.client;
        // console.log(this.props.client);
        return(
            <body onClick={this.handleMove}>
                <p>{first_name}</p>
                <p>{last_name}</p>
                <p>{email}</p>
            </body>
        )
    }
}