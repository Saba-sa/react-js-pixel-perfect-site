import React from "react";

const Paymentmethod = () => {
  return (
    <div className="w-full flex flex-col gap-12">
      <div className=" bg-white p-12">
        <div className="grid grid-cols-2 gap-4 mt-6 w-[85%]">
          <p className="text-lite-gray">Method</p>
          <p className="text-lite-gray">Expires</p>
        </div>
        <hr className="h-px my-4 bg-off-lite border-0 w-full" />
        <div className="flex items-center">
          <div className="w-[95%]">
            <div className="grid grid-cols-2 gap-4 my-6">
              <p className="font-semibold">Visa ending in 1058</p>
              <p className="font-semibold">11 / 2026</p>
            </div>
          </div>
          <button className="w-[15%] rounded-md bg-green text-white py-2 px-2 self-end">
            Delete
          </button>
        </div>
        <button className="w-[20%] rounded-md bg-green text-white py-2 px-2 mt-8">
          Add Payment Method{" "}
        </button>
      </div>
    </div>
  );
};

export default Paymentmethod;
