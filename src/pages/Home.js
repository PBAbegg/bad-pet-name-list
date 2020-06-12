import React from 'react';
import Cat from './Cat';
import Dog from './Dog';
import Fish from './Fish';

export default class Home extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            cats: [],
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
                catData: data.map((catName, catSpecies, catColor) =>
                {
                    return
                    {this.state.cats.map(cat => (
                        <ul key={`cat ${cat._id}`}>
                            <li>{cat.catName}</li>
                            <li>{cat.catSpecies}</li>
                            <li>{cat.catColor}</li>
                        </ul>
                    ))}
                })
            })
        })
    }

    componentDidMount(){

    }

    render()
    {
        return(
            <div>
                Home info
                <div>
                    Cat Names
                    {/* Cat */}
                    {this.state.cats.map(cat => (
                        <ul key={`cat ${cat._id}`}>
                            <li>{cat.catName}</li>
                            <li>{cat.catSpecies}</li>
                            <li>{cat.catColor}</li>
                        </ul>
                    ))}
                </div>
                <div>
                    Dog Names
                </div>
                <div>
                    Fish Names
                </div>
            </div>
        )
    }
}

