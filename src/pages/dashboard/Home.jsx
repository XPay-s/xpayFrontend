import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Utilities from "../../components/Utilities";
import TransactionHistory from "../../components/TransactionHistory";

function Home() {
  return (
    <div className=" h-full w-screen flex flex-col bg-deep-charcoal text-white-smoke ">
      <Header />
      <Banner />
      <Utilities />
      <TransactionHistory />
    </div>
  );
}

export default Home;
