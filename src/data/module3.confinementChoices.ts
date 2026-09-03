export interface ConfinementOption {
  id: "tokamak" | "stellarator" | "inertial";
  name: string;
  whyItCanWork: string;
  strength: string;
  challenge: string;
  reasoningQuestion: string;
  reasoningOptions: { id: string; text: string }[];
}

/**
 * LOCKED. Transcribed from the Module 3 Final Locked Specification,
 * Section 6 (Challenge Specification). Each option's content
 * reuses claims already established in Stages 7–8 of the module —
 * no new claims are introduced here. There is deliberately no
 * "correct" reasoningOptions answer: every option is a genuine,
 * real engineering priority, per the locked spec's own instruction.
 */
export const confinementOptions: ConfinementOption[] = [
  {
    id: "tokamak",
    name: "Tokamak",
    whyItCanWork:
      "A tokamak drives a large electric current through the plasma itself to help create the confining field — technically simpler, and the most mature, most tested fusion design.",
    strength: "Extensive research maturity and operating experience.",
    challenge: "The internal plasma current can trigger disruptions, and it makes continuous operation harder.",
    reasoningQuestion: "Which engineering challenge would you personally want to solve first for a tokamak?",
    reasoningOptions: [
      { id: "disruptions", text: "Reducing disruption risk" },
      { id: "steady-state", text: "Achieving continuous operation" },
    ],
  },
  {
    id: "stellarator",
    name: "Stellarator",
    whyItCanWork:
      "A stellarator shapes its entire twisting field using only external coils, wound into a complex 3D shape — no large internal plasma current needed.",
    strength: "An inherent advantage for steady-state operation and far fewer disruptions.",
    challenge: "Building the precisely-shaped 3D coils is an extremely difficult engineering problem.",
    reasoningQuestion: "Which engineering challenge would you personally want to solve first for a stellarator?",
    reasoningOptions: [
      { id: "coil-manufacturing", text: "Simplifying coil manufacturing" },
      { id: "maturity", text: "Improving research maturity" },
    ],
  },
  {
    id: "inertial",
    name: "Inertial Confinement",
    whyItCanWork:
      "Instead of holding plasma steady, inertial confinement compresses a tiny fuel capsule so fast and hard that fusion conditions are briefly reached before the capsule flies apart.",
    strength: "A fundamentally different approach — useful for understanding fusion physics under extreme, brief compression.",
    challenge: "Confinement time is extremely short, the opposite of magnetic confinement's approach.",
    reasoningQuestion: "Which engineering challenge would you personally want to solve first for inertial confinement?",
    reasoningOptions: [
      { id: "precision", text: "Improving compression precision" },
      { id: "repetition", text: "Increasing repetition rate" },
    ],
  },
];

export const closingPrompt =
  "There's no single correct machine here — every real approach involves genuine trade-offs. That's exactly why fusion research still pursues more than one path at once.";
