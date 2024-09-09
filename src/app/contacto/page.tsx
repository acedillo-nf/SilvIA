'use client'
import ContactForm from "@/components/landing-page/ContactForm";
import Footer from "@/components/landing-page/Footer";
import NavBar from "@/components/navbar";
import React from "react";


const ContactPage = () => {
    return (
        <main className="">
      <NavBar /> 
      <section>
         <ContactForm/>
      </section> 
      <footer>
        <Footer/>
      </footer>

      </main>
     
    )
}
export default ContactPage