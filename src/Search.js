import React, { useState } from "react";

export default function Search() {
  let [city, setCity] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    if (city.length > 0) {
      alert(`${city}`);
    } else {
      alert("Enter a city");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <form onSubmit={handleSearch}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );
}
