import React from 'react'

const Pen = (props) => {
    const {picUrl, company, price, quantity, rating} = props.pen;

    const qtyStyle = {
        fontSize: "1rem",
        color: "blue",
        textAlign: "center",
        backgroundColor: "yellow",
        padding: "10px",
    };

    return (
        <div className='book'>
            <img src={picUrl} alt={company} />
            <h1>{company}</h1>
            <h2>Price: {price}</h2>
            <h3 style={qtyStyle}>Quantity: {quantity}</h3>
            <h4 style={{ color: 'red', textAlign: 'center' }}>
                Rating: {rating}
            </h4>
            <button>Buy Now</button>
        </div>
    );
};

export default Pen;