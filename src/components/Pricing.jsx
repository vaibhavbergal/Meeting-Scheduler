import React from "react";

const Pricing = () => {
  return (
    <div className="flex flex-wrap justify-center mt-24 text-sm md:mx-20 lg:mx-20 ">
      <div className="flex flex-wrap gap-4 p-10 rounded-md hover:bg-green-300">
        <div className="">
          <h1 className="text-3xl font-semibold font-pop">Standard 🤝</h1>
          <div className="flex gap-4 my-4">
            <p className="text-3xl font-semibold font-pop">$10</p>
            <p className="w-32">per user, per month billed annually</p>
          </div>
          <button className="px-5 py-3 mt-3 text-lg text-white rounded hover:bg-black/70 bg-black/80 font-pop">
            Start your free trial
          </button>
        </div>
        <h6>
          version History: 90 days <br /> Read-only users: unlimited
        </h6>
      </div>
      <div className="flex flex-wrap gap-5 p-10 rounded-md hover:bg-rose-200">
        <div className="">
          <h1 className="text-3xl font-semibold font-pop">Pro 🎸</h1>
          <div className="flex gap-4 my-4">
            <p className="text-3xl font-semibold font-pop">$17</p>
            <p className="w-32">per user, per month billed annually</p>
          </div>
          <button className="px-5 py-3 mt-3 text-lg text-white rounded hover:bg-black/70 bg-black/80 font-pop">
            Start your free trial
          </button>
        </div>
        <h6>
          version History: unlimited,
          <br /> Read-only users: unlimited,
          <br /> Group permissions,
          <br /> SAML + SSO,
          <br /> No Fibery branding on forms,
          <br /> Extra-caring support
        </h6>
      </div>
    </div>
  );
};

export default Pricing;
