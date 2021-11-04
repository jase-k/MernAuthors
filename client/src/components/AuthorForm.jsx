import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';


const AuthorForm = (props) => {
    const [name, setName] = useState(props.name)
    const nav = useNavigate()
    useEffect(() =>{
        setName(props.name)
    }, [props])
    function handleBack(){
        nav('/')
    }
    return (
    <form className="form-control" onSubmit={(e) => {
        props.handleSubmit(e, name)}}>
        <label htmlFor="name">Name:</label>
        <input 
            type="text" 
            name="name" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            readOnly={props.type === "view" ? true : false }
            />
        
        <button type="button" onClick={handleBack}>Back</button>
        <button type="submit">
            {props.type === "view" ? "Edit" : "Submit" } 
        </button>
    </form>
    );
};

AuthorForm.propTypes = {};

export default AuthorForm;