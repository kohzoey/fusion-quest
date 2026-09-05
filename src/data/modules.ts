import type { ModuleContent } from "../types/content";
import { module1Timeline } from "./module1.timeline";
import { module1MissionCheck } from "./module1.missionCheck";
import { module2MissionCheck } from "./module2.missionCheck";
import { fusionLabConfig } from "./fusionLab.config";
import { tokamakComponents } from "./module3.tokamak";
import { confinementOptions } from "./module3.confinementChoices";
import { module3MissionCheck } from "./module3.missionCheck";
import { gridPriorities } from "./module4.gridPriorities";
import { module4MissionCheck } from "./module4.missionCheck";
import { module5Claims } from "./module5.claims";
import { module5MissionCheck } from "./module5.missionCheck";

/**
 * FINAL LOCKED CONTENT — transcribed verbatim from the Module 1
 * Content Blueprint (final patched version). Do not rewrite,
 * simplify, or expand this prose without returning to that
 * document first.
 */
export const module1: ModuleContent = {
  id: "m1",
  order: 1,
  title: "The Dawn of Fusion",
  subtitle: "From Stars to Controlled Fusion",
  missionFraming:
    "The Sun has been shining for over 4.6 billion years without going out. If it burned the way a campfire burns, it would have used up all its fuel long before humans ever existed. So what's actually keeping it going?",
  stages: [
    {
      id: "fusion-vs-fission",
      title: "Fusion vs. Fission",
      explanation:
        "Two important nuclear processes that can release energy are fusion and fission — and it's easy to mix them up, so it's worth getting this straight before anything else.\n\nFusion: light nuclei combine to form a heavier nucleus, releasing energy in the process. This is what powers the Sun and every other star.\n\nFission: a heavy nucleus splits apart into smaller pieces, also releasing energy. This is what powers conventional nuclear power plants today.\n\nThink of it as two opposite directions on the same idea: fusion pushes small nuclei together; fission breaks one large nucleus apart. Both release energy, but they rely on different physics, different fuels, and completely different technology.",
      visual: {
        kind: "diagram",
        ref: "/illustrations/m1-fusion-vs-fission.svg",
        alt: "Side-by-side diagram: on the left, two light nuclei merge into one heavier glowing nucleus (fusion); on the right, one heavy nucleus splits into two smaller nuclei (fission)",
      },
    },
    {
      id: "eddington",
      title: "Eddington",
      explanation:
        "In 1920, British astrophysicist Arthur Eddington proposed something bold: the Sun's energy comes from nuclear processes happening deep in its core.\n\nAt the time, this was a genuine leap. Scientists knew the Sun released enormous amounts of energy over billions of years — far more than any chemical process, like ordinary burning, could ever produce. Eddington's insight was that the answer had to lie inside the atom itself. What he couldn't say yet was exactly which nuclear process was responsible — the detailed physics of the atomic nucleus was still being worked out in the 1920s. He had identified the right direction, without yet having the specific mechanism.",
      source: { label: "History-of-physics account of Eddington's 1920 proposal", type: "independentlyReported" },
      visual: {
        kind: "diagram",
        ref: "/illustrations/m1-eddington.svg",
        alt: "Abstract illustration of an astronomer silhouette observing a glowing star through a telescope, with faint question-mark shapes suggesting the mechanism was still unknown",
      },
    },
    {
      id: "bethe",
      title: "Bethe",
      explanation:
        "Nearly two decades later, in 1938–39, Hans Bethe explained the nuclear reactions responsible for energy generation in stars.\n\nAt a conceptual level: inside a star like our Sun, hydrogen nuclei (protons) fuse together in a multi-step sequence — the proton-proton chain — eventually producing helium and releasing energy at each step along the way. In hotter, more massive stars, a related sequence called the CNO cycle does the same basic job using carbon, nitrogen, and oxygen as helpers in the process.\n\nHis work provided the specific nuclear explanation for how stars generate their energy, and it was recognised with the 1967 Nobel Prize in Physics.",
      source: { label: "History-of-physics account of Bethe's 1938–39 work; 1967 Nobel Prize record", type: "independentlyReported" },
      visual: {
        kind: "diagram",
        ref: "/illustrations/m1-bethe.svg",
        alt: "Diagram of a multi-step reaction chain — a sequence of glowing nuclei connected by arrows, growing brighter at each step, ending in a large glowing core representing the proton-proton chain",
      },
    },
    {
      id: "nucleosynthesis",
      title: "Stellar Nucleosynthesis",
      explanation:
        "One important distinction before moving on: explaining how stars generate energy is not the same question as explaining how stars build up all the chemical elements.\n\nBethe's work answered the first question — the specific reactions that power a star day to day. The second, bigger question — how stars, over their entire lifetimes, build up nearly every element on the periodic table — is called stellar nucleosynthesis, and it was worked out by many physicists over the decades that followed Bethe's own contribution. The two ideas are closely related, but they're not the same discovery, and it's not accurate to credit either one entirely to a single scientist.",
      visual: {
        kind: "diagram",
        ref: "/illustrations/m1-nucleosynthesis.svg",
        alt: "A glowing star at the centre with abstract geometric element symbols drifting outward at increasing distances, suggesting elements being formed and dispersed over a star's lifetime",
      },
    },
    {
      id: "mike-test",
      title: "From Stars to the Hydrogen Bomb",
      explanation:
        "If fusion could release that much energy inside a star, could humans release it on Earth?\n\nThe answer came in 1952 — not as a source of power, but as a weapon. On 31 October 1952, the first thermonuclear device, code-named Mike, was tested at Enewetak Atoll. It demonstrated that the enormous energy released by a thermonuclear fusion process could be produced on Earth.\n\nThis is a critical distinction to hold onto for the rest of this app: the Mike test was uncontrolled fusion — an entire reaction released in a single, instantaneous, explosive burst, with no attempt to regulate or sustain it. A fusion power plant has a very different goal: a controlled, sustained reaction that releases energy steadily over time, in a way that can be safely managed. Proving fusion could release energy was one problem. Learning to control it was an entirely different, much harder one — and that's the problem the rest of fusion research has been tackling ever since.",
      source: { label: "Historical record of the 31 October 1952 Ivy Mike test, Enewetak Atoll", type: "independentlyReported" },
      visual: {
        kind: "diagram",
        ref: "/illustrations/m1-mike-test.svg",
        alt: "Side-by-side contrast: on the left, a sharp uncontrolled starburst shape representing a single explosive release; on the right, a smooth, steady glowing core held within concentric containing rings, representing a controlled, sustained reaction",
      },
    },
    {
      id: "early-fusion",
      title: "Early Controlled Fusion",
      explanation:
        "The search for controlled fusion began with a deceptively simple idea: Z-pinch.\n\nIf you run an electric current through a plasma, that current generates its own magnetic field — and that field squeezes, or \"pinches,\" the plasma inward, holding it away from any physical wall. A fusion-hot plasma would place extreme thermal loads on any material surface it touched, so researchers looked for ways to confine the plasma without letting it contact the walls.\n\nIn practice, Z-pinch plasmas turned out to be unstable — they tended to wobble, kink, and break apart before fusion conditions could be properly sustained. This instability became one of the defining challenges of early fusion research.\n\nAround the same time, in the mid-1950s, Soviet researchers began experimenting with a different shape: a toroidal (donut-shaped) magnetic confinement configuration. This approach led to the T-1 device, which began operating in 1958 and is generally considered the first tokamak. The tokamak approach offered a new way to improve plasma confinement and became an important direction in fusion research. Decades later, it remains the design basis for the world's largest fusion project, ITER, which Module 5 covers in detail.",
      visual: {
        kind: "diagram",
        ref: "/illustrations/m1-early-fusion.svg",
        alt: "Side-by-side comparison: on the left, a linear plasma column squeezed inward by curved magnetic field lines (Z-pinch); on the right, a donut-shaped toroidal tokamak with a glowing inner plasma ring",
      },
    },
    {
      id: "decades-quest",
      title: "The Decades-Long Quest",
      explanation:
        "By this point, scientists had learned a huge amount: what fusion actually needs to happen (extreme temperature to overcome the natural repulsion between nuclei), how much plasma needs to be present, and how long those conditions need to be sustained for a reaction to be worthwhile.\n\nKnowing what was needed turned out to be very different from being able to actually build it. Achieving and holding those exact conditions, reliably, safely, and for long enough — using real materials and real engineering — has remained one of the hardest sustained challenges in physics and engineering for more than 70 years.\n\nScientists had learned what fusion needed. The next challenge was learning how to create and control those conditions.",
      visual: {
        kind: "diagram",
        ref: "/illustrations/m1-decades-quest.svg",
        alt: "A long winding path across the image with glowing milestone nodes along it, growing brighter toward the end, suggesting gradual progress over a decades-long research journey",
      },
    },
  ],
  flagshipInteraction: { component: "Timeline", config: module1Timeline },
  missionCheck: module1MissionCheck,
  transitionToNext:
    "Scientists had learned what fusion needed: extreme temperature, sufficient density, and confinement long enough to sustain the reaction. The next challenge was learning how to actually create and control those conditions here on Earth. That's exactly where Module 2: The Core Mechanics begins.",
};

