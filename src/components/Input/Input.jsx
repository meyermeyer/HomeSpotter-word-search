import React, {Component} from 'react'
import { Button, TextField} from '@material-ui/core'

class Input extends Component {
    state = {
        inputValue: '',
        rowLength: 0,
        potentialWords: []
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
        //replace line breaks with '/'
        let newString = this.state.inputValue.replace(/[\n\r]/g, '/') 
        console.log('newString', newString)
        let rowLength = 0
        let matrix=[]
        let transposedMatrix = []
        let row =''

        let potentialWords = {}

        let storePotentialWords = (row) => {
            console.log('in storePotentialWords', row);
            //for each row, find all strings 4 letters or longer
            for (let i = 0; i < row.length - 3; i++) {
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

            //# of rows = length of each row in original matrix
            for (let i=0; i<matrix[0].length; i++){
                transposedMatrix.push([])
            }
            console.log('transposed matrix empty', transposedMatrix)

            for (let i=0; i<matrix.length; i++){
                for (let j=0; j<matrix[i].length; j++){
                    transposedMatrix[j].push(matrix[i][j])
                }
        
            }
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
        transposeMatrix(matrix)


               
        // for (let row of matrix){
        //     let potentialWords = []
        //     for (let i=0; i<row.length; i++) {
        //         if (i+3<row.length) {
        //             let potentialWord = [row[i] + row[i + 1] + row[i + 2] + row[i + 3]]
        //             potentialWords.push(potentialWord)
        //             console.log('potentialWords', potentialWord);
                    
        //         }        
        //     }
        // }
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

export default Input