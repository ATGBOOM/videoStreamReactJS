import styles from "./App.css";
import { useState } from "react";

interface Props{
  onSearch:Function;
}

function SearchBar({ onSearch}:Props) {
  const [searchItem, setSearchItem] = useState("");

  const handleChange = (event) => {
    setSearchItem(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <>
      <div className="search">
        <form action="#">
          <input
            type="text"
            placeholder=" Search Videos "
            name="search"
            value={searchItem}
            onChange={handleChange}
          />
        </form>
      </div>
    </>
  );
}
export default SearchBar;
