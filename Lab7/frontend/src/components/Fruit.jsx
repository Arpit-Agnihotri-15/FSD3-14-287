import React from 'react'

const products = [
    {title: "Apple", id: 1, isFruit: true},
    {title: "Banana", id: 2, isFruit: true},
    {title: "Carrot", id: 3, isFruit: false},
    {title: "Mango", id: 4, isFruit: true},
    {title: "Potato", id: 5, isFruit: false},
];

const ListItem = products.map((item) => <li key = {item.id}>{item.title}</li>);


console.log(ListItem);

const Fruit = () => {
  return <ul> {ListItem} </ul>;
};

export default Fruit
