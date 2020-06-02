import React from 'react';
import Page from '../components/Page'

export default class Dog extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <Page>
                <p>Enter Your Bad Dog Name</p>
                <form>
                    <input type='text' />
                </form>
            </Page>
        )
    }
}

