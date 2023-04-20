import { useContext } from "react"
import { BookContext } from "../context/BookContext"
import { BookCard } from "../components/BookCard";

export const Read = () => {
const {filteredRead} = useContext(BookContext);



    return(
        <div style={{ display: "flex",
        flexDirection: "row",  flexWrap: "wrap",}}>

            {filteredRead?.length ? 
                filteredRead.map((books) => (
                    <div key = {books.id}> <BookCard {...books} disableReadBtn={false}  /> </div>
                ))
            : (
                <div></div>
            )

            }

            

        </div>
    )
}