import React from "react";

function NoteItem({ title, body }) {
    return (
        <div>
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__body">{body}</p>
        </div>
    )
}

export default NoteItem