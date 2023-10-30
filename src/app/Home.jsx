"use client";
import React, { useContext } from "react";
import "../scss/Home.scss";

import { Allevent, Findevent } from "../components/Homecontent.jsx";
import { Contextdata } from "@/components/client";

import Datashow from "@/components/Datashow";
import Link from "next/link";

function Home() {
  const { filterData, filtersetdata } = useContext(Contextdata);

  return (
    <div className="custom-home">
      <Allevent />

      <Findevent filtersetdata={filtersetdata} />
      <Datashow filterkeyword={filterData} />

      <br />
      {/* <Link href="">hellooooo</Link> */}
    </div>
  );
}

export default Home;
