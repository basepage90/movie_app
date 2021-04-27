import React from "react";
import axios from "axios";
import Movie from "../components/movie";
import "./Home.css";
import store from "../store/store";

class Home extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
      isLoading: true,
      searchName : "어벤져스",
      movies : []
    };
  }
 


  
  getMovies = async()=> {
    const headers = {
      'Content-Type': 'plain/text',
      'X-Naver-Client-Id': '0izvEVBObzi_c80HfGoy',
      'X-Naver-Client-Secret': '26YpCvQo_u',
    }
    
    const params = {
      'query' : this.state.searchName,
      'display':'20'
    }
    
    const {data: {items} }=  await axios.get("/api/v1/search/movie.json",{params,headers});
    
    this.setState({movies:items, isLoading: false});

  };

  test = store.subscribe(()=> { 
    console.log("Subscribe! I am cctv!"); 
    const searchName = store.getState().text;
    this.setState({searchName:searchName}, ()=>{this.getMovies()});
    
  });


  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="lodaer">
            <span className="lodaer__text">Loading...</span>
          </div>
          ): (
            <div className="movies">
              {movies.map(movie =>(
                <Movie
                  key={movie.title+movie.pubDate+movie.director}
                  title={movie.title}
                  subtitle={movie.subtitle}
                  image={movie.image}
                  pubDate={movie.pubDate}
                  director={movie.director}
                  actor={movie.actor}
                  userRating={movie.userRating}
                  link={movie.link}
                  />
              ))}
           </div>
          )}


        </section>
    )
  }
  
}

export default Home;