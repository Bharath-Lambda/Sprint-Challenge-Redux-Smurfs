import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class SmurfForm extends Component {
    state = {
        name: "",
        age: "",
        height: ""
    };

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        const { name, age, height } = this.state;
        this.props.addSmurf({name, age, height});
        this.setState({
            name: "", 
            age: "",
            height: ""
        });
    };

    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <input
                    type = "text"
                    name = "name"
                    placeholder = "Smurf name"
                    value = {this.state.name}
                    onChange = {this.handleInput}
                />
                <input
                    type = "number"
                    name = "age"
                    placeholder = "Age"
                    value = {this.state.age}
                    onChange = {this.handleInput}
                />
                <input
                    type = "text"
                    name = "height"
                    placeholder = "Height"
                    value = {this.state.height}
                    onChange = {this.handleInput}
                />

                <button value = "submit">Submit!</button>
            </form>
        )
    }
}

const mapStatetoProps = state => {
    return{
        error: state.error
    }
}

export default connect(mapStatetoProps,{addSmurf})(SmurfForm);