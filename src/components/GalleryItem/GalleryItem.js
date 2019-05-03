import React, { Component } from 'react';

class GalleryItem extends Component {


    render() {
        let imageToRender = 
        <img alt={this.props.galleryItem.alt} src={this.props.galleryItem.path} />
        console.log(this.props.galleryItem.alt);
        


        return (
        
        
            // <p>images here</p>
            <>
            {imageToRender}
            </>
        )
        // return(
        //     <li><img src=</li>
        // )
    }
}
export default GalleryItem;