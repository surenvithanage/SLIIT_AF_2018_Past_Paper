import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Insert from './components/course/insert/insert';
import View from './components/course/view/view';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    componentDidMount() {
        fetch('/api/messages', { method: 'GET' })
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({ message: jsonRes.message });
            })
            .catch(err => {
                this.setState({ message: 'An error occurred' });
            });
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <h2>{this.state.message}</h2>
                    <Link style={{marginRight :"10px"}} to={"/insert"}>Insert</Link>
                    <Link to={"/View"}>View</Link>
                    <Switch>
                        <Route path="/insert" component={Insert} ></Route>
                        <Route path="/View" component={View} ></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
