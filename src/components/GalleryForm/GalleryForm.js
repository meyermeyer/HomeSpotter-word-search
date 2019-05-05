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
    render(){
        return (
            <form>
                <input type="text" placeholder="Image Link" />
                <input type="text" placeholder="Image Description"/>
                <button type="submit">Submit</button>
            </form>
            // <p>form here</p>
        )
    }
}

export default GalleryForm;