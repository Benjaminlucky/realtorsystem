import React, { useEffect, useState } from "react";
import axios from "axios";
import headshot from "../../src/assets/headshot.jpg";
import {
  Alert,
  Avatar,
  Button,
  Checkbox,
  Clipboard,
  Label,
  Table,
} from "flowbite-react";
import { useNavigate } from "react-router-dom";
import "../pages/dashboard/dashboard.css";

function Dashboardcomp() {
  const [firstName, setFirstName] = useState("");
  const [referralLink, setReferralLink] = useState("");
  const [referredRealtors, setReferredRealtors] = useState([]);
  const navigate = useNavigate();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedFirstName = localStorage.getItem("firstName");
    if (storedUsername) {
      const capitalizedFirstName = capitalizeFirstLetter(storedFirstName);
      setFirstName(capitalizedFirstName);
      setReferralLink(`http://localhost:3001/${storedUsername}`);
    } else {
      navigate("/signin");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchReferredRealtors = async () => {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        try {
          const apiUrl = `http://localhost:3000/api/realtor/referredby/${storedUsername}`;
          console.log(`Fetching referred realtors from: ${apiUrl}`);
          const response = await axios.get(apiUrl);
          setReferredRealtors(response.data.realtors);
        } catch (error) {
          console.error("Error fetching referred realtors", error);
        }
      }
    };

    fetchReferredRealtors();
  }, []);

  return (
    <main className="main__section p-8">
      <div className="dashboard__top p-8">
        <div className="item">
          <div className="item1__content">
            <div className="itemContent1">
              <h2>Welcome, {firstName}!</h2>
              <p>Here is an overview of your Activities!</p>
            </div>
            <div className="itemContent2">
              <div className="referral">
                <Alert color="warning" rounded>
                  <span className="font-medium">Your Referral Link</span> Share
                  this link to grow your network!
                  <div className="grid w-full">
                    <div className="relative">
                      <Label htmlFor="npm-install" className="sr-only">
                        Label
                      </Label>
                      <input
                        id="npm-install"
                        type="text"
                        className="col-span-6 w-full rounded bg-transparent border font-bold border-transparent"
                        value={referralLink}
                        disabled
                        readOnly
                      />
                      <Clipboard.WithIconText valueToCopy={referralLink}>
                        Copy Referral Link
                      </Clipboard.WithIconText>
                    </div>
                  </div>
                </Alert>
              </div>
            </div>
            <div className="itemContent3 flex items-end">
              <Avatar img={headshot} alt="profile image" size="lg" rounded />
            </div>
          </div>
        </div>
      </div>
      <div className="item"></div>
      <div className="dashboard__mid mt-8">
        <div className="item">
          <div className="activities p-8">
            <div className="total__downlines rounded">
              <div className="downlines">
                <h2>900+</h2>
                <small>Total Downlines</small>
              </div>
              <div className="revenue">
                <h4>+N3,789,678.0</h4>
                <small>This Month</small>
              </div>
            </div>
            <div className="total__sold rounded">
              <div className="plot">
                <h2>17</h2>
                <small>Total Plots Sold</small>
              </div>
              <div className="estate__sold">
                <h4>+3 Estates</h4>
                <small>This Month</small>
              </div>
            </div>
            <div className="total__revenue rounded">
              <div className="revenue">
                <h2>N55,783,889.88</h2>
                <small>All Time Total Revenue</small>
              </div>
              <div className="commission">
                <h4>+20%</h4>
                <small>All Time Commission</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard__bottom mt-14 overflow-x-auto">
        <Table hoverable>
          <Table.Head className="bg-black" color="dark">
            <Table.HeadCell>
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>Realtor</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Phone Number</Table.HeadCell>
            <Table.HeadCell>Birthday</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {referredRealtors.map((realtor) => (
              <Table.Row key={realtor._id}>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {realtor.firstName} {realtor.lastName}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {realtor.emailAddress}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {realtor.phoneNumber}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {new Date(realtor.birthDate).toLocaleDateString()}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </main>
  );
}

export default Dashboardcomp;
