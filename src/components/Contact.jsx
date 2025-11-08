import { Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import React, { useState } from "react";

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const action = (
    <React.Fragment>
      <Button color="success" size="small" onClick={() => setOpen(false)}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setOpen(false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  // ---------- Handlers ----------
  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const response = await axios.post(
        "https://pankajswamivaishnav.vercel.app/sendEmail",
        formData
      );
      if (response.status === 200) {
        setOpen(true);
        setLoading(false);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <section className="contact_section" id="contact_section">
        <div className="contact_div">
          <h1>Contact Me</h1>

          <form
            onSubmit={handleSubmit}
            className="contactform"
            id="contactForm"
          >
            <div className="content">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="content">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="content">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="40"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="content">
              <input
                type="submit"
                value={loading ? "Sending" : "Submit"}
                id="submit"
                disabled={loading}
              />
            </div>
          </form>
        </div>
      </section>

      {/* Popup */}
      <Snackbar
        open={open}
        severity="success"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="Email sent successfully!"
        action={action}
        ContentProps={{
          sx: {
            backgroundColor: "rgb(14, 230, 140)",
            color: "black", // optional text color
            fontWeight: "600",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(14, 230, 140, 0.5)",
          },
        }}
      />
    </>
  );
};

export default Contact;
