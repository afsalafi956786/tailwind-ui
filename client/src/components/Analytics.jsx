import React from "react";
import Laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="text-white w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid  md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-black md:text-4xl sm:text-3xl text-3xl font-bold py-2">Manage Data Analytics Cennrally</h1>
          <p className="text-black ">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available
          </p>
          <button className="text-[#00df9a] w-[200px] bg-black rounded-md font-medium my-6 mx-auto font-bold py-3 md:mx-0  hover:bg-gray-800 ">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
