import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="dashboard">
      <Navbar />
      <Sidebar />
      <main className="content">
        <h1>Admin Dashboard</h1>
        <p>Select a feature from the sidebar to get started.</p>
      </main>
    </div>
  );
}
