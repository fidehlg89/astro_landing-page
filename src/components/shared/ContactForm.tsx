import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import axios from "axios";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await axios.post("/actions/send-email", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setStatusMessage("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      setStatusMessage("Failed to send the message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-xl font-bold mb-4 text-center">Contact Us</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
          className={`w-full px-3 py-2 border rounded ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: "Email is required" })}
          className={`w-full px-3 py-2 border rounded ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          {...register("message", { required: "Message is required" })}
          rows={4}
          className={`w-full px-3 py-2 border rounded ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full px-4 py-2 text-white rounded ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {statusMessage && (
        <p
          className={`mt-4 text-center ${
            statusMessage.startsWith("Message sent")
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {statusMessage}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
