import React, { useState } from "react";
import Button from "./Button";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const closeModal = () => {
    setSubmit(false);
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  const [submit, setSubmit] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);

    setTimeout(() => {
      setSubmit(false);
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section
      className="flex items-center justify-center p-10"
      style={{
        backgroundImage: `url(${"assets/images/maria-stewart-p4tj0g-_aMM-unsplash.jpg"} )`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="contact"
    >
      <div className="flex items-start flex-col w-[850px] h-[500px] rounded-3xl shadow-black shadow-2xl bg-white">
        <div className="bg-blue-200 w-full h-[55px] postion-absolute rounded-t-2xl p-3 text-2xl text-white font-semibold flex items-center justify-between">
          <h1>Please Say Hi</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between  pt-5 pl-5 ">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Name"
              value={form.name}
              className="bg-gray-50 text-black m-5 rounded-2xl w-[225px] h-[35px] p-2 outline-none"
            />
            <input
              type="email"
              onChange={handleChange}
              name="email"
              value={form.email}
              placeholder="Email"
              className="bg-gray-50 text-black m-5 rounded-2xl w-[225px] h-[35px] p-2 outline-none"
            />
            <input
              onChange={handleChange}
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              className="bg-gray-50 text-black m-5 rounded-2xl w-[225px] h-[35px] p-2 outline-none"
            />
          </div>
          <textarea
            name="message"
            onChange={handleChange}
            value={form.message}
            placeholder="Message"
            className="bg-gray-50 text-black rounded-2xl   p-2 outline-none w-[calc(95%)] h-[calc(105%)] ml-[calc(5%)] "
          />
          <Button containerClass="bg-green-50 text-white rounded-3xl p-2 mt-5 ml-5 w-[calc(95%)] ml-[calc(5%)] ">
            {" "}
            Submit{" "}
          </Button>
        </form>
      </div>
      {submit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-10 shadow-lg w-[90%] text-center">
            <h2 className="text-2xl font-bold mb-5">Message Sent!</h2>
            <p className="mb-5">
              Thank you for contacting us. We will get back to you shortly.
            </p>
            <Button
              containerClass={
                "bg-green-50 text-white rounded-3xl p-2 w-[155px]"
              }
              handleClick={closeModal}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
