import React from "react";
import { Button } from "@mui/material";

const ButtonComponent = (props) => {
  return (
    <div>
      <Button
        variant={props.buttonVariant}
        color={props.buttoncolor}
        size={props.ButtonSize}
        disabled={props.buttonDisabled}
        fullWidth={props.ButtonFullWidth}
      >
        {props.buttonText}
      </Button>
    </div>
  );
};

export default ButtonComponent;
