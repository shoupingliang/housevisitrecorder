import React from "react";

const Item = ({ location, date, time, price, achieved, deleteData, id, submittingStatus }) => {
    function deleteItem() {
        submittingStatus.current = true
        deleteData(function(prev) {
            return prev.filter(item => item.id !== id)
        })
    }


    return (
    <div className="item">
      <p>{location}</p>
      <p>{`${date} ${time}`}</p>
      <p>{price}</p>
      <p>{achieved ? "Yes" : "No"}</p>
      <button type="button" className="remove" onClick={deleteItem}>
        刪除
      </button>
    </div>
  );
};

export default Item;
