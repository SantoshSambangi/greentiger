import React, { useState } from "react";
import { Modal, TextField, Checkbox, Button } from "@mui/material";
import "../modal/modal.css";

export default function CustomModal({ isOpen, handleClose, title, data, onSubmit, filterData }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const filteredData = data ? data.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCheckboxChange = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleSubmit = () => {
    const processedData = processSelectedItems(selectedItems);
    if (onSubmit) {
      onSubmit(processedData); // Pass the processed data to the onSubmit function
    }
    handleClose();
  };

  const processSelectedItems = (selectedItems) => {
    const processedData = {};

    // Initialize processedData object with keys from filterData
    Object.keys(filterData).forEach(key => {
      processedData[key] = [];
    });

    selectedItems.forEach(item => {
      Object.keys(filterData).forEach(key => {
        if (filterData[key].includes(item)) {
          processedData[key].push(item);
        }
      });
    });

    return processedData;
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <div className="modal">
        <h2>{title} Filters</h2>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="checkboxes">
          {filteredData.map((item, index) => (
            <div key={index}>
              <Checkbox
                checked={selectedItems.includes(item)}
                onChange={() => handleCheckboxChange(item)}/>
              {item}
            </div>
          ))}
        </div>
          <Button className="btnModal" variant="contained" color="primary" size="small" onClick={handleSubmit}>Apply</Button>
      </div>
    </Modal>
  );
}