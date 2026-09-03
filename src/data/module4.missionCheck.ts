import type { MissionCheck } from "../types/content";

/** LOCKED. Transcribed verbatim from the Module 4 Content Blueprint (final locked version, post micro-edit). */
export const module4MissionCheck: MissionCheck = {
  moduleId: "m4",
  questions: [
    {
      id: "m4-q1",
      question: "Does fusion produce electricity directly, the way a battery does?",
      options: [
        { id: "a", text: "Yes, fusion generates electricity directly" },
        {
          id: "b",
          text: "No — fusion would produce heat, which is then converted to electricity through a coolant, turbine, and generator, like most conventional thermal power sources",
        },
        { id: "c", text: "No, fusion cannot be used for electricity at all" },
        { id: "d", text: "Fusion produces electricity only in space" },
      ],
      correctOptionId: "b",
      explanation:
        "Fusion's novelty is in how the heat is generated — the conversion from heat to electricity uses essentially the same chain as most conventional thermal power sources, unlike non-thermal sources such as solar PV or wind.",
    },
    {
      id: "m4-q2",
      question: "Which statement best describes fusion's fuel resources?",
      options: [
        { id: "a", text: "Both deuterium and tritium are abundant in seawater" },
        {
          id: "b",
          text: "Deuterium is abundant in water; tritium is radioactive and not naturally abundant, and is expected to be bred from lithium",
        },
        { id: "c", text: "Fusion fuel does not exist naturally at all" },
        { id: "d", text: "Lithium is the primary fusion fuel" },
      ],
      correctOptionId: "b",
      explanation:
        "Deuterium and tritium have genuinely different resource stories — collapsing them into one \"fusion fuel is abundant\" statement hides an important distinction.",
    },
    {
      id: "m4-q3",
      question: "How does fusion's waste compare to fission's?",
      options: [
        { id: "a", text: "Fusion produces zero radioactive material of any kind" },
        { id: "b", text: "Fusion produces exactly the same waste as fission" },
        {
          id: "c",
          text: "Fusion does not produce the same long-lived, high-level waste as fission, but it does produce activated materials and requires tritium handling",
        },
        { id: "d", text: "Fusion produces more radioactive waste than fission" },
      ],
      correctOptionId: "c",
      explanation:
        "The correct comparison is specific — fusion avoids one particular category of fission's waste, not radioactivity altogether.",
    },
    {
      id: "m4-q4",
      question:
        'A student says: "Fusion can\'t undergo a meltdown, so fusion power plants are completely safe." Is this correct?',
      options: [
        { id: "a", text: "Yes, completely correct" },
        {
          id: "b",
          text: "No — fusion genuinely cannot undergo a fission-style runaway chain reaction, but that's a specific safety claim, not a claim that all risk is eliminated",
        },
        { id: "c", text: "No, fusion actually can melt down the same way fission can" },
        { id: "d", text: "The statement is meaningless because fusion isn't radioactive at all" },
      ],
      correctOptionId: "b",
      explanation:
        "This is the module's most important distinction — a real, specific safety advantage does not mean zero risk of any kind.",
    },
    {
      id: "m4-q5",
      question: "What is the main gap between a fusion physics experiment and a commercial fusion power plant?",
      options: [
        { id: "a", text: "There is no real gap — if the physics works once, commercial power follows automatically" },
        {
          id: "b",
          text: "A commercial plant requires sustained operation, durable materials, a working fuel cycle, and competitive economics — not just achieving fusion conditions once",
        },
        { id: "c", text: "The only remaining problem is making the plasma hotter" },
        { id: "d", text: "Commercial fusion has already been achieved" },
      ],
      correctOptionId: "b",
      explanation:
        "The gap is systemic — materials, fuel cycle, reliability, and economics all matter, not just plasma physics alone.",
    },
  ],
};
