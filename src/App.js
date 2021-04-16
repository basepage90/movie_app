function Food({fav,madein}) {
  return (
    <div className='food'>I Luv {fav} among {madein} food</div>
  );
}

function Food2(props) {
  return (
    <div className='food'>I Luv {props.fav} among {props.madein} food</div>
  );
}

function App() {
  return(
  <div className="App">
    <h1>I Love It !!! </h1>
    <Food fav="Fried Chicken" madein="Korea"/>
    <Food fav="Sushi" madein="Japan"/>
    <Food2 fav="Steak" madein="U.S.A."/>
    <Food2 fav="Pasta" madein="Italy"/>
  </div>
  );
}



export default App;
