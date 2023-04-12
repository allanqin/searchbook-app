import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addBook} from "./store";
import "../App.css";


const Books = () => {
  const [eleArray, setEleArray] = useState([]);
  const [displayDetails, setDisplayDetails] = useState(new Set());
  const dispatch = useDispatch();
  const data = useSelector((state) => state.search.value.booksObj.items);

  const handleDetails = (id) => {
    if (displayDetails.has(id)){
      //setDisplayDetails(new Set(...displayDetails).delete(id))
    } else {
      setDisplayDetails(new Set(...displayDetails).add(id))
    }
  }

  const renderDetails = (book, set) => {
    //console.log("render: ", displayDetails)
    if (set.has(book.id)) {
      return <div className="description">{book.volumeInfo.description}</div>}
  }

  const mapData = (arr) => {
    const mapData = arr.map((book) => {
      return (
        <div className="book" key={book.id} >
          <img
            src={book.volumeInfo.imageLinks?.smallThumbnail}
            alt="no image found"
            onClick={()=>{
              //console.log("clicked", displayDetails); 
              handleDetails(book.id)}}
          />
          <div>
            <div>
              <span className="title">{book.volumeInfo.title}</span>
              <span> by </span>
              <span>{book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : ""}</span>
            </div>
            <button onClick={()=>dispatch(addBook({id:book.id, title: book.volumeInfo.title, author:book.volumeInfo.authors, img:book.volumeInfo.imageLinks?.smallThumbnail}))}>Add to Wishlist</button>
            { renderDetails(book, displayDetails)}
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
  }, [data, displayDetails]);

  return eleArray;
};

export default Books;
