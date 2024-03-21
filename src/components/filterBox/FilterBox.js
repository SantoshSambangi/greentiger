import React from "react";
import "../filterBox/filterBox.css";
import { VscSearch } from "react-icons/vsc";
import { CiEraser } from "react-icons/ci";
import { FilterData } from "../../data/FilterData";
const FilterBox = (props) => {
  const { title, label } = props;

  return (
    <div className="filterBox">
      <div className="filterTitle">
        <span className="">{title}</span>
        <span>
          <CiEraser />
        </span>
      </div>

      <div className="filterSearch">
        <VscSearch size={20} />
        <input type="text" size="10" placeholder="Search.." />
      </div>

      <div className="filterCheck">
        {/* {FilterData && FilterData.map((item, index) => (
          <div key={index}>
            {item.options.map((option, idx) => (
              <div key={idx}>
                <input type="checkbox" />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
        ))} */}
        <input type="checkbox" />
        <label>{label}</label>
      </div>

      <div>
        <input type="checkbox" />
        <label>{label}</label>
      </div>
      <div>
        <input type="checkbox" />
        <label>{label}</label>
      </div>
    </div>
  );
};

export default FilterBox;
