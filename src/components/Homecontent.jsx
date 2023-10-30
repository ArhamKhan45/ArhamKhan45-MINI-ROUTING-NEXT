"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";

export const Allevent = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          router.push("/allevents");
        }}
      >
        All Event
      </button>
    </div>
  );
};

export const Findevent = ({ filtersetdata }) => {
  const [monthdata, setmonth] = useState("");
  const [yeardata, setyear] = useState("");

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const Yeardata = () => {
    let x = [];
    for (let i = 1950; i <= 2100; i++) {
      x.push(i);
    }

    const displayyear = x.map((item, index) => {
      return (
        <option value={item} key={index}>
          {item}
        </option>
      );
    });
    return displayyear;
  };

  const displaymonths = month.map((item, index) => {
    function getMonthNumberFromName(item) {
      return new Date(`${item} 1, 2000`).getMonth() + 1;
    }
    const num = getMonthNumberFromName(item);
    return (
      <option value={num} key={index}>
        {item}
      </option>
    );
  });
  const yearHandler = (event) => {
    setyear(event.target.value);
  };
  const MonthHandler = (event) => {
    setmonth(event.target.value);
  };

  return (
    <div className="custom-find-event">
      <div>
        <label htmlFor="">Year</label>
        <select name="" id="" onChange={yearHandler}>
          <option value="">Year</option>
          {Yeardata()}
        </select>
      </div>
      <div>
        <label htmlFor="">Months</label>
        <select name="" id="" onChange={MonthHandler}>
          <option value="">month</option>
          {displaymonths}
        </select>
      </div>
      <button
        onClick={() => {
          return filtersetdata(monthdata + " " + yeardata);
        }}
      >
        Find Event
      </button>
    </div>
  );
};
