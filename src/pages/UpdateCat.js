import React from 'react';
import Page from '../components/Page';
import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';

    
export default class UpdateCat extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            catName: '',
            catSpecies: '',
            catColor: '',
            shouldRedirect: false,
        };
    };

    getCat = () =>
    {
        let route = 'http://localhost:3030/api/cat/' + this.props.location.catID; 
        fetch(route)
        .then((response) =>
        {
            return response.json();
        })
        .then ((data) =>
        {
            console.log(data)
            this.setState({...data[0]})
        })
        .catch((err) => 
        {
            console.log('Error fetching a name is: ', err);
        })
    }

    updateCatInfo = (event) =>
    {
        event.preventDefault()
        let route = 'http://localhost:3030/api/cat/' + this.props.location.catID;
        const fetchOptions = {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify(this.state),
        };
        console.log(route)
        fetch(route, fetchOptions)
        .then((response) =>
        {
            return response.json();
        })
        .then((data) => 
        {
            console.log("cat update: ", data);
            this.setState({
                shouldRedirect: true
            });
        })
        .catch((err) => 
        {
            console.log('Error updating a cat is: ', err);
        })
    };

    handleChange = (event) =>
    {
        event.preventDefault();
        this.UpdateName.reset();

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
        .then((data) => {
            console.log("cat update: ", data);
            this.setState({
              shouldRedirect: true
            });
          })
        .catch((err) => 
        {
            console.log('Error posting a cat is: ', err);
        })
    };

    changeHandler = (event) =>
    {
        const fieldName = event.target.getAttribute('name');
        const stateObj = {};
        stateObj[fieldName] = event.target.value;
        stateObj.feedbackMessage = '';
        stateObj.feedbackType = '';
        this.setState(stateObj);
    };

    componentDidMount(){
        this.getCat()
    };

    render()
    {

        if (this.state.shouldRedirect) {
            return <Redirect to="/" />;
        }     
        
        return(
            <Page>
                <p>Change that name</p>
                <form ref={input => this.UpdateName = input} onSubmit={this.updateCatInfo}>
                    <label>Name:</label>
                    <input autoComplete="off" type="text" id="name" name="catName" value={this.state.catName} 
                    onChange={this.changeHandler}></input>

                    <label>Species:</label>
                    <input autoComplete="off" type="text" id="species" name="catSpecies" value={this.state.catSpecies}
                    onChange={this.changeHandler}></input>

                    <label>color:</label>
                    <input autoComplete="off" type="text" id="color" name="catColor"  value={this.state.catColor}
                    onChange={this.changeHandler}></input>
                    
                    <input type="submit" value="Update"></input>
                </form>
            </Page>
        )
    }
}