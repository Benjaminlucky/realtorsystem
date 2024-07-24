import { Button, Label, Select, TextInput } from "flowbite-react";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("contactPerson")) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/companies",
        formData
      );
      console.log("company created successfully:", response.data);
      // handle success (e.g, show a success message or direct)
      navigate("/companyDashboard");
    } catch (error) {
      console.error("Error creating company:", error);
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
                        required
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
                        required
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
                        required
                      >
                        <option>1 - 5 Staff</option>
                        <option>5 - 10 Staff</option>
                        <option>10 - 20</option>
                        <option>20 - 50</option>
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
                        required
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
                        required
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
                        required
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
                        required
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
                        onChange={handleChange}
                        required
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
                        required
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
                        required
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
                        required
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
                        required
                      >
                        <option>Visa & Mastercard Debit & Credit Cards</option>
                        <option>Visa & Mastercard Debit & Credit Cards</option>
                        <option>Visa & Mastercard Debit & Credit Cards</option>
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
                        required
                      >
                        <option>Starter</option>
                        <option>Pro</option>
                        <option>Premium</option>
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
                        required
                      >
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
                    Complete Account Sign Up{" "}
                    <FaArrowRightLong className="arrow" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CompanySignup;
