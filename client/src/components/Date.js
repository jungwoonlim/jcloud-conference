import React, { useState } from "react";
import { Alert, DatePicker, message } from "antd";

function Date() {
  const [date, setDate] = useState(null);
  const handleChnage = (value) => {
    message.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value);
  };

  return (
    <div style={{ width: 400, margin: "100px auto" }}>
      <DatePicker onChange={handleChnage} />
      <div style={{ marginTop: 16 }}>
        <Alert
          message="Selected Date"
          description={date ? date.format("YYYY-MM-DD") : "None"}
        ></Alert>
      </div>
    </div>
  );
}

export default Date;
