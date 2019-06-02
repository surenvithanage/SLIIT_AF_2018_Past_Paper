import React, { Component } from 'react';
import './list.css';
import axios from 'axios';

class ListCourse extends Component {
    constructor() {
        super()
        this.state = {
            courses: [],
            subjects: []
        }
        this.viewSubjects = this.viewSubjects.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/course').then(
            data => {
                this.setState({
                    courses: data.data
                });
            }
        )
    }

    viewSubjects(sub){
       axios.get('http://localhost:5000/subject/find/'+sub).then(
           data => {
               alert('Name Of Subject is :' + data.data['name'] + ' And Amount Rs : ' + data.data['amount']);
           }
       )
    }
    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Pass Mark</th>
                        <th>Lecure In Charge</th>
                        <th>Subject</th>
                    </thead>
                    <tbody>
                        {
                            this.state.courses.map(cou => {
                                return (
                                    <tr key={cou._id}>
                                        <td>{cou.name}</td>
                                        <td>{cou.code}</td>
                                        <td>{cou.passMark}</td>
                                        <td>{cou.lectureInCharge}</td>
                                        <td><button onClick={this.viewSubjects.bind(this,cou.subject)}>View Subject Info</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>

        )
    }
}

export default ListCourse