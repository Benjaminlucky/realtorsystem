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
import React from "react";
import "./companySignup.css";

function CompanySignup() {
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
              <form className="gap-12">
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
                      <Select id="companySize" icon={FaUsers} required>
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
                        id="contactPersonName"
                        type="text"
                        name="contactPersonName"
                        placeholder="Harmony Benjamin"
                        icon={FaUserTie}
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
                        id="contactPersonJobTitle"
                        type="text"
                        name="contactPersonJobTitle"
                        placeholder="Administrator"
                        icon={BsBriefcase}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="mb-8 contact__email">
                      <div className="mb-2 block">
                        <Label
                          className="text-gray-400"
                          htmlFor="contactPersonEmail"
                          value="Email - Contact Person"
                        />
                      </div>
                      <TextInput
                        id="contactPersonEmail"
                        type="email"
                        name="contactPersonEmail"
                        placeholder="admin@kemchutahomesltd.com"
                        icon={HiOutlineMail}
                        required
                      />
                    </div>
                    <div className="mb-8 contact__phone">
                      <div className="mb-2 block">
                        <Label
                          className="text-gray-400"
                          htmlFor="phoneContactPerson"
                          value="Phone - Contact Person"
                        />
                      </div>
                      <TextInput
                        id="phoneContactPerson"
                        type="tel"
                        name="phoneContactPerson"
                        placeholder="+234 805 364 2425"
                        icon={FaPhoneAlt}
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
                          htmlFor="accountUsername"
                          value="Account Username"
                        />
                      </div>
                      <TextInput
                        id="accountUsername"
                        type="text"
                        name="accountUsername"
                        placeholder="kemchutahomes"
                        icon={FaUserPlus}
                        required
                      />
                    </div>
                    <div className="mb-8 account__password">
                      <div className="mb-2 block">
                        <Label
                          className="text-gray-400"
                          htmlFor="accountPassword"
                          value="Account Password"
                        />
                      </div>
                      <TextInput
                        id="accountPassword"
                        type="password"
                        name="accountPassword"
                        placeholder="*******"
                        icon={MdOutlinePassword}
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
                      <Select id="paymentMethod" icon={CiCreditCard1} required>
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
                    Complete Account Sign Up
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