/**
 * FINAL LOCKED CONTENT — transcribed verbatim from the Module 2
 * Content Blueprint (final patched version), including the pressure
 * bridge sentence from the Architecture Patches document (Patch 1),
 * inserted at the end of the "Three Conditions" stage per that
 * patch's own placement instruction (after the "temperature alone
 * isn't enough" stage, before the Lawson/triple-product stage).
 */
export const module2: ModuleContent = {
  id: "m2",
  order: 2,
  title: "The Core Mechanics",
  subtitle: "What Fusion Needs",
  missionFraming:
    "Stars can sustain nuclear fusion in their hot, dense cores, releasing enormous amounts of energy. So why can't we just recreate that here? The answer starts with something very basic: the particles we need to bring together don't want to be brought together.",
  stages: [
    {
      id: "coulomb-barrier",
      title: "The Coulomb Barrier",
      explanation:
        "Nuclei repel each other because they're both positively charged. To fuse, they need to get extremely close — close enough for a much stronger, but very short-range, force to take over. Higher temperature means the nuclei have, on average, more kinetic energy, increasing the chance that they can get close enough for fusion to occur.",
      misconception: "Temperature doesn't \"break\" or \"destroy\" the Coulomb barrier — it increases the chance particles get close enough despite it.",
    },
    {
      id: "tunnelling",
      title: "Quantum Tunnelling",
      explanation:
        "At the Sun's core temperature, most nuclei do not have enough classical energy to overcome the Coulomb barrier directly. Quantum tunnelling gives a small probability that some nuclei can pass through the barrier anyway.",
      misconception:
        "Tunnelling is a chance, not a guarantee — never \"nuclei always tunnel through,\" \"tunnelling removes the barrier,\" or \"tunnelling guarantees fusion.\"",
    },
    {
      id: "dt-fusion",
      title: "D-T Fusion",
      explanation:
        "When deuterium and tritium — two heavier forms of hydrogen — fuse, they produce helium, a neutron, and a burst of energy. Deuterium is abundant in seawater. Tritium is radioactive and not naturally abundant — future fusion power plants are expected to produce their own tritium from lithium as they run.",
      misconception:
        "\"Fusion fuel is abundant\" is an oversimplification — deuterium and tritium have genuinely different resource stories and should never be collapsed into one blanket claim.",
      source: { label: "IAEA Physics Section, \"Fusion Basics\"; World Nuclear Association, \"Nuclear Fusion Power\"", type: "primary" },
    },
    {
      id: "mass-defect",
      title: "Where Does the Energy Come From?",
      explanation:
        "The particles produced by the reaction weigh very slightly less, combined, than the particles that went in. That \"missing\" mass doesn't disappear — it becomes the energy released, following Einstein's famous equation.",
    },
    {
      id: "three-conditions",
      title: "Three Conditions: The Fusion \"Triple Challenge\"",
      explanation:
        "Fusion needs all three things working together: hot enough, dense enough, and held together long enough. Missing any one means the others can't make up for it on their own.\n\nPressure is closely related to a plasma's density and temperature — physically, it's what you get when you combine the two. In fusion research, conditions are usually described using density, temperature, and confinement time directly (rather than pressure as a separate variable), which is exactly why Fusion Lab uses those three quantities.",
      misconception: "\"Temperature alone is enough\" — density and confinement time matter just as much, and none of the three can compensate fully for the others.",
    },
    {
      id: "lawson-triple-product",
      title: "Lawson Criterion and Triple Product",
      explanation:
        "The Lawson criteria set the minimum plasma temperature and the minimum density × confinement time needed for useful fusion performance. The triple product is the single number scientists calculate from density, temperature, and confinement time to check how demanding those conditions are.\n\nTriple product tells us about plasma conditions. It is not the same as Q or electrical efficiency — those measure something different, which Module 5 explains when it covers real experiments like NIF.",
      misconception: "\"Triple product = Q\" — the triple product describes plasma conditions; Q is an energy ratio at a specified accounting boundary. They are not interchangeable.",
      source: { label: "J.D. Lawson (1955); Wurzel & Hsu, Physics of Plasmas 29, 062103 (2022)", type: "primary" },
    },
    {
      id: "fusion-lab-intro",
      title: "Your Turn: Fusion Lab",
      explanation:
        "Now you get to become the plasma scientist. Your challenge is to find combinations of temperature, density, and confinement time that reach the educational reference level.",
    },
  ],
  flagshipInteraction: { component: "FusionLab", config: fusionLabConfig },
  missionCheck: module2MissionCheck,
  transitionToNext:
    "Knowing what fusion needs is one thing. Keeping those conditions under control is another. How do we actually contain plasma that's hotter than the Sun's core?",
};

