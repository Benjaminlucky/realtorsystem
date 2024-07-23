import Company from "../models/company.models.js";

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
      password,
      subscription: {
        plan: subscription.plan,
        duration: subscription.duration,
        paymentMethod: subscription.paymentMethod,
      },
    });

    await newCompany.save();
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default createCompany;
