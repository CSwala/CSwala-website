import React, { useState } from "react";
import "./Filter.css";
import { MenuItem, Select, FormControl, Button } from "@material-ui/core";

const Filter = (props) => {
  const [tag, setTag] = useState("ALL");
  const handleChange = (event) => {
    setTag(event.target.value);
  };
  let neW = [];
  props.storedData.forEach((element) => {
    if (element.tag.toUpperCase()===''){
      neW.push(element.title.toUpperCase());
    }
    else{
    neW.push(element.tag.toUpperCase());}
  });
  neW.sort();
  let unique = [];
  unique = [...new Set(neW)];
  return (
    <div>
      <FormControl fullWidth className="Form">
        <Select
          id="demo-simple-select"
          value={tag}
          onChange={handleChange}
        >
          <MenuItem value="ALL" className="Options">
            SHOW ALL
          </MenuItem>
          {unique &&
            unique.map((cardInfo, index) => {
              return (
                <MenuItem key={index} value={cardInfo} className="Options">
                  {cardInfo}
                </MenuItem>
              );
            })}
        </Select>
        <Button
          type="submit"
          variant="contained"
          className="Button"
          style={{ backgroundColor: "#fbb03b" }}
          onClick={() => {
            props.parentCall(tag);
          }}
        >
          Submit
        </Button>
      </FormControl>
    </div>
  );
};

export default Filter;
