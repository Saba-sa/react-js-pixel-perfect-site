import React from "react";

const Mysubscription = () => {
  return (
    <div className="w-full flex flex-col gap-12">
      <div className=" bg-white p-12">
        <div className="grid grid-cols-2 gap-4 my-6">
          <p className="text-lite-gray">Status</p>
          <p className="font-semibold">Active</p>
        </div>
        <div className="grid grid-cols-2 gap-4 my-6">
          <p className="text-lite-gray">Start date</p>
          <p className="font-semibold">January 19, 2024</p>
        </div>
        <div className="grid grid-cols-2 gap-4 my-6">
          <p className="text-lite-gray">Last order date</p>
          <p className="font-semibold">January 19, 2024</p>
        </div>
        <div className="grid grid-cols-2 gap-4 my-6">
          <p className="text-lite-gray">Next payment date</p>
          <p className="font-semibold">February 19, 2024</p>
        </div>
        <div className="grid grid-cols-2 gap-4 my-6">
          <p className="text-lite-gray">Payment</p>
          <p className="font-semibold">Via Credit/Debit Cards</p>
        </div>
        <div className="grid grid-cols-2 gap-4 my-6">
          <p className="text-lite-gray">Actions</p>
          <div className="flex gap-2 items-center">
            <p className="text-green">cancle</p>
            <button className="rounded-md bg-green text-white py-2 px-4">
              Change Payment
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-white p-12">
        <h1 className="text-lg">Subscription totals</h1>
        <div className="grid grid-cols-2 gap-4 my-6">
          <p className="text-lite-gray">Product</p>
          <p className="text-lite-gray">Total</p>
        </div>
        <div className="grid grid-cols-2 gap-4 my-6">
          <div className="flex gap-4 items-center">
            <p className="text-green">Agent Monthly x</p>
            <button className="rounded-md bg-green text-white py-2 px-4">
              Change Membership
            </button>
          </div>
          <p className="font-semibold">$54.00 / month</p>
        </div>
        <div className="grid grid-cols-2 gap-4 my-6">
          <p className="text-lite-gray">Subtotal:</p>
          <p className="font-semibold">$54.00</p>
        </div>
        <div className="grid grid-cols-2 gap-4 my-6">
          <p className="text-lite-gray">Total:</p>
          <p className="font-semibold">$54.00 / month</p>
        </div>
      </div>
      <div className=" bg-white p-12">
        <h1 className="text-lg">Related orders</h1>
        <div className="grid grid-cols-5 gap-4 my-6">
          <p className="text-lite-gray">Order</p>
          <p className="text-lite-gray">Date</p>
          <p className="text-lite-gray">Status</p>
          <p className="text-lite-gray">Total</p>
          <p className="text-lite-gray">Action</p>
        </div>
        <hr className="h-px my-4 bg-off-lite border-0 w-full" />

        <div className="grid grid-cols-5 gap-4 my-6">
          <p className="font-semibold">#291142</p>
          <p className="font-semibold">January 19, 2024</p>
          <p className="font-semibold">Completed</p>
          <p className="font-semibold">$54.00 for 1 item</p>
          <button className="w-[45%] rounded-md bg-green text-white py-2 px-2">
            View{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mysubscription;
