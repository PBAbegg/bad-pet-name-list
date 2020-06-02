import React from 'react';
import Page from '../components/Page'

export default class Cat extends React.Component {
constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <Page>
                <p>Enter Your Bad Cat Name</p>
                <form>
                    <input type='text' />
                </form>
            </Page>
        )
    }
}

