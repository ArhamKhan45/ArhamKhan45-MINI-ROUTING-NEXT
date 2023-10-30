import React from "react";
import "../scss/DynamicContentDisplay.scss";
import Image from "next/image";

import { SlCalender, SlLocationPin } from "react-icons/sl";
import { Homebtn } from "@/app/allevents/Callevents";

function DynamicContentDisplay({ params_id, data }) {
  const displayItem = data.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <h1>{item.title}</h1>
        <div className="display-itembox">
          <Image
            src={item.image}
            width={300}
            height={200}
            priority={true}
            alt="Picture of the author"
          />

          <div>
            <div>
              <SlCalender size={24} />
              <p>{item.date}</p>
            </div>
            <div>
              <SlLocationPin size={24} />
              <p>{item.location}</p>
            </div>
          </div>
        </div>

        <p className="item-description">{item.description}</p>
      </React.Fragment>
    );
  });

  return (
    <div className="custom-main-DynamicContentDisplay">
      <div className="homebtn">
        <Homebtn />
      </div>

      {displayItem}
    </div>
  );
}

export default DynamicContentDisplay;
