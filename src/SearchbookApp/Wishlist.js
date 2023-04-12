import { useEffect, useState } from "react";
import { deleteBook } from "./store";
import { useDispatch, useSelector } from "react-redux";
//import { useMapEle } from "./useMapEle";

const Wishlist = () => {
  const [eleArray, setEleArray] = useState([]);
  const dispatch = useDispatch();
  const booksArr = useSelector((state) => state.books.value);

//const handleDelete

  const mapData = (arr) => {
    const mapData = arr.map((book) => {
      return (
        <div className="book" key={book.id}>
          <img
            src={book.img}
            alt="no image found"
          />
          <div>
            <div>
              <span className="title">{book.title}</span>
              <span> by </span>
              <span>{book.author.join(", ")}</span>
            </div>
            <button onClick={()=>dispatch(deleteBook({id:book.id}))}>Remove from Wishlist</button>
          </div>
        </div>
      );
    });

    setEleArray(mapData);
  };

  useEffect(() => {
    if (booksArr !== undefined) {
      mapData(booksArr);
    } else {
      setEleArray([<div key="default"> Search for some books </div>]);
    }
  }, [booksArr]);

  return (
    <div className="App">
      <h1>Wishlist</h1>
      {eleArray}
    </div>
  );
};

export default Wishlist;
