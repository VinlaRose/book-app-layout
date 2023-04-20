import { useContext } from "react"
import { BookContext } from "../context/BookContext"
import { BookCard } from "../components/BookCard";

export const Home = () => {
const {data} = useContext(BookContext);


    return(
        <div  style={{ display: "flex",
        flexDirection: "row",  flexWrap: "wrap",}}>

            {data.bookData?.length ? 
                data.bookData.map((books) => (
                    <div key = {books.id}> <BookCard {...books} disableReadBtn={true}/> </div>
                ))
            : (
                <div></div>
            )

            }

            

        </div>
    )
}