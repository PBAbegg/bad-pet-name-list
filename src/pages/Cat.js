import React from 'react';
import Page from '../components/Page'

export default class Cat extends React.Component {
    constructor(props)
    {
        super(props);
        
        this.state = {
            name: '',
            species: '',
            color: '',
        };
    };

    handleSubmit = (event) =>
    {
        event.preventDefault();
        const data = this.state
        console.log(data)

        let post = {
            method: 'POST'
        }
        
    };

    handleInputChange = (event) => 
    {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    componentDidMount (){
        this.setState({
            name: '',
            species: '',
            color: '',            
        })
    }
       
    render()
    {
        return(
            <Page>
                <p>Enter Your Bad Cat Name</p>
                <form onSubmit={this.handleSubmit}>
                    <label for="name">Name:</label>
                    <input autocomplete="off" type="text" id="name" name="name" onChange={this.handleInputChange}></input>
                    <label for="species">Species:</label>
                    <input autocomplete="off" type="text" id="species" name="species" onChange={this.handleInputChange}></input>
                    <label for="color">color:</label>
                    <input autocomplete="off" type="text" id="color" name="color" onChange={this.handleInputChange}></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </Page>
        )
    };
};

