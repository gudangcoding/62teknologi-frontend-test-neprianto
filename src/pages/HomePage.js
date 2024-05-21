import React, { useState, useEffect } from "react";
import { searchBusinesses } from "../api";
import BusinessList from "../components/BusinessList";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

const HomePage = () => {
  const [businesses, setBusinesses] = useState([]);
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await searchBusinesses(
          term,
          location,
          (currentPage - 1) * 20
        );
        setBusinesses(response.data.businesses);
        setTotalPages(Math.ceil(response.data.total / 20));
      } catch (error) {
        console.error(error);
      }
    };

    fetchBusinesses();
  }, [term, location, currentPage, filters]);

  const handleSearch = (searchTerm, searchLocation) => {
    setTerm(searchTerm);
    setLocation(searchLocation);
    setCurrentPage(1);
  };

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Filter onFilterChange={handleFilterChange} />
      <BusinessList businesses={businesses} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePage;
