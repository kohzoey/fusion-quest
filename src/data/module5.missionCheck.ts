import type { MissionCheck } from "../types/content";

/** LOCKED. Transcribed verbatim from the Module 5 Final Scientific Verification Register / Mission Checks section. */
export const module5MissionCheck: MissionCheck = {
  moduleId: "m5",
  questions: [
    {
      id: "m5-q1",
      question: "What is ITER primarily?",
      options: [
        { id: "a", text: "A commercial electricity-generating power plant" },
        {
          id: "b",
          text: "An international experimental fusion facility designed to demonstrate reactor-relevant fusion performance",
        },
        { id: "c", text: "A private company's fusion prototype" },
        { id: "d", text: "A laser fusion facility" },
      ],
      correctOptionId: "b",
      explanation:
        "ITER is explicitly experimental — its purpose is to demonstrate performance relevant to future power plants, not to sell electricity itself.",
    },
    {
      id: "m5-q2",
      question: "What was significant about NIF's recent ignition results?",
      options: [
        { id: "a", text: "NIF is now supplying electricity to the grid" },
        {
          id: "b",
          text: "NIF's target produced more fusion energy than the laser energy delivered to it — a major scientific milestone, but not a whole-facility net-energy result",
        },
        { id: "c", text: "NIF proved commercial fusion is ready" },
        { id: "d", text: "NIF's results have not been independently confirmed" },
      ],
      correctOptionId: "b",
      explanation:
        "The target-level result is real and significant; it specifically does not mean the whole facility is net-positive on energy.",
    },
    {
      id: "m5-q3",
      question:
        "How should you interpret a private company's announced future fusion target, such as a specific delivery year?",
      options: [
        { id: "a", text: "As an already-achieved result" },
        { id: "b", text: "As a planned/projected goal, true only if and until independently demonstrated" },
        { id: "c", text: "As a guaranteed outcome" },
        { id: "d", text: "As irrelevant information" },
      ],
      correctOptionId: "b",
      explanation:
        "Company targets are real statements of intent, but they are not the same thing as a demonstrated, independently verified result.",
    },
    {
      id: "m5-q4",
      question: "Does a major fusion experiment or milestone automatically mean commercial fusion power is ready?",
      options: [
        { id: "a", text: "Yes, always" },
        { id: "b", text: "No — a breakthrough can prove one important piece works without proving the whole system is ready" },
        { id: "c", text: "Only if it happens at ITER" },
        { id: "d", text: "Only if a private company announces it" },
      ],
      correctOptionId: "b",
      explanation:
        "This is the module's central lesson — physics or engineering success and commercial readiness are different, separately-earned claims.",
    },
    {
      id: "m5-q5",
      question: "When you read a new fusion headline, what should you check first?",
      options: [
        { id: "a", text: "Whether the company involved is famous" },
        {
          id: "b",
          text: "What exactly was measured, at what system boundary, and whether it describes an achieved result or a future target",
        },
        { id: "c", text: "How exciting the headline sounds" },
        { id: "d", text: "Nothing — fusion headlines can be taken at face value" },
      ],
      correctOptionId: "b",
      explanation:
        "This is the transferable skill the whole module has been building toward — every fusion headline is answering a narrower, more specific question than it first appears to.",
    },
  ],
};
