import React from 'react';
import {Link} from 'react-router-dom';
import UpdateCat from './UpdateCat'


export default class Home extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            cats: [],
            catData: " ",
            dogs: [],
            dogData: " ",
            fish: []
        }
    };

    fetchCats = () =>
    {
        let route = 'http://localhost:3030/api/cat';
        fetch(route)
        .then((response) =>
        {
            return response.json();
        })
        .then((data) =>
        {
            this.setState({
                cats: data,
                catData: data.map((cat,i) =>
                {
                return (<ul key={`cat_${cat._id}`}>{`${cat.catName}, ${cat.catSpecies}, ${cat.catColor}`} 
                        <button onClick={this.deleteCat} value={cat._id}>x</button>
                        <Link to={{pathname:'/updatecat', catID:cat._id}} >Update</Link>
                    </ul>)
                })             
            })
        })
    };

    deleteCat = (event) =>
    {
        let route = 'http://localhost:3030/api/cat/' + event.target.value;
        let fetchOptions = {method: 'DELETE'}
        console.log(route)
        fetch(route, fetchOptions)
        .then((response) =>
        {
            return response.json();
        })
        .then(() => 
        {
            this.fetchCats()
        }) 
    };

    componentDidMount(){
        this.fetchCats()
    };


    fetchDogs = () =>
    {
        let rout = 'http://localhost:3030/api/dog';
        fetch(rout)
        .then((response) => {
            return response.json();
        })
        .then((data) =>
        {
            this.setState({
                dogs: data,
                dogData: data.map((dog,i) =>
                {
                    return (<ul key={`dog_${dog._id}`}>{`${dog.dogName}, ${dog.dogSpecies}, ${dog.dogColor}`}
                            <button onClick={this.deleteDog} value={dog._id}>x</button>
                            {/* Make updatedog file */}
                            <Link to={{pathname:'/updatedog', dogID:dog._id}} >Update</Link>
                    </ul>)
                })
            })
        })
    };

    deleteDog = (event) =>
    {
        let route = 'http://localhost:3030/api/dog/' + event.target.value;
        let fetchOptions = {method: 'DELETE'}
        console.log(route)
        fetch(route, fetchOptions)
        .then((response) =>
        {
            return response .json();
        })
        .then(() =>
        {
            this.fetchDogs();
        })
    };

    componentDidMount(){
        this.fetchDogs()
    };


    fetchFish = () =>
    {

    }

    deleteFish = (event) =>
    {
        
    }



    render()
    {
        return(
            <div>
                Home info
                <div>
                    Cat Names
                    {this.state.catData}
                </div>
                <div>
                    Dog Names
                </div>
                <div>
                    Fish Names
                </div>
            </div>
        )
    };
}

