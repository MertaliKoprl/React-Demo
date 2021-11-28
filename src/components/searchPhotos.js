import React, { createContext, useState } from "react";
import Unsplash, { toJson } from "unsplash-js";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import Detail from "./Detail";
import { render } from "@testing-library/react";


const unsplash = new Unsplash({
  accessKey: "ClEdGosBLzPLW-tdH6FXnQXwJ6nijpRFv93teQ4sBs8",  // Access key is demo, therefore limited with 50 request per hour
});



export default function SearchPhotos() {
  var hasContend = false;
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);

  const [filtInput, setFilter] = useState("");

  const searchPhotos = async (e) => {
    e.preventDefault();
    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
        // console.log(json);
        setPics(json.results);
        hasContend = hasJson();
      });
    console.log("Heyyo")

  };

  function hasJson(data) {
    try {
      JSON.parse(data);
    } catch (e) {
      console.log("I am here")
      hasContend = false;
    }
    hasContend = true;
  };


  return (

    <>
      <div className="inputContainer">
        <div>
          <form className="form" onSubmit={searchPhotos}>
            {" "}
            <label className="label" htmlFor="query">
              {" "}
              📷
            </label>
            <input
              type="text"
              name="query"
              className="input"
              placeholder={`Try "dog" or "apple"`}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
              }}
            />
            <button type="submit" className="button">
              Search
            </button>
          </form>
        </div>


        <div id="filterContainer">
          <input
            type="text"
            className="filter"
            placeholder={"Filter"}
            value={filtInput}
            onChange={(e) => {
              setFilter(e.target.value);
            }
            }
          />
        </div>
      </div>

      <div className="card-list">{
        pics.filter((val) => {
          if (filtInput == "") {
            return val;
          } else if (val.alt_description.toLowerCase().includes(filtInput.toLowerCase())) {
            return val;
          }
        }).map((pic) => (
          <div className="card" key={pic.id} >
            <Link to={{pathname: "/details", state: { image: pic}}} >
              <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="90%"
                height="90%"

              ></img>
            </Link>
          </div>
      ))

      }

      {" "}
    </div>
    </>
  );
}
