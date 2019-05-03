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
            <li>
                {this.props.galleryList.map((image) => {
                console.log(image);
                    return (
                        <GalleryItem key={image.id} galleryItem={image}/>
                    )
                    })}
                
            </li>
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