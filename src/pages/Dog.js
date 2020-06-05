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
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name"></input>
                    <label for="species">Species:</label>
                    <input type="text" id="species" name="species"></input>
                    <label for="color">color:</label>
                    <input type="text" id="color" name="color"></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </Page>
        )
    }
}

