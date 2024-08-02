import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePassword } from "react-icons/md";
import "./companySignin.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CompanySignin() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    companyEmail: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    resetForm();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/companies/signin",
        formData
      );

      const { token, company } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("name", company.companyName);
        localStorage.setItem("email", company.companyEmail);
        setSuccessMessage(
          "Sign in Successful!... Redirecting to Dashboard...."
        );
        setTimeout(() => {
          navigate("/companyDashboard");
        }, 2000);
      } else {
        setErrorMessage("Login failed!");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message;
        setErrorMessage(errorMessage);
      } else {
        setErrorMessage("An unexpected error occured. Please try again");
      }
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setErrorMessage("");
    setSuccessMessage("");
  };

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
            <form onSubmit={handleSubmit}>
              <div className="company__email">
                <div className="mb-2 block">
                  <Label
                    className=""
                    htmlFor="email"
                    value="Enter the Company Address"
                  />
                </div>
                <TextInput
                  type="email"
                  name="companyEmail"
                  placeholder="Enter your Company Address"
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
                <Button
                  type="submit"
                  gradientDuoTone="pinkToOrange"
                  className="submit__btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      {" "}
                      <Spinner />
                      <p>Loading...</p>
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </div>
            </form>
            {errorMessage && (
              <Alert color="failure" className="p-4 mt-4 mb-2">
                {errorMessage}
              </Alert>
            )}

            {successMessage && (
              <Alert color="success" className="p-4 mt-4 mb-2">
                {successMessage}
              </Alert>
            )}
          </div>
          <Link to="/companysignup" className="text-center ">
            Don't have an Account ? <span className="font-bold">Sign up</span>
          </Link>
          <p className="copy">&copy; 2024 Nexaflow Inc.</p>
        </div>
      </div>
    </main>
  );
}

export default CompanySignin;
