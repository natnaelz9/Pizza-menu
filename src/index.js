import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <div className=".container">
      <Header />
      <Menu />
      <Footer /> 
   </div>
  )
}
function Header(){
    const style={};
   return <header className="header">
    <h1 style={style} >Fast react pizza co</h1>
    </header>
}
function Menu(){
  const pizzas=pizzaData;
  // const pizzas=[]
  const numpizzas=pizzas.length;
   return (
   <main className="menu">
    <h2>Our Menu</h2>
    {numpizzas > 0 ? (
    <ul className="pizzas">
      {pizzaData.map((pizza)=>(
        <Pizza pizzaObj={pizza} key={pizza.name}/>
        // name={pizza.name}
      ))}
    </ul>
    ): 
    ( <p>we are working on menu. please come back later</p>)
    }
    
      {/* <Pizza name="Pizza Spinaci" 
      ingredients="Tomato, mozarella, mushrooms, and onion"
      photoName="pizzas/spinaci.jpg"
      price="10" 
      />
      <Pizza name="Pizza Margherita" 
      ingredients="Tomato and mozarella"
      photoName="pizzas/margherita.jpg"
      price="10" 
      /> */}
      
   </main>
   )
}
function Footer(){
    
    const hour=new Date().getHours();
    const openhour=12;
    const closehour=23;
    const isopen= hour>=openhour && hour<=closehour ;
    console.log(isopen)
    return (
      <footer className="footer">
        <order isopen={isopen}/>
        {isopen ? (
          <div className="order">
          <p>we're open until{openhour}:00 Come and vist </p>
          <button className="btn">order</button>
          </div>
          ):<p>we're happy to wellcome you between {openhour}:00 to {closehour}:00 </p>
          }
      </footer>
    );
    // alert('we are open');
    // else alert("we are closed");
    // return (<footer className="footer">{new Date().toLocaleTimeString()} We are currently Open</footer>)
    //    return React.createElement('footer',null,'we are currently open');
}
function order({openhour }){
  <div>
    <p>we're open until{openhour}:00 Come and vist </p>
    
  </div>
}

function Pizza({pizzaObj}){
    return <li className={`pizza ${(pizzaObj.soldOut ? "sold-out" : "")}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.photoname} />
        <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ?'SOLD OUT':pizzaObj.price}</span>
        </div>
    </li>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);