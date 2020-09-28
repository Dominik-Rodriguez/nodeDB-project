import React, {Component} from 'react';


export default class Plans extends Component{
    constructor(props){
        super(props);
        this.state = {
            edit: false,
            input: ''
        }
    }

    handleInput = (val) => {
        this.setState({input: val})
    }

    handleToggle = () => {
        this.setState({edit: !this.state.edit})
    }

    handleEdit = (id) => {
        this.props.textFn(id, this.state.input);
        this.handleToggle();
    }

    render(){
        let {first_name, last_name, email, plan} = this.props.client;
        return(
            <div>
                <p>{first_name}</p>
                <p>{last_name}</p>
                <p>{email}</p>
                {this.state.edit
                ? (
                    <section>
                        <input 
                        value={this.state.input}
                        onChange={e =>this.handleInput(e.target.value)}/>
                        <button onClick={() => this.handleEdit(this.props.client.id)}>Submit</button>
                    </section>
                )
                :  (
                    <section>
                        <p>{this.props.client.plan}</p>
                        <button onClick={this.handleToggle}>Make Plan</button>
                    </section>
                )}
                <button onClick={() => this.props.deleteFn(this.props.client.id)}>Delete</button>
            </div>

        )
    }
}