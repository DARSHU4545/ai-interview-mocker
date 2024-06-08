import React from "react";

import DashboardLayout from "./layout";
import Header from "./_components/Header";
import AddInterview from "./_components/AddInterview";
const Dashboard = () => {
  return (
    <DashboardLayout>
      <Header />
      <AddInterview />
    </DashboardLayout>
  );
};

export default Dashboard;
