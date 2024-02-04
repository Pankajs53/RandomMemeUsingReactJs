import axios from 'axios';
import { useEffect, useState } from "react";
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
function Random(){

    const {gif,loading,fetchData}=useGif();

    function generateRandom(){
        fetchData();
        console.log("Generated random gif");
    }
    return(        
            <div className="w-1/2 bg-green-500  rounded-lg border
             border-black flex flex-col items-center gap-y-5 mt-[15px]">
                <h1 className="text-black mt-[15px]text-3xl font-bold underline uppercase">A Random Gif</h1>
                {
                    loading?<Spinner/>:(
                        <>
                                                        
                            
                                            
                            <img src={gif} alt="gifImage" width="450"/>
                                     
                        </>
                    )
                }
                       
                <button className="w-10/12 mb-[15px] bg-white opacity-80 font-bold py-2 px-4 text-3xl border-8 rounded-lg hover:text-4xl " onClick={generateRandom}>
                        Generate
                </button>

            </div>
    )
}

export default  Random;

