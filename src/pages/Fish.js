import React from 'react';
import Page from '../components/Page'

export default class Fish extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <Page>
                <p>Enter Your Bad Fish Name</p>
                <form>
                    <input type='text' />
                </form>
            </Page>
        )
    }
}

