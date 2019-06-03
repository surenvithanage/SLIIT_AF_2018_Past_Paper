import React, { Component } from 'react';
import Axios from 'axios';

class View extends Component {
    constructor(){
        super();
        this.state = {
            courses: [],
            subjects: []
        }
    }

    componentDidMount(){
        Axios.get('/api/course').then(
            data => {
                this.setState({
                    courses: data.data
                })
            }
        )
    }

    subject(id){
        Axios.get('/api/subject/find/' + id).then(
            dataSet => {
                alert('Name : ' + dataSet.data.name + ' Description : ' + dataSet.data.description);
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
                        <th>Lecture In Charge</th>
                        <th>Subjects</th>
                    </thead>
                    <tbody>
                        {
                            this.state.courses.map( cou => {
                                return (
                                    <tr key={cou._id}>
                                        <td>{cou.name}</td>
                                        <td>{cou.code}</td>
                                        <td>{cou.passMark}</td>
                                        <td>{cou.lectureInCharge}</td>
                                        <td><button onClick = {this.subject.bind(this,cou.subject)}>Subjects</button></td>
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

export default View