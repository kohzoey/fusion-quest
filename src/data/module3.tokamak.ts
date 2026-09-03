export interface TokamakComponent {
  id: string;
  name: string;
  /** Short student-facing explanation — always shown. */
  explanation: string;
  /** Optional deeper layer, per the locked Flagship Interaction Specification. */
  deeper?: string;
  /** Misconception guard specific to this component. */
  misconception: string;
}

/**
 * LOCKED. Transcribed verbatim from the Module 3 Final Locked
 * Specification, Section 5 (Flagship Interaction Specification —
 * Interactive Tokamak Diagram) component table. Do not add
 * components, rename them, or alter their wording.
 */
export const tokamakComponents: TokamakComponent[] = [
  {
    id: "plasma",
    name: "Plasma",
    explanation: "The extremely hot, ionized fuel where fusion reactions occur.",
    deeper:
      "The plasma occupies the central region only — it does not fill the entire machine, and a real, if small, gap is maintained between the plasma edge and the wall.",
    misconception: "The plasma does not fill the entire machine — it occupies the central region only.",
  },
  {
    id: "magnetic-coils",
    name: "Magnetic Coils",
    explanation: "Powerful magnets that generate the fields which confine and shape the plasma.",
    deeper:
      "A tokamak combines more than one coil type — toroidal-direction and poloidal-direction coils — together producing the helical field described later in this module.",
    misconception: "A single, simple magnet does not do the job — more than one coil type/orientation works together.",
  },
  {
    id: "vacuum-vessel",
    name: "Vacuum Vessel",
    explanation:
      "The sealed chamber that holds the plasma under vacuum conditions, and also provides support and radiation shielding for the components around it.",
    deeper:
      "The vacuum vessel also acts as the primary confinement barrier for radioactivity and supports in-vessel components like the divertor.",
    misconception: "The vacuum vessel is not just an empty container — it has real structural and shielding roles.",
  },
  {
    id: "first-wall",
    name: "First Wall",
    explanation: "The inner surface facing the plasma directly, exposed to intense heat and particle flux.",
    deeper:
      "The first wall must remove surface heat flux from the plasma while also helping shield the surrounding magnets from neutron damage — a dual role.",
    misconception: "The first wall is an actively engineered, cooled component under continuous thermal and radiation stress — not passive material.",
  },
  {
    id: "divertor",
    name: "Divertor",
    explanation: "Helps remove waste particles and manage heat leaving the plasma edge.",
    deeper:
      "Its job is to collect and remove reaction byproducts, unused fuel, and impurities, guided there by the magnetic field shape, while handling concentrated heat loads at that location.",
    misconception:
      "The divertor does not remove all the heat or make the plasma safe automatically — it manages a major but still-challenging part of the heat/particle exhaust problem.",
  },
];
