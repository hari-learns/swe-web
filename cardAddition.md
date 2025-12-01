# Card Addition Guide

Complete guide for adding new portfolio cards to the Financial Analysis Projects section.

## Quick Overview

Portfolio cards are displayed in a responsive grid layout:
- **Desktop (1024px+)**: 3-2 arrangement (3 cards in row 1, 2 cards centered in row 2)
- **Tablet (768-1023px)**: 2-column grid
- **Mobile (<768px)**: Single column stack

## Files to Modify

### 1. Card Data: `src/sections/Projects/Projects.tsx`
### 2. Layout CSS: `src/sections/Projects/Projects.css` (only if changing grid arrangement)

---

## Step-by-Step Instructions

### Step 1: Add Card Data

**File:** `src/sections/Projects/Projects.tsx` (lines 20-66)

Add your new card object to the `projects` array. Each card follows this structure:

```typescript
{
    id: number,              // Unique identifier (increment from last card)
    title: string,           // Card title (displays prominently)
    category: string,        // Badge label at top of card
    description: string,     // Main description text
    metrics: string,         // Highlighted metric in green box
    icon: string,            // Emoji icon (displayed in circular container)
    tags: string[]          // Array of hashtags (e.g., ["Tag1", "Tag2"])
}
```

**Example - Adding a new card:**

```typescript
const projects: Project[] = [
    // ... existing cards ...
    {
        id: 6,
        title: "New Analysis Project",
        category: "Category Name",
        description: "Detailed description of what this analysis covers.",
        metrics: "Key metric or insight",
        icon: "📈",
        tags: ["Tag1", "Tag2", "Tag3"]
    }
];
```

**Tips for Card Content:**

1. **ID**: Always use the next sequential number
2. **Title**: Keep it clear and descriptive (2-6 words ideal)
3. **Category**: Options used so far:
   - "Sector Analysis"
   - "Equity Research"
   - "Financial Analysis"
   - "Operational Efficiency"
   - "Comprehensive Analysis"
4. **Description**: 1-2 sentences explaining the scope (aim for 80-120 characters)
5. **Metrics**: Brief highlight of a key finding (3-5 words)
6. **Icon**: Choose an emoji that represents the industry/analysis type
   - 🏢 Real Estate
   - 🚗 Automotive
   - 💻 IT/Tech
   - 📊 Data/Analytics
   - 🏨 Hospitality
   - 📈 Growth/Performance
   - 💰 Finance
   - ⚡ Efficiency
7. **Tags**: 2-4 relevant hashtags without the # symbol

---

## Step 2: Update Grid Layout (If Needed)

### Current Layout Configuration

The current CSS is configured for **5 cards** with a 3-2 desktop arrangement.

**File:** `src/sections/Projects/Projects.css` (lines 116-136)

```css
@media (min-width: 1024px) {
    .projects-grid {
        grid-template-columns: repeat(6, 1fr);
    }

    /* First row: 3 cards, each spanning 2 columns */
    .projects-grid > div:nth-child(1),
    .projects-grid > div:nth-child(2),
    .projects-grid > div:nth-child(3) {
        grid-column: span 2;
    }

    /* Second row: 2 cards centered, each spanning 2 columns with offset */
    .projects-grid > div:nth-child(4) {
        grid-column: 2 / span 2;
    }

    .projects-grid > div:nth-child(5) {
        grid-column: 4 / span 2;
    }
}
```

### Layout Options by Card Count

#### For 6 Cards (3-3 arrangement)

