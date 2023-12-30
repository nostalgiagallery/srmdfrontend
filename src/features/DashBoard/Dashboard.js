import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  UpdateOneDataAsync,
  fetchAllDataAsync,
  selectAllData,
  selectStatus,
} from "./DashboardSlice";

export default function DashBoard() {
  const initialData = useSelector(selectAllData);
  const Status = useSelector(selectStatus);
  const [activeStatus, setActiveStatus] = useState("all");
  const [EditableOrderId, setEditableOrderId] = useState(-1);
  const dispatch = useDispatch();
  const statusButtons = ["all", "unpaid", "processing", "shipped", "review"];

  const handleStatusFilter = (status) => {
    setActiveStatus(status);
  };

  const toggleEditStatus = (id) => {
    if (EditableOrderId === id) {
      setEditableOrderId(-1);
    } else {
      setEditableOrderId(id);
    }
  };

  const handleStatusChange = (item, newStatus) => {
    const UpdatedOrder = { ...item, status: newStatus };
    dispatch(UpdateOneDataAsync(UpdatedOrder));
    setEditableOrderId(-1);
  };

  useEffect(() => {
    dispatch(fetchAllDataAsync(activeStatus));
  }, [dispatch, activeStatus, EditableOrderId]);

  return (
    <section className="h-screen">
      <div className="bg-white h-3/4 mt-2 m-4 border rounded-lg border-black shadow-lg shadow-black w-full">
        <div className="p-2 flex  ">
          {statusButtons.map((status, index) => (
            <button
              key={index}
              className={`px-1 md:px-4 py-1 md:py-2 rounded mr-2 ${
                activeStatus === status
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleStatusFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>
        {Status === "loading" ? (
          <div className="flex items-center justify-center mt-5">
            <h2
              className="w-12 h-12 rounded-full animate-spin
          border border-solid border-blue-500 border-t-transparent"
            >
              {" "}
            </h2>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Product Name</th>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Order Details</th>
                  <th className="px-4 py-2">SKU ID</th>
                  <th className="px-4 py-2">Store</th>
                  <th className="px-4 py-2">User ID</th>
                  <th className="px-4 py-2">¥</th>
                  <th className="px-4 py-2">Unit Price</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Total Price</th>
                  <th className="px-4 py-2">Mode</th>
                  <th className="px-4 py-2">Order Date</th>
                  <th className="px-4 py-2">Order Details</th>
                </tr>
              </thead>
              <tbody>
                {!Array.isArray(initialData) || initialData?.length === 0 ? (
                  <tr>
                    <td colSpan="13" className="text-center py-4">
                      <h1>No Data Found</h1>
                    </td>
                  </tr>
                ) : (
                  initialData?.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="px-4 py-2">{item.productName}</td>
                      <td className="px-4 py-2">
                        <img
                          src={item.image}
                          alt="Product"
                          className="h-10 w-10"
                        />
                      </td>
                      <td className="px-4 py-2">{item.orderDetails}</td>
                      <td className="px-4 py-2">{item.skuId}</td>
                      <td className="px-4 py-2">{item.store}</td>
                      <td className="px-4 py-2">{item.id}</td>
                      <td className="px-4 py-2">{item.currency}</td>
                      <td className="px-4 py-2">{item.unitPrice}</td>
                      <td className="px-4 py-2">{item.quantity}</td>
                      <td className="px-4 py-2">{item.totalPrice}</td>
                      <td className="px-4 py-2">{item.mode}</td>
                      <td className="px-4 py-2">{item.orderDate}</td>
                      <td className="px-4 py-2">
                        {item.id !== EditableOrderId ? (
                          <button
                            className="bg-green-500 text-white px-4 py-1 rounded"
                            onClick={() => toggleEditStatus(item.id)}
                          >
                            Edit
                          </button>
                        ) : (
                          <div className="flex flex-col gap-1">
                            <select
                              value={item.status}
                              onChange={(e) =>
                                handleStatusChange(item, e.target.value)
                              }
                            >
                              {statusButtons.map((status, idx) => (
                                <option key={idx} value={status}>
                                  {status}
                                </option>
                              ))}
                            </select>
                            <button
                              className="bg-red-500 text-white px-2 py-1 rounded"
                              onClick={() => toggleEditStatus(-1)}
                            >
                              Cancel
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
