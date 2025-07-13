import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();
    const handleGetStarted=()=>{
        navigate('/SelectionPage');
    }
  return (
    <div className="min-h-screen bg-black/60 flex items-center justify-center px-6">
    <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 text-white">

      {/* <!-- Left Section --> */}
      <div className="flex flex-col justify-center items-start space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Conference Expense Planner
        </h1>
        <p className="text-lg">Plan your next major event with us!</p>
        <button class="px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition " onClick={handleGetStarted}>
          Get Started
        </button>
      </div>

      {/* <!-- Right Section --> */}
      <div className="space-y-6 text-gray-200 text-sm md:text-base">
        <p>
          <strong>Welcome to BudgetEase Solutions</strong>, your trusted partner in simplifying budget management and financial solutions. At BudgetEase, we understand the importance of effective budget planning and strive to provide intuitive, user-friendly solutions to meet the diverse needs of our clients.
        </p>
        <p>
          With a commitment to efficiency and innovation, we empower individuals and businesses to take control of their finances and achieve their goals with ease.
        </p>
        <p>
          At BudgetEase Solutions, our mission is to make budgeting effortless and accessible for everyone. Whether you're a small business owner, a busy professional, or an individual looking to manage your personal finances, we offer tailored solutions to streamline your budgeting process.
        </p>
      </div>
      
    </div>
  </div>
  );
}

export default LandingPage;
