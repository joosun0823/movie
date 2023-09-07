import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';


function SubDetail() {

    const location = useLocation();
    let item = location.state.item;
    return (
        <>
            {
                    <div className="detail" key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.overview}</p>
                        <figure><img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} /></figure>
                        <p></p>
                    </div>
            }
        </>
    )
}

export default SubDetail