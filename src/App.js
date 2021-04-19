import React from "react";
import axios from "axios";
import Movie from "./movie";
import "./app.css";

class App extends React.Component{
  state = {
    isLoading: true,
    movies : []
  };

  getMovies = async()=> {
    const headers = {
      'Content-Type': 'plain/text',
      'X-Naver-Client-Id': '0izvEVBObzi_c80HfGoy',
      'X-Naver-Client-Secret': '26YpCvQo_u',
    }
    const params = {
      'query' : '무협',
    }

    const {data: {items} }=  await axios.get("/api/v1/search/movie.json",{params,headers});

    this.setState({movies:items, isLoading: false});
  };
 

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading} = this.state;
    return (
      <div>
        <section className="container">
        {isLoading ? (
          <div className="lodaer">
            <span className="lodaer__text">Loading...</span>
          </div>
          ): this.state.movies.map(movie =>{
          return <Movie key={movie.title}
                        title={movie.title}
                        subtitle={movie.subtitle}
                        image={movie.image}
                        pubDate={movie.pubDate}
                        director={movie.director}
                        actor={movie.actor}
                        userRating={movie.userRating}
                        link={movie.link}
                         />
        })}
        </section>
      </div>
    )
  }
  
}

export default App;
