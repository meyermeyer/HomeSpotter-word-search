import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {


    render() {
        let imageToRender = this.props.galleryList.map((image) => {
            return (
                <img key={image.id} alt={image.alt} src={image.path} />
            )
            
        })

        
        return(
            // <p>images here</p>
            <>
            <li>{imageToRender}</li>
            <GalleryItem />
            </>
        )
        // return(
        //     <li><img src=</li>
        // )
    }
}

export default GalleryList;