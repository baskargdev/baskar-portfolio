import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contact } from "../data/contact.js";
import "../styles/buttons.css";
import "../styles/contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    text: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus({ type: "", text: "" });

    const templateParams = {
      name: name.trim(),
      email: email.trim(),
      title: `Portfolio message from ${name.trim()}`,
      message: message.trim(),
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus({
        type: "success",
        text: "Message sent successfully! Thank you for contacting me.",
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        type: "error",
        text: "Unable to send your message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <h2>Contact</h2>

      <form id="f" onSubmit={handleSubmit}>
        <label>
          Your name
          <input
            id="n"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Your email
          <input
            id="e"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Message
          <textarea
            id="m"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>

        <button className="btn p" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send message"}
        </button>

        {status.text && (
          <p
            role="status"
            aria-live="polite"
            style={{
              marginTop: "14px",
              color: status.type === "success" ? "#22c55e" : "#ef4444",
              fontSize: "14px",
            }}
          >
            {status.text}
          </p>
        )}
      </form>

      <div className="links">
        <a href={"mailto:" + contact.email}>{contact.email}</a>

        <a href={contact.phoneHref}>{contact.phone}</a>

        <a href={contact.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>

        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
