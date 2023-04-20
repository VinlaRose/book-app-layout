import { useContext } from "react"
import { BookContext } from "../context/BookContext"


export const Profile = () => {
    const {data} = useContext(BookContext);

    const containerStyle = {
        border: "1px solid black",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "blue",
        width: "200px",
        margin: "20px"
      };

    return(
        <div style={containerStyle}>
            <img style={{height:"300px", width:"200px"}} src={data.user.img} alt=""/>
            <p>{data.user.name}</p>
            <p>{data.user.bio}</p>
        </div>
    )
}