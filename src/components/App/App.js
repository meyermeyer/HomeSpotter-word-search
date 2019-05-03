import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'
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


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList />
        <p>Gallery goes here</p>
        <img alt="A mountain goat at Glacier National Park."src="images/goat_small.jpg"/>
      </div>
    );
  }
}

export default App;
