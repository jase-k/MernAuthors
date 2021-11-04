import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AuthorList = (props) => {
    return (
        <table className="table">
            {/* For Each Author Data Here */}
            <tbody>
                {
                    props.authorList.map((author, idx) => {
                        {console.log(author)}
                        return(
                        <tr key={idx}>
                            <th><Link to={"/author/"+author._id} >{author.name}</Link></th>
                            <td>
                                <Link to={"/author/"+author._id+"/edit"} className="btn btn-warning">Edit</Link> 
                                <Link to={"/author/"+author._id+"/delete"} className="btn btn-danger">Delete</Link> 
                            </td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

AuthorList.propTypes = {};

export default AuthorList;