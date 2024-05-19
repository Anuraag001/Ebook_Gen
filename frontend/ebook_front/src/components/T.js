import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Test(){
    const [data,setData]=useState({});

    useEffect(()=>{
        axios.get('http://localhost:8000/api/hello')
        .then(res=>{
            setData(res.data)
        })
        .catch(err=>{
            setData(`error getting message ${err.message}`)
        })
    },[]);

    return(
        <div>
            <p>{data.message}</p>
        </div>
    )
}

export default Test;