import { useEffect, useState } from "react";
import axios from 'axios'
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
function Tag(){

    const[gifTag,setgifTag]=useState({
        gifName:"friends",
    });

    const {gif,loading,fetchData} = useGif(gifTag.gifName);

    function changeHandler(event){
        console.log(event.target.value);
        setgifTag((prevState)=>{
            return {...prevState, [event.target.name]:event.target.value}
        });
    }

    function clickHandler(){
        fetchData();
    }

    return(
        <div className="w-1/2 bg-blue-500  rounded-lg border
        border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="underline capitalize text-4xl font-bold text-black">`RANDOM {gifTag.gifName} GIF`</h1>
            {
                loading?<Spinner/>:(
                    <>
                        <img src={gif} width="400px"></img>
                        <input
                            type="text"
                            placeholder="Provide Name for random gif"
                            name="gifName"
                            onChange={changeHandler}
                            value={gifTag.gifName}
                            className="text-4xl font-bold w-3/4 p-2 border border-black rounded-lg text-center"
                        ></input>
                    </>
                )
            }
            <button onClick={clickHandler} className="w-10/12 mb-[15px] bg-white opacity-80 font-bold py-2 px-4 text-3xl border-8 rounded-lg hover:text-4xl " >
                        Generate
            </button>
        </div>
    )
}

export default  Tag;