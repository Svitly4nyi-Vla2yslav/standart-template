import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import { ContactContainer } from "./ContactPage.styled";

const ContactPage: React.FC = () => {
  return (
    <ContactContainer>
      <ContactForm />
      <GoogleMap />
    </ContactContainer>
  );
};

export default ContactPage;
