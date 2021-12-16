import React, { useEffect, useState } from "react";
import axios from "axios";
function MyName() {
  const [state, setstate] = useState("");
  useEffect(async () => {
    const res = await axios.get("/api/getName");
    console.log(res);
    setstate(res.data.name);
  }, []);
  return <div>My name is {state}</div>;
}

export default MyName;
