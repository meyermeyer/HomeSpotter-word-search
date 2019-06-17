import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

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
                <Button variant="contained" color="primary" size="small" type="submit">
                    Submit
                </Button>
            </form>
            // <p>form here</p>
        )
    }
}

export default GalleryForm;