import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Spinner from "./Spinner";
import SingleList from "./SingleList";
import { MDBBtn, MDBInput } from "mdbreact";
import InfiniteScroll from "react-infinite-scroll-component";
import { getRoles } from "@testing-library/react";
import { FaArrowCircleUp } from "react-icons/fa";
export default function DisplayEmpList() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [showScroll, setShowScroll] = useState(false);

  const getData = () => {
    axios
      .get("http://localhost:3001/api/getEmpList")
      .then(async (res) => {
        await setList(res.data);
        await setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setFilteredData(
      list.filter((item) =>
        item.name.trim().toLowerCase().includes(search.trim().toLowerCase())
      )
    );
  }, [search, list]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) return <Spinner />;
  return (
    <div>
      <Header />
      <div style={{ padding: 10 }}>
        <div>
          <MDBInput
            label="search by  title"
            outline
            type="text"
            icon="search"
            name="search"
            style={{ width: "50%" }}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>

        <div>
          {list.length === 0 ? (
            <h2>No data found</h2>
          ) : (
            <div className="d-flex row p-2">
              {filteredData.map((item, key) => {
                return <SingleList singleList={item} key={key} />;
              })}
            </div>
          )}
        </div>
      </div>
      <MDBBtn
        className="scrollTop"
        onClick={scrollTop}
        style={{
          height: 40,
          margin: 10,
          display: showScroll ? "flex" : "none",
        }}
      >
        Top
      </MDBBtn>
    </div>
  );
}
