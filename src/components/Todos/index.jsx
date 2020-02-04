import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUsers as getUsersAction, delElem as delElemAction } from '../../actions/getUsers';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

// 3 mini-components examples just to learn how to interact with react-route
const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);
const About = () => (
    <div>
        <h2>About</h2>
    </div>
);
const Contacts = () => (
    <div>
        <h2>Contacts</h2>
    </div>
);

export class index extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const {  getUsers } = this.props;
        getUsers(); 
    }
    

    render() {
        const { delElem } = this.props;
        const { status, users } = this.props;
        console.log(status, users);
        let data;
        if(status === 'loading'){
            data = <h1>Loading</h1>
        } else if (status === 'success') {
            console.log(123)
            data = users.map((el, idx) => {
                return (
                    <div style={{border: '1px solid'}}>
                        <button onClick={()=>{
                            delElem(idx)
                        }}> - </button>
                        <h4>{el.id}</h4>
                        <h4>{el.title}</h4>
                    </div>
                )
            })
        } else {
            data = 'reroe';
        }
        return (
            <Router>
                <div>
                    <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                    </ul>

                    <hr />

                    <Switch>
                    <Route exact path="/">
                        <Home />
                        {data}
                    </Route>
                    <Route path="/about">
                        <About />
                        {data}
                    </Route>
                    <Route path="/contacts">
                        <Contacts />
                        {data}
                    </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

// index.defaultProps = {
//     users: []
// }

const mapStateToProps = (state) => ({
    status: state.appReducer.status,
    users: state.appReducer.users
})

const mapDispatchToProps = dispatch => {
    return {
        getUsers: ()=>{ dispatch(getUsersAction()) },
        delElem: (idx)=>{ dispatch(delElemAction(idx)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
