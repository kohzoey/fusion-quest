import type { MissionCheck } from "../types/content";

/** LOCKED. Transcribed verbatim from the Module 1 Content Blueprint, Section 5. */
export const module1MissionCheck: MissionCheck = {
  moduleId: "m1",
  questions: [
    {
      id: "m1-q1",
      question: "Which of these best describes nuclear fusion?",
      options: [
        { id: "a", text: "A heavy nucleus splits into smaller pieces" },
        { id: "b", text: "Light nuclei combine to form a heavier nucleus" },
        { id: "c", text: "A nucleus emits radiation without changing" },
        { id: "d", text: "Electrons are removed from an atom" },
      ],
      correctOptionId: "b",
      explanation:
        "Fusion is the combining of light nuclei (such as hydrogen) into a heavier nucleus, releasing energy — the opposite process from fission, which splits heavy nuclei apart.",
    },
    {
      id: "m1-q2",
      question:
        "Which came first — Eddington's proposal that stars are powered by nuclear processes, or Bethe's explanation of the exact reactions responsible?",
      options: [
        { id: "a", text: "Bethe's explanation came first" },
        { id: "b", text: "Eddington's proposal came first" },
        { id: "c", text: "They happened at approximately the same time" },
        { id: "d", text: "The hydrogen bomb came first" },
      ],
      correctOptionId: "b",
      explanation:
        "Eddington proposed the idea in 1920, but the specific nuclear reactions remained unknown until Bethe explained them in 1938–39 — almost two decades later.",
    },
    {
      id: "m1-q3",
      question: "What's the key difference between the 1952 Mike test and the goal of a fusion power plant?",
      options: [
        { id: "a", text: "Mike used fission; a power plant would use fusion" },
        {
          id: "b",
          text: "Mike released fusion energy in a single uncontrolled burst; a power plant needs a sustained, controlled reaction",
        },
        { id: "c", text: "There's no real difference between them" },
        { id: "d", text: "The Mike test failed to release fusion energy" },
      ],
      correctOptionId: "b",
      explanation:
        "The Mike test showed fusion could release enormous energy — but all at once, with no control. A fusion power plant needs the opposite: a steady, regulated reaction sustained over time.",
    },
  ],
};
