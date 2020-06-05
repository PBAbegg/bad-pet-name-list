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
        
    };

    // changeHandler = (event) =>
    // {
    //     const fieldName = event.target.getAttribute('name');
    //     const stateObj = {};
    //     stateObj[fieldName] = event.target.value;

    // };
       
    render()
    {
        return(
            <Page>
                <p>Enter Your Bad Cat Name</p>
                <form onSubmit={this.handleSubmit}>
                    <label for="name">Name:</label>
                    <input autocomplete="off" type="text" id="name" name="name" value={this.state.name} changeHandler={this.changeHandler}></input>
                    <label for="species">Species:</label>
                    <input autocomplete="off" type="text" id="species" name="species"></input>
                    <label for="color">color:</label>
                    <input autocomplete="off" type="text" id="color" name="color"></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </Page>
        )
    };
};

