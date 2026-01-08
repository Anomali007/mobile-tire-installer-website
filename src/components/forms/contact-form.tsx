"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const subjectOptions = [
  { value: "general", label: "General Inquiry" },
  { value: "booking", label: "Booking Question" },
  { value: "fleet", label: "Fleet Services" },
  { value: "coverage", label: "Coverage Area Question" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    // Basic validation
    const newErrors: Record<string, string> = {};
    if (!data.name) newErrors.name = "Name is required";
    if (!data.email) newErrors.email = "Email is required";
    if (!data.message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <Card className="text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400">
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          Message Sent!
        </h3>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Thank you for reaching out. We&apos;ll get back to you as soon as possible.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Send Another Message
        </Button>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          name="name"
          label="Your Name"
          placeholder="John Smith"
          error={errors.name}
          required
        />
        <Input
          name="phone"
          label="Phone Number (optional)"
          type="tel"
          placeholder="(555) 555-5555"
        />
      </div>

      <Input
        name="email"
        label="Email Address"
        type="email"
        placeholder="john@example.com"
        error={errors.email}
        required
      />

      <Select
        name="subject"
        label="What can we help with?"
        options={subjectOptions}
        placeholder="Select a topic"
      />

      <Textarea
        name="message"
        label="Message"
        placeholder="How can we help you?"
        rows={5}
        error={errors.message}
        required
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          We typically respond within 1 business day.
        </p>
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
