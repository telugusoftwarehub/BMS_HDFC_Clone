// import React from 'react'

// const FormComponent = () => {
//   return (
//     <div>FormComponent</div>
//   )
// }

// export default FormComponent;

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "../button";

export default function FormComponent() {
  const [age, setAge] = React.useState("");
  const [demo, setDemo] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChangeDemo = (event) => {
    setDemo(event.target.value);
  };

  return (
      <FormControl sx={{ m: 1, minWidth: 200}} size="small">
        <InputLabel id="demo-select-small"></InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{ marginBottom: 1 }}
        >
          <MenuItem value="">
            <em>Select Product Type</em>
          </MenuItem>
          <MenuItem value={10}>Cards</MenuItem>
          <MenuItem value={20}>Accounts</MenuItem>
          <MenuItem value={30}>Deposits</MenuItem>
        </Select>
        <InputLabel id="demo-select-small"></InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={demo}
          label="Age"
          onChange={handleChangeDemo}
          sx={{ marginBottom: 1 }}
        >
          <MenuItem value="">
            <em>Select Product Type</em>
          </MenuItem>
          <MenuItem value={10}>CreditCards</MenuItem>
          <MenuItem value={20}>DebitCards</MenuItem>
          <MenuItem value={30}>CommercialCards</MenuItem>
        </Select>

        <Button
          buttonVariant="contained"
          ButtonSize="large"
          buttonText="APPLY ONLINE"
          buttonDisabled="true"
          ButtonFullWidth="true"
        />
        <Button
          buttonVariant="text"
          ButtonSize="large"
          buttonText="know more"
          buttonDisabled="true"
          ButtonFullWidth="true"
        />
      </FormControl>
  );
}
