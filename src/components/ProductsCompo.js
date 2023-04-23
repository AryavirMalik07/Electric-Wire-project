import React from "react";
import { Link } from "react-router-dom";

const ProductsCompo = ({ list }) => {
  return (
    <div className="flex flex-col gap-20 max-width text-center  py-32	">
      <Link className="text-4xl font-semibold " to="/products">
        Products & Services
      </Link>
      <div className="flex flex-wrap items-start justify-center gap-8  ">
        {list.map((props) => (
          <div className="flex flex-col items-center gap-8 p-8 border-2 w-1/4 h-3/4 hover:shadow-xl duration-75 ease-in	 ">
            <img className="w-96 h-96 " src={props.cover} alt="img" />
            <div className="flex flex-col gap-1 ">
              <p className="text-2xl font-semibold">{props.text}</p>
              <h3 className="text-l font-semibold text-slate-400">
                {props.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCompo;
