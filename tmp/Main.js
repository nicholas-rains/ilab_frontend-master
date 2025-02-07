import React, {Component} from "react";
import {Button, TextField} from "@mui/material";
import axios from "axios";

class Main extends Component {
    state = {
        query: "",
        response: "",
    };

    handleChange = (event) => {
        this.setState({
            query: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        // Call the GPT API to get the response
        axios.post("https://api.openai.com/v1/engines/davinci/completions", {
            "prompt": this.state.query,
            "temperature": 0.7,
            "top_p": 1.0,
        }, {
            headers: {
                "Authorization": "Bearer YOUR_API_KEY",
                "Content-Type": "application/json",
            },
        }).then((response) => {
            // Update the state with the response
            this.setState({
                response: response.data.choices[0].text,
            });
        });
    };

    render() {
        return (
            <div>
                <h1>Welcome to Private GPT</h1>
                <TextField
                    id="query"
                    label="Query"
                    onChange={this.handleChange}
                    value={this.state.query}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmit}
                >
                    Submit
                </Button>
                <p>{this.state.response}</p>
            </div>
        );
    }
}

export default Main;
