import mongoose from "mongoose";

const ContactUsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    message: { type: String, required: true },
    source: { type: String, required: true, default: "contact-us" },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const ContactUs =
  mongoose.models.ContactUs || mongoose.model("ContactUs", ContactUsSchema);
