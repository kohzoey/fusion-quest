import type { MissionCheck } from "../types/content";

/**
 * Module 3's locked blueprint described the INTENT of its Mission
 * Check (one matching question on approach→mechanism, one trade-off
 * identification question, one "why hasn't one approach won"
 * conceptual question) but did not lock literal question text, the
 * way M1/M2's Mission Checks were locked verbatim. These three
 * questions are written now to close that gap, but every fact used
 * is reused directly from already-locked M3 stage content — no new
 * claims, numbers, or physics are introduced here. Flag this for
 * your review the same way M1/M2's Mission Checks went through
 * their own explicit lock pass before being treated as final.
 */
export const module3MissionCheck: MissionCheck = {
  moduleId: "m3",
  questions: [
    {
      id: "m3-q1",
      question: "Which statement correctly matches an approach to how it actually confines or reaches fusion conditions?",
      options: [
        { id: "a", text: "Stellarator: relies on a large internal plasma current" },
        { id: "b", text: "Tokamak: uses only external 3D-shaped coils, with no internal plasma current" },
        {
          id: "c",
          text: "Inertial confinement: compresses a tiny fuel capsule (e.g. with lasers) rather than magnetically confining a large plasma",
        },
        { id: "d", text: "Magnetic confinement: holds plasma for an extremely short time, like inertial confinement" },
      ],
      correctOptionId: "c",
      explanation:
        "Inertial confinement takes a fundamentally different approach from magnetic confinement — compressing a tiny capsule rather than holding a larger plasma in place with magnetic fields. The other three options swap the tokamak and stellarator's actual mechanisms, or describe magnetic confinement as if it shared inertial confinement's short timescale.",
    },
    {
      id: "m3-q2",
      question: "Which of these is a genuine trade-off between tokamaks and stellarators, rather than one design simply being better?",
      options: [
        {
          id: "a",
          text: "Tokamaks have far more research maturity, but their internal plasma current can trigger disruptions and complicates continuous operation",
        },
        { id: "b", text: "Stellarators are already proven to work at commercial scale" },
        { id: "c", text: "Tokamaks have no engineering challenges at all" },
        { id: "d", text: "Stellarators rely on a large internal plasma current, just like tokamaks" },
      ],
      correctOptionId: "a",
      explanation:
        "This is the actual trade-off the module establishes: tokamaks are more mature and technically simpler, but face disruption risk and steady-state challenges from their internal current; stellarators avoid that current (an inherent steady-state advantage) at the cost of extremely complex 3D coil engineering.",
    },
    {
      id: "m3-q3",
      question:
        "Why does fusion research continue to pursue tokamaks, stellarators, and inertial confinement all at once, rather than settling on a single approach?",
      options: [
        {
          id: "a",
          text: "Because each approach involves genuine, different trade-offs, and none has solved every part of the fusion engineering challenge",
        },
        { id: "b", text: "Because scientists haven't yet decided which approach counts as \"real\" fusion" },
        { id: "c", text: "Because only tokamaks are taken seriously, and the others are minor side experiments" },
        { id: "d", text: "Because confinement is no longer a meaningful engineering problem" },
      ],
      correctOptionId: "a",
      explanation:
        "This is the module's closing message: different fusion concepts make different engineering trade-offs. No single approach has closed the entire gap between an experimental demonstration and a practical power plant, which is exactly why multiple paths remain active research directions at once.",
    },
  ],
};
