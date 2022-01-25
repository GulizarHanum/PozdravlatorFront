import React from "react";
import axios from "axios";

const List = (props) => {
    let state = {
        people: []
    }
    axios.get("/upcoming").then((response) => { this.setState({people: response.data})})

    return (
        <div>
            some people
        </div>
    )
}

export default List;