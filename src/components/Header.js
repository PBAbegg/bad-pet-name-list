import React from 'react';
import Navigation from './Navigation';
import Dog from '../pages/Dog';
import Cat from '../pages/Cat';
import Fish from '../pages/Fish';

export default class Header extends React.Component {
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <header className='main-header'>
                <Navigation />
            </header>
        )
    }
}

