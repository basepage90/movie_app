import React,{useState,useEffect} from "react";
import axios from "axios";
import cheerio from "cheerio";
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

const initState = {
    isLoading: true,
    HQPoster: ""
}

function Movie({title,subtitle,image,pubDate,director,actor,userRating,link}){
    const [state, setState] = useState(initState);
    const trans_title = title.replace(/<b>/gi,'').replace(/<\/b>/gi,'');
    const trans_director = director.replace('|',',').replace(/,\s*$/, "");
    const trans_actor =  actor.replace(/\|/gi,',').replace(/,\s*$/, "");
    
    /* 의존성배열 대신 분기를 태우는 방식 */
    const GetHighQualityPoster = async () => {
        const regexp1 = /code=.+/gi;
        const code = link.match(regexp1)[0].substr(5);
        const getHighQualityPoster = "/poster/bi/mi/photoViewPopup.nhn?movieCode=" + code
        const {data} = await axios.get(getHighQualityPoster);
        const $ = cheerio.load(data);
        const res = $('#targetImage').attr('src');
        setState({
            isLoading: false,
            HQPoster: res
        });
    };
    
    useEffect(() => {
        if(state.isLoading) {
            GetHighQualityPoster();
        }
    });
    
    /* 의존성 배열 방식 */
    // const GetHighQualityPoster = useCallback(async () => {
    //     const regexp1 = /code=.+/gi;
    //     const code = link.match(regexp1)[0].substr(5);
    //     const getHighQualityPoster = "/poster/bi/mi/photoViewPopup.nhn?movieCode=" + code
    //     const {data} = await axios.get(getHighQualityPoster);
    //     const $ = cheerio.load(data);
    //     const res = $('#targetImage').attr('src');
    //     setState({
    //         isLoading: false,
    //         HQPoster: res
    //     });
    // }, [link]);
    
    // useEffect(() => {
    //    GetHighQualityPoster();
    // }, [GetHighQualityPoster]);

    console.log("test");

    return (
        <div className="movie">
            <div className="poster">
                <a href={link}>
                    {state.isLoading  ?
                        ( <img src={image} alt={trans_title} title={trans_title} /> ) : 
                        ( <img src={state.HQPoster} alt={trans_title} title={trans_title} /> )
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
    )
}

export default Movie;