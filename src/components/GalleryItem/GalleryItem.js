import React, { Component } from 'react';

class GalleryItem extends Component {

    //add state for isClicked boolean

    state = {
        isClicked: false

    }
    handleClick = () => {
        console.log('clicked');
        this.setState({
            isClicked: !this.state.isClicked
        })
        
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
            <li onClick={this.handleClick}>{contentToRender}</li>
            
            
        )
    }
}
export default GalleryItem;