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
    const trans_subtitle = subtitle.replace(/<b>/gi,'').replace(/<\/b>/gi,'');
    const trans_director = director.replace(/\|/gi,',').replace(/,\s*$/, "");
    const trans_actor =  actor.replace(/\|/gi,',').replace(/,\s*$/, "");
    const rating = {width:userRating*10+'%'};
    
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

    return (
        <div className="movie">
                <a href={link}>
                    {state.isLoading  ?
                        ( <img src={image} alt={trans_title} title={trans_title} /> ) : 
                        ( <img src={state.HQPoster} alt={trans_title} title={trans_title} /> )
                    }
                </a>
            <div className="movie__data">
                <h3 className="movie__title">{trans_title}</h3>
                <h5 className="movie__subtitle">{trans_subtitle}</h5>
                <ul className="movie__info">
                    <li>
                        {pubDate} | 감독 : {trans_director} | 출연 : {trans_actor}
                    </li>
                </ul>
                <span className="movie__rating">네티즌 평점&nbsp;:&nbsp; 
                    <div className="star-ratings-css">
                        <div className="star-ratings-css-top" style={rating}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                        <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                    </div>
                    &nbsp;({userRating})
                </span>
            </div>
        </div>
    )
}

export default Movie;