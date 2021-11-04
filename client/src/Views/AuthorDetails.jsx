import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import AuthorForm from '../components/AuthorForm';


const AuthorDetails = (props) => {
    const {id} = useParams();
    const [name, setName] = useState("")
    const nav = useNavigate()
    const [type, setType] = useState(props.type)
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/'+id)
        .then(res => {
            console.log(res)
            setName(res.data.author.name)
        })
        .catch(err => {
            console.log(err.response)
            if(err.response.status === 400){
                setType("add")
            }
        })
    }, [])
    
    function addAuthor(e, name){
        e.preventDefault()
        axios.post('http://localhost:8000/api/authors/new', {
            name: name
        })
        .then(res =>{
            console.log(res)
            nav('/')
        })
        .catch(err =>{
            console.log(err.response)
        })
    }
    function editAuthor(e, name){
        e.preventDefault()
        console.log(e, name)
        axios.put('http://localhost:8000/api/authors/update/'+id, {
            name: name
        })
        .then(res =>{
            console.log(res)
            nav('/')
        })
    }
    return (
        <>
        <h2>{type} Author: </h2>
        < AuthorForm 
        name = {name}
        handleSubmit = { type === "view"?
            (e) => {
                e.preventDefault()
                nav('/author/'+id+'/edit')}
            : type === "add" ?
                (e, name) => addAuthor(e, name)
                :(e, name) => editAuthor(e, name)
        }
        type = {type}
        />
        </>
    );
};

AuthorDetails.propTypes = {};

export default AuthorDetails;