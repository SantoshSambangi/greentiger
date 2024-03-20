import React from 'react';
import '../filterBox/filterBox.css';
import { VscSearch } from "react-icons/vsc";
import { CiEraser } from "react-icons/ci";

const FilterBox = (props) => {

    const {title} = props;

  return (
    
        <div className="filterBox">
            <div className="filterTitle">
                <span className=''>{title}</span>
                <span><CiEraser/></span>
            </div>

            <div className="filterSearch">
                <VscSearch size={20} />
                <input type="text" size="10" placeholder="Search.." />
            </div>

            <div className="filterCheck">
                <input type="checkbox" />
                <input type="checkbox" />
            </div>
        </div>
  )
}

export default FilterBox;