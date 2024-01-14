import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllDataAsync,
  selectAllData,
  selectStatus,
} from "../DashBoard/DashboardSlice";

// const faqData = [
//   {
//     question: "Sadguru Udghosh,Dharampur",
//     time: "Sun, 3rd sep - Tue, 9th sep",
//     imageLink:
//       "https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2024/01/SRMD-Ashram-Web.jpg",
//     status: "confirmed",
//     formid: "S2383774484",
//     ArrivalDate: "23 Oct 2023",
//     DepartureDate: "27 Oct 2023",
//   },
//   {
//     question: "Sadguru Udghosh,Dharampur",
//     time: "Sun, 3rd sep - Tue, 9th sep",
//     imageLink:
//       "https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2024/01/SRMD-Ashram-Web.jpg",
//     status: "pending",
//     formid: "S23837747585",
//     ArrivalDate: "3rd sep 2023",
//     DepartureDate: "9th sep 2023",
//   },
// ];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const Status = useSelector(selectStatus);
  const [filter, setFilter] = useState("all");
  const faqData = useSelector(selectAllData);
  const dispatch = useDispatch();
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredData = faqData.filter((faq) => {
    if (filter === "all") {
      return true;
    } else {
      return faq.status.toLowerCase() === filter;
    }
  });

  useEffect(() => {
    dispatch(fetchAllDataAsync());
  }, [dispatch]);

  return (
    <>
      {Status === "loading" ? (
        <div className="flex items-center justify-center mt-10">
          <h2 className="w-12 h-12 rounded-full animate-spin border border-solid border-yellow-500 border-t-transparent"></h2>
        </div>
      ) : (
        <div className="w-full mx-auto mt-5 ">
          <div className="md:ml-3 p-4 md:p-1 flex w-full items-center justify-between gap-1 md:justify-start ">
            <button
              className={`filter-button ${
                filter === "all" ? "active bg-yellow-500 color-white" : ""
              } bg-white border border-yellow-700 text-yellow-700 px-4 py-2 flex items-center justify-center md:justify-between gap-2 hover:bg-yellow-600 hover:text-white transition-all duration-300 rounded-md`}
              onClick={() => setFilter("all")}
            >
              <span className="font-semibold">All</span>
            </button>
            <button
              className={`filter-button ${
                filter === "confirmed" ? "active bg-yellow-500 color-white" : ""
              } bg-white border border-yellow-700 text-yellow-700 px-4 py-2 flex items-center justify-center md:justify-between gap-2 hover:bg-yellow-600 hover:text-white transition-all duration-300 rounded-md`}
              onClick={() => setFilter("confirmed")}
            >
              <span className="font-semibold">Confirmed</span>
            </button>
            <button
              className={`filter-button ${
                filter === "pending" ? "active bg-yellow-500 color-white" : ""
              } bg-white border border-yellow-700 text-yellow-700 px-4 py-2 flex items-center justify-center md:justify-between gap-2 hover:bg-yellow-600 hover:text-white transition-all duration-300 rounded-md`}
              onClick={() => setFilter("pending")}
            >
              <span className="font-semibold">Pending</span>
            </button>
          </div>

          {filteredData.map((faq, index) => (
            <div
              key={index}
              className=" max-h-auto bg-white p-2 md:p-4 mb-2 rounded-lg shadow-md m-1 md:m-3"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex flex-col text-start">
                  <h3 className="text-lg font-semibold text-yellow-800">
                    {faq.question}
                  </h3>
                  <h3 className="text-sm font-semibold text-yellow-600">
                    {faq.time}
                  </h3>
                </div>

                <span
                  className={`${
                    openIndex === index ? "-rotate-180" : "rotate-0"
                  } transition-transform duration-300 text-xl`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-yellow-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </div>
              {openIndex === index && (
                <div className=" bg-white  flex flex-col gap-2">
                  <img
                    className="w-full m-1 md:h-80 rounded-md bg-gray-50 mt-2 object-cover bg-cover"
                    src={faq.imageLink}
                    alt=""
                  />

                  <button class="bg-white border border-yellow-700 text-yellow-700 px-4 py-2 flex items-center justify-center md:justify-between gap-2 hover:bg-yellow-600 hover:text-white transition-all duration-300 rounded-md">
                    <span className="font-bold">View More Details</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class=" w-6 h-6 "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                  <div className="flex w-full items-center justify-between gap-1 md:justify-start ">
                    <button class="bg-white border border-yellow-700 text-yellow-700 px-4 py-2 flex items-center justify-center md:justify-between gap-2 hover:bg-yellow-600 hover:text-white transition-all duration-300 rounded-md">
                      <span className="font-bold">Make Payments</span>
                    </button>
                    <button class="bg-white border border-yellow-700 text-yellow-700 px-4 py-2 flex items-center justify-center md:justify-between gap-2 hover:bg-yellow-600 hover:text-white transition-all duration-300 rounded-md">
                      <span className="font-bold">Request For Stay</span>
                    </button>
                  </div>
                  <div className="bg-gray-200 w-full overflow-y-scroll flex gap-3 ">
                    <div className="m-1 w-2/3 bg-white md:w-1/5  rounded-md mt-2">
                      <div className="p-1 m-1 flex gap-0 md:gap-4 items-center justify-center">
                        <img
                          className="rounded-md h-12 w-10 md:w-12 p-1 md:p-0.5 flex-none  bg-gray-50"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <p className="text-gray-700 text-sm md:text-md font-bold ">
                          Jitendra sahu
                        </p>
                        <span className="transition-transform duration-300 text-xl rotate-90">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-8 h-8 text-gray-500"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M5 12h14"
                            />
                          </svg>
                        </span>
                        <p className="text-yellow-700 font-bold text-sm md:text-md">
                          M ,21
                        </p>
                      </div>
                      <div className="p-1 m-1 flex gap-4 items-center justify-center">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYKPrBsldPoqG4srkYBlE2Lf0A4zhhUdgCBfGB3Xdv6XW7DY2bOGKexeW6_2-_mWwi_Q&usqp=CAU"
                          alt="Scanner"
                          class="w-42 h-42 object-cover"
                        />
                      </div>
                      <div className="mx-10 text-start flex flex-col space-x-0">
                        <span className="text-sm font-semibold text-green-800">
                          Ever:Satsang shibir-3
                        </span>
                        <span className="text-sm font-semibold text-green-800">
                          Swayambhustobra
                        </span>
                        <span className="text-sm font-semibold text-green-800">
                          Name:Jitendra sahu
                        </span>
                      </div>
                      <div className="flex mt-5 justify-center items-center">
                        <div class="w-6 h-12 bg-gray-200 rounded-r-full"></div>

                        {Array.from({ length: 17 }, (_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 12h12"
                            />
                          </svg>
                        ))}
                        <div class="w-6 h-12 bg-gray-200 rounded-l-full"></div>
                      </div>
                      <div className="p-1 bg-white   rounded-b-md mt-2">
                        <div className="flex  justify-around">
                          <span className="text-gray-700 font-semibold">
                            Status
                          </span>
                          <span className="text-gray-700 font-semibold">
                            Form No.
                          </span>
                        </div>
                        <div className="flex  justify-evenly gap-2">
                          <span
                            className={`text-gray-700 font-semibold flex gap-1 items-center ${
                              faq.status === "confirmed"
                                ? "text-green-600"
                                : "text-orange-600"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              class="w-5 h-5 "
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <span>{faq.status}</span>
                          </span>
                          <span className="text-gray-700 font-semibold">
                            {faq.formid}
                          </span>
                        </div>

                        <div className="flex justify-around mt-3">
                          <span className="text-gray-700 font-semibold">
                            Stay
                          </span>
                          <span className="invisible text-gray-700 font-semibold">
                            Stay rrtjh
                          </span>
                        </div>
                        <div className="flex  justify-evenly gap-2 font-semibold text-yellow-600">
                          Domitory-Non Ac{" "}
                          <span className="hidden md:block">
                            (Max-4piece..)
                          </span>
                        </div>

                        <div className="flex  justify-around mt-3 ">
                          <span className="text-gray-700 font-semibold">
                            Arrival Date
                          </span>
                          <span className="text-gray-700 font-semibold">
                            Departure Date
                          </span>
                        </div>
                        <div className="flex  justify-around gap-4 pb-5">
                          <span className="text-gray-700 font-semibold flex gap-1 items-center text-yellow-600">
                            <span>{faq.ArrivalDate}</span>
                          </span>
                          <span className="text-gray-700 font-semibold">
                            {faq.DepartureDate}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="m-1 w-2/3 bg-white md:w-1/5  rounded-md mt-2">
                      <div className="p-1 m-1 flex gap-0 md:gap-4 items-center justify-center">
                        <img
                          className="rounded-md h-12 w-10 md:w-12 p-1 md:p-0.5 flex-none  bg-gray-50"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <p className="text-gray-700 text-sm md:text-md font-bold ">
                          Jitendra sahu
                        </p>
                        <span className="transition-transform duration-300 text-xl rotate-90">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-8 h-8 text-gray-500"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M5 12h14"
                            />
                          </svg>
                        </span>
                        <p className="text-yellow-700 font-bold text-sm md:text-md">
                          M ,21
                        </p>
                      </div>
                      <div className="p-1 m-1 flex gap-4 items-center justify-center">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYKPrBsldPoqG4srkYBlE2Lf0A4zhhUdgCBfGB3Xdv6XW7DY2bOGKexeW6_2-_mWwi_Q&usqp=CAU"
                          alt="Scanner"
                          class="w-42 h-42 object-cover"
                        />
                      </div>
                      <div className="mx-10 text-start flex flex-col space-x-0">
                        <span className="text-sm font-semibold text-green-800">
                          Ever:Satsang shibir-3
                        </span>
                        <span className="text-sm font-semibold text-green-800">
                          Swayambhustobra
                        </span>
                        <span className="text-sm font-semibold text-green-800">
                          Name:Jitendra sahu
                        </span>
                      </div>
                      <div className="flex mt-5 justify-center items-center">
                        <div class="w-6 h-12 bg-gray-200 rounded-r-full"></div>

                        {Array.from({ length: 17 }, (_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 12h12"
                            />
                          </svg>
                        ))}
                        <div class="w-6 h-12 bg-gray-200 rounded-l-full"></div>
                      </div>
                      <div className="p-1 bg-white   rounded-b-md mt-2">
                        <div className="flex  justify-around">
                          <span className="text-gray-700 font-semibold">
                            Status
                          </span>
                          <span className="text-gray-700 font-semibold">
                            Form No.
                          </span>
                        </div>
                        <div className="flex  justify-evenly gap-2">
                          <span
                            className={`text-gray-700 font-semibold flex gap-1 items-center ${
                              faq.status === "confirmed"
                                ? "text-green-600"
                                : "text-orange-600"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              class="w-5 h-5 "
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <span>{faq.status}</span>
                          </span>
                          <span className="text-gray-700 font-semibold">
                            {faq.formid}
                          </span>
                        </div>

                        <div className="flex justify-around mt-3">
                          <span className="text-gray-700 font-semibold">
                            Stay
                          </span>
                          <span className="invisible text-gray-700 font-semibold">
                            Stay rrtjh
                          </span>
                        </div>
                        <div className="flex  justify-evenly gap-2 font-semibold text-yellow-600">
                          Domitory-Non Ac (Max-4piece..)
                        </div>

                        <div className="flex  justify-around mt-3 ">
                          <span className="text-gray-700 font-semibold">
                            Arrival Date
                          </span>
                          <span className="text-gray-700 font-semibold">
                            Departure Date
                          </span>
                        </div>
                        <div className="flex  justify-around gap-4 pb-5">
                          <span className="text-gray-700 font-semibold flex gap-1 items-center text-yellow-600">
                            <span>{faq.ArrivalDate}</span>
                          </span>
                          <span className="text-gray-700 font-semibold">
                            {faq.DepartureDate}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="m-1 w-2/3 bg-white md:w-1/5  rounded-md mt-2">
                      <div className="p-1 m-1 flex gap-0 md:gap-4 items-center justify-center">
                        <img
                          className="rounded-md h-12 w-10 md:w-12 p-1 md:p-0.5 flex-none  bg-gray-50"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <p className="text-gray-700 text-sm md:text-md font-bold ">
                          Jitendra sahu
                        </p>
                        <span className="transition-transform duration-300 text-xl rotate-90">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-8 h-8 text-gray-500"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M5 12h14"
                            />
                          </svg>
                        </span>
                        <p className="text-yellow-700 font-bold text-sm md:text-md">
                          M ,21
                        </p>
                      </div>
                      <div className="p-1 m-1 flex gap-4 items-center justify-center">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYKPrBsldPoqG4srkYBlE2Lf0A4zhhUdgCBfGB3Xdv6XW7DY2bOGKexeW6_2-_mWwi_Q&usqp=CAU"
                          alt="Scanner"
                          class="w-42 h-42 object-cover"
                        />
                      </div>
                      <div className="mx-10 text-start flex flex-col space-x-0">
                        <span className="text-sm font-semibold text-green-800">
                          Ever:Satsang shibir-3
                        </span>
                        <span className="text-sm font-semibold text-green-800">
                          Swayambhustobra
                        </span>
                        <span className="text-sm font-semibold text-green-800">
                          Name:Jitendra sahu
                        </span>
                      </div>
                      <div className="flex mt-5 justify-center items-center">
                        <div class="w-6 h-12 bg-gray-200 rounded-r-full"></div>

                        {Array.from({ length: 17 }, (_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 12h12"
                            />
                          </svg>
                        ))}
                        <div class="w-6 h-12 bg-gray-200 rounded-l-full"></div>
                      </div>
                      <div className="p-1 bg-white   rounded-b-md mt-2">
                        <div className="flex  justify-around">
                          <span className="text-gray-700 font-semibold">
                            Status
                          </span>
                          <span className="text-gray-700 font-semibold">
                            Form No.
                          </span>
                        </div>
                        <div className="flex  justify-evenly gap-2">
                          <span
                            className={`text-gray-700 font-semibold flex gap-1 items-center ${
                              faq.status === "confirmed"
                                ? "text-green-600"
                                : "text-orange-600"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              class="w-5 h-5 "
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <span>{faq.status}</span>
                          </span>
                          <span className="text-gray-700 font-semibold">
                            {faq.formid}
                          </span>
                        </div>

                        <div className="flex justify-around mt-3">
                          <span className="text-gray-700 font-semibold">
                            Stay
                          </span>
                          <span className="invisible text-gray-700 font-semibold">
                            Stay rrtjh
                          </span>
                        </div>
                        <div className="flex  justify-evenly gap-2 font-semibold text-yellow-600">
                          Domitory-Non Ac (Max-4piece..)
                        </div>

                        <div className="flex  justify-around mt-3 ">
                          <span className="text-gray-700 font-semibold">
                            Arrival Date
                          </span>
                          <span className="text-gray-700 font-semibold">
                            Departure Date
                          </span>
                        </div>
                        <div className="flex  justify-around gap-4 pb-5">
                          <span className="text-gray-700 font-semibold flex gap-1 items-center text-yellow-600">
                            <span>{faq.ArrivalDate}</span>
                          </span>
                          <span className="text-gray-700 font-semibold">
                            {faq.DepartureDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          {filteredData.length === 0 && (
            <h3 className="text-md font-semibold text-yellow-600 p-10">
              No Registrations found
            </h3>
          )}
        </div>
      )}
    </>
  );
};

export default FAQ;
