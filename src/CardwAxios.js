import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function CardwAxios() {
    const [u,setU] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            setU(res.data)
        })
    },[])
  return (
    <>
        <h1>Axios</h1>
        {u.map((post)=>{
            const {id, title, body} = post;
            
            return(
            
            <div className='card' key={id}>
                <h4>{id}</h4>
                <h2>{title}</h2>
                <h3>{body}</h3>
            </div>
            
            );
        })}
    </>
  )
}
