import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
export default function User() {
    let [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Vivepatel1306')
        .then((e)=> e.json())
        .then((e)=> setData(e))
    },[])
    return (
        <>
            <div>Github Following : {data.following}</div>
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </>
    )
}

