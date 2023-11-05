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
      selector: (row) => row.refMobile,
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
    {
      name: "Action",
      selector: (row) => (
        <div className="flex gap-2 items-center justify-center">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
          <button>
            <svg
              width="18"
              height="18"
              viewBox="0 0 1024 1024"
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                d="M160 256H96a32 32 0 010-64h256V95.936a32 32 0 0132-32h256a32 32 0 0132 32V192h256a32 32 0 110 64h-64v672a32 32 0 01-32 32H192a32 32 0 01-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 01-32-32V416a32 32 0 0164 0v320a32 32 0 01-32 32zm192 0a32 32 0 01-32-32V416a32 32 0 0164 0v320a32 32 0 01-32 32z"
              />
            </svg>
          </button>
        </div>
      ),
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
      />
    </div>
  );
};

export default Home;
