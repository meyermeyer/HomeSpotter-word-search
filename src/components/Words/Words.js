import React, { Component } from 'react'
import {connect} from 'react-redux'

class Words extends Component {
    render() {
        return (
            <>
                <h3>Words</h3>
                <ul>
                    {this.props.reduxState.wordsReducer && this.props.reduxState.wordsReducer.map((word, i)=>(
                        <li key={i}>{word}</li>
                    ))}
                </ul>
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(Words)