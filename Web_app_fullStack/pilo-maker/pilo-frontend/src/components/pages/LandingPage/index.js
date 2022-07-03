import React, { useEffect } from "react";
import LandingHeader from "./LandingHeader";
import LandingHero from "./LandingHero";
import LandingProduct from "./LandingProduct";
import { useNavigate } from "react-router-dom";
import MetaTitle from "utils/MetaTitle";
function LandingPage() {
  const checkUserHistory = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      checkUserHistory("/dashboard");
    }
  }, []);

  return (
    <>
      <MetaTitle title="Pilo - Quản lý công việc" />
      <div>
        <LandingHeader />
        <LandingHero />
        <LandingProduct />
      </div>
    </>
  );
}

export default LandingPage;