```css
@media (min-width: 1024px) {
    .projects-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

Simple and clean - cards automatically wrap to form two rows of 3.

#### For 7 Cards (3-3-1 arrangement with centered last card)

```css
@media (min-width: 1024px) {
    .projects-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    /* Center the 7th card */
    .projects-grid > div:nth-child(7) {
        grid-column: 2 / span 1;
    }
}
```

#### For 8 Cards (3-3-2 arrangement)

```css
@media (min-width: 1024px) {
    .projects-grid {
        grid-template-columns: repeat(6, 1fr);
    }

    /* First two rows: 3 cards each, spanning 2 columns */
    .projects-grid > div:nth-child(1),
    .projects-grid > div:nth-child(2),
    .projects-grid > div:nth-child(3),
    .projects-grid > div:nth-child(4),
    .projects-grid > div:nth-child(5),
    .projects-grid > div:nth-child(6) {
        grid-column: span 2;
    }

    /* Third row: 2 cards centered */
    .projects-grid > div:nth-child(7) {
        grid-column: 2 / span 2;
    }

    .projects-grid > div:nth-child(8) {
        grid-column: 4 / span 2;
    }
}
```

#### For 9+ Cards (3-column grid, rows as needed)

```css
@media (min-width: 1024px) {
    .projects-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

Let the grid wrap naturally for larger numbers of cards.

---

## Card Positioning Reference

### Understanding the 6-Column Grid System

The current layout uses a **6-column grid** to create flexible arrangements:

```
[1] [2] [3] [4] [5] [6]  ← Grid columns
```

- Each card spans 2 columns
- To center 2 cards, start at columns 2 and 4 (leaving columns 1 and 6 empty)

**Visual Example:**
```
Row 1: [Card 1      ] [Card 2      ] [Card 3      ]
       [col 1-2     ] [col 3-4     ] [col 5-6     ]

Row 2: [   ] [Card 4      ] [Card 5      ] [   ]
       [col1] [col 2-3     ] [col 4-5     ] [col6]
```

---

## Complete Example: Adding Card #6

Let's say you want to add a "Tech Sector Valuation" card.

### Step 1: Add to Projects Array

```typescript
const projects: Project[] = [
    {
        id: 1,
        title: "Real Estate Peer Comparison",
        // ... existing content ...
    },
    {
        id: 2,
        title: "Financial Statement Analysis - CEAT Limited",
        // ... existing content ...
    },
    {
        id: 3,
        title: "Infosys FY25 Deep Dive",
        // ... existing content ...
    },
    {
        id: 4,
        title: "DuPont ROE Analysis",
        // ... existing content ...
    },
    {
        id: 5,
        title: "Working Capital Analysis",
        // ... existing content ...
    },
    {
        id: 6,
        title: "Tech Sector Valuation",
        category: "Sector Analysis",
        description: "Comparative valuation analysis of leading technology companies using DCF and multiples approach.",
        metrics: "P/E and EV/EBITDA comparisons",
        icon: "💻",
        tags: ["Tech Sector", "Valuation", "DCF"]
    }
];
```

### Step 2: Update CSS (for 6 cards = 3-3 arrangement)

Replace the desktop media query:

```css
@media (min-width: 1024px) {
    .projects-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

That's it! The 6 cards will automatically display as two rows of 3 cards each.

---

## Styling Reference

### Card Component Structure

Each card automatically includes:

1. **Top Border**: 4px green accent border (`border-top: 4px solid var(--color-accent-green-dark)`)
2. **Icon**: Circular container with light gray background
3. **Badge**: Category label with green gradient
4. **Title**: Bold heading (font-size: 1.25rem)
5. **Description**: Secondary text (font-size: 0.95rem)
6. **Metrics Box**: Green-tinted background with lightning bolt icon
7. **Tags**: Monospace font hashtags
8. **Button**: "View Analysis →" text link

### Design System Variables

All cards use consistent spacing and colors from `src/styles/design-system.css`:

- **Colors**:
  - `--color-accent-green-dark` (primary green)
  - `--color-accent-green-subtle` (light green background)
  - `--color-text-dark` (headings)
  - `--color-text-secondary` (descriptions)

- **Spacing**:
  - `--spacing-xs` (0.25rem)
  - `--spacing-sm` (0.5rem)
  - `--spacing-md` (1rem)
  - `--spacing-lg` (2rem)

### Animations

Cards automatically include:
- **Scroll animation**: Slides up with opacity fade when scrolling into view
- **Staggered delay**: Each card delays by `index * 100ms` for cascading effect
- **Hover effect**: Lifts up 8px with enhanced shadow and green border

---

## Link Configuration

All cards link to the same Google Drive folder:

**File:** `src/sections/Projects/Projects.tsx` (line 18)

```typescript
const VIEW_ANALYSIS_LINK = 'https://drive.google.com/drive/folders/1VdbL4lS26YXF5CJXkvPgCXYxl-0bli15';
```

To link cards to different destinations:
1. Add an optional `link` property to the `Project` interface
2. Add the link URL to each card object
3. Update the Button component to use `project.link || VIEW_ANALYSIS_LINK`

---

## Responsive Behavior Summary

| Screen Size | Layout | Behavior |
|------------|--------|----------|
| Mobile (<768px) | 1 column | Cards stack vertically |
| Tablet (768-1023px) | 2 columns | Cards wrap every 2, last card centers if odd |
| Desktop (1024px+) | Custom grid | Currently configured for 3-2 arrangement |

---

## Testing Checklist

After adding a new card, verify:

- [ ] Card appears in correct position
- [ ] Desktop layout maintains proper arrangement (3-2 or 3-3)
- [ ] Tablet shows 2 columns correctly
- [ ] Mobile shows single column stack
- [ ] Icon displays correctly in circular container
- [ ] Badge shows proper category
- [ ] Description text is readable and not truncated
- [ ] Metrics box has green background
- [ ] All tags display with # symbol
- [ ] "View Analysis" button links correctly
- [ ] Hover effect works (card lifts up)
- [ ] Scroll animation triggers smoothly
- [ ] Cards maintain equal heights in their row

---

## Troubleshooting

### Card Not Appearing
- Check that the `id` is unique
- Verify the card object is inside the `projects` array
- Ensure proper TypeScript syntax (commas, brackets, quotes)

### Layout Broken on Desktop
- Verify the CSS grid configuration matches your card count
- Check `nth-child()` selectors target the correct cards
- Ensure no typos in `grid-column` values

### Card Height Mismatch
- Cards automatically stretch to match their row height
- If content is too long, consider shortening the description
- Aim for descriptions between 80-120 characters

### Animation Not Working
- Animation is triggered by scroll intersection observer
- Check browser console for JavaScript errors
- Verify `useScrollAnimation` hook is imported

---

## Best Practices

1. **Keep descriptions concise**: 1-2 sentences, 80-120 characters
2. **Use relevant emojis**: Choose icons that represent the industry/topic
3. **Maintain tag consistency**: Use similar tag formats across cards
4. **Test responsive layouts**: Check all breakpoints (mobile, tablet, desktop)
5. **Sequential IDs**: Always increment from the last card's ID
6. **Update in batches**: If adding multiple cards, add them all before testing
7. **Consider visual balance**: Aim for layouts with full rows (3-3, 3-3-3) when possible

---

## Quick Reference Card Template

Copy and paste this template when adding a new card:

```typescript
{
    id: [NEXT_ID],
    title: "[Card Title]",
    category: "[Category Badge]",
    description: "[1-2 sentence description of the analysis]",
    metrics: "[Key finding or metric]",
    icon: "[Emoji]",
    tags: ["Tag1", "Tag2", "Tag3"]
}
```

---

## Need Help?

- Review existing cards for formatting examples
- Check `src/components/Card/Card.tsx` for component structure
- See `src/sections/Projects/Projects.css` for styling details
- Consult `src/styles/design-system.css` for color/spacing variables

---

**Last Updated**: December 2025
**Current Card Count**: 5
**Current Desktop Layout**: 3-2 arrangement
