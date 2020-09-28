import React, {Component} from 'react'
import ClientList from './ClientList'
import axios from 'axios'

//this contains the data that will be sent to ClientList to be displayed

export default class Client extends Component{
    constructor(props){
        super(props);
        this.state = {
            uneditedClients: [],
            id: 0,
            random: Math.ceil(Math.random() * 10)
        }
        // const rand1 = Math.ceil(Math.random() * 9);
        // const rand2 = Math.ceil(Math.random() * 10);
    }

    componentDidMount(){
        this.getClients();
    }

    getClients = () => {
        axios.get('/api/client')
        .then(res => {
            this.setState({uneditedClients: res.data})
        })
        .catch(err => console.log(err));
    }

    render(){
        // let {id} = this.state;
        const clientsMapped = this.state.uneditedClients.map((client, i) => (
            <ClientList 
            key={i}
            client={client}
            importClientsFn={this.props.importClientsFn}
            bringClientsFn={this.getClients}
            />
        ))
        return(
            <div className="clients">
                {clientsMapped}
            </div>
        )
    }
}