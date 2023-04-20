import { useContext } from "react"
import { BookContext } from "../context/BookContext"
import { BookCard } from "../components/BookCard";

export const Favourite = () => {
const {filteredFavourite} = useContext(BookContext);



    return(
        <div style={{ display: "flex",
        flexDirection: "row",  flexWrap: "wrap",}}>

            {filteredFavourite?.length ? 
                filteredFavourite.map((books) => (
                    <div key = {books.id}> <BookCard {...books} disableReadBtn={true} disableFavBtn={false} /> </div>
                ))
            : (
                <div></div>
            )

            }

            

        </div>
    )
}