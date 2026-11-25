import { modules, tiers, course } from "../data/site";

export const lessonCount = modules.reduce((n, m) => n + m.lessons.length, 0);
export const totalMinutes = modules.reduce((n, m) => n + m.lessons.reduce((t, l) => t + l.minutes, 0), 0);
export const moduleMinutes = (i: number) => modules[i].lessons.reduce((t, l) => t + l.minutes, 0);

// 330 becomes "5 hr 30 min", 49 becomes "49 min"
export function duration(min: number) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  if (!h) return `${m} min`;
  return m ? `${h} hr ${m} min` : `${h} hr`;
}
// 9 becomes "9:00" (lesson length on the clock)
export const clock = (min: number) => `${min}:00`;

export const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: Number.isInteger(n) ? 0 : 2 });

// Checkout link for a tier: its env var first, then `checkout` in the data file.
// With neither, the button opens an email to ask about that tier.
const env = import.meta.env as Record<string, string | undefined>;
export function checkoutFor(id: string) {
  const t = tiers.find((x) => x.id === id)!;
  const url = env[t.env] || t.checkout || "";
  return url
    ? { href: url, ready: true }
    : { href: `mailto:${course.email}?subject=${encodeURIComponent(`${course.name}: ${t.name}`)}`, ready: false };
}
