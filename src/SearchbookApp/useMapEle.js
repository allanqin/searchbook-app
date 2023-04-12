import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addBook } from "./store";
import "../App.css";

export const useMapEle = (arr) => {
  const dispatch = useDispatch();

  if (arr === undefined) {
    return [];
  }

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
          <button
            onClick={() =>
              dispatch(
                addBook({
                  title: book.volumeInfo.title,
                  author: book.volumeInfo.authors,
                  img: book.volumeInfo.imageLinks?.smallThumbnail,
                })
              )
            }
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    );
  });

  return mapData;
};

const Books = () => {
  const [eleArray, setEleArray] = useState([]);
  const data = useSelector((state) => state.search.value.booksObj.items);
  const mappedEle = useMapEle(data);

  useEffect(() => {
    if (mappedEle.length ? false : true) {
      mappedEle.push(<div key="default"> Search for some books </div>)
    }
    setEleArray(mappedEle);
  }, [data]);

  return eleArray;
};

export default Books;
