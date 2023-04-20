import { useContext } from "react"
import { BookContext } from "../context/BookContext"

export const BookCard = (item) => {

    const { id,
        title,
        author,
        publisher,
        year,
        image,
        price,
        read, disableReadBtn} = item

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
            
            <button onClick={() => handleFavourite(id)} >Add to favourites</button>
        </div>
    )
}