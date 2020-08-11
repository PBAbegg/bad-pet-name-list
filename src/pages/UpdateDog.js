import React from 'react';
import Page from '../components/Page';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

export default class UpdateDog extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            dogName: '',
            dogSpecies: '',
            dogColor: '',
            shouldRedirect: false,
        };
    };

    getDog = () =>
    {
        let rout = 'http://localhost:3030/api/dog/' + this.props.location.dogID;
        fetch(rout)
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
            console.log('Error fetching a name:' ,err);
        })
    }

    
}