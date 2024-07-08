import React from "react";

const Accountdetail = () => {
  return (
    <div className="bg-white p-8 rounded shadow-md  w-full mx-auto">
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm  text-lite-gray"
            >
              First name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 p-2 w-full  rounded-sm  border border-lite-gray"
              placeholder="Enter  Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm   text-gray-700 text-lite-gray"
            >
              Last name *{" "}
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 p-2 w-full border   rounded-sm  border border-lite-gray"
              placeholder="Enter Last Name"
            />
          </div>
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm   text-lite-gray"
            >
              Display name *{" "}
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 p-2 w-full border   rounded-sm  border border-lite-gray"
              placeholder="Enter Your Display Name"
            />
            <span className="text-sm">
              This will be how your name will be displayed in the account
              section and in reviews
            </span>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm   text-lite-gray"
            >
              Email address *{" "}
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="mt-1 p-2 w-full border   rounded-sm  border border-lite-gray"
              placeholder="Enter Your Email Address"
            />
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lite-gray">Password change</h3>{" "}
          <div className="mt-4">
            <label htmlFor="password" className="block text-sm   ">
              Current password (leave blank to leave unchanged){" "}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-[50%] border   rounded-sm  border border-lite-gray"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="newPassword"
              className="block text-sm text-lite-gray"
            >
              New password (leave blank to leave unchanged){" "}
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              className="mt-1 p-2 w-[50%] border   rounded-sm  border border-lite-gray"
              placeholder="Enter your new password"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm  text-lite-gray"
            >
              Confirm new password{" "}
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="mt-1 p-2 w-[50%] border   rounded-sm  border border-lite-gray"
              placeholder="Enter your confirm password"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-[20%] p-3 bg-blue-500 text-white bg-green rounded-sm hover:bg-blue-600"
          >
            Save Changes{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Accountdetail;
