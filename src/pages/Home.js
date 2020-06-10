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

    handleAddedCat = (cat) => 
    {
        this.setState({ cats: [...this.state.cats, cat] })
    }

    getCats() {

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
                    {this.state.cats.map(cat => (
                        <ul key={`cat ${cat._id}`}>
                            <li>{cat.name}</li>
                            <li>{cat.species}</li>
                            <li>{cat.color}</li>
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

