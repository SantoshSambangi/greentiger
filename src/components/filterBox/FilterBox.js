import React, { useState } from "react";
import "../filterBox/filterBox.css";
import { VscSearch } from "react-icons/vsc";
import { CiEraser } from "react-icons/ci";

const FilterBox = (props) => {
    const { title, options, filterBmsData, setFilterBmsData, eraseAll } = props;
    const [searchQuery, setSearchQuery] = useState("");

    const handleCheckboxChange = (optionValue, name) => {
        setFilterBmsData((prevData) => {
            const updatedData = { ...prevData };
            if (prevData[name] === optionValue) {
                updatedData[name] = "";
            } else {
                updatedData[name] = optionValue;
            }
            return updatedData;
        });
    };

    const filteredOptions = options?.filter((option) =>
        option.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    
    return (
        <div className="filterBox">
            <div className="filterTitle">
                <span className="">{title}</span>
                <span onClick={eraseAll}>
                    <CiEraser />
                </span>
            </div>

            <div className="filterSearch">
                <VscSearch size={20} />
                <input
                    type="text"
                    size="10"
                    placeholder="Search.."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {filteredOptions?.map((option) => (
                <div key={option.value} className="filterCheck">
                    <input
                        type="checkbox"
                        value={option.value}
                        checked={
                            filterBmsData[title.toLowerCase()] === option.value
                        }
                        onChange={() =>
                            handleCheckboxChange(
                                option.value,
                                title.toLowerCase()
                            )
                        }
                    />
                    <label>{option.label}</label>
                </div>
            ))}
        </div>
    );
};

export default FilterBox;
