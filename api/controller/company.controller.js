import Company from "../models/company.models.js";
import bcryptjs from "bcryptjs";

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
