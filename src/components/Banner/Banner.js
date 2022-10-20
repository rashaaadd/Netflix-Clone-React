import React, { useEffect, useState } from 'react'
import axios from '../../constants/axios'
import { API_KEY,imageUrl } from '../../constants/constants'
import "./Banner.css"

function Banner() {
  const [movie,setMovie]=useState([])
  useEffect(()=>{
    axios.get(`trending/all/day?api_key=${API_KEY}&language=eng-US`).then((response=>{
      let randomNum = Math.floor((Math.random() * response.data.results.length) + 1)
      console.log(response.data.results[randomNum]);
      setMovie(response.data.results[randomNum])
    }))
  },[])
  return (
    <div className='banner' style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`}}>
        <div className='content'>
            <h1 className='title'>{movie.name? movie.name : movie.title}</h1>
            <div className='banner_buttons'>
                <button className='button'>
                <i className="fa fa-xl fa-play"></i><span className='button_title'>Play</span>
                </button>
                <button className='button'>
                <i className="fa fa-xl fa-circle-info"></i><span className='button_title'>More Info</span>
                </button>
            </div>
            <p className='description'>{movie.overview}</p>
        </div>
        <div className="fade_bottom">

        </div>
    </div>
  )
}

export default Banner
