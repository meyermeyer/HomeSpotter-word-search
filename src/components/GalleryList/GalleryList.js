import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    
    render() {
        let galleryItem;
        
        // this.props.galleryList.map((image) => {
        //     console.log(image);
        //     galleryItem = image;
            
        //     return (
        //         // <img key={image.id} alt={image.alt} src={image.path} />
        //         image
        //     )
            
            
            
        // })
        console.log(galleryItem);
        
        
        return(
            <ul>
                {/* loop through galleryList, send each image to GalleryItem component then render. */}
                {this.props.galleryList.map((galleryItem) => {
                // console.log(image);
                    return (
                        //image.id is a unique id
                        <GalleryItem key={galleryItem.id} galleryItem={galleryItem}/>
                    )
                    })}
                
            </ul>
            // <p>images here</p>
            // <>
            // {/* <li>{imageToRender}</li> */}
            // <GalleryItem galleryItem={galleryItem}/>
            // </>
        )
        // return(
        //     <li><img src=</li>
        // )
    }
}

export default GalleryList;