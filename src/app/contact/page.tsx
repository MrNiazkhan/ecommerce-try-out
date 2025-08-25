"use client";

import React from "react";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

const ContactPage: React.FC = () => {
  return (
    <>
      <ContactInfo />
      <ContactForm />
    </>
  );
};

export default ContactPage;
