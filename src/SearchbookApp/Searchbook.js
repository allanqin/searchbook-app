import { useState } from "react";
import Books from "./Books";
import { searchQuery } from "./store";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Searchbook = () => {
  const [queryInput,setQueryInput] = useState("query")
  const dispatch = useDispatch();
  const result = useSelector((state) => state.books.value);

  const getSearch = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${queryInput}&startIndex=0&maxResults=20`
      )
      .then((res) => {
        console.log(res.data);
        dispatch(searchQuery({ booksObj: res.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="App">
      <h1>Searchbook App</h1>
      <input onChange={(e)=>{
        setQueryInput(e.target.value)
      }}/>
      <button onClick={getSearch}>Search</button>
      {/* <button onClick={() => console.log("onClick:", result)}>Console log</button>
      <button onClick={() => dispatch(addBook({ title: "test book" }))}>
        Add To Wishlist
      </button> */}
      <Books />
    </div>
  );
};

export default Searchbook;
