import type { ReactNode } from "react";

const KEY_TERMS = [
  "toroidal-direction",
  "poloidal-direction",
  "ionized fuel",
  "radiation shielding",
  "heat flux",
  "neutron damage",
  "heat loads",
  "confinement barrier",
  "vacuum conditions",
];

export function emphasizeTerms(text: string): ReactNode[] {
  const pattern = new RegExp(`(${KEY_TERMS.join("|")})`, "gi");
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    KEY_TERMS.some((term) => term.toLowerCase() === part.toLowerCase()) ? (
      <strong key={i}>{part}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}
