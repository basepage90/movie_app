import React from "react";
import axios from "axios";
import Movie from "../components/movie";
import "./Home.css";

class Home extends React.Component{
  
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      searchName : "무림",
      movies : []
    };
    
    // 콜백에서 `this`가 작동하려면 바인딩 해주어야 한다.
    this.setSearchName = this.setSearchName.bind(this);
  }

  handleKeyPress = (e)=>{
    if (e.key === "Enter") {
      this.setSearchName();
    }
  }
  
  setSearchName() {
    const searchName = document.getElementById("searchName").value;
    this.setState({searchName: searchName},()=>{this.getMovies();});
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
 


  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        <div class="searchBox">
          <input id="searchName" type="text"  onKeyPress={this.handleKeyPress}/>
          <button type="button" onClick={this.setSearchName}>Search</button>
        </div>
        {isLoading ? (
          <div className="lodaer">
            <span className="lodaer__text">Loading...</span>
          </div>
          ): (
            <div className="movies">
              {movies.map(movie =>(
                <Movie
                  key={movie.image}
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