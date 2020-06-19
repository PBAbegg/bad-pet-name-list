import React from 'react';
import Header from './Header'


export default class Page extends React.Component {
constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
        <section className="page-wrapper">

            <Header />
            {this.props.children}
      
        </section>
        );
    }
}

