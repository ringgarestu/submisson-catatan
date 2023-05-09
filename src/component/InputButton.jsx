import React from "react";

class InputButton extends React.Component {
    constructor(props) {
        super(props)

        this.setState = {
            title: '',
            body: '',
        }
        onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        this.setState = (() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeHandler(event) {
        this.setState = (() => {
            return {
                title: event.target.value,
            }
        });
    }

    onSubmitHandler(event) {
        this.setState = (() => {
            event.preventDefault();
            this.props.addNote(this.state);
        })
    }
}