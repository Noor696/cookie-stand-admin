import React from "react";
import { useState } from "react";



export default function Form(){

    // States
    const [userLocation, setUserLocation] = useState("");
    const [Minimum, setMinimum] = useState("");
    const [Maximum, setMaximum] = useState("");
    const [Average, setAverage] = useState("");
    const [fullReplyState, setFullReplyState] = useState([]);

    const handlelocation = (e) => {
        setUserLocation(e.target.value);
    }

    const HandelMinimum = (e) => {
        setMinimum(e.target.value);
    }

    const HandelMaximum = (e) => {
      setMaximum(e.target.value);
  }

  const HandelAverage = (e) => {
    setAverage(e.target.value);
}

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const userInput = {
            location : userLocation,
            Minimum: Minimum,
            Maximum: Maximum,
            Average: Average,
        }
        console.log(userInput)

        // keep the old values and save the new one using spread operator
        setFullReplyState([...fullReplyState,userInput])
    }

    return (
      <section>
        <div className="min-h-screen py-20">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
              <div className="w-full flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center">
                <h1 className="text-black text-2xl mb-3">Welcome</h1>
                <div>
                  <p className="text-black text-1xl">
                    <a href="#" className="text-purple-500 font-semibold">
                      Learn more
                    </a>
                  </p>
                </div>

                <div className="w-full lg:w-1/2 py-16 px-12">
                  <h2 className="text-2xl mb-4">Create Cookie Stand</h2>
                  <form onSubmit={onSubmitHandler}>
                    <div className="grid grid-cols-2 gap-5">
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
                      <input
                        type="text"
                        onChange={HandelMaximum}
                        id="maxCustomerPerHour"
                        name="maxCustomerPerHour"
                        placeholder="maximum Customers Per Hour"
                        className="border border-red-400 py-1 px-2 w-full"
                      />
                    </div>

                    <div class="mt-5">
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
                        class="w-full bg-red-400 py-3 text-center text-white"
                        type="submit"
                      >
                        Create !
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}



