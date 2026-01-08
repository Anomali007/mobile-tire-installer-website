"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const serviceOptions = [
  { value: "new-tire", label: "New Tire Install" },
  { value: "rotate-balance", label: "Rotate & Balance" },
  { value: "tpms", label: "TPMS Service" },
  { value: "flat-repair", label: "Flat Repair / Roadside" },
];

const timeOptions = [
  { value: "morning", label: "Morning (8am - 12pm)" },
  { value: "afternoon", label: "Afternoon (12pm - 4pm)" },
  { value: "evening", label: "Evening (4pm - 7pm)" },
];

export function BookingForm() {
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
    if (!data.phone) newErrors.phone = "Phone is required";
    if (!data.email) newErrors.email = "Email is required";
    if (!data.address) newErrors.address = "Address is required";
    if (!data.serviceType) newErrors.serviceType = "Please select a service";
    if (!data.preferredDate) newErrors.preferredDate = "Please select a date";
    if (!data.preferredTime) newErrors.preferredTime = "Please select a time";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    // In production, this would send to an API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <Card className="mx-auto max-w-lg text-center">
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
          Booking Request Received!
        </h3>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Thank you for your booking request. We&apos;ll review your information
          and contact you shortly to confirm your appointment.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Submit Another Request
        </Button>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Service Selection */}
      <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
          Service Details
        </h3>
        <div className="space-y-4">
          <Select
            name="serviceType"
            label="What service do you need?"
            options={serviceOptions}
            placeholder="Select a service"
            error={errors.serviceType}
          />
          <Input
            name="vehicleInfo"
            label="Vehicle Info (Year, Make, Model)"
            placeholder="e.g., 2020 Honda Accord"
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
          Contact Information
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            name="name"
            label="Full Name"
            placeholder="John Smith"
            error={errors.name}
            required
          />
          <Input
            name="phone"
            label="Phone Number"
            type="tel"
            placeholder="(555) 555-5555"
            error={errors.phone}
            required
          />
          <div className="sm:col-span-2">
            <Input
              name="email"
              label="Email Address"
              type="email"
              placeholder="john@example.com"
              error={errors.email}
              required
            />
          </div>
        </div>
      </div>

      {/* Location & Scheduling */}
      <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
          Location & Scheduling
        </h3>
        <div className="space-y-4">
          <Input
            name="address"
            label="Service Address"
            placeholder="123 Main St, Milwaukee, WI 53202"
            error={errors.address}
            required
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              name="preferredDate"
              label="Preferred Date"
              type="date"
              error={errors.preferredDate}
              required
            />
            <Select
              name="preferredTime"
              label="Preferred Time"
              options={timeOptions}
              placeholder="Select a time"
              error={errors.preferredTime}
            />
          </div>
        </div>
      </div>

      {/* Additional Notes */}
      <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
          Additional Information
        </h3>
        <Textarea
          name="notes"
          label="Notes (optional)"
          placeholder="Any special instructions, parking details, or additional information..."
          rows={4}
        />
      </div>

      {/* Submit */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          We&apos;ll contact you to confirm your appointment and discuss any
          details.
        </p>
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Request Booking"}
        </Button>
      </div>
    </form>
  );
}
