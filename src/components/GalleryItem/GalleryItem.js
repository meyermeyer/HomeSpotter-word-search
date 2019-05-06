import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
//fixes photo orientation, but does weird stuff to the sizing and placement
// import ExifOrientationImg from 'react-exif-orientation-img';

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

    handleDelete = () => {
        console.log('in handleDelete');

        //axios DELETE call
        axios.delete('/gallery/' + this.props.galleryItem.id)
            .then(response => {
                console.log('in DELETE with', response);
                //refresh DOM with updated list
                this.props.getGalleryList();
            })//end .then
            .catch(error => {
                console.log('error in DELETE /gallery', error);
            })//end .catch
    }//end handleDelete

    handleLike = () => {
        console.log('clicked like');
        // console.log(this.props.galleryItem.id);

        //axios PUT request to server to trigger like counter increase
        axios.put('/gallery/like/' + this.props.galleryItem.id)
            .then((response) => {
                console.log('in handleLike', response);
                this.props.getGalleryList();
            })
            .catch(error => {
                console.log('error in PUT /gallery/like', error);
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
                    <li className="galleryItem" >
                        {this.props.galleryItem.likes} Likes
                        <Button variant="contained" color="primary" size="small" onClick={this.handleLike}>Like</Button>
                        <Button variant="contained" color="secondary" size="small" onClick={this.handleDelete}>
                            Delete
                            <DeleteIcon/>
                        </Button>
                    </li>
                </ul>
            </li>


        )
    }
}
export default GalleryItem;