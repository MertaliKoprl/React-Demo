import React, { createContext, useState } from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import Unsplash, { toJson } from "unsplash-js";


const unsplash = new Unsplash({
  accessKey: "ClEdGosBLzPLW-tdH6FXnQXwJ6nijpRFv93teQ4sBs8",  // Access key is demo, therefore limited with 50 request per hour
});

export default function SearchPhotos() {
  var hasContend = false;
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  const PictureContext = createContext();

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

  function goDetails(picID) { 
    var pic = pics.filter((val) => {   // GETS PIC WHICH HAS BEEN CLICKED
      if (val.id == picID) {
        return val;
      }
    // NEED TO CREATE CONTEXT AND PUSH IT TO DETAILSPAGE COMPONENT

    })

  }

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
          <div className="card" key={pic.id} onClick={() => goDetails(pic.id)} >
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
            ></img>
          </div>
        ))

      }

        {" "}
      </div>
    </>
  );
}
