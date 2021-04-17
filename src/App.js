function Food({fav,nat,img}) {
  return (
    <div className='food'>
      <h2>I Luv {fav} among {nat} food</h2>
      <img src={img} width="250px"/>
    </div>
  );
}

const foodList=[
    {fav:"Fried Chicken", nat:"Korea", img:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568222255998.jpeg"},
    {fav:"Sushi", nat:"Japan", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/1200px-Sushi_platter.jpg"},
    {fav:"Steak", nat:"U.S.A.", img:"https://media1.s-nbcnews.com/i/newscms/2018_07/1318715/grilled-steak-today-tease-180216_89508b219dd455b4d43311782841f938.jpg"},
    {fav:"Pasta", nat:"Italy", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2SAZscmPwt6JdcaMb6Ek-RuDRzX0BTz3TZw&usqp=CAU"},
]

function App() {
  return(
  <div className="App">
    <h1>I Love It !!! </h1>
    {foodList.map(food => (
      <Food fav={food.fav} nat={food.nat} img={food.img}/>
    ) )}
  </div>
  );
}



export default App;
