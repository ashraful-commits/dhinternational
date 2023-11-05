import React, { useState } from "react";
import FormInput from "./FormInput";
import Select from "react-select";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

import { toast } from "react-toastify";
import { app } from "../Firebase.config";
const Model = ({ setModel }) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    productName: "",
    gender: "",
    city: "",
    mobile: "",
    refMobile: "",
    mobileType: "",
    emailType: "",
    occupation: "",
    orderDate: "",
    birthday: "",
    deliveryDate: "",
    deliveryType: "",
    bankName: "",
    cashoutType: "",
    orderSource: "",
    address: "",
  });
  const handleInputChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  //==========================
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
    setInput((prev) => ({
      ...prev,
      city: selectedOption.value,
    }));
  };

  const cities = [
    { label: "Dhaka", value: "Dhaka" },
    { label: "Barisal", value: "Barisal" },
    { label: "Chittagong", value: "Chittagong" },
    { label: "Comilla", value: "Comilla" },
    { label: "Faridpur", value: "Faridpur" },
    { label: "Jessore", value: "Jessore" },
    { label: "Khulna", value: "Khulna" },
    { label: "Mymensingh", value: "Mymensingh" },
    { label: "Noakhali", value: "Noakhali" },
    { label: "Pabna", value: "Pabna" },
    { label: "Rajshahi", value: "Rajshahi" },
    { label: "Sylhet", value: "Sylhet" },
    { label: "Bagerhat", value: "Bagerhat" },
    { label: "Bandarban", value: "Bandarban" },
    { label: "Barguna", value: "Barguna" },
    { label: "Bhola", value: "Bhola" },
    { label: "Bogra", value: "Bogra" },
    { label: "Brahmanbaria", value: "Brahmanbaria" },
    { label: "Chandpur", value: "Chandpur" },
    { label: "Chapai Nawabganj", value: "Chapai Nawabganj" },
    { label: "Chuadanga", value: "Chuadanga" },
    { label: "Cox's Bazar", value: "Cox's Bazar" },
    { label: "Dinajpur", value: "Dinajpur" },
    { label: "Feni", value: "Feni" },
    { label: "Gaibandha", value: "Gaibandha" },
    { label: "Gazipur", value: "Gazipur" },
    { label: "Gopalganj", value: "Gopalganj" },
    { label: "Habiganj", value: "Habiganj" },
    { label: "Jamalpur", value: "Jamalpur" },
    { label: "Jhalokati", value: "Jhalokati" },
    { label: "Jhenaidah", value: "Jhenaidah" },
    { label: "Joypurhat", value: "Joypurhat" },
    { label: "Khagrachari", value: "Khagrachari" },
    { label: "Kishoreganj", value: "Kishoreganj" },
    { label: "Kurigram", value: "Kurigram" },
    { label: "Kushtia", value: "Kushtia" },
    { label: "Lakshmipur", value: "Lakshmipur" },
    { label: "Lalmonirhat", value: "Lalmonirhat" },
    { label: "Madaripur", value: "Madaripur" },
    { label: "Magura", value: "Magura" },
    { label: "Manikganj", value: "Manikganj" },
    { label: "Meherpur", value: "Meherpur" },
    { label: "Moulvibazar", value: "Moulvibazar" },
    { label: "Munshiganj", value: "Munshiganj" },
    { label: "Naogaon", value: "Naogaon" },
    { label: "Narail", value: "Narail" },
    { label: "Narayanganj", value: "Narayanganj" },
    { label: "Narsingdi", value: "Narsingdi" },
    { label: "Natore", value: "Natore" },
    { label: "Nawabganj", value: "Nawabganj" },
    { label: "Netrokona", value: "Netrokona" },
    { label: "Nilphamari", value: "Nilphamari" },
    { label: "Panchagarh", value: "Panchagarh" },
    { label: "Patuakhali", value: "Patuakhali" },
    { label: "Pirojpur", value: "Pirojpur" },
    { label: "Rajbari", value: "Rajbari" },
    { label: "Rangamati", value: "Rangamati" },
    { label: "Sherpur", value: "Sherpur" },
    { label: "Sirajganj", value: "Sirajganj" },
    { label: "Sunamganj", value: "Sunamganj" },
    { label: "Tangail", value: "Tangail" },
    { label: "Thakurgaon", value: "Thakurgaon" },
  ];
  //=============================onsubmit
  console.log(input);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    // const db = getFirestore(app);
    // await addDoc(collection(db, "customer"), {
    //   ...input,
    //   timestamp: serverTimestamp(),
    // }).then(() => {
    //   toast(`Customer Created!`, {
    //     position: "bottom-center",
    //     autoClose: 1000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //   });
    //   setModel(false);
    //   setInput({
    //     name: "",
    //     email: "",
    //     productName: "",
    //     gender: "",
    //     city: "",
    //     mobile: "",
    //     refMobile: "",
    //     mobileType: "",
    //     emailType: "",
    //     occupation: "",
    //     orderDate: "",
    //     birthday: "",
    //     deliveryDate: "",
    //     deliveryType: "",
    //     bankName: "",
    //     cashoutType: "",
    //     orderSource: "",
    //     address: "",
    //   });
    // });
  };
  return (
    <div className="w-screen h-screen z-[9999] bg-blue-300 flex justify-center items-center bg-opacity-90 absolute top-0 left-0">
      <button
        onClick={() => setModel(false)}
        className="absolute top-5 right-5 border rounded-full p-1 hover:bg-blue-500 transition-all ease-in-out duration-500 "
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-blue-900 hover:fill-white transition-all duration-500 ease-in-out"
        >
          <path
            fillRule="evenodd"
            d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"
          />
        </svg>
      </button>
      <form
        onSubmit={handleSubmit}
        className=" min-w-[300px] min-h-[500px] h-[500px] overflow-y-auto p-3 rounded-lg bg-white grid gap-2 grid-cols-2 min-h-auto"
      >
        <FormInput
          type="text"
          label="Name"
          name="name"
          value={input.name}
          placeholder="Name"
          handleInputChange={handleInputChange}
        />
        <FormInput
          name="productName"
          placeholder="Product name"
          type="text"
          label="Product Name"
          value={input.productName}
          handleInputChange={handleInputChange}
        />
        <FormInput
          name="email"
          placeholder="Name"
          type="email"
          label="Email"
          value={input.email}
          handleInputChange={handleInputChange}
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="mt-[6px]">
            Email type
          </label>
          <select
            name="emailType"
            onChange={handleInputChange}
            value={input.emailType}
            className="h-[35px] bg-blue-300 px-2 focus:outline-none border-[1px] border-white focus:border-blue-600"
            id=""
          >
            <option selected className="py-[5px] text-[14px]" value="Personal">
              Personal
            </option>
            <option className="py-[5px] text-[14px]" value="Office">
              Office
            </option>
          </select>
        </div>
        <FormInput
          name="mobile"
          placeholder="Mobile"
          type="text"
          label="Mobile"
          value={input.mobile}
          handleInputChange={handleInputChange}
        />
        <FormInput
          name="refMobile"
          placeholder="Ref Mobile"
          type="text"
          label="Ref Mobile"
          value={input.refMobile}
          handleInputChange={handleInputChange}
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="mt-[6px]">
            Mobile type
          </label>
          <select
            name="mobileType"
            onChange={handleInputChange}
            value={input.mobileType}
            className="h-[35px] bg-blue-300 px-2 focus:outline-none border-[1px] border-white focus:border-blue-600"
            id=""
          >
            <option selected className="py-[5px] text-[14px]" value="Personal">
              Personal
            </option>
            <option className="py-[5px] text-[14px]" value="Office">
              Office
            </option>
          </select>
        </div>
        <FormInput
          name="occupation"
          placeholder="Occupation"
          type="text"
          label="Occupation"
          value={input.occupation}
          handleInputChange={handleInputChange}
        />
        <FormInput
          name="orderDate"
          placeholder="Occupation"
          type="date"
          label="Order Date"
          value={input.orderDate}
          handleInputChange={handleInputChange}
        />
        <FormInput
          name="deliveryDate"
          placeholder="Delivery date"
          type="date"
          label="Delivery Date"
          value={input.deliveryDate}
          handleInputChange={handleInputChange}
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="mt-[6px]">
            Delivery type
          </label>
          <select
            name="deliveryType"
            onChange={handleInputChange}
            value={input.deliveryType}
            className="h-[35px] bg-blue-300 px-2 focus:outline-none border-[1px] border-white focus:border-blue-600"
            id=""
          >
            <option className="py-[5px] text-[14px]" value="Cash on delivery">
              Cash on delivery
            </option>
            <option className="py-[5px] text-[14px]" value="Office">
              Office
            </option>
            {/* Add more delivery types here */}
            <option className="py-[5px] text-[14px]" value="Home delivery">
              Home delivery
            </option>
            <option className="py-[5px] text-[14px]" value="Pickup point">
              Pickup point
            </option>
            <option
              selected
              className="py-[5px] text-[14px]"
              value="Express delivery"
            >
              Express delivery
            </option>
            <option className="py-[5px] text-[14px]" value="Scheduled delivery">
              Scheduled delivery
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="mt-[6px]">
            Bank Name
          </label>
          <select
            name="bankName"
            onChange={handleInputChange}
            value={input.bankName}
            className="h-[35px] bg-blue-300 px-2 focus:outline-none border-[1px] border-white focus:border-blue-600"
            id=""
          >
            <option className="py-[5px] text-[14px]" value="Bkash">
              Bkash
            </option>
            <option className="py-[5px] text-[14px]" value="DBBL">
              DBBL
            </option>
            {/* Add more delivery types here */}
            <option className="py-[5px] text-[14px]" value="Nogod">
              Nogod
            </option>
          </select>
        </div>
        <FormInput
          name="birthday"
          placeholder="Birthday"
          type="date"
          label="Birthday"
          value={input.birthday}
          handleInputChange={handleInputChange}
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="mt-[6px]">
            City
          </label>
          <Select
            name="city"
            value={selectedCity}
            onChange={handleCityChange}
            options={cities}
            placeholder="Select a city"
            isSearchable={true}
            className="bg-blue-300"
          />
        </div>
        <FormInput
          name="address"
          placeholder="Address"
          type="text"
          label="Address"
          value={input.address}
          handleInputChange={handleInputChange}
        />

        <div className="flex flex-col gap-2">
          <label htmlFor="" className="mt-[6px]">
            Cashout type
          </label>
          <select
            name="cashoutType"
            onChange={handleInputChange}
            value={input.cashoutType}
            className="h-[35px] bg-blue-300 px-2 focus:outline-none border-[1px] border-white focus:border-blue-600"
            id=""
          >
            <option className="py-[5px] text-[14px]" value="Cash on delivery">
              Cash on delivery
            </option>
            <option
              selected
              className="py-[5px] text-[14px]"
              value="Bank transfer"
            >
              Bank transfer
            </option>
            <option className="py-[5px] text-[14px]" value="PayPal">
              PayPal
            </option>
            <option className="py-[5px] text-[14px]" value="Cheque">
              Cheque
            </option>
            <option className="py-[5px] text-[14px]" value="Mobile wallet">
              Mobile wallet
            </option>
            <option className="py-[5px] text-[14px]" value="Credit card refund">
              Credit card refund
            </option>
            {/* Add more cashout types here */}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="" className="mt-[6px]">
            Gender
          </label>
          <select
            name="gender"
            onChange={handleInputChange}
            value={input.gender}
            className="h-[35px] bg-blue-300 px-2 focus:outline-none border-[1px] border-white focus:border-blue-600"
            id=""
          >
            <option selected className="py-[5px] text-[14px]" value="Man">
              Man
            </option>
            <option className="py-[5px] text-[14px]" value="Women">
              Women
            </option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="" className="mt-[6px]">
            Order status
          </label>
          <select
            name="orderStatus"
            onChange={handleInputChange}
            value={input.orderStatus}
            className="h-[35px] bg-blue-300 px-2 focus:outline-none border-[1px] border-white focus:border-blue-600"
            id=""
          >
            <option selected className="py-[5px] text-[14px]" value="Pending">
              Pending
            </option>
            <option className="py-[5px] text-[14px]" value="Complete">
              Complete
            </option>
            <option className="py-[5px] text-[14px]" value="Ongoing">
              Ongoing
            </option>
            <option className="py-[5px] text-[14px]" value="Cancel">
              Cancel
            </option>
            <option className="py-[5px] text-[14px]" value="Return">
              Return
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="mt-[6px]">
            Order Source
          </label>
          <select
            name="orderSource"
            onChange={handleInputChange}
            value={input.orderSource}
            className="h-[35px] bg-blue-300 px-2 focus:outline-none border-[1px] border-white focus:border-blue-600"
            id=""
          >
            <option selected className="py-[5px] text-[14px]" value="Facebook">
              Facebook
            </option>
            <option className="py-[5px] text-[14px]" value="WhatsApp">
              WhatsApp
            </option>
            <option className="py-[5px] text-[14px]" value="Email">
              Email
            </option>
            <option className="py-[5px] text-[14px]" value="TikTok">
              TikTok
            </option>
            <option className="py-[5px] text-[14px]" value="Instagram">
              Instagram
            </option>
            {/* Add more order sources here */}
          </select>
        </div>
        <div className="flex flex-col gap-[5px]">
          <button className="bg-red-500 h-[32px] hover:bg-red-800 transition-all duration-500 ease-in-out text-white font-bold uppercase">
            pdf
          </button>
          <button
            type="submit"
            className="bg-purple-500 h-[35px] hover:bg-purple-800 transition-all duration-500 ease-in-out text-white uppercase text-[14px] font-bold"
          >
            Add customer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Model;
