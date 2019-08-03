import React, {Component} from 'react'
import { Button, TextField, BottomNavigationAction} from '@material-ui/core'
import axios from 'axios';
import {connect} from 'react-redux'

class Input extends Component {
    state = {
        inputValue: '',
        rowLength: 0,
    }

    handleChange = (event) => {
        console.log('in handleChange', event.target.value);
        this.setState({
            inputValue: event.target.value
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault()
        console.log('in handleSubmit', this.state.inputValue);

        //change line breaks to '/', remove spaces between letters
        let newString = this.state.inputValue.replace(/[\n\r]/g, '/').split(' ').join('').toLowerCase()
        console.log('newString', newString)
        let rowLength = 0
        let matrix=[]
        let transposedMatrix = []
        let row =''
        let potentialWords = {}

        let storePotentialWords = (row) => {
            console.log('in storePotentialWords', row);
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
                console.log('substring', potentialWords)
            }
        }

        let transposeMatrix = (matrix) =>{
            //define transposedMatrix, an array of arrays.  # of arrays is equal to lenght of each array in original matrix
            for (let i=0; i<matrix[0].length; i++){
                transposedMatrix.push([])
            }
            console.log('transposed matrix empty', transposedMatrix)

            for (let i=0; i<matrix.length; i++){
                for (let j=0; j<matrix[i].length; j++){
                    transposedMatrix[j].push(matrix[i][j])
                }
            }

            //send each row of transposedMatrix to storePotentialWords function
            //convert array to string with .join('') '' so no spaces or commas between letters 
            for (row of transposedMatrix) {
                storePotentialWords(row.join(''))
            }
            console.log('transposedMatrix', transposedMatrix)
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
                console.log('counter', rowLength, matrix);
                this.setState({
                    ...this.state,
                    rowLength: rowLength
                })
                rowLength=0
            }
        }
        //transpose matrix to find vertical strings
        transposeMatrix(matrix)
        console.log('potentialWords', potentialWords);
        
        axios.post('/api/words', potentialWords)
            .then(result=>{
                // potentialWords={}
                console.log('back from POST', result);
                axios.get('/api/words')
                    .then(result => {
                        console.log('back from GET', result);
                        this.props.dispatch({type: 'STORE_WORDS', payload: result.data})
                    })
                    .catch(err => {
                        console.log('error in GET', err);
                    })
            })
            .catch(err=>{
                console.log('error in POST', err);
            })
        
    }

    render(){
        console.log('state', this.state);
        
        return(
        <form onSubmit={this.handleSubmit}>
            <TextField
                multiline
                id="string-input"
                label="String Input"
                margin="normal"
                onChange={this.handleChange}
            />
            <Button type="submit" variant="contained">Submit</Button>
        </form>
        )
    }
}

export default connect()(Input)