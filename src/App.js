import PropTypes from "prop-types"

const foodList=[
    {name:"Fried Chicken", madein:"Korea", rating : 5.0, imgurl:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568222255998.jpeg"},
    {name:"Sushi", madein:"Japan", rating : 4.5, imgurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/1200px-Sushi_platter.jpg"},
    {name:"Steak", madein:"U.S.A.", rating : 3.0, imgurl:"https://media1.s-nbcnews.com/i/newscms/2018_07/1318715/grilled-steak-today-tease-180216_89508b219dd455b4d43311782841f938.jpg"},
    {name:"Pasta", madein:"Italy", rating : 4., imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2SAZscmPwt6JdcaMb6Ek-RuDRzX0BTz3TZw&usqp=CAU"},
]

Food.propTypes = {
  fav: PropTypes.string.isRequired,
  nat: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
};

function Food({fav,nat,img,rating}) {
  return (
    <div className='food'>
      <h2>I Luv {fav} among {nat} food</h2>
      <h4>rates : {rating}/5.0 </h4>
      <img src={img} width="250px" alt={fav}/>
    </div>
  );
}


function App() {
  return(
  <div className="App">
    <h1>I Love It !!! </h1>
    {foodList.map(food=>(
       <Food key={food.name} fav={food.name} nat={food.madein} img={food.imgurl} rating={food.rating} />
    ))}
  </div>
  );
}



export default App;
