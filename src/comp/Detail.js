import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Detail() {
  const {media, cat, id} = useParams();
 
  const [sec, setSec] = useState([]);

  const db = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: { api_key: "f89a6c1f22aca3858a4ae7aef10de967" }
  })

  const list = async () => {
    let res;
      res = await db.get(`/${media}/${cat}`);
      setSec(res.data.results);
  }

  let hehe = sec.filter(item=> item.id == id);


  useEffect(()=>{
    list()
  }, []);




  return (
    <>
    {
      hehe.map((item)=>(
        
        <div className="detail" key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.overview}</p>
          <figure><img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} /></figure>
          <p></p>
        </div>
      ))
    }
    </>
  )
}

export default Detail