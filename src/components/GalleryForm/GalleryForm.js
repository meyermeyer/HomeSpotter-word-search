import React, { Component } from 'react';

class GalleryForm extends Component {

    //form state to store new image
    state = {
        newGalleryItem: {
            path: '',
            description: '',
            alt: ''

        }
    }
    
    handleChangeFor = (property) => {
        return (event) => {
            this.setState({
                newGalleryItem: {
                    ...this.state.newGalleryItem,
                    [property]: event.target.value
                }
            })//end setState
        }//end return
    } //end handleChangeFor

    handleSubmit = (event)=> {
        event.preventDefault();
        console.log('in handleSubmit');
        this.props.submitGalleryItem(this.state.newGalleryItem);
        this.setState({
            newGalleryItem: {
                path: '',
                description: '',
                alt: ''
            }
        })
    }

    render(){
        console.log(this.state.newGalleryItem.path);
        
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.newGalleryItem.path} onChange={this.handleChangeFor('path')} type="text" placeholder="Image Link" />
                <input value={this.state.newGalleryItem.description} onChange={this.handleChangeFor('description')} type="text" placeholder="Image Description"/>
                <button type="submit">Submit</button>
            </form>
            // <p>form here</p>
        )
    }
}

export default GalleryForm;