import React, { useState } from "react";
import { editImageFunction } from "../../actions";
import './styles.css'

function EditImageForm() {

    const [errorMessage, setErrorMessage] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('')
        await editImageFunction(e);
    }

    return (
        <div className="Edit">
            <h1>This is the Edit Image Page</h1>
            <form id='form'>
                {errorMessage && (
                    <p className="error"> {errorMessage} </p>
                )}
                <label htmlFor="profileImg">Add a profile image</label>
                <input id='profileImg' type='file' accept='.jpg, .jpeg, .png' />
                <input id='formSubmit' type='submit' onClick={handleSubmit} />
            </form>
        </div>
    )
}; 

export default EditImageForm;
