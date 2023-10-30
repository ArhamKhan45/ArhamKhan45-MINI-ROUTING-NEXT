"use client";

import DynamicContentDisplay from "@/components/DynamicContentDisplay";
import { DUMMY_EVENTS } from "@/data/dummy-data";

import { useParams } from "next/navigation";
import React from "react";

function Page() {
  const customuseParams = useParams();
  // const customuseRouter = useRouter();
  // const customusePathname = usePathname();
  // const customuseSearchParams = useSearchParams();

  // console.log(customuseParams);
  // console.log(customuseRouter);
  // console.log(customusePathname);
  // console.log(customuseSearchParams);

  const Displaydynamicdata = DUMMY_EVENTS.filter((item) => {
    function idmaker(title) {
      return title.replace(/\s/g, "");
    }
    const item_id = idmaker(item.title);
    // console.log(item_id);
    const datahandle = item_id === customuseParams.id ? item : null;
    // console.dir(datahandle);
    return datahandle;
  });

  return (
    <div>
      <DynamicContentDisplay
        params_id={customuseParams.id}
        data={Displaydynamicdata}
      />
    </div>
  );
}

export default Page;
