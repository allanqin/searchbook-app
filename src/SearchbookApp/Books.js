import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addBook} from "./store";
import "../App.css";


const Books = () => {
  const [eleArray, setEleArray] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.search.value.booksObj.items);

  const mapData = (arr) => {
    const mapData = arr.map((book) => {
      return (
        <div className="book" key={book.id}>
          <img
            src={book.volumeInfo.imageLinks?.smallThumbnail}
            alt="no image found"
          />
          <div>
            <div>
              <span className="title">{book.volumeInfo.title}</span>
              <span> by </span>
              <span>{book.volumeInfo.authors}</span>
            </div>
            <button onClick={()=>dispatch(addBook({id:book.id, title: book.volumeInfo.title, author:book.volumeInfo.authors, img:book.volumeInfo.imageLinks?.smallThumbnail}))}>Add to Wishlist</button>
          </div>
        </div>
      );
    });

    setEleArray(mapData);
  };

  useEffect(() => {
    if (data !== undefined) {
      mapData(data);
    } else {
      setEleArray([<div key="default"> Search for some books </div>]);
    }
  }, [data]);

  return eleArray;
};

export default Books;
