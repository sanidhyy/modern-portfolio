"use client";

import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";

import { fadeIn } from "@/variants";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.currentTarget;
    const formData = new FormData(myForm);

    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(
        Array.from(formData.entries()) as [string, string][],
      ).toString(),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Thank you. I will get back to you ASAP.");
        } else {
          console.log(res);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-175">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>

          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            name="contact"
          >
            <div className="flex gap-x-6 w-full">
              <input type="hidden" name="form-name" value="contact" />

              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-42.5 px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:translate-y-[-120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>

              <BsArrowRight
                className="translate-y-[-120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
