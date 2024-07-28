import {
  Alert,
  Button,
  Label,
  Select,
  Spinner,
  TextInput,
} from "flowbite-react";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaUserTie } from "react-icons/fa";
import { BsBriefcase } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { IoServerOutline } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import React, { useState } from "react";
import "./companySignup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CompanySignup() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(""); // State for Error Message
  const [successMessage, setSuccessMessage] = useState(""); // State for success Message
  const [loading, setLoading] = useState(false); // state for loading initial  state false
  const [formData, setFormData] = useState({
    companyName: "",
    companyAddress: "",
    companySize: "",
    companyEmail: "",
    contactPerson: {
      fullName: "",
      jobTitle: "",
      email: "",
      phone: "",
    },
    username: "",
    password: "",
    confirmPassword: "",
    subscription: {
      plan: "",
      duration: "",
      paymentMethod: "",
    },
  });

  const phoneNumberRegex = /^(080|070|090|081|091)[0-9]{8}$/;

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name.includes("contactPerson")) {
      if (name === "contactPerson.phone") {
        value = value.replace(/[^0-9]/g, ""); // only allow numbers
      }
      setFormData((prevData) => ({
        ...prevData,
        contactPerson: {
          ...prevData.contactPerson,
          [name.split(".")[1]]: value,
        },
      }));
    } else if (name.includes("subscription")) {
      setFormData((prevData) => ({
        ...prevData,
        subscription: {
          ...prevData.subscription,
          [name.split(".")[1]]: value,
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handlePhoneInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, ""); // only allow numbers
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      //alert("Passwords do not match!");
      setErrorMessage("Password do not match!");
      setLoading(false);
      return;
    }

    if (!phoneNumberRegex.test(formData.contactPerson.phone)) {
      setErrorMessage(
        "Invalid phone number format!, Please enter a valid 11-digit phone number starting with 080, 070, 090, 081, or 091."
      );
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/companies",
        formData
      );
      console.log("company created successfully:", response.data);
      // handle success (e.g, show a success message or direct)
      setSuccessMessage(
        "Sign Up successful!.........redirecting to Sign in Page"
      );
      setLoading(false);
      setTimeout(() => {
        navigate("/companyDashboard");
      }, 2000); // Set timeout 2 seconds
    } catch (error) {
      console.error("Error creating company:", error);
      const errorMessage = error.response.data.message;
      setErrorMessage(errorMessage);
      setLoading(false);
      return;
      // handle error(e.g., show an error message)
    }
  };

  return (
    <main className="company__section">
      <div className="company__wrapper">
        <div className="company__left">
          <div className="clefttop">
            <h1 className="nexaTitle">Nexaflow</h1>
            <p>Your all in one Realtor Management System</p>
          </div>
          <div className="cleftbottom">
            <p className="nexabottom">
              &copy; 2024 Nexaflow All rights Reserved
            </p>
          </div>
        </div>
        <div className="company__right">
          <div className="cright__content">
            <div className="cright__top mb-12">
              <h3 className="sub__title text-gray-500">
                Subscribe to our platform
              </h3>
              <p className="sub__subtitle text-gray-500">
                To manage your realtors Conveniently
              </p>
            </div>
            <div className="cright__bottom">
              <form className="gap-12" onSubmit={handleSubmit}>
                <div className="companydetails flex-col w-full">
                  <h2 className="right__secdetail mb-6 text-gray-400">
                    Company Details
                  </h2>
                  <div className="form-row">
                    <div className="mb-8 company__name">
                      <div className="mb-2 block">
                        <Label
                          className="text-gray-400"
                          htmlFor="companyName"
                          value="Company Name"
                        />
                      </div>
                      <TextInput
                        id="companyName"
                        type="text"
                        name="companyName"
                        placeholder="kemchutahomes"
                        icon={FaHouseChimneyUser}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-8 company__address">
                      <div className="mb-2 block">
                        <Label
                          className="text-gray-400"
                          htmlFor="companyAddress"
                          value="Company Address"
                        />
                      </div>
                      <TextInput
                        id="companyAddress"
                        type="text"
                        name="companyAddress"
                        placeholder="N0 2 Jose Atlanta USA"
                        icon={FaLocationDot}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="mb-8 company__size">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="companySize"
                          className="text-gray-400"
                          value="Company Size"
                        />
                      </div>
                      <Select
                        id="companySize"
                        icon={FaUsers}
                        onChange={handleChange}
                        name="companySize"
                      >
                        <option disabled selected>
                          {" "}
                          Choose you Company Size
                        </option>
                        <option value="1 - 5 Staff">1 - 5 Staff</option>
                        <option value="5 - 10 Staff">5 - 10 Staff</option>
                        <option value="10 - 20 Staff">10 - 20 Staff</option>
                        <option value="20 - 50 Staff">20 - 50 Staff</option>
                      </Select>
                    </div>
                    <div className="mb-8 company__email">
                      <div className="mb-2 block">
                        <Label
                          className="text-gray-400"
                          htmlFor="companyEmail"
                          value="Company Email Address"
                        />
                      </div>
                      <TextInput
                        id="companyEmail"
                        type="email"
                        name="companyEmail"
                        placeholder="info@kemchutahomesltd.com"
                        icon={HiOutlineMail}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="companydetails flex-col w-full">
                  <h2 className="right__secdetail mb-6 text-gray-400">
                    Primary Contact Person
                  </h2>
                  <div className="form-row">
                    <div className="mb-8 contact__name">
                      <div className="mb-2 block">
                        <Label
                          className="text-gray-400"
                          htmlFor="contactPersonName"
                          value="Full Name - Contact Person"
                        />
                      </div>
                      <TextInput
                        id="fullName"
                        type="text"
                        name="contactPerson.fullName"
                        placeholder="Harmony Benjamin"
                        icon={FaUserTie}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-8 contact__job">
                      <div className="mb-2 block">
                        <Label
                          className="text-gray-400"
                          htmlFor="contactPersonJobTitle"
                          value="Job Title - Contact Person"
                        />
                      </div>
                      <TextInput
                        id="jobTitle"
                        type="text"
                        name="contactPerson.jobTitle"
                        placeholder="Administrator"
                        icon={BsBriefcase}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="mb-8 contact__email">
                      <div className="mb-2 block">
                        <Label
                          className="text-gray-400"
                          htmlFor="email"
                          value="Email - Contact Person"
                        />
                      </div>
                      <TextInput
                        id="email"
                        type="email"
                        name="contactPerson.email"
                        placeholder="admin@kemchutahomesltd.com"
                        icon={HiOutlineMail}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-8 contact__phone">
                      <div className="mb-2 block">
                        <Label
                          className="text-gray-400"
                          htmlFor="phone"
                          value="Phone - Contact Person"
                        />
                      </div>
                      <TextInput
                        id="phone"
                        type="tel"
                        name="contactPerson.phone"
                        placeholder="+234 805 364 2425"
                        icon={FaPhoneAlt}
                        onInput={handlePhoneInput}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="companydetails flex-col w-full">
                  <h2 className="right__secdetail mb-6 text-gray-400">
                    Account Setup
                  </h2>
                  <div className="form-row">
                    <div className="mb-8 account__username">
                      <div className="mb-2 block">
                        <Label
                          className="text-gray-400"
                          htmlFor="username"
                          value="Account Username"
                        />
                      </div>
                      <TextInput
                        id="username"
                        type="text"
                        name="username"
                        placeholder="kemchutahomes"
                        icon={FaUserPlus}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-8 account__password">
                      <div className="mb-2 block">
                        <Label
                          className="text-gray-400"
                          htmlFor="password"
                          value="Account Password"
                        />
                      </div>
                      <TextInput
                        id="accountPassword"
                        type="password"
                        name="password"
                        placeholder="*******"
                        icon={MdOutlinePassword}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="mb-8 confirm__password">
                      <div className="mb-2 block">
                        <Label
                          className="text-gray-400"
                          htmlFor="confirmPassword"
                          value="Confirm Account Password"
                        />
                      </div>
                      <TextInput
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        placeholder="*******"
                        icon={MdOutlinePassword}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-8 payment__method">
                      <div className="mb-2 block">
                        <Label
                          className="text-gray-400"
                          htmlFor="paymentMethod"
                          value="Payment Method"
                        />
                      </div>
                      <Select
                        id="paymentMethod"
                        icon={CiCreditCard1}
                        onChange={handleChange}
                        name="subscription.paymentMethod"
                      >
                        <option disabled selected>
                          Select a Payment Method
                        </option>
                        <option value="Visa & Mastercard Debit & Credit Cards">
                          Visa & Mastercard Debit & Credit Cards
                        </option>
                        <option value="Visa & Mastercard Debit & Credit Cards">
                          Visa & Mastercard Debit & Credit Cards
                        </option>
                        <option value="Visa & Mastercard Debit & Credit Cards">
                          Visa & Mastercard Debit & Credit Cards
                        </option>
                      </Select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="subscription__plan">
                      <div className="mb-2 block">
                        <Label
                          className="text-gray-400"
                          htmlFor="subscriptionPlan"
                          value="Subscription Plan"
                        />
                      </div>
                      <Select
                        id="subscriptionPlan"
                        icon={IoServerOutline}
                        onChange={handleChange}
                        name="subscription.plan"
                      >
                        <option disabled selected>
                          Select a Subscription Plan
                        </option>
                        <option value="Starter">Starter</option>
                        <option value="Pro">Pro</option>
                        <option value="Premium">Premium</option>
                      </Select>
                    </div>
                    <div className="subscription__duration">
                      <div className="mb-2 block">
                        <Label
                          className="text-gray-400"
                          htmlFor="subscriptionDuration"
                          value="Subscription Duration"
                        />
                      </div>
                      <Select
                        id="subscriptionDuration"
                        icon={GiSandsOfTime}
                        onChange={handleChange}
                        name="subscription.duration"
                      >
                        <option disabled selected>
                          Select a Subscription Duration
                        </option>
                        <option>Monthly</option>
                        <option>Annually</option>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Button
                    className="submit__btn text-4xl"
                    size="xl"
                    gradientDuoTone="pinkToOrange"
                    type="submit"
                  >
                    {loading ? (
                      <>
                        <Spinner /> <p>Loading..</p>
                      </>
                    ) : (
                      <>
                        <p> Complete Account Sign Up </p>
                        <FaArrowRightLong className="arrow" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
              <div className="errorSucess__div">
                {errorMessage && (
                  <Alert color="failure" className="w-full flex text-center">
                    {errorMessage}
                  </Alert>
                )}

                {successMessage && (
                  <Alert color="success">{successMessage}</Alert>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CompanySignup;
