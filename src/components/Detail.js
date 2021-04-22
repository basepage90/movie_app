import React,{useEffect} from "react";
import "./Detail.css";

function Detail (props){
  const { location, history} = props;
  const {state} = location;
  
  useEffect(() => {
    if (location.state === undefined) {
        history.push("/");
    }
  });
  
  if (location.state) {
    return (
      <section className="container__movie_detail">
          <div className="movie__detail">
            <div className="link">
              <img src={state.HQPoster} alt={state.trans_title} title={state.trans_title} />
            </div>
            <div className="movie__data">
                <h3 className="movie__title">{state.trans_title}</h3>
                <h5 className="movie__subtitle">{state.trans_subtitle}</h5>
                <ul className="movie__info">
                    <li>
                        {state.pubDate} | 감독 : {state.trans_director} | 출연 : {state.trans_actor}
                    </li>
                </ul>
                <span className="movie__rating">네티즌 평점&nbsp;:&nbsp;{state.userRating}</span>
            </div>
          </div>
      </section>
    )

  } else {
    return null;
  }
}

export default Detail;