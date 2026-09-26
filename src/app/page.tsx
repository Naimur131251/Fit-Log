import Banner from "@/components/homepage/Banner";
import Books from "@/components/homepage/Books";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <Banner />
      <Books />
      <ToastContainer />
    </>
  );
}
