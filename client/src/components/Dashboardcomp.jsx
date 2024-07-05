import React, { useEffect, useState } from "react";
import headshot from "../../src/assets/headshot.jpg";
import { Alert, Avatar, Button, Checkbox, Label, Table } from "flowbite-react";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";

function Dashboardcomp() {
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [username, setUsername] = useState("");
  const [referralLink, setReferralLink] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      setReferralLink(`http://localhost:3001/${storedUsername}`);
    } else {
      // If username is not found, redirect to sign-in page
      navigate("/signin");
    }
  }, [navigate]);

  useEffect(() => {
    // Simulating a fetch call to get the total revenue
    const fetchTotalRevenue = async () => {
      // Fetch the total revenue from API
      const response = await fetch("/api/total-revenue");
      const data = await response.json();
      setTotalRevenue(data.totalRevenue);
    };

    fetchTotalRevenue();
  }, []); // Empty dependency array to run only once

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink).then(
      () => {
        alert("Referral link copied to clipboard!");
      },
      (err) => {
        console.error("Failed to copy: ", err);
      }
    );
  };

  return (
    <main className="main__section p-8">
      <div className="dashboard__top p-8">
        <div className="item">
          <div className="item1__content">
            <div className="itemContent1">
              <h2>Welcome, {username}!</h2>
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
                      <Button onClick={copyToClipboard}>
                        Copy Referral Link
                      </Button>
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
          <div className="activities">
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
            <Table.Row>
              <Table.Cell>
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"Andor Paul"}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"AndorPaul@gmail.com"}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"08053642425"}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"May 31"}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"Andor Paul"}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"AndorPaul@gmail.com"}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"08053642425"}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"May 31"}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"Andor Paul"}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"AndorPaul@gmail.com"}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"08053642425"}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"May 31"}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </main>
  );
}

export default Dashboardcomp;
