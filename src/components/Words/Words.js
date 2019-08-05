import React, { Component } from 'react'
import {connect} from 'react-redux'

import {Button, Grid, List, ListItem} from '@material-ui/core'
import axios from 'axios';

class Words extends Component {
    state={
        reducedWordList:[],
        buttonIsClicked: false
    }

    handleClick=()=>{
        this.setState({
            ...this.state,
            buttonIsClicked: true
        })
        //GET reduced words list from server
        axios.get('/api/words/reduced')
            .then(response=>{
                this.setState({
                    //sort alphabetically
                    reducedWordList: response.data.sort()
                })
            })
            .catch(err=>{
                console.log('error in Get /api/words/reduced', err);
            })
    }
    render() {
        return (
            <Grid container>
                <Grid item xs={6}>
                    <h3>Words</h3>
                    <List>
                        {this.props.reduxState.wordsReducer && this.props.reduxState.wordsReducer.map((word, i) => (
                            <ListItem key={i}>{word}</ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="secondary" onClick={this.handleClick}>Bonus Mode!</Button>
                    <List>
                        {this.state.reducedWordList && this.state.reducedWordList.map((word, i) => (
                            <ListItem key={i}>{word}</ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(Words)