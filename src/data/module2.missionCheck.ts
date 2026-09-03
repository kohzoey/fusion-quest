import type { MissionCheck } from "../types/content";

/** LOCKED. Transcribed verbatim from the Module 2 Content Blueprint (final patched version), Section 5. */
export const module2MissionCheck: MissionCheck = {
  moduleId: "m2",
  questions: [
    {
      id: "m2-q1",
      question: "Why do nuclei need extremely high temperatures to fuse?",
      options: [
        { id: "a", text: "To destroy the Coulomb barrier completely" },
        {
          id: "b",
          text: "To give nuclei enough kinetic energy to approach closely despite electrostatic repulsion",
        },
        { id: "c", text: "To make nuclei heavier" },
        { id: "d", text: "To remove their electric charge" },
      ],
      correctOptionId: "b",
      explanation:
        "Temperature doesn't remove the repulsion between nuclei — it gives them enough kinetic energy to get close enough for the strong nuclear force to take over.",
    },
    {
      id: "m2-q2",
      question: "What does quantum tunnelling actually do?",
      options: [
        { id: "a", text: "It guarantees that nuclei will fuse" },
        { id: "b", text: "It removes the Coulomb barrier entirely" },
        {
          id: "c",
          text: "It gives nuclei a probability of passing through the Coulomb barrier even without enough classical energy",
        },
        { id: "d", text: "It only happens inside a fusion reactor, not in stars" },
      ],
      correctOptionId: "c",
      explanation:
        "Tunnelling is a chance, not a certainty — it's exactly what lets stars fuse hydrogen despite most particles not having quite enough classical energy to clear the barrier.",
    },
    {
      id: "m2-q3",
      question: "Which three quantities combine to form the triple product?",
      options: [
        { id: "a", text: "Temperature, pressure, and mass" },
        { id: "b", text: "Temperature, density, and energy confinement time" },
        { id: "c", text: "Density, charge, and volume" },
        { id: "d", text: "Mass, energy, and time" },
      ],
      correctOptionId: "b",
      explanation:
        "The triple product (n × T × τ_E) combines exactly these three plasma conditions into one figure of merit.",
    },
    {
      id: "m2-q4",
      question:
        'A student says: "The Fusion Lab turned green, so we achieved fusion ignition." Is this correct?',
      options: [
        { id: "a", text: "Yes, green always means ignition" },
        {
          id: "b",
          text: "No — green only means the calculated triple product reached the labelled educational reference level in this simplified model",
        },
        { id: "c", text: "Yes, because triple product and ignition are the same thing" },
        { id: "d", text: "No, because the Fusion Lab can never turn green" },
      ],
      correctOptionId: "b",
      explanation:
        "Green means the simplified model's number crossed a labelled educational reference line — it says nothing about real ignition, a working reactor, or net energy output, which the Fusion Lab's own disclaimers state directly.",
    },
  ],
};
