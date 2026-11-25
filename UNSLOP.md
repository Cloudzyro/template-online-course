# Unslop pass

Done with the unslop skill (unslop by Damir Sokolovsky, @heydamir, CC BY 4.0) on November 25, 2026.

## Audit

Light slop: built against the direction from the start, so this was polish mode. Signs found:

- The logo mark, three stacked lines, read as a menu button, especially on phones next to the Enroll button (`Base.astro`)
- The accent spread into labels: every "Module 1" to "Module 6" and the sample lesson's step numbers were ledger green (`Modules.astro`, `lessons/sample.astro`)
- The sticky header was slightly see-through, so the dark results band showed through as a stripe when scrolling (`Base.astro`)
- The hero ledger pushed the page 5px wider than a 360px phone (`Ledger.astro`, `index.astro`), fixed before the first commit
- Hardcoded lesson count and video length that didn't match the lessons (5 hr 40 min against 5 hr 30 min of lessons), replaced with figures worked out from the curriculum before the first commit
- An invented "live Q&A" option in the questions form, and an unsupported "most people close their first month by week two" claim, both replaced before the first commit

No gradients on chrome, glows, gradient text, emoji, pill badges, uppercase tracked labels, 700+ weights, italic emphasis, trailing periods on labels, hype words or looping motion were found.

## Direction

- Product: a self-paced bookkeeping course for freelancers, sold from one long page with a curriculum and a free lesson
- Character: patient, exact, reassuring about money
- World: ledger paper, green-ruled columns, a red margin line, receipts; paper neutrals with ledger green as the one accent and red ink only inside the ledger
- Moments: the month's ledger in the hero (money in, money out in red ink, the tax set-aside and a double-underlined total), and the curriculum with lesson lengths
- Signature: the accounting double underline, used only on totals and prices

## Changes

- Spacing: no change needed (4px scale, one row height per list)
- Color: module labels and step numbers moved to muted ink; green now marks the primary buttons, the featured tier and links; header made opaque
- Copy: no change after the first commit
- Type: no change needed (Familjen Grotesk at 400 and 500, Martian Mono for figures, lesson numbers and lengths)
- Layout: no change needed (split hero with the ledger, a wider middle pricing tier, a larger first quote)
- Details: logo redrawn as a small ledger page with two green rules at the foot, so it no longer looks like a menu
- Motion: no change needed (chevron turn on the module lists, color transitions, small press scale)

screenshot-2: Curriculum section, module 1 open with lessons and lengths
screenshot-3: Pricing tiers with double-underlined prices and the refund line
