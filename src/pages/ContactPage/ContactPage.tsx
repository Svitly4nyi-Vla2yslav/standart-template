import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import GoogleMap from "../../components/GoogleMap/GoogleMap";

const ContactPage: React.FC = () => {
  return (
    <div>
      <ContactForm />
      <GoogleMap />
    </div>
  );
};

export default ContactPage;
