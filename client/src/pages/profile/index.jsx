import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Label, Button, TextInput } from "flowbite-react";
const Profile = () => {
  const { currentUser } = useSelector((state) => {
    return state.auth;
  });
  return (
    <>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 ">
        <span className="text-2xl font-bold text-gray-800">My Profile</span>
      </div>
      <form className="flex flex-col gap-4 w-full md:w-1/3 mx-auto px-2 bg-white my-5 p-5 rounded">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="Your name"
            value={currentUser.fullname}
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="Your Email"
            value={currentUser.email}
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="phone" value="Phone" />
          </div>
          <TextInput
            id="phone"
            type="phone"
            placeholder="Your Phone"
            value={currentUser.phone}
            required={true}
          />
        </div>
        <Button color="failure" type="submit">
          Update Profile
        </Button>
      </form>
    </>
  );
};

export default Profile;
