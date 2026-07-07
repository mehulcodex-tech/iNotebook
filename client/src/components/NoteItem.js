import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    // <div className="col-md-3">
    //   <div className="card">
    //     <div className="card-body">
    //       <h5 className="card-title">{note.title}</h5>
    //       <p className="card-text">{note.description}</p>
    //       <p className="card-tag border">{note.tag}</p>
    //     </div>
    //     <div className="d-flex mx-2 mb-2 justify-content-between">
    //       <span
    //         onClick={() => deleteNote(note._id)}
    //         style={{ cursor: "pointer" }}
    //       >
    //         <i className="fa-solid fa-trash"></i>
    //       </span>
    //       <span style={{ cursor: "pointer" }}>
    //         <i className="fa-solid fa-pen-to-square"></i>
    //       </span>
    //     </div>
    //   </div>
    // </div>
    <div className="col-md-3 mb-4">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="card-title mb-0">{note.title}</h5>

            <span className="badge bg-success rounded-pill">{note.tag}</span>
          </div>

          <p className="card-text text-muted">{note.description}</p>
        </div>

        <div className="card-footer bg-white border-0 d-flex justify-content-end">
          <span
            className="me-3"
            style={{ cursor: "pointer" }}
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Deleted successfully", "success");
            }}
          >
            <i className="fa-solid fa-trash text-danger"></i>
          </span>

          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              updateNote(note);
            }}
          >
            <i className="fa-solid fa-pen-to-square text-primary"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
