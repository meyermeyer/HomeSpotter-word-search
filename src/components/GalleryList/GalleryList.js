import React, {Component} from 'react';

class GalleryList extends Component {


    render() {
        let imageToRender = this.props.galleryList.map((image) => {
            return (
                <img key={image.id} alt={image.alt} src={image.path} />
            )
            
        })

        
        return(
            // <p>images here</p>
            <li>{imageToRender}</li>
        )
        // return(
        //     <li><img src=</li>
        // )
    }
}

export default GalleryList;