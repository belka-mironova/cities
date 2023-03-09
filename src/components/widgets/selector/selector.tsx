import React from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { cities, layers } from "./selector-constants";

export const Selector = ({ type }: any) => {
  const options = type === "city" ? cities : layers;

  return (
    <FormControl sx={{ m: 1, minWidth: 100 }}>
      <Select
        // value={period}
        // onChange={handleChange}
        displayEmpty
        size="small"
        inputProps={{ "aria-label": "Without label" }}
      >
        {options.map((option) => (
          <MenuItem value={option.value}>{option.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
