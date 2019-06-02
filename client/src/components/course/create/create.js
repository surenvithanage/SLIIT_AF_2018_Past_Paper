import React, { Component } from 'react';
import './create.css';
import axios from 'axios';

class CreateCourse extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            code: '',
            passMark: '',
            lectureInCharge: '',
            subjects: [],
            subject: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const obj = {
            name: this.state.name,
            code: this.state.code,
            passMark: this.state.passMark,
            lectureInCharge: this.state.lectureInCharge,
            subject: this.state.subject
        }
        axios.post('http://localhost:5000/course/insert',obj).then(
            data => {
                alert('Successfull' + JSON.stringify(data.data));
            }
        )
        this.setState({
            name: '',
            code: '',
            passMark: '',
            lectureInCharge: '',
            subjects: [],
            subject: ''
        })
    }

    componentDidMount(){
        axios.get('http://localhost:5000/subject').then(
            data => {
                this.setState({
                    subjects: data.data
                })
            }
        )
    }
    render() {
        return (
            <div className="container">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Code</label>
                        <input
                            type="text"
                            name="code"
                            className="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.code}
                        />
                    </div>
                    <div className="form-group">
                        <label>Pass Mark</label>
                        <input
                            type="text"
                            name="passMark"
                            className="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.passMark}
                        />
                    </div>
                    <div className="form-group">
                        <label>Lecture In Charge</label>
                        <input
                            type="text"
                            name="lectureInCharge"
                            className="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.lectureInCharge}
                        />
                    </div>
                    <div className="form-group">
                        <label>Lecture In Charge</label>
                        <select
                            name="subject"
                            className="form-control"
                            onChange={this.handleInputChange}
                            value={this.state.subject}
                        >
                            {
                                this.state.subjects.map(sub => {
                                    return (
                                        <option key={sub._id} value={sub._id}>{sub.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            name="lectureInCharge"
                            value="Submit"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateCourse