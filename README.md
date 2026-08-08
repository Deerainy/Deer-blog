# Yuxin — a little corner of the internet

A personal website built with **React + TypeScript + Vite**, using
**[animal-island-ui](https://github.com/guokaigdg/animal-island-ui)** as a
visual vocabulary (not a page structure).

The goal is a personal space on the web — open, airy, warm, and alive — rather
than an academic homepage or an online CV. The background is the website
itself (full-bleed, flowing), sections breathe into one another, and
animal-island-ui shows up only in small details (tags, buttons) where it
belongs.

---

## 🚀 Quick Start

> Requires Node.js 18+ and npm.

```bash
# 1. Install dependencies (includes react-router-dom)
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

The dev server runs at **http://localhost:5173/** by default.

---

## 🧭 Routes

| Path | What |
|------|------|
| `/` | The homepage — a continuous scroll: Hero → About → Projects → Journey → Exploring → Latest Notes → More → Thanks |
| `/blog` | All notes, with category filters |
| `/blog/:slug` | A single note |

---

## 📁 Project Structure

```
yuxin-homepage/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── public/
│   └── leaf.svg                     # favicon
└── src/
    ├── main.tsx                     # entry + BrowserRouter + animal-island-ui styles
    ├── App.tsx                      # routes + Navbar
    ├── index.css                    # global: full-bleed background, tokens, motion
    ├── data/                        # 👈 EDIT YOUR CONTENT HERE
    │   ├── profile.ts               # name, contact, tags, about, status
    │   ├── projects.ts              # things i've built
    │   ├── journey.ts               # the path so far
    │   ├── research.ts              # what i'm exploring + current question
    │   ├── moreAbout.ts             # beyond the work
    │   └── blog.ts                  # notes / posts (structured, extensible)
    ├── hooks/
    │   ├── useScrollReveal.ts       # IntersectionObserver scroll reveal
    │   └── useActiveSection.ts      # active nav highlighting
    ├── components/
    │   ├── Navbar / Hero / About / Projects / Journey
    │   ├── Research / LatestNotes / MoreAbout / ClosingFooter
    │   └── Decor.tsx                # floating leaves, sparkles, clouds
    └── pages/
        ├── HomePage.tsx
        ├── BlogListPage.tsx         # /blog
        └── BlogPostPage.tsx         # /blog/:slug
```

---

## ✏️ How to Edit Your Content

All content lives in [`src/data/`](src/data/) — no need to touch component logic.

| File | What to edit |
|------|--------------|
| [profile.ts](src/data/profile.ts) | Name, contact, tags, about paragraphs, current status |
| [projects.ts](src/data/projects.ts) | Projects (title, one-liner, role, tags, color, links) |
| [journey.ts](src/data/journey.ts) | Journey steps (year, title, place, note, kind) |
| [research.ts](src/data/research.ts) | Research interests + the question you're sitting with |
| [moreAbout.ts](src/data/moreAbout.ts) | Life interests beyond work |
| [blog.ts](src/data/blog.ts) | Blog posts — see below |

### Writing a blog post

Posts are structured content blocks in [src/data/blog.ts](src/data/blog.ts), so
the UI renders rich posts without a markdown parser today. Append an object to
`posts`:

```ts
{
  slug: 'my-new-note',
  title: 'My new note',
  excerpt: 'A one-line summary shown in lists.',
  date: '2026-09-01',
  category: 'Build',            // 'Research' | 'Build' | 'Life' | 'Travel'
  readingTime: '4 min read',
  cover: 'linear-gradient(135deg, var(--leaf), var(--sun))',
  content: [
    { type: 'p', text: 'A paragraph.' },
    { type: 'h2', text: 'A heading' },
    { type: 'ul', items: ['one', 'two'] },
    { type: 'quote', text: 'A pull quote.' },
    { type: 'code', lang: 'python', text: 'print("hi")' },
  ],
}
```

When you outgrow blocks, swap the renderer in `BlogPostPage` for an MDX/markdown
loader — the data shape is the only contract.

### Colors (animal-island-ui palette)

`default`, `app-pink`, `purple`, `app-blue`, `app-yellow`, `app-orange`,
`app-teal`, `app-green`, `app-red`, `lime-green`, `yellow-green`, `brown`,
`warm-peach-pink`

### Avatars & images

The portrait currently shows initials (`profile.avatarText`) in an organic blob.
To use a real photo, drop it into `public/` and replace the blob in
`About.tsx`. Project visuals are gradient placeholders — swap in real screenshots
inside `Projects.tsx`.

---

## 🎨 Design Notes

- **Full-bleed background**: the viewport IS the space — soft sky/cream/mint
  wash with slowly drifting color blobs. No white page with green cards.
- **Flowing sections**: content breathes with large whitespace; sections
  transition through background shifts and organic shapes, not hard slabs.
- **Motion**: gentle floating decor, scroll reveal, subtle hover. All
  animations honor `prefers-reduced-motion`.
- **animal-island-ui usage**: `Tag` and `Button` for small details only — the
  layout, composition, and backgrounds are custom.
- **Responsive**: fluid down to mobile; navigation collapses to a sheet.

---

## 📦 Tech Stack

- React 18
- TypeScript 5
- Vite 5
- React Router 6 (`/`, `/blog`, `/blog/:slug`)
- [animal-island-ui](https://github.com/guokaigdg/animal-island-ui)

---

## 📄 License & Credits

- UI design DNA: [animal-island-ui](https://github.com/guokaigdg/animal-island-ui) (CC BY-NC 4.0)
- Personal content: © Yuxin Lu

For personal, non-commercial use only.
