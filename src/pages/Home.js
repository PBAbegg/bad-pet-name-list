import React from 'react';
import { Link } from 'react-router-dom';
import UpdateCat from './UpdateCat'


export default class Home extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            cats: [],
            catData: " ",
            dogs: [],
            fish: []
        }
    }

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
    }

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

