const h1 = {
  picUrl:"https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg",
  bname:"React Design Patten",
  price:1199,
  quantity:10,
  rating:5.0,
};

function Book(){
  return (
    <div>
      <img 
        src = "https://m.media-amazon.com/images/I/81SGz3GDoiL.jpg"
        alt = "Design Patter React JS"
      />
      <h1>Let Us React</h1>
      <h2>Price: 765.00</h2>
      <h3>Quantity: 5</h3>
    </div>
  );
}

export default function App(){
  return (
    <>
      <Book/>
      <h1>Hello React</h1>
      <Book/>
      <Book/>
      <Book/>
    </>
  )
}
