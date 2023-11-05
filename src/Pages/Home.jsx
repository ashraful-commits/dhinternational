import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Header from "../component/Header";
import SerarchBar from "../component/SearchBar";
import SearchBar from "../component/SearchBar";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../Firebase.config";

const Home = () => {
  const columns = [
    {
      name: "Avatar",
      selector: (row) => row.name,
    },
    {
      name: "Product Name",
      selector: (row) => row.productName,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
    },
    {
      name: "City",
      selector: (row) => row.city,
    },
    {
      name: "Mobile",
      selector: (row) => row.mobile,
    },
    {
      name: "Ref Number",
      selector: (row) => row.refNumber,
    },
    {
      name: "Number Type",
      selector: (row) => row.mobileType,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Email Type",
      selector: (row) => row.emailType,
    },
    {
      name: "Occupation",
      selector: (row) => row.occupation,
    },
    {
      name: "Order date",
      selector: (row) => row.orderDate,
    },
    {
      name: "Birthday",
      selector: (row) => row.birthday,
    },
    {
      name: "Delivery date",
      selector: (row) => row.deliveryDate,
    },
    {
      name: "Delivery Type",
      selector: (row) => row.deliveryType,
    },
    {
      name: "Cashout Type",
      selector: (row) => row.cashoutType,
    },
    {
      name: "Order Source",
      selector: (row) => row.orderSource,
    },

    {
      name: "Bank Name",
      selector: (row) => row.bankName,
    },
  ];

  const [customer, setCustomer] = useState([]);
  const db = getFirestore(app);
  useEffect(() => {
    const customerRef = collection(db, "customer");
    // Get all documents initially
    getDocs(customerRef)
      .then((querySnapshot) => {
        let allCustomer = [];
        querySnapshot.forEach((doc) => {
          allCustomer.push({ docId: doc.id, ...doc.data() });
        });
        setCustomer(allCustomer);
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      });

    // Listen to real-time updates on the "cities" collection
    // const unsubscribe = onSnapshot(customer, (querySnapshot) => {});
  }, []);
  return (
    <div className="w-full relative">
      <Header />
      <SearchBar />
      <DataTable
        responsive={true}
        pagination
        columns={columns}
        data={customer}
        expandableRows
      />
    </div>
  );
};

export default Home;
