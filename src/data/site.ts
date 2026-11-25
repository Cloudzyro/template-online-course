// Everything the sales page says lives here: the course, who it's for, the
// curriculum, the instructor, sample student outcomes, pricing tiers and the FAQ.
// Change it and rebuild; no component needs editing.

export const course = {
  name: "Plain Numbers",
  fullName: "Plain Numbers: bookkeeping for freelancers",
  tagline: "A self-paced bookkeeping course for freelancers",
  description:
    "Plain Numbers is a self-paced course that teaches freelancers to keep their own books in about an hour a month: one spreadsheet, six modules, and no accounting background needed.",
  headline: "Keep your own books in an hour a month",
  intro:
    "A self-paced course for freelancers who'd rather not dread January. Six modules, one spreadsheet, and a monthly routine that turns a shoebox of receipts into numbers you can trust.",
  email: "hello@plainnumbers.example",
  // Lesson count and video length are worked out from `modules` below
  access: "Lifetime",
  guarantee: "If it isn't for you, email within 30 days of buying for a full refund. No forms, no questions.",
};

export const forWho = {
  yes: [
    "Freelancers, contractors and one-person studios in the US",
    "People who've been using a bank statement and good intentions",
    "Anyone who pays an accountant to sort a year of receipts in March",
    "People who'd like to know, any month, what they can actually spend",
  ],
  no: [
    "Businesses with employees and payroll (Module 6 points you to help)",
    "Anyone after tax advice for their own situation; this teaches bookkeeping, not tax planning",
    "Companies already happy with full accounting software and a bookkeeper",
  ],
};

export const outcomes = [
  { title: "Know your real income", text: "Money in, money out, and what's left after setting aside tax, every month, in one place." },
  { title: "Stop losing receipts", text: "A ten-minute weekly habit for capturing receipts and invoices, on paper or phone." },
  { title: "Pay quarterly taxes on time", text: "Work out estimated payments from your own numbers, with a calendar that reminds you." },
  { title: "Hand your accountant a clean year", text: "A year-end pack they can use as it is, which usually means a smaller bill." },
];

export type Lesson = { title: string; minutes: number; free?: boolean };
export type Module = { title: string; summary: string; lessons: Lesson[] };

export const modules: Module[] = [
  {
    title: "Where your money actually goes",
    summary: "Separate the business from the personal and set up the one spreadsheet you'll use for the rest of the course.",
    lessons: [
      { title: "Why bookkeeping, and why yourself", minutes: 6 },
      { title: "One account for the business", minutes: 9, free: true },
      { title: "The ledger spreadsheet, a tour", minutes: 12 },
      { title: "Your first month, entered together", minutes: 14 },
      { title: "Checking it against the bank", minutes: 8 },
    ],
  },
  {
    title: "Categories that make sense",
    summary: "A short list of categories that matches the IRS Schedule C, so tax time is copying, not guessing.",
    lessons: [
      { title: "Twelve categories, no more", minutes: 10 },
      { title: "The gray areas: phone, home office, car", minutes: 13 },
      { title: "Meals, travel and the 50% rule", minutes: 9 },
      { title: "Equipment and when to spread the cost", minutes: 11 },
      { title: "Practice: categorize a messy month", minutes: 15 },
      { title: "Rules of thumb you can write down", minutes: 5 },
    ],
  },
  {
    title: "Receipts and invoices",
    summary: "Capture every receipt in under a minute, and send invoices that get paid on time.",
    lessons: [
      { title: "The weekly ten minutes", minutes: 7 },
      { title: "Paper, photos or forwarding emails", minutes: 9 },
      { title: "Naming files so you can find them", minutes: 6 },
      { title: "Invoices: numbers, terms and late fees", minutes: 12 },
      { title: "Chasing a late payment politely", minutes: 8 },
      { title: "Keeping track of who owes you", minutes: 10 },
    ],
  },
  {
    title: "The monthly close",
    summary: "The hour-a-month routine: reconcile, review and set money aside, with a checklist to follow.",
    lessons: [
      { title: "What closing a month means", minutes: 6 },
      { title: "Reconciling, step by step", minutes: 16 },
      { title: "Your profit and loss in one page", minutes: 11 },
      { title: "How much to set aside for tax", minutes: 12 },
      { title: "Paying yourself on purpose", minutes: 9 },
      { title: "The checklist, start to finish", minutes: 14 },
    ],
  },
  {
    title: "Quarterly taxes",
    summary: "Estimate and pay federal quarterly taxes from your own numbers, and stop fearing April.",
    lessons: [
      { title: "Who has to pay quarterly, and when", minutes: 8 },
      { title: "Self-employment tax in plain words", minutes: 11 },
      { title: "Working out a payment from your ledger", minutes: 15 },
      { title: "Paying online and keeping proof", minutes: 6 },
      { title: "Uneven income and the safe harbor", minutes: 10 },
    ],
  },
  {
    title: "Year end and growing up",
    summary: "Put together the year-end pack for your accountant, and know when you've outgrown a spreadsheet.",
    lessons: [
      { title: "The year-end pack", minutes: 13 },
      { title: "1099s you receive and send", minutes: 9 },
      { title: "Working with an accountant", minutes: 8 },
      { title: "Signs it's time for software or a bookkeeper", minutes: 7 },
      { title: "Hiring help: what changes", minutes: 6 },
      { title: "Your routine for next year", minutes: 5 },
    ],
  },
];

