"use client";
import { useRouter } from "next/navigation";
import { BsArrowReturnRight } from "react-icons/bs";

export const Explorebtn = ({ address }) => {
  const router = useRouter();
  const gotoaddress = () => {
    router.push(address);
  };
  return (
    <button onClick={gotoaddress}>
      Explore Event
      <br />
      <BsArrowReturnRight />
    </button>
  );
};

export const Homebtn = () => {
  const router = useRouter();
  const gotohome = () => {
    router.push("/");
  };
  return <button onClick={gotohome}>Home</button>;
};
