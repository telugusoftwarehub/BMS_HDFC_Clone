import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "../button";
import OutlinedInput from "@mui/material/OutlinedInput";
import {HMenuItem,HSelect,HForm }from './form.styles'
import { Typography } from "@mui/material";


const FormComponent = () => {
  const [age, setAge] = React.useState("");
  const [demo, setDemo] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChangeDemo = (event) => {
    setDemo(event.target.value);
  };

  return (
      <HForm sx={{p:1,minWidth: 200}} size="small">
        {/* <InputLabel id="demo-select-small"></InputLabel> */}
        <div>
        <Typography>
        Personal Banking Services
        </Typography>
        <Typography fontWeight={600} color={'#444'}>
          What Are You Looking For?
        </Typography>
        </div>
       
        <HSelect
          labelId="demo-select-small"
          id="demo-select-small"
          value={age}
          label="Age"
          input={<OutlinedInput />}
          onChange={handleChange}
          sx={{ marginBottom: 1 }}
        >
          <HMenuItem value="">
            <em>Select Product Type</em>
          </HMenuItem>
          <HMenuItem value={10}>Cards</HMenuItem>
          <HMenuItem value={20}>Accounts</HMenuItem>
          <HMenuItem value={30}>Deposits</HMenuItem>
        </HSelect>
        {/* <InputLabel id="demo-select-small"></InputLabel> */}
        <HSelect
          labelId="demo-select-small"
          id="demo-select-small"
          value={demo}
          label="Age"
          input={<OutlinedInput />}
          onChange={handleChangeDemo}
          sx={{ marginBottom: 1 }}
        >
          <HMenuItem value="">
            <em>Select Product Type</em>
          </HMenuItem>
          <HMenuItem value={10}>CreditCards</HMenuItem>
          <HMenuItem value={20}>DebitCards</HMenuItem>
          <HMenuItem value={30}>CommercialCards</HMenuItem>
        </HSelect>

        <Button
          buttonVariant="contained"
          ButtonSize="large"
          buttonText="APPLY ONLINE"
          // buttonDisabled="false"
          ButtonFullWidth="true"
        />
        <Button
          buttonVariant="text"
          ButtonSize="large"
          buttonText="know more"
          // buttonDisabled="false"
          ButtonFullWidth="true"
        />

      </HForm>
  );
};

export default FormComponent;
