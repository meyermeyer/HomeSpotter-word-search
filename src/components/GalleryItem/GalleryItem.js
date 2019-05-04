import React, { Component } from 'react';

class GalleryItem extends Component {

    //add state for isClicked boolean

    state = {
        isClicked: false,
        likes: 0

    }

    handleClick = () => {
        console.log('clicked');
        this.setState({
            isClicked: !this.state.isClicked
        })
        
    }

    handleLike = () => {
        console.log('clicked like');
        
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
                </ul>
            </li>
            
            
        )
    }
}
export default GalleryItem;