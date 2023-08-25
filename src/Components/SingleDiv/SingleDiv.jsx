/* eslint-disable react/prop-types */
import SingleCard from "../SingleCard/SingleCard";
import { data } from "./data";

const SingleDiv = ({ style, title }) => {
    
  return (
    <div className={`${style.cardContent} p-2 me-3`}>
      {/* card header content section */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div
          className={`${style.title} ${
            title === "Incomplete"
              ? style.incomplete
              : title === "Todo"
              ? style.todo
              : title === "Doing"
              ? style.doing
              : ""
          }`}
        >
          <h6 className="m-0">{title}</h6>
        </div>
        <div>
          <h6 className={`m-0 bg-bg-white ${style.textHeader}`}>0</h6>
        </div>
      </div>
      {/* card header main content */}
      {data.map((data, i) => (
        <SingleCard key={i} style={style} data={data} />
      ))}
    </div>
  );
};

export default SingleDiv;
