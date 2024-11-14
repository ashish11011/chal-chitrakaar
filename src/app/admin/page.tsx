import { connect } from "@/dbConfig/dbConfig";
import { ContactUs } from "@/models/contactUsModel";
import React from "react";
import ContactUsFormDetails from "./contactFormData";
import NewsLetterData from "./newsletterData";
import Newsletter from "@/models/newsletterModel";

export const revalidate = 0;

const Page = async () => {
  connect();

  // const contactFormData = await ContactUs.find({ source: "contact-us" });
  const contactFormData = await ContactUs.find({ isDeleted: false });
  const newsletterData = await Newsletter.find({ isDeleted: false });
  // const newsletterData = await Newsletter.find();
  // console.log(contactFormData);
  return (
    <div className="text-white">
      <ContactUsFormDetails
        contactFormDataString={JSON.stringify(contactFormData)}
      />
      <NewsLetterData newsletterDataString={JSON.stringify(newsletterData)} />
    </div>
  );
};

export default Page;
