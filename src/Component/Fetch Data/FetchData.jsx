import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Fetch Data/FetchData.css";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

const FetchData = () => {
  const [country, setCountry] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 5;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataWithDelay = async () => {
      try {
       
        setTimeout(async () => {
          const res = await axios.get("https://api.knowmee.co/api/v1/master/get-country-list");
          setCountry(res.data.responseData);
          setLoading(false);
        }, 5000);
      } catch (error) {
        console.log("Error Fetching", error);
        setLoading(false);
      }
    };

    fetchDataWithDelay();
  }, []);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = country.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const handleNextPage = () => {
    if (indexOfLastCountry < country.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
    <Header/>
    {
      loading ? (
        <p className="f-data">Fetching Data Please Wait......</p>
      ): (
<div className="main">
      <div className="list">
        {currentCountries.map((e, index) => {
          return (
            <ul key={index}>
              <li>{e.country_name}</li>
            </ul>
          );
        })}
      </div>
      <div className="btns">
        <button className={`btn-pre ${currentPage === 1 ? '' : 'active'}`} 
        onClick={handlePrevPage}  disabled={currentPage === 1}>
          Previous
        </button>
        <button className={`btn-nxt ${indexOfLastCountry >= country.length ? '' : 'active'}`} 
        onClick={handleNextPage} disabled={indexOfLastCountry >= country.length}>
          Next
        </button>
      </div>
    </div>
      )
    }
    
      <Footer/>
    </>
  );
};

export default FetchData;
