import React, { Component } from 'react'
import {connect} from 'react-redux'

import {List, ListItem} from '@material-ui/core'

class Words extends Component {
    render() {
        return (
            <>
                <h3>Words</h3>
                <List>
                    {this.props.reduxState.wordsReducer && this.props.reduxState.wordsReducer.map((word, i)=>(
                        <ListItem key={i}>{word}</ListItem>
                    ))}
                </List>
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(Words)