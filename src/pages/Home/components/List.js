import React from "react";
import Item from "./Item";

const List = ({ listData, deleteData, submittingStatus }) => {
  console.log(listData);
  return (
    <div className="list">
      {listData.map((item) => {
        const { location, date, time, achieved, price, id } = item;
        return (
          <Item
            key={id}
            id={id}
            location={location}
            date={date}
            time={time}
            achieved={achieved}
            price={price}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};

export default List;
