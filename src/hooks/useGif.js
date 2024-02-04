import { useState,useEffect } from "react";
import axios from "axios"

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

function useGif(tag){
    const tagMemeurl= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const randomMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
   
    const[gif,setgif]=useState('');

    const[loading,setLoading]=useState(false);


    async function fetchData(){
        setLoading(true);
        try{
            const {data} = await axios(tag?tagMemeurl:randomMemeurl);
            const iamgeUrl=data.data.images.downsized_large.url;
            setgif(iamgeUrl);
        }catch(error){
            console.log("ERROR IN TAG API",error.message);
        }
        setLoading(false);

    }

    useEffect( () =>{
        fetchData();
    },[] )

    return {gif,loading,fetchData};

};

export default useGif;