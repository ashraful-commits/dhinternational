import React from "react";
import DataTable from "react-data-table-component";
import Header from "../component/Header";

const Home = () => {
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Year",
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
    <div>
      <Header />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Home;
