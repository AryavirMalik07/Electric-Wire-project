import React from "react";
import { Link } from "react-router-dom";
const AboutCompo = ({ list }) => {
  return (
    <div className="max-width py-8 flex flex-col gap-14">
      <div className="about-content flex flex-col items-center justify-center py-8 ">
        <h1 className="flex text-5xl font-bold text-center	">About</h1>
        <p className="flex text-center text-2xl leading-normal">
          Established in the year 2007, Balaji Wire is one of the leading
          Manufacturer, Trader and Service Provider of RO Plant, Water Purifier,
          RO Booster Pump and many more. We direct all our activities to cater
          the expectations of customers by providing them excellent quality
          products as per their gratifications. Moreover, we follow moral
          business policies and crystal pure transparency in all our
          transactions to keep healthy relations with the customers.
        </p>
        <Link className="text-2xl text-cyan-700" to="/about">
          +Read more
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-12 ">
        {list.map((props) => (
          <div className="flex items-center gap-8 ">
            <img
              className="w-28 h-28 rounded-full"
              src={props.cover}
              alt="img"
            />
            <div className="flex flex-col gap-1 ">
              <h3 className="text-xl font-semibold text-slate-400">
                {props.title}
              </h3>
              <p className="text-2xl font-semibold">{props.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCompo;
