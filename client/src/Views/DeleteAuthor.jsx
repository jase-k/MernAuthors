import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useNavigate, useParams} from 'react-router'
import axios from 'axios';

const DeleteAuthor = () => {
    const nav = useNavigate();
    const {id} = useParams()
    useEffect(() => {
        axios.delete("http://localhost:8000/api/authors/delete/"+id)
        .then(res =>{
            console.log(res)
            nav('/')
        })
    }, []);
    return (
        <>
            <h1>Deleting...</h1>
        </>
    );
};

DeleteAuthor.propTypes = {};

export default DeleteAuthor;