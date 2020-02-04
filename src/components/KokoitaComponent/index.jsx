import React, { Component } from 'react';
import { connect } from 'react-redux';

class index extends Component {
    render() {

        console.log(this.props.count);
        return (
            <div>
                {this.props.count}
            </div>
        );
    }
}

const mapStateToProps = state =>({
    count: state.appReducer.count
})

export default connect(mapStateToProps,null)(index);