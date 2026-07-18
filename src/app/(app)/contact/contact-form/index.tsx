"use client";

import { contactForm, responseNote } from "@app/contact/constants";
import { Button } from "@components/button";
import FullWidthWrapper from "@components/full-width-wrapper";
import SectionHeading from "@components/section-heading";
import { useState, type FormEvent } from "react";
import type { ContactFormPayload, ContactFormStatus } from "./types";

const fieldClass =
  "w-full border bg-transparent px-4 py-3 text-(length:--fs-4xs) text-neutral-950 outline-none placeholder:text-neutral-500 focus-visible:ring-2";

const fieldStyle = {
  borderColor: "var(--color-border)",
  borderRadius: "var(--radius-sm)",
  ["--tw-ring-color" as string]: "var(--color-focus)",
};

const ContactFormSection = () => {
  const [values, setValues] = useState<ContactFormPayload>({
    name: "",
    contact: "",
    message: "",
  });
  const [status, setStatus] = useState<ContactFormStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("pending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      setValues({ name: "", contact: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <FullWidthWrapper wrapperClassName="py-14 not-md:py-10">
      <SectionHeading
        className="mb-8"
        title={contactForm.title}
        description={contactForm.description}
      />
      {status === "success" ? (
        <p className="m-0 max-w-[50ch] text-(length:--fs-s) leading-normal font-normal tracking-normal text-neutral-950">
          Thanks — your message is in. We'll get back to you soon.
        </p>
      ) : (
        <form
          onSubmit={(event) => {
            void handleSubmit(event);
          }}
          className="flex max-w-[50ch] flex-col gap-4"
        >
          <input
            required
            type="text"
            name="name"
            placeholder="Your name"
            value={values.name}
            onChange={(event) => {
              setValues((prev) => {
                return { ...prev, name: event.target.value };
              });
            }}
            className={fieldClass}
            style={fieldStyle}
          />
          <input
            required
            type="text"
            name="contact"
            placeholder="Phone or email"
            value={values.contact}
            onChange={(event) => {
              setValues((prev) => {
                return { ...prev, contact: event.target.value };
              });
            }}
            className={fieldClass}
            style={fieldStyle}
          />
          <textarea
            required
            name="message"
            placeholder="What can we help with?"
            rows={4}
            value={values.message}
            onChange={(event) => {
              setValues((prev) => {
                return { ...prev, message: event.target.value };
              });
            }}
            className={fieldClass}
            style={fieldStyle}
          />
          <div className="flex flex-wrap items-center gap-4">
            <Button
              type="submit"
              disabled={status === "pending"}
              variant="filled"
              color="accent"
              colorWeight={600}
              hoverBgColorWeight={800}
              size="lg"
            >
              {status === "pending" ? "Sending…" : "Send message"}
            </Button>
            {status === "error" && (
              <span className="text-(length:--fs-4xs) text-error-700">
                Something went wrong — please try again.
              </span>
            )}
          </div>
        </form>
      )}
      <p className="m-0 mt-8 max-w-[55ch] text-(length:--fs-4xs) leading-normal font-normal tracking-normal text-neutral-700">
        {responseNote}
      </p>
    </FullWidthWrapper>
  );
};

ContactFormSection.displayName = "ContactFormSection";

export default ContactFormSection;
