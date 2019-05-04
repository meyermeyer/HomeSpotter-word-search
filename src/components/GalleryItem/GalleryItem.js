import React, { Component } from 'react';
import axios from 'axios';

class GalleryItem extends Component {

    //add state for isClicked boolean

    state = {
        isClicked: false,

    }

    handleClick = () => {
        console.log('clicked');
        this.setState({
            isClicked: !this.state.isClicked
        })
        
    }

    handleLike = () => {
        console.log('clicked like');
        //axios PUT request to server to trigger like counter increase
        axios.put('/gallery/like/'+this.props.galleryItem.id)
        .then((response) => {
            console.log('in handleLike', response);
            this.props.getGalleryList();
        })

        //display like number on DOM
        
    }

    render() {
        console.log('image clicked', this.state);
        let contentToRender;
        // console.log(this.props.galleryItem.description);
        
        //conditional rendering
        if (this.state.isClicked) {
            contentToRender = (
                <p className="imgDesc">{this.props.galleryItem.description}</p>
                
            )
        } else {
            contentToRender = (
                    <img alt={this.props.galleryItem.alt} src={this.props.galleryItem.path} />
            
            )
        }
        
        console.log(contentToRender);
        
        console.log(this.props.galleryItem.path);
        console.log(this.props.galleryItem.description);
        
       
        


        return (
        
        
            // <p>images here</p>
            <li className="galleryList">
                <ul>
                <li className="galleryItem" onClick={this.handleClick}>{contentToRender}</li>
                <li className="galleryItem" ><button onClick={this.handleLike}>Like</button></li>
                <li>{this.props.galleryItem.likes} Likes</li>
                </ul>
            </li>
            
            
        )
    }
}
export default GalleryItem;