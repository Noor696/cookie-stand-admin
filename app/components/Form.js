"use client";

import React from "react";
import { useState } from "react";
import Table from "./Table";

export default function Form(props) {
  // States
  const [userLocation, setUserLocation] = useState("");
  const [Minimum, setMinimum] = useState("");
  const [Maximum, setMaximum] = useState("");
  const [Average, setAverage] = useState("");
  const [fullReplyState, setFullReplyState] = useState([]);
  const [tableshow, setTableShow] = useState(false);

  const handlelocation = (e) => {
    setUserLocation(e.target.value);
  };

  const HandelMinimum = (e) => {
    setMinimum(e.target.value);
  };

  const HandelMaximum = (e) => {
    setMaximum(e.target.value);
  };

  const HandelAverage = (e) => {
    setAverage(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const userInput = {
      location: userLocation,
      Minimum: Minimum,
      Maximum: Maximum,
      Average: Average,
    };
    console.log(userInput);

    // keep the old values and save the new one using *spread operator*
    // if you want to assign the object by value -> use (... & the name of the object)
    // this is spread operator
    setFullReplyState([...fullReplyState, userInput]);
  };
  const handleShow = () => {
    setTableShow(true);
  };

  return (
    <>
      <section>
        <div className="dark:bg-black min-h-screen py-20">
          <div className="container mx-auto">
            <div className="dark:bg-slate-700 flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-yellow-50 rounded-xl mx-auto shadow-lg overflow-hidden">
              <div className="w-full flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center">
                <h1 className="dark:text-white text-black text-2xl mb-3">Welcome</h1>

                <div className="w-full lg:w-1/2 py-16 px-12">
                  <h2 className="text-2xl mb-4 dark:text-white">Create Cookie Stand</h2>
                  <form onSubmit={onSubmitHandler}>
                    <div className="grid grid-cols-2 gap-5">
                      <label
                        for="Location"
                        className="pr-3 mb-2 font-bold text-gray-800 dark:text-white"
                      >
                        Location :
                      </label>
                      <input
                        onChange={handlelocation}
                        id="location"
                        name="location"
                        type="text"
                        placeholder="Enter Location"
                        className="border border-red-400 py-1 px-2"
                      />
                    </div>

                    <div class="mt-5">
                      <label
                        for="MinimumC"
                        className="pr-3 mb-2 font-bold text-gray-800 dark:text-white"
                      >
                        Minimum Customers Per Hour :
                      </label>
                      <input
                        type="text"
                        onChange={HandelMinimum}
                        id="minCustomerPerHour"
                        name="minCustomerPerHour"
                        placeholder="Minimum Customers Per Hour"
                        className="border border-red-400 py-1 px-2 w-full"
                      />
                    </div>

                    <div class="mt-5">
                      <label
                        for="MaximumC"
                        className="pr-3 mb-2 font-bold text-gray-800 dark:text-white"
                      >
                        Maximum Customers Per Hour :
                      </label>
                      <input
                        type="text"
                        onChange={HandelMaximum}
                        id="maxCustomerPerHour"
                        name="maxCustomerPerHour"
                        placeholder="Maximum Customers Per Hour"
                        className="border border-red-400 py-1 px-2 w-full"
                      />
                    </div>

                    <div class="mt-5">
                      <label
                        for="AverageCn"
                        className="pr-3 mb-2 font-bold text-gray-800 dark:text-white"
                      >
                        Average Cookies Per Sale :
                      </label>
                      <input
                        type="text"
                        onChange={HandelAverage}
                        id="avgCookiesPerSale"
                        name="avgCookiesPerSale"
                        placeholder="Average Cookies Per Sale"
                        className="border border-red-400 py-1 px-2 w-full"
                      />
                    </div>

                    <div class="mt-5">
                      <button
                        class="w-full bg-red-400 py-3 text-center text-white dark:bg-slate-500"
                        type="submit"
                      >
                        Create !
                      </button>
                    </div>
                    <div class="mt-5">
                      <button
                        class="w-full bg-red-400 py-3 text-center text-white dark:bg-slate-500"
                        type="button"
                        onClick={handleShow}
                      >
                        Overview !
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* result section */}
      {/* render array of object by using map */}
      <section className="w-full pt-10 text-center shadow-lg shadow-black-50">
        {fullReplyState.length > 0 &&
          fullReplyState.map((item, index) => {
            return (
              <div>
                <div class="dark:bg-black relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table class="w-full text-sm text-left text-red-100 dark:text-red-100 dark:bg-black">
                    <thead class="text-xs text-white uppercase bg-red-400 border-b border-gray-400 dark:text-white dark:bg-black">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          Location
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Min Customers
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Max Customers
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Avg Cookies
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-yellow-50 border-b border-blue-400 hover:bg-yellow-100">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-red-400 whitespace-nowrap dark:text-red-400"
                        >
                          {item.location}
                        </th>
                        <td class="px-6 py-4 text-red-400">{item.Minimum}</td>
                        <td class="px-6 py-4 text-red-400">{item.Maximum}</td>
                        <td class="px-6 py-4 text-red-400">{item.Average}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
      </section>
      {tableshow && <Table />}
    </>
  );
}
