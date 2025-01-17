import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      unique: true,
    },
    companyAddress: {
      type: String,
      required: true,
    },
    companySize: {
      type: String,
      required: true,
    },
    companyEmail: {
      type: String,
      required: true,
      unique: true,
    },
    contactPerson: {
      fullName: {
        type: String,
        required: true,
      },
      jobTitle: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    subscription: {
      paymentMethod: {
        type: String,
        required: true,
      },
      plan: {
        type: String,
        required: true,
      },
      duration: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);

export default Company;
