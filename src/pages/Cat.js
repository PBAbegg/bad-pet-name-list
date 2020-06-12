import React from 'react';
import Page from '../components/Page'

export default class Cat extends React.Component {
    constructor(props)
    {
        super(props);
        
        this.state = {
            catName: '',
            catSpecies: '',
            catColor: '',
        };
    };

    handleChange = (event) =>
    {
        event.preventDefault();
        this.addName.reset();

        const fetchOptions = {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(this.state),
        };

        console.log(fetchOptions);

        // send data to api
        const route = 'http://localhost:3030/api/cat'
        fetch(route, fetchOptions)
        .then((response) =>
        {
            return response.json();
        })
        .catch((err) => 
        {
            console.log('Error posting a name is: ', err);
        })
    };

    handleInputChange = (event) => 
    {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    componentDidMount (){
        this.setState({
            catName: '',
            catSpecies: '',
            catColor: '',            
        })
    }

    changeHandler = (event) =>
    {
        const fieldName = event.target.getAttribute('name');
        const stateObj = {};
        stateObj[fieldName] = event.target.value;
        stateObj.feedbackMessage = '';
        stateObj.feedbackType = '';
        this.setState(stateObj);
    }
       
    render()
    {
        return(
            <Page>
                <p>Enter Your Bad Cat Name</p>
                <form ref={input => this.addName = input} onSubmit={this.handleChange}>
                    <label>Name:</label>
                    <input autoComplete="off" type="text" id="name" name="catName" 
                    onChange={this.handleInputChange}></input>

                    <label>Species:</label>
                    <input autoComplete="off" type="text" id="species" name="catSpecies" 
                    onChange={this.handleInputChange}></input>

                    <label>color:</label>
                    <input autoComplete="off" type="text" id="color" name="catColor" 
                    onChange={this.handleInputChange}></input>
                    
                    <input type="submit" value="Submit"></input>
                </form>
            </Page>
        )
    };
};

