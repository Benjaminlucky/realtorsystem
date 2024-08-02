import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePassword } from "react-icons/md";
import "./companySignin.css";
import { Link } from "react-router-dom";

function CompanySignin() {
  const handleChange = () => {};
  return (
    <main className="signin__section">
      <div className="compsignin__left">
        <div className="signin__leftWrap">
          <h1>NEXAFLOW</h1>
          <p>All in one Realtor Management System</p>
        </div>
      </div>
      <div className="signin__right">
        <div className="signin__rightwrap">
          <div className="compright__top">
            <h3 className="leading-tight text-5xl">
              Sign in to your Dashboard
            </h3>
            <p className="text-gray-400">
              Manage your realtors, and see their progress
            </p>
          </div>
          <div className="right__bottom">
            <form action="">
              <div className="company__email">
                <div className="mb-2 block">
                  <Label
                    className=""
                    htmlFor="email"
                    value="Enter the Email you Signed up with"
                  />
                </div>
                <TextInput
                  type="email"
                  name="email"
                  placeholder="Enter your Email Address"
                  icon={HiOutlineMail}
                  onChange={handleChange}
                />
              </div>
              <div className="company__password">
                <div className="mb-2 block">
                  <Label
                    className=""
                    htmlFor="password"
                    value="Enter the Password you Signed up with"
                  />
                </div>
                <TextInput
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  icon={MdOutlinePassword}
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <Button gradientDuoTone="pinkToOrange" className="submit__btn">
                  Sign In
                </Button>
              </div>
            </form>
          </div>
          <Link to="/companysignup" className="text-center ">
            Don't have an Account ? <span className="font-bold">Sign up</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default CompanySignin;
