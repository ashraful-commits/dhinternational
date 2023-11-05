import React from "react";
import DataTable from "react-data-table-component";
import Header from "../component/Header";
import SerarchBar from "../component/SearchBar";
import SearchBar from "../component/SearchBar";

const Home = () => {
  const columns = [
    {
      name: "Avatar",
      selector: (row) => row.title,
    },
    {
      name: "Product Name",
      selector: (row) => row.title,
    },
    {
      name: "Name",
      selector: (row) => row.title,
    },
    {
      name: "Gender",
      selector: (row) => row.title,
    },
    {
      name: "City",
      selector: (row) => row.year,
    },
    {
      name: "Mobile",
      selector: (row) => row.year,
    },
    {
      name: "Ref Number",
      selector: (row) => row.year,
    },
    {
      name: "Number Type",
      selector: (row) => row.year,
    },
    {
      name: "Email",
      selector: (row) => row.year,
    },
    {
      name: "Email Type",
      selector: (row) => row.year,
    },
    {
      name: "Occupation",
      selector: (row) => row.year,
    },
    {
      name: "Order date",
      selector: (row) => row.year,
    },
    {
      name: "Birthday",
      selector: (row) => row.year,
    },
    {
      name: "Delivery date",
      selector: (row) => row.year,
    },
    {
      name: "Delivery Type",
      selector: (row) => row.year,
    },
    {
      name: "cashout Type",
      selector: (row) => row.year,
    },

    {
      name: "Bank details",
      selector: (row) => row.year,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];
  return (
    <div className="w-full relative">
      <Header />
      <SearchBar />
      <DataTable
        responsive={true}
        pagination
        columns={columns}
        data={data}
        expandableRows
      />
    </div>
  );
};

export default Home;
