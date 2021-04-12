import './Card.css'

const Card = (props) => {
    const getusercontact = (num) => {
        fetch(`https://boat-prime.herokuapp.com/specuser?q=${num}`)
      .then(res => res.json())
      .then(data => {
          console.log(data.email);
          document.getElementById(props.data.id).innerHTML=data.email
      })
      .catch(err => {
        console.log(err);
      })
    }
    
    return (
        <>
            <div className="c-card">
                <h1>Brand: {props.data.brand}</h1>
                <p className="c-title">Model: {props.data.model}</p>
                <p>Condition: {props.data.condition}</p>
                <p>Year: {props.data.year}</p>
                <p>Length: {props.data.length}</p>
                <p>Style: {props.data.style}</p>
                <p>Price: {props.data.price}</p>
                <p id={props.data.id}><button className="c-button" onClick={()=>getusercontact(props.data.seller)}>Contact</button></p>
            </div>
        </>
    );
}

export default Card;
