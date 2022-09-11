import React from "react";
import "./order-detail.css";
import { FiRefreshCcw } from "react-icons/fi";
import { TiArrowUnsorted } from "react-icons/ti";
import {
  AiOutlineImport,
  AiOutlinePrinter,
  AiOutlineFilter,
} from "react-icons/ai";
import { BiSend } from "react-icons/bi";
import { GrFormSearch } from "react-icons/gr";
import {
  MdOutlineKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

const Orderdetail = () => {
  const orderList = [
    {
      img: "data:image/png;base64,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",
      orderNo: "#TKN20203754",
      orderDate: "2022-05-04",
      city: "Lucknow",
      customerName: "Abhishek Dixit",
      orderValue: "0.00",
      Status: "Pending",
      operation: "Actions",
    },
    {
      img: "data:image/png;base64,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",
      orderNo: "#TKN20203754",
      orderDate: "2022-05-04",
      city: "Lucknow",
      customerName: "Abhishek Dixit",
      orderValue: "0.00",
      Status: "Pending",
      operation: "Actions",
    },
    {
      img: "data:image/png;base64,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",
      orderNo: "#TKN20203754",
      orderDate: "2022-05-04",
      city: "Lucknow",
      customerName: "Abhishek Dixit",
      orderValue: "0.00",
      Status: "Pending",
      operation: "Actions",
    },
  ];

  return (
    <div className="orders-container">
      <div className="orders-btn-contain">
        <div className="section3">
          <button className="order-btn importBtn">
            <AiOutlineImport /> Import orders
          </button>
          <button className="order-btn ">
            {" "}
            <BiSend /> Accept
          </button>
          <button className="order-btn ">
            {" "}
            <AiOutlinePrinter /> Print <MdOutlineKeyboardArrowDown />
          </button>
        </div>
        <div>
          <button className="refresh-btn">
            <span className="refreshIcon">
              <FiRefreshCcw />
            </span>{" "}
            Refresh
          </button>
        </div>
      </div>
      <section className="section4">
        <div>
          <input type="checkbox" />
        </div>
        <div
          style={{
            width: "7rem",
            borderRight: "1px solid rgb(209, 202, 202)",
            paddingRight: "0.5rem",
          }}
        >
          <p>
            Channel <TiArrowUnsorted/> <AiOutlineFilter />
          </p>
        </div>
        <div
          style={{
            width: "8rem",
            borderRight: "1px solid rgb(209, 202, 202)",
            paddingRight: "0.5rem",
          }}
        >
          <p>
            Order No  <TiArrowUnsorted/> <GrFormSearch />
          </p>
        </div>
        <div
          style={{
            width: "9rem",
            borderRight: "1px solid rgb(209, 202, 202)",
            paddingRight: "0.5rem",
          }}
        >
          <p>
            Order Date  <TiArrowUnsorted/> <GrFormSearch />
          </p>
        </div>
        <div
          style={{
            width: "5rem",
            borderRight: "1px solid rgb(209, 202, 202)",
            paddingRight: "0.5rem",
          }}
        >
          <p>City  <TiArrowUnsorted/></p>
        </div>
        <div
          style={{
            width: "10rem",
            borderRight: "1px solid rgb(209, 202, 202)",
            paddingRight: "0.2rem",
          }}
        >
          <p>
            Customer Name <GrFormSearch />
          </p>
        </div>
        <div
          style={{
            width: "4rem",
            borderRight: "1px solid rgb(209, 202, 202)",
            paddingRight: "0.5rem",
          }}
        >
          <p>Order Value  <TiArrowUnsorted/></p>
        </div>
        <div
          style={{
            width: "5rem",
            borderRight: "1px solid rgb(209, 202, 202)",
            paddingRight: "0.5rem",
          }}
        >
          <p>Status  <TiArrowUnsorted/></p>
        </div>
        <div
          style={{
            marginLeft: "0.7rem",
            borderRight: "1px solid rgb(209, 202, 202)",
            paddingRight: "0.5rem",
          }}
        >
          <p>operation</p>
        </div>
      </section>
      <section className="list-container">
        {orderList.map(
          ({
            img,
            orderNo,
            orderDate,
            city,
            customerName,
            orderValue,
            Status,
            operation,
          }) => (
            <div className="section5">
              <div>
                <p>+</p>
              </div>
              <div>
                <input type="checkbox" />
              </div>
              <div style={{ width: "4.3rem" }}>
                <img src={img} width="30rem" alt={customerName} />
              </div>
              <div style={{ width: "5rem", marginLeft: "3rem" }}>
                <p style={{ color: "rgb(48, 60, 238)" }}>{orderNo}</p>
              </div>
              <div style={{ width: "8rem", marginLeft: "3rem" }}>
                <p>{orderDate}</p>
              </div>
              <div style={{ width: "5rem" }}>
                <p>{city}</p>
              </div>
              <div style={{ width: "8rem", marginLeft: "1rem" }}>
                <p>{customerName}</p>
              </div>
              <div style={{ width: "1rem", marginLeft: "2rem" }}>
                <p>{orderValue}</p>
              </div>
              <div style={{ width: "5rem", marginLeft: "3rem" }}>
                <button style={{ padding: "0.1rem", color: "green" }}>
                  {Status}
                </button>
              </div>
              <div style={{ width: "5rem", marginLeft: "0.2rem" }}>
                <p
                  style={{
                    padding: "0.3rem",
                    border: "1px solid",
                    fontSize: "0.9rem",
                  }}
                >
                  {operation} <MdOutlineKeyboardArrowDown />
                </p>
              </div>
            </div>
          )
        )}
      </section>
      <div className="paginaton">
        <button disabled className="arrowBtn">
          <MdKeyboardArrowLeft />
        </button>
        <p className="count">1</p>
        <button disabled className="arrowBtn">
          <MdKeyboardArrowRight />
        </button>
        <button className="pagesBtn">
          20/page <MdOutlineKeyboardArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Orderdetail;
