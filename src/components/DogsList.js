import React, { Component } from 'react'
import superagent from 'superagent'

export default class DogsList extends Component {

    state = { dogBreeds: null }

    componentDidMount() {
        
        superagent
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => this.updateBreeds(Object.keys(response.body.message)))
            .catch(console.error)
    }

    updateBreeds(breeds) {
        this.setState({
            dogBreeds: breeds
        })
    }
    
    dataDisplay(){
        if(this.state.dogBreeds !== null){
           return (<ul>{this.state.dogBreeds.map(breed => <li key={breed}>{breed}</li>)}</ul>)
        }
        else {return null}   
    }

    render() {
        return (
            <div className="dogs-list">
                <h1>Dogs List</h1>
                    {this.dataDisplay()}
            </div>
        )
    }
}