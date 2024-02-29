import UserService from "@/services/userService";
import { redirect } from "next/navigation";
import React from "react";

function Dashboard() {
  const user = UserService.currentUser();
  console.log(user);
  if (!user) {
    redirect("/");
  }

  return <div>Dashboard</div>;
}
export default Dashboard;
