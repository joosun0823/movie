import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const insert = (state, action) => {
    return [...state, ...action.d];
}

function TVseries() {

    const [sec, dispatch] = useReducer(insert ,[]);
    const [media, setMedia] = useState("tv");
    const [cat, setCat] = useState("popular");
    let [num, setNum] = useState(1);

    const navigate = useNavigate();



    const db = axios.create({
        baseURL: "https://api.themoviedb.org/3",
        params: { api_key: "f89a6c1f22aca3858a4ae7aef10de967" }
    })

    const list = async () => {
        let res;
            res = await db.get(`/${media}/${cat}?page=${num}`);
            dispatch({d: res.data.results});
        }
    
    useEffect(()=>{
        list();
    },[]);
    
    return (
        <>
            <button onClick={()=>{setCat("top_rated"); list();}}>베스트 시리즈</button>
                <ul className='tvList'>
                    
                    {
                        sec.map((item)=>(
                            <li key={item.id}>
                                <h2>{item.name}</h2>
                                <a onClick={()=>{navigate(`/subdetail/${item.id}`, {state:{item}})}}>자세히 보기</a>
                            </li>
                        ))
                    }
                </ul>
            <button onClick={()=>{setNum(++num); list();}}>더보기</button>
        
        </>
)
}

export default TVseries