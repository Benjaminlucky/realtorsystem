import Company from "../models/company.models.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const createCompany = async (req, res) => {
  try {
    const {
      companyName,
      companyAddress,
      companySize,
      companyEmail,
      contactPerson,
      username,
      password,
      subscription,
    } = req.body;

    //Validations

    if (!companyName) {
      return res.status(400).json({ message: "Please fill your company name" });
    }

    if (!companyAddress) {
      return res
        .status(400)
        .json({ message: "please fill your Company Address" });
    }

    if (!companySize) {
      return res
        .status(400)
        .json({ message: "Please fill out the company Size Field" });
    }

    if (!companyEmail) {
      return res.status(400).json({ message: "Please fill out company Email" });
    }

    if (!contactPerson.fullName) {
      return res
        .status(400)
        .json({ message: "Please fill out Primary Contact Person Full Name" });
    }

    if (!contactPerson.jobTitle) {
      res
        .status(400)
        .json({ message: "Please fill out Primary Contact Person Job Title" });
    }

    if (!contactPerson.email) {
      res
        .status(400)
        .json({ message: "Please fill out Primary Contact Person Email" });
    }

    if (!contactPerson.phone) {
      res
        .status(400)
        .json({ message: "Please fill out contact Person Phone Number" });
    }

    if (!username) {
      res.status(400).json({ message: "Please fill out the Username Field" });
    }

    if (!password) {
      res.status(400).json({ message: "Please enter your password" });
    }

    if (!subscription.plan) {
      res.status(400).json({ message: "Please choose a subscription Plan" });
    }

    if (!subscription.duration) {
      res
        .status(400)
        .json({ message: "Please choose a subscription Duration" });
    }

    if (!subscription.paymentMethod) {
      res.status(400).json({ message: "Please choose Payment Method" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newCompany = new Company({
      companyName,
      companyAddress,
      companySize,
      companyEmail,
      contactPerson: {
        fullName: contactPerson.fullName,
        jobTitle: contactPerson.jobTitle,
        email: contactPerson.email,
        phone: contactPerson.phone,
      },
      username,
      password: hashedPassword,
      subscription: {
        plan: subscription.plan,
        duration: subscription.duration,
        paymentMethod: subscription.paymentMethod,
      },
    });

    await newCompany.save();
    res.status(201).json(newCompany);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export default createCompany;

export const companySignin = async (req, res) => {
  try {
    // get login credentials from body
    const { companyEmail, password } = req.body;
    if (companyEmail === "") {
      return res
        .status(401)
        .json({ message: "Please enter your company email address" });
    }

    if (password === "") {
      return res.status(401).json({ message: "Please enter your Password" });
    }

    // Validate if Company Exist
    const existingCompany = await Company.findOne({ companyEmail });
    if (!existingCompany) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // Validate Company Password
    const validCompanyPassword = bcryptjs.compareSync(
      password,
      existingCompany.password
    );

    // Generate JWT Token
    const token = jwt.sign(
      { id: existingCompany._id, companyName: existingCompany.companyName },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Sign in successful",
      company: {
        id: existingCompany._id,
        companyName: existingCompany.companyName,
        companyEmail: existingCompany.companyEmail,
      },
      token,
    });
  } catch (error) {
    console.error("error signing in", error);
    return res.status(500).json({ message: "Server Error" });
  }
};
