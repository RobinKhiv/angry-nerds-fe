import React from "react";
import "./navigation.css";

export default function navigation() {
  return (
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">
          Angry Nerds
        </a>
        <form class="form-inline">
          <input
            class="form-control"
            type="search"
            placeholder="Search"
          ></input>
          <button class="btn btn-secondary" type="submit">
            Search
          </button>
        </form>
      </nav>
  );
}
