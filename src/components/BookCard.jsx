import { useContext } from "react"
import { BookContext } from "../context/BookContext"
import { Link } from "react-router-dom";

export const BookCard = (item) => {

    const { id,
        title,
        author,
        publisher,
        year,
        image,
        price,
        read, disableReadBtn, disableFavBtn, favourite} = item

    const {handleRead, handleFavourite} = useContext(BookContext);

    const containerStyle = {
        border: "1px solid black",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "pink",
        width: "200px",
        margin: "20px"
      };
    return(
        <div style={containerStyle}>
            <img style={{height:"300px", width: "190px"}} src= {image} alt = ""/>
            <p>Title : {title}</p>
            <p>Author: {author}</p> 
            {disableReadBtn && <button onClick={() => handleRead(item)} disabled = {read ?  true : false} >{read ? "Already Read" : "Mark as Read"}</button> }

            {disableFavBtn && <button onClick={() => handleFavourite(item)} >{favourite ? (<Link to="/favourites">Go to Favourites</Link>) : "Add to favourite"}</button>}
            
            
        </div>
    )
}