import React from "react";
import "../scss/main.scss";
import Home from "./Home";
import { Contextprovider } from "@/components/client";
function Main() {
  return (
    <div>
      <Contextprovider>
        <Home />
      </Contextprovider>
    </div>
  );
}

export default Main;
