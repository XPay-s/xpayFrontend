import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Utilities from "../../components/Utilities";
import TransactionHistory from "../../components/TransactionHistory";
import Finance from "../../components/Finance";
import Payee from "../../components/Payee";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className=" h-full w-screen flex flex-col bg-deep-charcoal text-white-smoke pb-24">
      <Header />
      <Banner />
      <Utilities />
      <TransactionHistory />
      <Finance />
      <Payee />
      <Footer />
    </div>
  );
}

export default Home;
