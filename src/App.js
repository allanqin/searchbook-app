import "./App.css";
import { store } from "./SearchbookApp/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Searchbook from "./SearchbookApp/Searchbook";
import Wishlist from "./SearchbookApp/Wishlist";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Routes>
          <Route path="/" element={<Searchbook />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
