"use client";

import { FormEvent, useState } from "react";
import { inquiryFields } from "@/data/site-content";

type ContactFormProps = {
  id: string;
  buttonLabel?: string;
  compact?: boolean;
};

type FormState = "idle" | "sending" | "sent" | "error";

export function ContactForm({ id, buttonLabel = "Send", compact = false }: ContactFormProps) {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      form.reset();
      setState("sent");
    } catch {
      setState("error");
    }
  }

  return (
    <form className={`contact-form ${compact ? "contact-form--compact" : ""}`} id={id} onSubmit={handleSubmit}>
      {inquiryFields.map((field) => (
        <label className="contact-form__field" htmlFor={`${id}-${field.name}`} key={field.name}>
          <span>{field.label}</span>
          <input id={`${id}-${field.name}`} name={field.name} placeholder={field.placeholder} required type={field.name === "email" ? "email" : "text"} />
        </label>
      ))}
      <label className="contact-form__field contact-form__field--message" htmlFor={`${id}-message`}>
        <span>What are you thinking?</span>
        <textarea id={`${id}-message`} name="message" placeholder="Tell us what you want Paper Tiger to do." rows={compact ? 3 : 4} />
      </label>
      <button className="button contact-form__button" disabled={state === "sending"} type="submit">
        {state === "sending" ? "Sending…" : buttonLabel}
      </button>
      <p className="contact-form__status" role="status">
        {state === "sent" && "Got it. Paper Tiger will take a look."}
        {state === "error" && "Something went wrong. Please email us instead."}
      </p>
    </form>
  );
}