export const instructor = {
  name: "Dana Whitcombe",
  role: "Bookkeeper and former freelance illustrator",
  bio: [
    "Dana spent nine years as a freelance illustrator before a very bad April sent her to night classes in bookkeeping. She has kept the books for more than two hundred freelancers since, from photographers to software contractors.",
    "Plain Numbers is the course she wished she'd had in her first year: short lessons, a single spreadsheet, and no jargon she doesn't explain first.",
  ],
  note: "Dana is a bookkeeper, not a tax adviser. The course teaches bookkeeping and how estimated taxes work, and points you to a professional for advice on your own situation.",
};

// Sample outcomes and quotes for this template. Replace them with your own students'.
export const results = [
  { figure: "52 min", label: "Median time for a monthly close by week six", note: "From course check-ins" },
  { figure: "4 of 5", label: "Paid every quarterly estimate on time the next year", note: "From the year-end survey" },
  { figure: "$640", label: "Average saved on year-end accounting fees", note: "Self-reported" },
];
export const quotes = [
  { text: "I used to hand my accountant a shoebox. This year I sent one PDF and she asked who'd done my books.", name: "Priya N.", role: "Product photographer" },
  { text: "The monthly checklist is taped inside my cupboard. It takes me about forty minutes now.", name: "Marcus T.", role: "Freelance developer" },
  { text: "Module 5 alone was worth it. I finally understand what I'm paying in April and why.", name: "Ellen R.", role: "Copywriter" },
];
export const resultsNote = "Sample figures and quotes for this template. Replace them with your own students' results.";

// Pricing tiers. `checkout` is read from the env var named in `env`, or set it here.
export const tiers = [
  {
    id: "self-paced",
    name: "Self-paced",
    price: 149,
    env: "PUBLIC_CHECKOUT_URL_SELF_PACED",
    checkout: "",
    summary: "The full course and the ledger spreadsheet.",
    features: ["All 6 modules and 34 lessons", "The ledger spreadsheet (Google Sheets and Excel)", "The monthly close checklist", "Lifetime access and updates"],
  },
  {
    id: "workbook",
    name: "With workbook",
    price: 219,
    env: "PUBLIC_CHECKOUT_URL_WORKBOOK",
    checkout: "",
    featured: true,
    summary: "Everything in Self-paced, plus the templates freelancers ask for most.",
    features: [
      "Everything in Self-paced",
      "Printable 80-page workbook",
      "Invoice and late-payment email templates",
      "Quarterly tax calculator sheet",
      "Year-end pack template",
    ],
  },
  {
    id: "with-reviews",
    name: "With two reviews",
    price: 449,
    env: "PUBLIC_CHECKOUT_URL_WITH_REVIEWS",
    checkout: "",
    summary: "Everything in With workbook, plus Dana looks at your books with you.",
    features: [
      "Everything in With workbook",
      "Two 45-minute video calls with Dana",
      "A written review of your first closed month",
      "Book within 6 months of buying",
    ],
  },
];

export const faq = [
  { q: "Do I need to know anything about accounting?", a: "No. If you can use a spreadsheet to add up a column, you have everything you need. Every term is explained the first time it comes up." },
  { q: "Does it work outside the US?", a: "Modules 1 to 4 work anywhere. Modules 5 and 6 cover US federal taxes and forms, so you'd want local advice for those parts." },
  { q: "Which spreadsheet do I need?", a: "Google Sheets (free) or Excel. The ledger comes in both, and every lesson shows the same steps in each." },
  { q: "How long does it take?", a: "About five and a half hours of video. Most people finish in three to four weeks at a module a week, and then keep the monthly routine going." },
  { q: "Is this tax advice?", a: "No. It teaches you to keep records and to understand how estimated taxes work. For decisions about your own taxes, talk to a tax professional." },
  { q: "Can I get a refund?", a: "Yes, within 30 days of buying, for any reason. Email us and we'll refund it, usually the same day." },
  { q: "Can my business pay?", a: "Yes. Checkout gives you a receipt in your business name, and the course is usually a deductible business expense." },
];

// The free sample lesson page
export const sample = {
  module: 0,
  lesson: 1,
  intro: "Watch the lesson, then follow the three steps below. It takes about twenty minutes, and it's the single most useful thing in the course.",
  steps: [
    { title: "Open a separate checking account", text: "Any bank works. A free account is fine. Name it something you'll recognize, like Studio or Business." },
    { title: "Move every client payment into it", text: "Update your invoices with the new account details. From now on, money for work lands here and nowhere else." },
    { title: "Pay yourself from it on purpose", text: "Once a month, move a set amount to your personal account. That transfer is your pay, and it's the only thing that crosses." },
  ],
  transcript: [
    "If you take one thing from this course, make it this: the business gets its own bank account. Not a savings pot inside your personal account, a separate account with its own card.",
    "Every hour you'll ever spend on bookkeeping is mostly spent separating business from personal. Do it once, at the bank, and that hour mostly disappears.",
  ],
};

// The month drawn in the hero ledger. Sample figures, in dollars.
export const ledger = {
  month: "October 2026",
  rows: [
    { date: "Oct 2", what: "Halden Studio, invoice 041", cat: "Client work", amount: 2400 },
    { date: "Oct 3", what: "Design software", cat: "Software", amount: -54.99 },
    { date: "Oct 9", what: "Marlow Books, invoice 042", cat: "Client work", amount: 1850 },
    { date: "Oct 14", what: "Coworking day passes", cat: "Office", amount: -96 },
    { date: "Oct 21", what: "Printer ink and paper", cat: "Supplies", amount: -42.18 },
    { date: "Oct 28", what: "Phone, 60% business", cat: "Phone", amount: -45 },
  ],
  taxRate: 0.28,
};
