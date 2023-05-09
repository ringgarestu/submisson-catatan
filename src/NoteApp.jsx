import React from "react";
import { getData } from "./data";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddHandler = this.onAddHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes })
    }
    onAddHandler(title, body) {
        this.setState((prevState => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id,
                        title,
                        body,
                    },
                ]
            }
        }))
    }
    render() {
        return (
            <div>
                <h1>Aplikasi Catatan</h1>
                <h2>Tambah Catatan</h2>
            </div>
        )
    }
}

export default NoteApp