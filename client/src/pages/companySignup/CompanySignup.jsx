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

function CompanySignup() {
  return (
    <main className="company__section">
      <div className="company__wrapper">
        <div className="company__left">
          <div className="clefttop">
            <h1>Nexaflow</h1>
            <p>Your all in one Realtor Management System</p>
          </div>
          <div className="cleftbottom">
            <p>&copy; 2024 Nexaflow All rights Reserved</p>
          </div>
        </div>
        <div className="company__right">
          <div className="cright__content">
            <div className="cright__top">
              <h3>Subscribe to our platform</h3>
              <p>To manage your realtors Conveniently</p>
            </div>
            <div className="cright__bottom">
              <form className="gap-12">
                <div className="companydetails flex-col w-max">
                  <h2>Company Details</h2>
                  <div className="flex mb-6 gap-2">
                    <div className="company__name">
                      <div className="mb-2 block">
                        <Label htmlFor="companyName" value="Company Name" />
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
                    <div className="company__name">
                      <div className="mb-2 block">
                        <Label
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
                  <div className="flex gap-2">
                    <div className="company__size">
                      <div className="mb-2 block">
                        <Label htmlFor="companySize" value="Company Size" />
                      </div>
                      <Select id="CompanySize" icon={FaUsers} required>
                        <option>1 - 5 Staff</option>
                        <option>5 - 10 Staff</option>
                        <option>10 - 20</option>
                        <option>20 - 50</option>
                      </Select>
                    </div>
                    <div className="company__email">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="companyEmail"
                          value="Company Email Address"
                        />
                      </div>
                      <TextInput
                        id="companyAddress"
                        type="email"
                        name="companyEmail"
                        placeholder="info@kemchutahomesltd.com"
                        icon={HiOutlineMail}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="companydetails flex-col w-max">
                  <h2>Primary Contact Person</h2>
                  <div className="flex mb-6 gap-2">
                    <div className="name__contactPerson">
                      <div className="mb-2 block">
                        <Label
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
                    <div className="job__contactPerson">
                      <div className="mb-2 block">
                        <Label
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
                  <div className="flex gap-2">
                    <div className="email__contactperson">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="emailContactPerson"
                          value="Email - Contact Person"
                        />
                      </div>
                      <TextInput
                        id="contactPersonEmail"
                        type="text"
                        name="contactPersonEmail"
                        placeholder="admin@kemchutahomesltd.com"
                        icon={HiOutlineMail}
                        required
                      />
                    </div>
                    <div className="phone__contactPerson">
                      <div className="mb-2 block">
                        <Label
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
                <div className="companydetails flex-col w-max">
                  <h2>Account Setup</h2>
                  <div className="flex mb-6 gap-2">
                    <div className="account__username">
                      <div className="mb-2 block">
                        <Label
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
                    <div className="account__password">
                      <div className="mb-2 block">
                        <Label
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
                  <div className="flex gap-2">
                    <div className="confirm__password">
                      <div className="mb-2 block">
                        <Label
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
                    <div className="payment__method">
                      <div className="mb-2 block">
                        <Label htmlFor="paymentMethod" value="Payment Method" />
                      </div>
                      <Select id="paymentMethod" icon={CiCreditCard1} required>
                        <option>Visa & Mastercard Debit & Credit Cards</option>
                        <option>
                          Visa & Mastercard Debit & Credit Cards - Paystack
                        </option>
                        <option>PayPal</option>
                      </Select>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="subscription__plan">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="subscriptionPlan"
                          value="Subscription Plan"
                        />
                      </div>
                      <Select
                        id="subscriptionPlan"
                        icon={IoServerOutline}
                        required
                      >
                        <option>Nexaflow Silver Plan</option>
                        <option>Nexaflow Gold Plan</option>
                        <option>Nexaflow Diamond Plan</option>
                      </Select>
                    </div>
                    <div className="subscription__duration">
                      <div className="mb-2 block">
                        <Label
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
                        <option>Quarterly</option>
                        <option>Annually</option>
                      </Select>
                    </div>
                  </div>
                </div>
                <Button gradientDuoTone="greenToBlue">Complete Sign Up</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CompanySignup;
