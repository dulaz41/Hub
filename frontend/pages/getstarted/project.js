import React from "react";

const project = () => {
  return (
    <div className="pt-20 relative   bg-[#1e2c2e] h-[960px] pb-0 mb-0 flex ">
      <div className="  ">
        <h1 className="text-4xl  pl-48 text-slate-100 font-medium mb-4  -mt-5">
          Project Setting
        </h1>
        <p className="block text-slate-400 pl-48 text-sm font-bold mb-2 w-[960px]">
          check your deployed projects here.
        </p>
        <div className="absolute pl-48 mb-4 mt-16 items-center justify-center  ">
          <h3 className="text-slate-200 text-3xl font-bold mb-2">Projects</h3>
          <hr className="w-96 border-2 border-slate-200" />

          <div className="flex ">
            <h3 className="text-md text-slate-400 font-bold pt-3 mt-2">
              Available Project
            </h3>
            <div className="w-[960px] mt-4 ">{/* {to call view project} */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default project;
