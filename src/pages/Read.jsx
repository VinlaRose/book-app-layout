import { useContext } from "react"
import { BookContext } from "../context/BookContext"
import { BookCard } from "../components/BookCard";

export const Read = () => {
const {data} = useContext(BookContext);

const filtered = data.bookData.filter((item) => item.read === true)
console.log(filtered)

    return(
        <div style={{ display: "flex",
        flexDirection: "row",  flexWrap: "wrap",}}>

            {filtered?.length ? 
                filtered.map((books) => (
                    <div key = {books.id}> <BookCard {...books} disableReadBtn={false}  /> </div>
                ))
            : (
                <div></div>
            )

            }

            

        </div>
    )
}