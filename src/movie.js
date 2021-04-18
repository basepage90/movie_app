import React from "react";
import PropTypes from "prop-types";
import "./movie.css";

Movie.propTypes= {
    title : PropTypes.string.isRequired,
    subtitle : PropTypes.string.isRequired,
    image : PropTypes.string.isRequired,
    pubDate : PropTypes.string.isRequired,
    director : PropTypes.string.isRequired,
    actor : PropTypes.string.isRequired,
    userRating : PropTypes.string.isRequired,
}

function Movie({title,subtitle,image,pubDate,director,actor,userRating}){
    title = title.replace(/<b>/gi,'').replace(/<\/b>/gi,'');
    director = director.replace('|',',').replace(/,\s*$/, "");
    actor = actor.replace(/\|/gi,',').replace(/,\s*$/, "");
    return (
        <div class="movie">
            <div class="poster">
                <img src={image} alt={title} title={title} />
            </div>
            <div class="movie__data">
                <h3 class="movie__title">{title}</h3>
                <h5 class="movie__subtitle">{subtitle}</h5>
                <p>{pubDate} | 감독 : {director} | 출연 : {actor} </p>
                <h5>{userRating} / 10.00</h5>
            </div>
        </div>
    )
}


export default Movie;