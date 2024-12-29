import React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, email, message }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.5", color: "#333" }}>
      <h2 style={{ color: "#4CAF50" }}>New Contact Request</h2>
      <p>You have received a new message from your landing page contact form. Below are the details:</p>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0" }}>
        <tbody>
          <tr>
            <th
              style={{
                textAlign: "left",
                padding: "8px",
                border: "1px solid #ddd",
                backgroundColor: "#f9f9f9",
              }}
            >
              Name
            </th>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>{name}</td>
          </tr>
          <tr>
            <th
              style={{
                textAlign: "left",
                padding: "8px",
                border: "1px solid #ddd",
                backgroundColor: "#f9f9f9",
              }}
            >
              Email
            </th>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>{email}</td>
          </tr>
          <tr>
            <th
              style={{
                textAlign: "left",
                padding: "8px",
                border: "1px solid #ddd",
                backgroundColor: "#f9f9f9",
              }}
            >
              Message
            </th>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>{message}</td>
          </tr>
        </tbody>
      </table>
      <p style={{ marginTop: "20px" }}>Please respond to this inquiry as soon as possible.</p>
      <p style={{ fontSize: "0.9em", color: "#555" }}>
        This is an automated email. Please do not reply directly to this message.
      </p>
    </div>
  );
};

export default EmailTemplate;
