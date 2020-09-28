import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Clients from './Components/Clients';
import EditTheseClients from './Components/EditTheseClients';
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      editClient: []
    }
    this.getClients = this.getClients.bind(this);
  }

  //great for retrieving data from a server that you need in your component right awat
  //componentDidMount is a lifecycle method for retrieving data from a server
  // componentDidMount(){
  //   axios.get('/api/client')
  //   .then(res => {
  //     this.setState({editClient: res.data})
  //   })
  //   .catch(err => console.log(err));
  // }

  getClients(client){
    axios.post('/api/client', {client: client})
    .then(res => {
      this.setState({editClient: res.data})
    })
    .catch(err => console.log(err));
  }

  editPlan = (id, newPlan) => {
    let body = {plan: newPlan};
    axios.put(`/api/client/${id}`, body)
    .then(res => {
      this.setState({editClient: res.data})
    })
    .catch(err => console.log(err));
  }

  deleteFn = (id) => {
    axios.delete(`/api/client/${id}`)
    .then(res => {
      this.setState({editClient: res.data})
    })
    .catch(err => console.log(err));
  }

  render(){
    return (
      <div className="Base">
        <Header />
        <Clients 
          importClientsFn={this.getClients} />
        <EditTheseClients
          editClient={this.state.editClient}
          textFn={this.editPlan}
          deleteFn={this.deleteFn} />
        <Footer />
      </div>
    );
  }
}

export default App;
