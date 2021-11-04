import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FirstComponent from '../components/FirstComponent';
import AuthorList from '../components/AuthorList';
import { Link } from 'react-router-dom';

const Index = () => {
    const [ authorList, setAuthorList ] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then(res=> {
                console.log(res)
                setAuthorList([...res.data.authors])
            })
            .catch(err => {
                console.log(err.response)
            })
    }, []);
    return (
        <>
            <h2>Favorite Authors:</h2>
            < AuthorList authorList = {authorList} />
            <Link to="/author/new" className="btn btn-info">Add Author</Link>
        </>
    )
};

Index.propTypes = {};

export default Index;