/**
 * FINAL LOCKED CONTENT — transcribed verbatim from the Module 3
 * Final Locked Specification (post all 6 patches). The tokamak
 * diagram is inserted after "magnetic-confinement" (Stage 4), not
 * at the end — see flagshipInsertAfterStageId and its rationale in
 * ModuleContent's type documentation. Mission Check questions and
 * the M3→M4 transition line were not given literal locked text in
 * the original blueprint (only their intent was described) — both
 * were written afterward, directly from already-locked M3 content
 * only, with no new claims introduced; see src/data/module3.missionCheck.ts
 * for the explicit flag on that gap-filling pass.
 */
export const module3: ModuleContent = {
  id: "m3",
  order: 3,
  title: "Building the Machine",
  subtitle: "Taming the Plasma",
  missionFraming:
    "Fusion plasma can reach temperatures of over 100 million °C. No material wall could touch plasma that hot and survive. So how do you build a machine that holds it anyway?",
  stages: [
    {
      id: "what-is-plasma",
      title: "What Is Plasma?",
      explanation:
        "At very high temperatures, atoms don't stay whole — electrons get stripped away from their nuclei. What's left is a mix of charged particles called plasma. Because plasma is charged, unlike ordinary gas, it responds to magnetic fields — and that turns out to be exactly the tool needed to control it.",
      misconception: "Plasma is not just \"very hot gas\" — the charged-particle property is the entire reason the rest of this module exists.",
    },
    {
      id: "why-not-a-container",
      title: "Why Not Just Use a Normal Container?",
      explanation:
        "No practical solid material can withstand direct, sustained contact with fusion-temperature plasma. Instead, fusion systems are built around a different idea: confinement — keeping the hottest plasma away from any material surface at all, rather than trying to build something that can touch it and survive.",
      misconception: "Fusion reactors do not have \"a container that can withstand 100 million °C\" — that would be scientifically misleading.",
    },
    {
      id: "magnetic-confinement",
      title: "Magnetic Confinement",
      explanation:
        "Because plasma is made of charged particles, strong magnetic fields can guide and help confine it, reducing direct contact between the hottest plasma and the machine walls. This is called magnetic confinement, and it's the foundation of devices like the tokamak, which we'll explore next.",
      misconception: "Magnets do not \"contain the plasma perfectly\" — they help confine and control it; direct contact is reduced, not eliminated.",
    },
    {
      id: "field-geometry",
      title: "How Do Magnetic Fields Actually Control the Plasma?",
      explanation:
        "A tokamak doesn't just wrap a magnetic field around in one simple loop. It combines two field directions — one running the long way around the machine (toroidal), one running the short way around the tube's cross-section (poloidal) — and together they create a field that spirals, like a twisting ribbon, around the machine. That helical structure helps confine and control the plasma.",
      misconception: "The helical field structure does not eliminate plasma instabilities or guarantee stable operation — see the next stage's discussion of tokamak disruptions.",
    },
    {
      id: "tokamak-vs-stellarator",
      title: "Tokamak vs. Stellarator",
      explanation:
        "Tokamaks and stellarators are trying to solve the same problem — producing that twisting magnetic field — in two different ways. A tokamak drives a large electric current through the plasma itself to help create part of the field. That's technically simpler, and it's why tokamaks are the most mature, most tested fusion design — but that internal current can also trigger sudden disruptions, and it makes continuous operation harder. A stellarator does not rely on a large internal plasma current, giving it an inherent advantage for steady-state operation and far fewer disruptions — but building the precisely-shaped 3D coils needed to replace that current is an extremely difficult engineering problem in its own right.",
      misconception: "Neither design is simply \"the best\" — and stellarators have far fewer disruptions, not zero instabilities.",
      source: { label: "Comparative review, Matter and Radiation at Extremes (AIP Publishing, 2016); EUROfusion Stellarator Power Plant Studies", type: "primary" },
    },
    {
      id: "two-paths",
      title: "Two Paths to Fusion",
      explanation:
        "Everything so far in this module — tokamaks, stellarators — uses magnetic confinement: holding a relatively large amount of plasma in place with magnetic fields for a meaningful stretch of time. Inertial confinement takes a completely different approach: instead of holding plasma steady, it compresses a tiny capsule of fuel so fast and so hard that fusion conditions are briefly reached before the capsule has time to fly apart. One real device using this approach is the National Ignition Facility (NIF) in the United States, which uses powerful lasers to do the compressing — we'll look at NIF's actual results properly in Module 5.",
      misconception: "Inertial confinement does not keep plasma confined for a long time — its confinement timescale is extremely short, the opposite of magnetic confinement's approach.",
    },
    {
      id: "engineering-reality",
      title: "Engineering Reality",
      explanation:
        "Even a well-confined plasma creates enormous engineering problems for the machine around it. Components near the plasma face intense heat and must be actively cooled to survive. D-T fusion also produces high-energy neutrons — and unlike the charged plasma particles, magnetic fields don't confine neutrons, so they travel outward and strike the surrounding materials directly, causing gradual damage over the machine's lifetime. The divertor helps remove unwanted particles and impurities from the plasma edge while managing intense heat and particle loads — but heat and particle exhaust remains one of the hardest unsolved problems in fusion engineering, not a solved one. And even once all of this works in a research device, turning that into a reliable, continuously operating power plant is a completely separate engineering challenge of its own.",
      misconception: "The divertor does not remove all the heat, and fusion research has not \"already solved confinement\" — the gap between an experimental demonstration and practical power generation remains real.",
    },
  ],
  flagshipInteraction: { component: "TokamakDiagram", config: tokamakComponents },
  flagshipInsertAfterStageId: "magnetic-confinement",
  secondaryInteraction: { component: "ConfinementChooser", config: confinementOptions },
  missionCheck: module3MissionCheck,
  transitionToNext:
    "Building the machine introduced its own new problems: energetic neutrons, intense heat, material degradation, and the unsolved challenge of heat and particle exhaust. Module 4 picks up exactly there — what would it take to turn this engineering into something that could actually power the world?",
};

