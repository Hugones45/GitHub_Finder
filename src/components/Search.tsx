import { BsSearch } from "react-icons/bs";
import { useState, KeyboardEvent } from "react";

import classes from "./Search.module.css";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

export const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter" || e.key === "NumpadEnter") {
      loadUser(userName);
    }
  }

  return (
    <div className={classes.search}>
      <h1>Search for a user:</h1>
      <div className={classes.search_container}>
        <input
          type="text"
          placeholder="Please enter the username."
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};
