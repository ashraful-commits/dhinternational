import React, { useState } from "react";
import FormInput from "./FormInput";

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
  });
  const handleInputChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
      <div className=" min-w-[450px] bg-white grid gap-2 grid-cols-2 min-h-auto">
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
            <option className="py-[5px] text-[14px]" value="Personal">
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
            <option className="py-[5px] text-[14px]" value="Personal">
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
            name="mobileType"
            onChange={handleInputChange}
            value={input.mobileType}
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
            <option className="py-[5px] text-[14px]" value="Express delivery">
              Express delivery
            </option>
            <option className="py-[5px] text-[14px]" value="Scheduled delivery">
              Scheduled delivery
            </option>
            {/* Add as many additional delivery types as needed */}
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
            <option className="py-[5px] text-[14px]" value="Bank transfer">
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
            <option className="py-[5px] text-[14px]" value="Man">
              Man
            </option>
            <option className="py-[5px] text-[14px]" value="Women">
              Women
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="mt-[6px]">
            City
          </label>
          <select
            name="city"
            onChange={handleInputChange}
            value={input.city}
            className="h-[35px] bg-blue-300 px-2 focus:outline-none border-[1px] border-white focus:border-blue-600"
            id=""
          >
            <option value="">Select a district</option>
            <option className="py-[5px] text-[14px]" value="Dhaka">
              Dhaka
            </option>
            <option className="py-[5px] text-[14px]" value="Borisal">
              Barisal
            </option>
            <option className="py-[5px] text-[14px]" value="Chittagong">
              Chittagong
            </option>
            <option className="py-[5px] text-[14px]" value="Comilla">
              Comilla
            </option>
            <option className="py-[5px] text-[14px]" value="Faridpur">
              Faridpur
            </option>
            <option className="py-[5px] text-[14px]" value="Jessore">
              Jessore
            </option>
            <option className="py-[5px] text-[14px]" value="Khulna">
              Khulna
            </option>
            <option className="py-[5px] text-[14px]" value="Mymensingh">
              Mymensingh
            </option>
            <option className="py-[5px] text-[14px]" value="Noakhali">
              Noakhali
            </option>
            <option className="py-[5px] text-[14px]" value="Pabna">
              Pabna
            </option>
            <option className="py-[5px] text-[14px]" value="Rajshahi">
              Rajshahi
            </option>
            <option className="py-[5px] text-[14px]" value="Sylhet">
              Sylhet
            </option>
            <option className="py-[5px] text-[14px]" value="Bagerhat">
              Bagerhat
            </option>
            <option className="py-[5px] text-[14px]" value="Bandarban">
              Bandarban
            </option>
            <option className="py-[5px] text-[14px]" value="Barguna">
              Barguna
            </option>
            <option className="py-[5px] text-[14px]" value="Bhola">
              Bhola
            </option>
            <option className="py-[5px] text-[14px]" value="Bogra">
              Bogra
            </option>
            <option className="py-[5px] text-[14px]" value="Brahmanbaria">
              Brahmanbaria
            </option>
            <option className="py-[5px] text-[14px]" value="Chandpur">
              Chandpur
            </option>
            <option className="py-[5px] text-[14px]" value="Chapai Nawabganj">
              Chapai Nawabganj
            </option>
            <option className="py-[5px] text-[14px]" value="Chuadanga">
              Chuadanga
            </option>
            <option className="py-[5px] text-[14px]" value="Cox's Bazar">
              Cox's Bazar
            </option>
            <option className="py-[5px] text-[14px]" value="Dinajpur">
              Dinajpur
            </option>
            <option className="py-[5px] text-[14px]" value="Feni">
              Feni
            </option>
            <option className="py-[5px] text-[14px]" value="Gaibandha">
              Gaibandha
            </option>
            <option className="py-[5px] text-[14px]" value="Gazipur">
              Gazipur
            </option>
            <option className="py-[5px] text-[14px]" value="Gopalganj">
              Gopalganj
            </option>
            <option className="py-[5px] text-[14px]" value="Habiganj">
              Habiganj
            </option>
            <option className="py-[5px] text-[14px]" value="Jamalpur">
              Jamalpur
            </option>
            <option className="py-[5px] text-[14px]" value="Jhalokati">
              Jhalokati
            </option>
            <option className="py-[5px] text-[14px]" value="Jhenaidah">
              Jhenaidah
            </option>
            <option className="py-[5px] text-[14px]" value="Joypurhat">
              Joypurhat
            </option>
            <option className="py-[5px] text-[14px]" value="Khagrachari">
              Khagrachari
            </option>
            <option className="py-[5px] text-[14px]" value="Kishoreganj">
              Kishoreganj
            </option>
            <option className="py-[5px] text-[14px]" value="Kurigram">
              Kurigram
            </option>
            <option className="py-[5px] text-[14px]" value="Kushtia">
              Kushtia
            </option>
            <option className="py-[5px] text-[14px]" value="Lakshmipur">
              Lakshmipur
            </option>
            <option className="py-[5px] text-[14px]" value="Lalmonirhat">
              Lalmonirhat
            </option>
            <option className="py-[5px] text-[14px]" value="Madaripur">
              Madaripur
            </option>
            <option className="py-[5px] text-[14px]" value="Magura">
              Magura
            </option>
            <option className="py-[5px] text-[14px]" value="Manikganj">
              Manikganj
            </option>
            <option className="py-[5px] text-[14px]" value="Meherpur">
              Meherpur
            </option>
            <option className="py-[5px] text-[14px]" value="Moulvibazar">
              Moulvibazar
            </option>
            <option className="py-[5px] text-[14px]" value="Munshiganj">
              Munshiganj
            </option>
            <option className="py-[5px] text-[14px]" value="Naogaon">
              Naogaon
            </option>
            <option className="py-[5px] text-[14px]" value="Narail">
              Narail
            </option>
            <option className="py-[5px] text-[14px]" value="Narayanganj">
              Narayanganj
            </option>
            <option className="py-[5px] text-[14px]" value="Narsingdi">
              Narsingdi
            </option>
            <option className="py-[5px] text-[14px]" value="Natore">
              Natore
            </option>
            <option className="py-[5px] text-[14px]" value="Nawabganj">
              Nawabganj
            </option>
            <option className="py-[5px] text-[14px]" value="Netrokona">
              Netrokona
            </option>
            <option className="py-[5px] text-[14px]" value="Nilphamari">
              Nilphamari
            </option>
            <option className="py-[5px] text-[14px]" value="Panchagarh">
              Panchagarh
            </option>
            <option className="py-[5px] text-[14px]" value="Patuakhali">
              Patuakhali
            </option>
            <option className="py-[5px] text-[14px]" value="Pirojpur">
              Pirojpur
            </option>
            <option className="py-[5px] text-[14px]" value="Rajbari">
              Rajbari
            </option>
            <option className="py-[5px] text-[14px]" value="Rangamati">
              Rangamati
            </option>
            <option className="py-[5px] text-[14px]" value="Sherpur">
              Sherpur
            </option>
            <option className="py-[5px] text-[14px]" value="Sirajganj">
              Sirajganj
            </option>
            <option className="py-[5px] text-[14px]" value="Sunamganj">
              Sunamganj
            </option>
            <option className="py-[5px] text-[14px]" value="Tangail">
              Tangail
            </option>
            <option className="py-[5px] text-[14px]" value="Thakurgaon">
              Thakurgaon
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
            <option className="py-[5px] text-[14px]" value="Pending">
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
      </div>
    </div>
  );
};

export default Model;
