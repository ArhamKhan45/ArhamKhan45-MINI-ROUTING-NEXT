"use client";

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

function page() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const searchparams = useSearchParams();

  console.log(params);

  console.log(router);

  console.log(pathname);
  console.log(searchparams);
  return (
    <div>
      <p>Hello for fun</p>
      {/* {router.refresh()} */}
      <p>{params.id}</p>
      {/* {hello} */}
    </div>
  );
}

export default page;
