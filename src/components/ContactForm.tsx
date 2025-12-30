"use client";

import { mailchimp, newsletter } from "@/resources";
import {
  Button,
  Heading,
  Input,
  Text,
  Background,
  Column,
  Row,
  Textarea,
} from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";
import { useState } from "react";

const ContactForm: React.FC<React.ComponentProps<typeof Column>> = ({
  ...flex
}) => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [emailError, setEmailError] = useState<string>("");
  const [submitError, setSubmitError] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    if (email === "") return true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (touched) {
      setEmailError(
        validateEmail(value) ? "" : "Please enter a valid email address."
      );
    }
  };

  const handleBlur = () => {
    setTouched(true);
    setEmailError(
      validateEmail(email) ? "" : "Please enter a valid email address."
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setSubmitError("");

    if (!name || !email || !message) {
      setSubmitError("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      setTouched(true);
      setEmailError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: { "Content-Type": "application/json" },
      });

      const contentType = res.headers.get("content-type") || "";
      let payload: any = null;

      if (contentType.includes("application/json")) {
        payload = await res.json().catch(() => null);
      } else {
        payload = { error: await res.text().catch(() => "Request failed") };
      }

      if (!res.ok) {
        setSubmitError(
          payload?.error || "Something went wrong. Please try again."
        );
        return;
      }

      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setTouched(false);
      setEmailError("");
    } catch (err) {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (newsletter.display === false) return null;

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      {...flex}
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          opacity: mailchimp.effects.grid.opacity as opacity,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width,
          height: mailchimp.effects.grid.height,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color,
        }}
      />
      <Column maxWidth="xs" horizontal="center">
        <Heading marginBottom="s" variant="display-strong-xs">
          {newsletter.title}
        </Heading>
        <Text
          wrap="balance"
          marginBottom="l"
          variant="body-default-l"
          onBackground="neutral-weak"
        >
          {newsletter.description}
        </Text>
      </Column>

      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Column fillWidth maxWidth="xs" gap="8">
          {/* Name */}
          <Input
            id="contact-NAME"
            name="name"
            type="text"
            placeholder="Your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%" }}
          />

          {/* Email */}
          <Input
            id="contact-EMAIL"
            name="email"
            type="email"
            placeholder="Your email"
            required
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            onBlur={handleBlur}
            errorMessage={emailError}
            style={{ width: "100%" }}
          />

          {/* Message */}
          <Textarea
            id="contact-MESSAGE"
            name="message"
            placeholder="Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            lines={4}
            style={{ width: "100%" }}
          />

          <Row height="48" vertical="center">
            <Button size="m" fillWidth type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send message"}
            </Button>
          </Row>

          {submitError && (
            <Text variant="body-default-m" onBackground="danger-strong">
              {submitError}
            </Text>
          )}

          {success && (
            <Text variant="body-default-m" onBackground="brand-strong">
              Message sent!
            </Text>
          )}
        </Column>
      </form>
    </Column>
  );
};

export default ContactForm;
