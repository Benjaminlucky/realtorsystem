import React from "react";
import Navigation from "../../components/Navigation";
import Dashboardcomp from "../../components/Dashboardcomp";
import "./dashboard.css";

function Dashboard() {
  return (
    <main className="section">
      <div className="section__wrapper">
        <div className="section__content">
          <div className="dashboard__left">
            <Navigation />
          </div>
          <div className="dashboard__right">
            <Dashboardcomp />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