/**
 * FINAL LOCKED CONTENT — transcribed verbatim from the Module 4
 * Content Blueprint (final locked version, post all patches
 * including the Stage 2 thermal-sources micro-edit). The flagship
 * interaction's per-priority potential/challenge pairs and the
 * M4→M5 transition line were written afterward using only claims
 * already established in this module's own stages — see
 * src/data/module4.gridPriorities.ts for the explicit flag on that
 * gap-filling pass, same pattern as Module 3.
 */
export const module4: ModuleContent = {
  id: "m4",
  order: 4,
  title: "Can Fusion Power the World?",
  subtitle: "Applications, Environment & Impact",
  missionFraming:
    "You've learned what fusion needs, and how engineers try to control it. Now imagine it actually working, at scale, feeding a real electricity grid. What would that actually change — and what would it take to get there?",
  stages: [
    {
      id: "energy-to-electricity",
      title: "From Fusion Energy to Electricity",
      explanation:
        "Fusion doesn't produce electricity directly, the way a battery does. Like most conventional thermal power sources, it would produce heat first. That heat would be carried away by a coolant, used to produce steam (or drive another power cycle), which spins a turbine connected to a generator — and that's what actually produces electricity. Fusion's real difference from other power sources isn't the last few steps — it's how the heat gets made in the first place.",
      misconception: "Fusion does not directly produce electricity, and it is not electrically different from other thermal power sources in its conversion chain — only in its heat source.",
    },
    {
      id: "why-interested",
      title: "Why People Are Interested in Fusion",
      explanation:
        "So why is so much research going into this? A few reasons: fusion releases enormous energy from a very small amount of fuel. Its fuel resources are potentially abundant. Unlike burning coal, oil, or gas, the fusion reaction itself doesn't release CO₂. And if it can be made to work reliably, fusion could offer a steady, always-available power source — a useful complement to solar and wind, which depend on weather and time of day, rather than necessarily a replacement for them.",
      misconception: "Fusion is framed here as a potential complement to renewables, not a straightforward replacement for them.",
    },
    {
      id: "fuel-reality",
      title: "Fuel and Resource Reality",
      explanation:
        "Fusion's most common near-term fuel combination — deuterium and tritium — has two very different resource stories. Deuterium is abundant, extractable from ordinary water. Tritium is radioactive and not naturally abundant in any useful quantity — future D-T fusion power plants would need to produce much of their own tritium by using lithium-containing breeding blankets. That means lithium becomes just as important to fusion's fuel story as deuterium. And having abundant fuel resources doesn't automatically make fusion easy — the engineering challenges covered in Module 3 remain, regardless of fuel availability.",
      misconception: "\"Fusion fuel is abundant\" as a single, unqualified statement is an oversimplification — deuterium and tritium's resource stories must always be kept separate.",
      source: { label: "IAEA Physics Section; World Nuclear Association, \"Nuclear Fusion Power\"; ITER Organization", type: "primary" },
    },
    {
      id: "waste-impact",
      title: "Waste and Environmental Impact",
      explanation:
        "Fusion does not produce the same kind of high-activity, long-lived radioactive waste associated with fission, but that does not mean fusion produces no radioactive waste. D-T fusion produces energetic neutrons that can activate materials around the reactor. Tritium is also radioactive and must be carefully handled. Future fusion plants would therefore still need systems for radioactive-material management, even though their waste profile would be different from that of fission.",
      misconception: "Never \"fusion produces no radioactive material\" or \"fusion is zero waste\" — the correct claim is specific and narrower than that.",
    },
    {
      id: "intrinsic-safety",
      title: "Why Fusion Is Considered Intrinsically Different from Fission",
      explanation:
        "A fusion plasma cannot undergo a self-sustaining runaway chain reaction the way a fission reactor's fuel can — the instant confinement is disrupted, the reaction simply stops. This is different from saying fusion carries no risk at all: it means one specific, well-understood failure mode (meltdown) does not apply, not that every possible risk is eliminated.",
      misconception: "The single highest-risk stage in this module for oversimplification — never \"fusion is completely safe,\" \"fusion has zero risk,\" or \"fusion cannot cause serious accidents.\"",
    },
    {
      id: "could-fusion-power-world",
      title: "Could Fusion Power the World?",
      explanation:
        "If fusion's engineering challenges can eventually be solved at commercial scale, what role could it play? Electricity demand keeps growing, and grids benefit from reliable, steady power sources that don't depend on weather. Fusion could potentially fill that role, working alongside solar, wind, and other low-carbon sources rather than replacing them outright. But it's important to be honest about where this stands: this is a future possibility being actively researched, not an established fact.",
      misconception: "This is a genuinely open question, not a near-certain outcome — \"could\" and \"possible\" are load-bearing words here.",
    },
    {
      id: "reality-check",
      title: "Reality Check: What Still Has to Be Solved?",
      explanation:
        "Module 3 already covered many of fusion's engineering challenges in detail, so this is a short recap at the systems level, not a repeat. Beyond confining plasma, a commercial fusion plant would need: sustained (not just brief) operation; materials that survive years of neutron bombardment; a working tritium fuel cycle; efficient heat and power extraction; maintenance systems for components exposed to radiation and activated materials; and — ultimately — a cost structure that competes with other electricity sources. A physics experiment proving fusion conditions can be reached is a genuinely major achievement. It is not the same thing as a commercially viable power plant.",
      misconception: "\"Fusion research has solved the hard part\" and \"a successful experiment means commercial fusion is close\" are both explicitly guarded against here.",
    },
  ],
  flagshipInteraction: { component: "FusionGridBuilder", config: gridPriorities },
  missionCheck: module4MissionCheck,
  transitionToNext:
    "You've now seen fusion's real potential and its real open challenges side by side. The next question is where that potential actually stands today — which real projects are closest to demonstrating it, and what they've actually achieved so far.",
};

