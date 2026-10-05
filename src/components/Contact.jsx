import React, { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import axios from "axios";

const inquiryTypes = [
  { id: "fulltime", label: "Full-Time Role", icon: "🚀" },
  { id: "freelance", label: "Project / Contract", icon: "💼" },
  { id: "architecture", label: "Architecture / Review", icon: "⚡" },
  { id: "chat", label: "General Inquiry", icon: "💬" },
];

const Contact = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "Full-Time Role",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInquirySelect = (label) => {
    setFormData((prev) => ({ ...prev, inquiryType: label }));
  };

  const handleCopyEmail = async () => {
    const emailToCopy = "pankajvaishnav128@gmail.com";
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(emailToCopy);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = emailToCopy;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch (err) {
      console.error("Clipboard copy failed:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    try {
      setLoading(true);
      const combinedMessage = `[Inquiry Type: ${formData.inquiryType}]${formData.subject ? `\n[Subject: ${formData.subject}]` : ""
        }\n\n${formData.message}`;

      const payload = {
        name: formData.name,
        email: formData.email,
        message: combinedMessage,
      };

      const response = await axios.post(
        "https://pankajswamivaishnav.vercel.app/sendEmail",
        payload
      );

      if (response.status === 200) {
        setSnackbarMessage("Message dispatched successfully! I will get back to you shortly.");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
        setFormData({
          name: "",
          email: "",
          inquiryType: "Full-Time Role",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Non-200 response from endpoint");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setSnackbarMessage(
        "Notice: Message dispatch server is currently slow. Feel free to copy my direct email!"
      );
      setSnackbarSeverity("info");
      setOpenSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact_section" id="contact_section">
      {/* Ambient background glows */}
      <div className="contact_ambient_glow top_glow"></div>
      <div className="contact_ambient_glow bottom_glow"></div>

      <div className="contact_container">
        {/* Section Header */}
        <div className="contact_head">
          <div className="contact_tag_pill">
            <span className="pulse_dot"></span>
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="contact_title">
            Let's Build Something <span className="highlight_accent">Exceptional</span>
          </h2>

          <p className="contact_subtitle">
            Have a project in mind, an engineering opportunity, or need full-stack consultation?
            Let's connect and discuss how we can bring ideas into scalable reality.
          </p>
        </div>

        {/* 2-Column Cohesive Layout */}
        <div className="contact_layout_grid">
          {/* Left Column: Developer Contact Cards & Channels */}
          <div className="contact_info_panel">
            {/* Live Availability Badge Card */}
            <div className="contact_card availability_card">
              <div className="availability_header">
                <span className="pulse_dot active_pulse"></span>
                <span className="availability_status">Current Status</span>
              </div>
              <h3 className="availability_title">Open for Full-Time Roles & Projects</h3>
              <p className="availability_desc">
                Currently engineering scalable software at <strong>SpeedupOra</strong>.
                Always excited about challenging opportunities, innovative startups, and impactful systems.
              </p>
              <div className="response_time_badge">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Estimated Response Time: &lt; 24 hours</span>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="contact_methods_list">
              {/* Email Card with One-Click Copy */}
              <div className="contact_method_card email_method">
                <div className="method_icon_box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div className="method_details">
                  <span className="method_label">Direct Email</span>
                  <a
                    href="mailto:pankajvaishnav128@gmail.com"
                    className="method_value email_link"
                    title="Send Email via Mail App"
                  >
                    pankajvaishnav128@gmail.com
                  </a>
                </div>
                <button
                  type="button"
                  className={`copy_btn ${copied ? "copied" : ""}`}
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="contact_method_card">
                <div className="method_icon_box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="method_details">
                  <span className="method_label">Location & Timezone</span>
                  <span className="method_value">Jaipur, Rajasthan, India</span>
                  <span className="method_sub">IST (UTC +5:30) • Open to Remote Worldwide</span>
                </div>
              </div>
            </div>

            {/* Developer Terminal Snippet Card */}
            <div className="developer_terminal_card">
              <div className="terminal_top_bar">
                <div className="terminal_dots">
                  <span className="dot dot_red"></span>
                  <span className="dot dot_yellow"></span>
                  <span className="dot dot_green"></span>
                </div>
                <span className="terminal_tab_title">developer_spec.json</span>
              </div>
              <pre className="terminal_code_block">
                <code>
                  <span className="code_bracket">{"{"}</span>{"\n"}
                  {"  "}<span className="code_key">"engineer"</span>: <span className="code_str">"Pankaj Swami Vaishnav"</span>,{"\n"}
                  {"  "}<span className="code_key">"role"</span>: <span className="code_str">"Full Stack Engineer"</span>,{"\n"}
                  {"  "}<span className="code_key">"stack"</span>: [<span className="code_str">"React"</span>, <span className="code_str">"Node"</span>, <span className="code_str">"Express"</span>, <span className="code_str">"MongoDB"</span>, <span className="code_str">"C++"</span>],{"\n"}
                  {"  "}<span className="code_key">"willingToRelocate"</span>: <span className="code_bool">true</span>,{"\n"}
                  {"  "}<span className="code_key">"coffee"</span>: <span className="code_str">"☕ Always brewed"</span>{"\n"}
                  <span className="code_bracket">{"}"}</span>
                </code>
              </pre>
            </div>

            {/* Social Media Channels */}
            <div className="contact_social_panel">
              <span className="social_panel_title">Connect across platforms:</span>
              <div className="contact_social_grid">
                <a
                  href="https://github.com/pankajswamivaishnav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact_social_pill"
                  aria-label="GitHub Profile"
                >
                  <i className="fa-brands fa-github"></i>
                  <span>GitHub</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/pankajswamivaishnav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact_social_pill"
                  aria-label="LinkedIn Profile"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                  <span>LinkedIn</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>

                <a
                  href="https://instagram.com/pankajswamivaishnav?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact_social_pill"
                  aria-label="Instagram Profile"
                >
                  <i className="fa-brands fa-instagram"></i>
                  <span>Instagram</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Interactive Contact Form */}
          <div className="contact_form_wrapper">
            <div className="contact_form_card">
              {/* Terminal Window Header */}
              <div className="form_card_header">
                <div className="terminal_dots">
                  <span className="dot dot_red"></span>
                  <span className="dot dot_yellow"></span>
                  <span className="dot dot_green"></span>
                </div>
                <div className="form_window_title">
                  <span className="code_icon">&lt;/&gt;</span>
                  <span>message_dispatch.tsx</span>
                </div>
                <div className="form_secure_tag">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <span>Encrypted</span>
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="modern_contact_form">
                {/* Inquiry Selector */}
                <div className="inquiry_group">
                  <label className="field_label">I want to discuss:</label>
                  <div className="inquiry_chip_grid">
                    {inquiryTypes.map((item) => {
                      const isSelected = formData.inquiryType === item.label;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          className={`inquiry_chip ${isSelected ? "selected" : ""}`}
                          onClick={() => handleInquirySelect(item.label)}
                        >
                          <span className="chip_emoji">{item.icon}</span>
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="form_row_grid">
                  <div className="field_group">
                    <label htmlFor="name" className="field_label">
                      Your Name <span className="required_star">*</span>
                    </label>
                    <div className="input_icon_wrap">
                      <svg className="field_icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="e.g. Alex Rivera"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form_input"
                      />
                    </div>
                  </div>

                  <div className="field_group">
                    <label htmlFor="email" className="field_label">
                      Your Email <span className="required_star">*</span>
                    </label>
                    <div className="input_icon_wrap">
                      <svg className="field_icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form_input"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject Field */}
                <div className="field_group">
                  <label htmlFor="subject" className="field_label">
                    Subject / Project Scope <span className="optional_tag">(Optional)</span>
                  </label>
                  <div className="input_icon_wrap">
                    <svg className="field_icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="e.g. Full-Stack MERN Architecture or Contract"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form_input"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="field_group">
                  <label htmlFor="message" className="field_label">
                    Message <span className="required_star">*</span>
                  </label>
                  <div className="input_icon_wrap textarea_wrap">
                    <svg className="field_icon textarea_icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <textarea
                      name="message"
                      id="message"
                      rows="5"
                      placeholder="Hello Pankaj, I'd like to talk about..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form_textarea"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="contact_submit_btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner_circle"></span>
                      <span>Dispatching Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>

                <p className="form_disclaimer">
                  🔒 Your information is confidential and will never be shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Snackbar Notification */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
          sx={{
            width: "100%",
            backgroundColor: snackbarSeverity === "success" ? "rgb(20, 30, 24)" : "rgb(35, 30, 20)",
            color: "#ffffff",
            border: snackbarSeverity === "success" ? "1px solid rgb(14, 230, 140)" : "1px solid #ffd166",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.6)",
            fontSize: "0.95rem",
            borderRadius: "12px",
            "& .MuiAlert-icon": {
              color: snackbarSeverity === "success" ? "rgb(14, 230, 140)" : "#ffd166",
            },
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Contact;
