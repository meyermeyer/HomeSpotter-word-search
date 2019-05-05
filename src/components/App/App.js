import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'
import GalleryForm from '../GalleryForm/GalleryForm'
import axios from 'axios';

class App extends Component {
  state = {
    galleryList: []
  }

  componentDidMount() {
    //on first render, load gallery
    this.getGalleryList();
  }

  // getGalleryList is a function that retrieves images from gallery.data.js and changes state
  getGalleryList = ()=> {
    // console.log('in getGalleryList');
    //axios get gallery list from gallery.data.js
    axios.get('/gallery')
    .then(response => {
      //test response.data
      console.log(response.data);
      //set state to update galleryList array with data from gallery.data
      this.setState({
        galleryList: response.data
      })
      
    })//end axios get .then
      .catch(error => {
        console.log(error);
      })//end axios get .catch
  }

  //newGalleryItem passed from GalleryList component
  submitGalleryItem = (newGalleryItem) => {
    console.log('in submitGalleryItem');
    //axios POST route
    axios.post('/gallery', newGalleryItem)
    .then(response => {
      console.log(response);
      this.getGalleryList();
    }) //end axios post /gallery
    .catch(error => {
      console.log('error in post', error); 
    })//end .catch
  }//end submitGalleryItem

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        {/* pass submitGalleryItem function to GalleryForm */}
        <GalleryForm submitGalleryItem={this.submitGalleryItem}/>
        {/* pass getGalleryList function as a prop so child can send to next child to re-render like count after like click */}
        <GalleryList getGalleryList={this.getGalleryList} galleryList={this.state.galleryList}/>
        {/* <p>Gallery goes here</p> */}
        {/* <img alt="A mountain goat at Glacier National Park."src="images/goat_small.jpg"/> */}
      </div>
    );
  }
}

export default App;
