import axios from "../../constants/axios";
import React, { useEffect, useState } from "react";
import "./RowPost.css";
import { API_KEY, imageUrl } from "../../constants/constants";
import YouTube from "react-youtube";


function RowPost(props) {
    let [movies,setMovies] = useState([])
    let [urlId,setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
        setMovies(response.data.results)
    }).catch((err)=>{
        // alert(err)
    }) 
  }, []);
  const handleImageClick = (imgId)=>{
    console.log(imgId)
    axios.get(`movie/${imgId}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data)
      if(response.data.results.length !== 0){
        setUrlId(response.data.results[0])
      }else{
        console.log("Trailer not available")
      }
    }).catch((err)=>{
      alert(err)
    })
  }
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h2 className="rowPostTitle">{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
            <img
            onClick={()=>handleImageClick(obj.id)}
            className={props.isSmall? "smallPoster" : "poster"}
            src={`${imageUrl+obj.backdrop_path}`}
            alt="Poster"
            />
        )}
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  );
}

export default RowPost;
