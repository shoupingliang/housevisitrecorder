import React, { useState } from "react";
import {v4} from  'uuid';

const Edit = ({ add, submittingStatus }) => {
  const [location, setLocation] = useState("");

  function locationChange(e) {
    setLocation(e.target.value);
  }
  const [date, setDate] = useState("");

  function dateChange(e) {
    setDate(e.target.value);
  }
  const [time, setTime] = useState("");

  function timeChange(e) {
    setTime(e.target.value);
  }
  const [price, setPrice] = useState("");

  function priceChange(e) {
    setPrice(e.target.value);
  }
  const [achieved, setAchieved] = useState("");

  function achievedChange(e) {
    setAchieved(e.target.value);
  }

  console.log(date, time, achieved, price);

  function addItem() {
    submittingStatus.current = true
    add(function (prevData) {
      return [
        {
          id: v4(),
          location,
          date,
          time,
          price,
          achieved,
        },
        ...prevData,
      ];
    });
  }

  return (
    <div>
      <h1>看房筆記</h1>
      <p>物件區位：</p>
      <input type="text" value={location} onChange={locationChange} />
      <p>日期：</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>時間：</p>
      <input type="time" value={time} onChange={timeChange} />
      <p>出價（萬）：</p>
      <input type="number" value={price} onChange={priceChange} />
      <p>是否收斡：</p>
      <input type="checkbox" value={achieved} onChange={achievedChange} />
      <button className="add" onClick={addItem}>
        新增
      </button>
    </div>
  );
};

export default Edit;
