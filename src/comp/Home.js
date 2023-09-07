import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';



function Home() {

    const [movieDataP, setMovieDataP] = useState([]);
    const [movieDataT, setMovieDataT] = useState([]);
    const [TvDataP, setTvDataP] = useState([]);    
    const [TvDataT, setTvDataT] = useState([]);    

    const db = axios.create({
        baseURL: "https://api.themoviedb.org/3",
        params: { api_key: "f89a6c1f22aca3858a4ae7aef10de967" }
    })

    const List = async () => {
        let res;
        const mvList = [
            res = await db.get("/movie/popular?page=1"),
            res = await db.get("/movie/top_rated?page=1"),
            res = await db.get("/tv/popular?page=1"),
            res = await db.get("/tv/top_rated?page=1")
        ]

        setMovieDataP(mvList[0].data.results)
        setMovieDataT(mvList[1].data.results)
        setTvDataP(mvList[2].data.results)
        setTvDataT(mvList[3].data.results)
    }

    useEffect(()=>{
        List()
    },[]);
    

    if(!movieDataP || !movieDataT || !TvDataP || !TvDataT) return <>로딩중</>;
    
    return (
        <>
            <section className="movie">
                <h2>인기영화</h2>
                <ul>
                    {
                        movieDataP.map((e)=>(
                            <li key={e.id}>
                                <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                                <h3>{e.title}</h3>
                                <Link to = {`/movie/popular/${e.id}`}>자세히 보기</Link>
                            </li>
                        ))
                    }
                </ul>
            </section>

            <section className="movie">
                <h2>베스트 영화</h2>
                <ul>
                    {
                        movieDataT.map((e)=>(
                            <li key={e.id}>
                                <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                                <h3>{e.title}</h3>
                                <Link to = {`/movie/top_rated/${e.id}`}>자세히 보기</Link>
                            </li>
                        ))
                    }
                </ul>
            </section>

            <section className="movie">
                <h2>베스트 영화</h2>
                <ul>
                    {
                        TvDataP.map((e)=>(
                            <li key={e.id}>
                                <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                                <h3>{e.name}</h3>
                                <Link to = {`/tv/popular/${e.id}`}>자세히 보기</Link>
                            </li>
                        ))
                    }
                </ul>
            </section>

            <section className="movie">
                <h2>베스트 영화</h2>
                <ul>
                    {
                        TvDataT.map((e)=>(
                            <li key={e.id}>
                                <img src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}/>
                                <h3>{e.name}</h3>
                                <Link to = {`/tv/top_rated/${e.id}`}>자세히 보기</Link>
                            </li>
                        ))
                    }
                </ul>
            </section>



        </>
    )
}

export default Home