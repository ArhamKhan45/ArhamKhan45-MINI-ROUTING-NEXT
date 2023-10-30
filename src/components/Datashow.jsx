import React from "react";
import "../scss/Datashow.scss";
import DisplayeventContent from "@/components/DisplayeventContent";
import { Explorebtn } from "../app/allevents/Callevents";
import Image from "next/image";
// import Filtereddata from "./Filtereddata";
import { DUMMY_EVENTS } from "@/data/dummy-data";

function Datashow({ filterkeyword }) {
  function GetFilteredEvents() {
    let arry;
    function dataextractor(filterkeyword) {
      return filterkeyword.split(" ");
    }
    arry = dataextractor(filterkeyword);

    const month = arry[0];
    const year = arry[1];
    const Filteredarray = DUMMY_EVENTS.filter((item) => {
      const itemdate = new Date(item.date);
      // console.log(itemdate.getMonth(), month - 1);
      // console.log(itemdate.getFullYear(), year);
      if (itemdate.getMonth() == month - 1 && itemdate.getFullYear() == year) {
        // console.log(itemdate.getMonth());
        return item;
      }
    });
    // console.dir(Filteredarray);
    function filteringdata() {
      const Filtereddata = Filteredarray.map((item) => {
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
      return Filtereddata;
    }

    const NoData = () => {
      return (
        <h1
          style={{
            textAlign: "center",
            margin: "100px auto",
            padding: "50px",
            color: "red",
            border: "20px outset red",
            width: "max-content",
          }}
        >
          {" "}
          Data not found
        </h1>
      );
    };

    const newdata = Filteredarray.length ? filteringdata() : <NoData />;

    console.log(newdata);
    return newdata;
  }

  const Displayer = () => {
    if (filterkeyword) {
      if (filterkeyword === " ") {
        return <DisplayeventContent />;
      }
      return (
        <div>
          <GetFilteredEvents />
        </div>
      );
    } else {
      return <DisplayeventContent />;
    }
  };
  return (
    <div className="custom-datashow">
      {/* {filterkeyword} */}
      {Displayer()}
    </div>
  );
}

export default Datashow;