/**
 * FINAL LOCKED CONTENT — transcribed verbatim from the Module 5
 * Final Content Blueprint (post the ITER/CFS/Helion correction
 * pass). "Research checked up to: September 3, 2026" per that
 * document. Every current-status claim here traces to a source in
 * module5.claims.ts / module5.projects.ts.
 */
export const module5: ModuleContent = {
  id: "m5",
  order: 5,
  title: "The Horizon of Nuclear Energy",
  subtitle: "Latest Developments",
  missionFraming:
    "In the last few years, fusion has produced some genuinely major headlines — record-breaking experiments, new machines under construction, billion-dollar private companies racing to build power plants. If scientists can now achieve major fusion breakthroughs, does that mean fusion power is ready? By the end of this module, you'll be able to answer that question yourself.",
  stages: [
    {
      id: "iter",
      title: "ITER: The World's Big Fusion Experiment",
      explanation:
        "ITER, under construction in France, is the largest fusion experiment in the world — a collaboration between over 30 countries. It's a tokamak, built to demonstrate that fusion reactions can produce substantially more power than is used to heat the plasma, at a scale relevant to a future power plant. ITER is an experimental facility, not a commercial power plant — it isn't designed to sell electricity to anyone. As of mid-2026, ITER's tokamak core is roughly two-thirds assembled. Under ITER's current schedule, 2034 marks the Start of Research Operation — the beginning of a research phase using hydrogen plasmas, progressively building up toward more demanding conditions. Deuterium-deuterium fusion operation is targeted for 2035, full magnetic energy for 2036, and full deuterium-tritium fusion operation — the actual fusion fuel — isn't targeted to begin until 2039. Those are current project targets, not guarantees — this schedule has already shifted once, and fusion megaprojects have a track record of further schedule changes.",
      misconception: "\"ITER is a commercial power plant\" and \"2034 is when ITER starts fusing deuterium and tritium\" are both false — 2034 is the start of an earlier-stage hydrogen research phase.",
      source: { label: "ITER Organization (\"A Few Lines\", 2024 baseline); Physics World; World Nuclear News", type: "primary", date: "2026" },
    },
    {
      id: "nif",
      title: "NIF: A Different Route to Fusion",
      explanation:
        "You already learned the basic idea of inertial confinement fusion in Module 3 — lasers compressing a tiny fuel target instead of magnets confining a large plasma. NIF, in the United States, has repeatedly demonstrated something significant: fusion energy released by the target exceeding the laser energy delivered to that target. As of NIF's most recent public results (June 2026), the facility has now achieved this kind of ignition result eleven times, with its best shot producing about 7.9 megajoules of fusion energy — roughly 3.8 times the laser energy delivered to the target. That's a genuinely major scientific achievement. But it's a target-level result, not a whole-facility result: NIF's laser system itself draws vastly more electricity from the grid than the laser energy it delivers to the target, so this result does not mean NIF is producing net electricity, and it isn't a commercial reactor.",
      misconception: "\"NIF produced more energy than the entire facility consumed\" is not supported — only the narrower target-level claim is.",
      source: { label: "LLNL, \"Achieving Fusion Ignition\"", type: "primary", date: "June 2026" },
    },
    {
      id: "private-race",
      title: "The Private Fusion Race",
      explanation:
        "Alongside these public megaprojects, private companies are racing to build their own fusion machines — often with much more aggressive timelines. Commonwealth Fusion Systems (CFS), a spinout from MIT, is building a tokamak called SPARC using powerful high-temperature superconducting magnets. As of mid-2026, CFS's own estimate is that SPARC's construction is almost 80% complete, with the company targeting \"first plasma\" (the machine's first operational test) in 2027, aiming to reach net energy gain (Q greater than 1) as soon as possible after that. CFS has separately announced plans for a follow-on commercial plant, ARC, targeting electricity delivery in the early 2030s — that's a company target, not a demonstrated result. Helion is taking a very different approach: instead of a donut-shaped tokamak, it uses a pulsed, linear device design. In February 2026, Helion reported that its Polaris prototype had demonstrated measurable deuterium-tritium (D-T) fusion — the same fuel combination used by ITER and CFS — while also reaching plasma temperatures of 150 million °C, both described by the company as industry firsts for a private fusion machine. That D-T result is a step in Polaris's testing program, not Helion's commercial fuel choice: Helion's longer-term commercial approach is intended to use a different fuel combination (deuterium and helium-3), aiming to convert fusion energy directly into electricity without a separate steam turbine. As of the most recent independent reporting, Helion's reported results do not constitute net energy gain or net electricity production. Helion has a supply agreement with Microsoft, and is targeting initial operations for its Orion fusion plant in 2028 — that is a company/project target and commercial commitment, not yet a demonstrated result.",
      misconception: "Every timeline in this stage (2027, 2028, early 2030s) is a company target, not an achieved result — and Polaris's demonstrated D-T fusion must not be confused with Helion's separate, longer-term D-He-3 commercial fuel goal.",
      source: { label: "CFS (CEO statements, company blog); Helion Energy press release; World Nuclear Association", type: "companyReported", date: "2026" },
    },
    {
      id: "compare",
      title: "Compare the Approaches",
      explanation:
        "Here's how these four efforts compare, side by side. Notice that they're not all trying to prove the same thing at the same time — each is at a different stage of a longer journey.",
      visual: { kind: "comparisonTable", ref: "module5-comparison", alt: "Comparison of ITER, NIF, Commonwealth Fusion Systems, and Helion across approach, goal, current stage, and electricity generation status" },
      misconception: "The \"Electricity generation status: None\" row applies to all four projects — this table is not a ranking or a \"who's winning\" scoreboard.",
    },
    {
      id: "breakthrough-vs-plant",
      title: "Breakthrough ≠ Power Plant",
      explanation:
        "Module 4 already covered the system-level gap between fusion physics and a commercial power plant — sustained operation, durable materials, a working fuel cycle, heat extraction, maintenance, and economics. None of the four projects you just compared has closed that entire gap yet, no matter how impressive their individual milestones are. A breakthrough can prove that one important piece of the puzzle works — without proving the whole puzzle is solved.",
    },
    {
      id: "read-a-headline",
      title: "How to Read a Fusion Headline",
      explanation:
        "You now have enough context to read fusion news critically. When you see a headline like \"Fusion produced more energy than the laser delivered,\" ask: more energy at what boundary — the target, or the whole facility? When you see \"Scientists achieved ignition,\" ask: does that mean a power plant is producing electricity, or that an important experimental condition was met? When you see \"A company plans to deliver fusion electricity by [year],\" ask: is this an achieved result, or a stated target? Every fusion headline is answering a narrower question than the headline itself suggests — your job is to figure out which one.",
    },
  ],
  flagshipInteraction: { component: "RealityCheck", config: module5Claims },
  missionCheck: module5MissionCheck,
  transitionToNext:
    "Fusion is no longer purely speculative science — real breakthroughs have been demonstrated — but commercial fusion electricity has not yet been demonstrated as a working power source. That's where the FUSION QUEST journey ends, for now.",
};

export const allModules: ModuleContent[] = [module1, module2, module3, module4, module5];
