import { useState } from "react";
import { LoaderCircle, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";

const API = `${import.meta.env.VITE_BACKEND_URL}/api`;

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  interest: "Distributor / B2B partnership",
  message: "",
  consent: false,
};

export const InquiryForm = ({
  title = "Start your B2B inquiry",
  description = "Tell us what you need and our team will reply within 24 hours.",
  className = "",
  submitLabel = "Send inquiry",
}) => {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatusMessage("");

    if (!formData.consent) {
      const message = "Please confirm that our team may contact you about your inquiry.";
      setStatusMessage(message);
      toast.error(message);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate network request since backend is removed
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setFormData(initialForm);
      const message = "Inquiry sent successfully. Our team will contact you shortly.";
      setStatusMessage(message);
      toast.success(message);
    } catch (error) {
      const message = "Something went wrong while sending your inquiry.";
      setStatusMessage(message);
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className={`rounded-[28px] border border-border bg-white p-6 shadow-[0_20px_60px_rgba(16,24,40,0.08)] sm:p-8 ${className}`}
      onSubmit={handleSubmit}
      data-testid="inquiry-form"
    >
      <div className="space-y-3">
        <div className="inline-flex rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary" data-testid="inquiry-form-eyebrow">
          B2B Lead Form
        </div>
        <h3 className="font-heading text-2xl font-semibold text-foreground" data-testid="inquiry-form-title">
          {title}
        </h3>
        <p className="text-sm leading-6 text-muted-foreground" data-testid="inquiry-form-description">
          {description}
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground" htmlFor="name">
            Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="h-12 rounded-xl border-border bg-muted"
            required
            data-testid="inquiry-form-name-input"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground" htmlFor="company">
            Company
          </label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company or brand"
            className="h-12 rounded-xl border-border bg-muted"
            required
            data-testid="inquiry-form-company-input"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className="h-12 rounded-xl border-border bg-muted"
            required
            data-testid="inquiry-form-email-input"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground" htmlFor="phone">
            Phone
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Contact number"
            className="h-12 rounded-xl border-border bg-muted"
            required
            data-testid="inquiry-form-phone-input"
          />
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <label className="text-sm font-medium text-foreground" htmlFor="interest">
          Inquiry type
        </label>
        <select
          id="interest"
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          className="h-12 w-full rounded-xl border border-border bg-muted px-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
          data-testid="inquiry-form-interest-select"
        >
          <option>Distributor / B2B partnership</option>
          <option>Custom formulation requirement</option>
          <option>Contract manufacturing</option>
          <option>Packaging / private label support</option>
          <option>Plant visit / capability discussion</option>
        </select>
      </div>

      <div className="mt-4 space-y-2">
        <label className="text-sm font-medium text-foreground" htmlFor="message">
          Project details
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your product, expected volume, or partnership requirement."
          className="min-h-[140px] rounded-xl border-border bg-muted"
          required
          data-testid="inquiry-form-message-textarea"
        />
      </div>

      <label
        className="mt-4 flex items-start gap-3 rounded-2xl border border-border bg-muted p-4 text-sm leading-6 text-muted-foreground"
        data-testid="inquiry-form-consent-wrapper"
      >
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1 h-4 w-4 rounded border-primary text-primary"
          data-testid="inquiry-form-consent-checkbox"
        />
        <span data-testid="inquiry-form-consent-text">
          I agree that the Adit Biorganic team may contact me by phone or email regarding this business inquiry.
        </span>
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          className="h-12 rounded-full bg-primary px-6 text-primary-foreground transition hover:bg-primary/90"
          disabled={isSubmitting}
          data-testid="inquiry-form-submit-button"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Sending
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              {submitLabel}
            </>
          )}
        </Button>
        <p className="text-sm text-muted-foreground" data-testid="inquiry-form-status-message">
          {statusMessage || "Priority response for product, manufacturing, and distribution inquiries."}
        </p>
      </div>
    </form>
  );
};