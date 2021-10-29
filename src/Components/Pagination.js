import React from "react";
import "./Pagination.css";
function Custompagination({ handleprev, handlenext, pagenumber, totalpage }) {
  return (
    <div className="paginate">
      <p>
        page {pagenumber} of {totalpage}
      </p>
      <div className="btn-holder">
        <div onClick={handleprev} className="next-btn">
          &lt;
        </div>
        <div className="next-btn" onClick={handlenext}>
          &gt;
        </div>
      </div>
    </div>
  );
}

export default Custompagination;
