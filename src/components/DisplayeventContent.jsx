import React from "react";
import "@/scss/allevent.scss";
import { DUMMY_EVENTS } from "@/data/dummy-data";
import Image from "next/image";

import { Explorebtn } from "../app/allevents/Callevents";

function DisplayeventContent() {
  const alleventshow = DUMMY_EVENTS.map((item) => {
    function urladress(item) {
      const siteaddress = item.replace(/\s/g, "");

      return siteaddress;
    }
    function Datefetcher() {
      let d = new Date(item.date);
      d = d.toDateString();
      return d;
    }
    return (
      <div key={item.id} className="events-item">
        <div>
          <Image
            src={item.image}
            width={300}
            height={200}
            priority={true}
            alt="Picture of the author"
          />
        </div>
        <div>
          <h3>{item.title}</h3>
          <h5>
            <Datefetcher />
          </h5>
          <p>{item.location}</p>
        </div>
        <div>
          <Explorebtn address={urladress(item.title)} />
        </div>
      </div>
    );
  });
  return (
    <div className="Custom-allevent">
      <div>{alleventshow}</div>
    </div>
  );
}

export default DisplayeventContent;
