import React, {Component} from 'react'
import { IconButton, TextField, List, ListItem } from '@material-ui/core'
import axios from 'axios';
import {connect} from 'react-redux'

import {withStyles} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const styles = theme => ({
    input: {
        width: '50vw'
    },
    button: {
        verticalAlign: 'sub',
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    container: {
        position: 'relative'
    }
});

class Input extends Component {
    state = {
        inputValue: '',
        rowLength: 0,
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault()
        //change line breaks to '/', remove quotation marks if present, remove spaces between letters
        let newString = this.state.inputValue.replace(/[\n\r]/g, '/').replace(/(['"])/g, '').split(' ').join('').toLowerCase()+'/'
        let rowLength = 0
        let matrix=[]
        let transposedMatrix = []
        let row =''
        let potentialWords = {}

        let storePotentialWords = (row) => {
            //for each row, find all strings 4 letters or longer
            // i looks at each letter in the row
            for (let i = 0; i < row.length - 3; i++) {
                //j varries the word length, returning every 'word' 4 characters or longer for each letter
                for(let j=4; i+j<=row.length; j++) {
                    // if a key of string is already in the potentialWords object, do not add string
                    if (potentialWords[row.substring(i, i + j)]){
                    }
                    else {
                        potentialWords = {
                            ...potentialWords,
                            [row.substring(i, i + j)] : row.substring(i, i + j)
                        }
                    }
                }
            }
        }

        let transposeMatrix = (matrix) =>{
            //define transposedMatrix, an array of arrays.  # of arrays is equal to lenght of each array in original matrix
            for (let i=0; i<matrix[0].length; i++){
                transposedMatrix.push([])
            }
            //loop through array of arrays
            for (let i=0; i<matrix.length; i++){
            //loop through each row
                for (let j=0; j<matrix[i].length; j++){
                    transposedMatrix[j].push(matrix[i][j])
                }
            }
            //send each row of transposedMatrix to storePotentialWords function
            //convert array to string with .join('') '' so no spaces or commas between letters 
            for (row of transposedMatrix) {
                storePotentialWords(row.join(''))
            }
        }

        for (let letter of newString){
            if(letter !== "/"){
                row+=letter
                rowLength++
            }
            else {
                storePotentialWords(row)
                matrix.push(row)
                row=''
                this.setState({
                    ...this.state,
                    rowLength: rowLength
                })
                rowLength=0
            }
        }
        //transpose matrix to find vertical strings
        transposeMatrix(matrix)
        
        //send potential words to server
        axios.post('/api/words', potentialWords)
            .then(result=>{
                potentialWords={}
                //await result then GET returned word list from server
                axios.get('/api/words/all')
                    .then(result => {
                        //store in redux
                        this.props.dispatch({type: 'STORE_WORDS', payload: result.data})
                    })
                    .catch(err => {
                        console.log('error in GET /api/words/all', err);
                    })
            })
            .catch(err=>{
                console.log('error in POST /api/words', err);
            })
        
    }

    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <List>
                <ListItem>
                    <div className={this.props.classes.container}> 
                        <TextField
                            className={this.props.classes.input}
                            multiline
                            id="string-input"
                            label="String Input"
                            margin="normal"
                            onChange={this.handleChange}
                        />
                        <IconButton className={this.props.classes.button} type="submit" variant="contained">
                            <SearchIcon />
                        </IconButton>
                    </div>
                        
                </ListItem>
            </List>
        </form>
        )
    }
}

export default withStyles(styles)(connect()(Input))