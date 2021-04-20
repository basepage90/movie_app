import React from "react";
import axios from "axios";
import cheerio from "cheerio";
import PropTypes from "prop-types";
import "./movie.css";



class Movie extends React.Component{
    state = {
        isLoading: true,
        HQPoster : ""
    };

    GetHighQualityPoster = async() =>{
        const regexp1 = /code=.+/gi;
        const code = this.props.link.match(regexp1)[0].substr(5)
        const getHighQualityPoster = "/poster/bi/mi/photoViewPopup.nhn?movieCode=" + code
        const {data} = await axios.get(getHighQualityPoster);
        const $ = cheerio.load(data)
        const res = $('#targetImage').attr('src');
        this.setState({isLoading:false,HQPoster:res});
    };
    
    componentDidMount() {
        this.GetHighQualityPoster();
    }
      
    
    render (){
        let {title,subtitle,image,pubDate,director,actor,userRating,link} = this.props;
        const trans_title = title.replace(/<b>/gi,'').replace(/<\/b>/gi,'')
        const trans_director = director.replace('|',',').replace(/,\s*$/, "")
        const trans_actor =  actor.replace(/\|/gi,',').replace(/,\s*$/, "")
        const {isLoading} = this.state;
        return (
            <div>
                <div className="movie">
                    <div className="poster">
                        <a href={link}>
                        {isLoading ?
                            ( <img src={image} alt={trans_title} title={trans_title} /> ) : 
                            ( <img src={this.state.HQPoster} alt={trans_title} title={trans_title} /> )
                        }
                        </a>
                    </div>
                    <div className="movie__data">
                        <h3 className="movie__title">{trans_title}</h3>
                        <h5 className="movie__subtitle">{subtitle}</h5>
                        <p>{pubDate} | 감독 : {trans_director} | 출연 : {trans_actor} </p>
                        <h5>{userRating} / 10.00</h5>
                    </div>
                </div>
            </div>
        )
    }
}

Movie.propTypes= {
    title : PropTypes.string.isRequired,
    subtitle : PropTypes.string.isRequired,
    image : PropTypes.string.isRequired,
    pubDate : PropTypes.string.isRequired,
    director : PropTypes.string.isRequired,
    actor : PropTypes.string.isRequired,
    userRating : PropTypes.string.isRequired,
}

export default Movie;