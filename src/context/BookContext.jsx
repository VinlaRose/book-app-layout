import { createContext, useState, useEffect } from "react"

export const BookContext = createContext();

export const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/books') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              books: [
                {
                  id: 1,
                  title: 'To Kill a Mockingbird',
                  author: 'Harper Lee',
                  publisher: 'HarperCollins',
                  year: 1960,
                  image:
                    'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41j-s9fHJcL.jpg',
                  price: 9.99,
                  read: false,
                },
                {
                  id: 2,
                  title: '1984',
                  author: 'George Orwell',
                  publisher: 'Penguin Books',
                  year: 1949,
                  image:
                    'https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg',
                  price: 8.99,
                  read: true,
                },
                {
                  id: 3,
                  title: 'The Catcher in the Rye',
                  author: 'J.D. Salinger',
                  publisher: 'Little, Brown and Company',
                  year: 1951,
                  image:
                    'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91HPG31dTwL.jpg',
                  price: 10.99,
                  read: false,
                },
                {
                  id: 4,
                  title: 'The Great Gatsby',
                  author: 'F. Scott Fitzgerald',
                  publisher: 'Scribner',
                  year: 1925,
                  image:
                    'https://m.media-amazon.com/images/I/71FTb9X6wsL.jpg',
                  price: 7.99,
                  read: true,
                },
                {
                  id: 5,
                  title: 'Brave New World',
                  author: 'Aldous Huxley',
                  publisher: 'Harper Perennial Modern Classics',
                  year: 1932,
                  image:
                    'https://pagdandi.org/wp-content/uploads/2021/04/Brave-New-World.jpg',
                  price: 12.99,
                  read: false,
                },
                {
                  id: 6,
                  title: 'Pride and Prejudice',
                  author: 'Jane Austen',
                  publisher: 'Penguin Classics',
                  year: 1813,
                  image:
                    'https://m.media-amazon.com/images/I/71Q1tPupKjL.jpg',
                  price: 6.99,
                  read: true,
                },
              ],
              user: {
                name: 'Raju',
                bio: '25 din mein paisa double',
                img: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/12/no-akshay-kumar-no-hera-pheri-3-finally-worked-producers-to-bring-back-khiladi-001.jpg',
              },
            },
          })
        } else {
          reject({
            status: 404,
            message: 'Books list not found.',
          })
        }
      }, 2000)
    })
  }

export const BookProvider = ({children}) => {
   
    const [data, setData] = useState({
        bookData : [],
        user: {}
    });

    


      useEffect(() => {
        const getData = async() => {
            try{
                const response = await fakeFetch( 'https://example.com/api/books' );
                if (response.status === 200) {
                  setData((prevState) => ({
                    ...prevState,
                    bookData: response.data.books,
                    user: response.data.user,
                  }));
                }
            }catch(e){
                console.error(e)
            }
          };

          getData();
      },[])

      const handleRead = (item) =>{
        


      
        const updated = data.bookData.map((book) => {
          if(book.id === item.id){
            return {...book, read : true}
          }else{
            return book;
          }
        })
        
        
        setData({
          ...data,
          bookData: updated
        });
      }

      const handleFavourite = (id) =>{
        console.log(id)
      }

     


    return(
        <BookContext.Provider value={{data, handleRead, handleFavourite}}>
           {children}
        </BookContext.Provider>
    )
}