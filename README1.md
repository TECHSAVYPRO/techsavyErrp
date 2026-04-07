# Dapin Edu Website

A full-featured educational website built with Next.js 14, MySQL, and Tailwind CSS — featuring a complete admin dashboard for content management.

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** (App Router) | Frontend framework |
| **TypeScript** | Type safety |
| **MySQL** (`mysql2`) | Database |
| **Tailwind CSS** | Styling |
| **JWT** (`jsonwebtoken`) | Admin authentication |
| **bcryptjs** | Password hashing |
| **Sharp** | Image optimization |

## Prerequisites

- Node.js 18+
- MySQL 8.0+
- npm or yarn

## Setup Instructions

### 1. Clone and install dependencies

```bash
git clone <repo-url>
cd techsavyErrp
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your settings:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=dapin_edu
JWT_SECRET=your-very-long-random-secret-key
```

### 3. Initialize the database

```bash
# Create tables
mysql -u root -p < scripts/init-db.sql

# Or create the database first, then run:
mysql -u root -p dapin_edu < scripts/init-db.sql
```

### 4. Seed the database

```bash
npm run seed
```

This creates:
- Default admin user: `admin` / `admin123`
- Default pages: Home, About, Services, Programs, Team, Contact
- Default site settings

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the website.

Admin dashboard: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run seed` | Seed the database |

## Environment Variables

| Variable | Required | Default | Description |
|---|---|---|---|
| `DB_HOST` | Yes | `localhost` | MySQL host |
| `DB_PORT` | No | `3306` | MySQL port |
| `DB_USER` | Yes | `root` | MySQL username |
| `DB_PASSWORD` | Yes | — | MySQL password |
| `DB_NAME` | Yes | `dapin_edu` | Database name |
| `JWT_SECRET` | Yes | — | JWT signing secret (use 64+ random chars) |
| `JWT_EXPIRES_IN` | No | `7d` | JWT expiration time |
| `NEXT_PUBLIC_SITE_URL` | No | `http://localhost:3000` | Public site URL |
| `NEXT_PUBLIC_SITE_NAME` | No | `Dapin Edu` | Site name |
| `UPLOAD_DIR` | No | `public/uploads` | Upload directory |
| `MAX_FILE_SIZE` | No | `5242880` | Max file size in bytes (5MB) |

## Project Structure

```
src/
├── app/
│   ├── (public)/          # Public-facing pages
│   │   ├── layout.tsx     # Public layout with header/footer
│   │   └── page.tsx       # Home page
│   ├── admin/
│   │   ├── login/         # Admin login page
│   │   └── dashboard/     # Admin dashboard
│   │       ├── layout.tsx # Dashboard sidebar layout
│   │       ├── page.tsx   # Dashboard overview
│   │       ├── pages/     # Pages manager
│   │       ├── sections/  # Sections manager
│   │       ├── media/     # Media manager
│   │       └── settings/  # Site settings
│   ├── api/
│   │   ├── auth/          # Authentication endpoints
│   │   ├── pages/         # Pages CRUD API
│   │   ├── sections/      # Sections CRUD API
│   │   ├── media/         # Media upload/delete API
│   │   └── settings/      # Settings API
│   └── layout.tsx         # Root layout
├── components/
│   ├── admin/             # Admin-specific components
│   ├── ui/                # Reusable UI components
│   └── public/            # Public site components
├── lib/
│   ├── db.ts              # MySQL connection pool
│   ├── auth.ts            # JWT & password helpers
│   └── utils.ts           # Utility functions
├── types/
│   └── index.ts           # TypeScript types
└── middleware.ts           # Route protection
scripts/
├── init-db.sql            # Database schema
└── seed.ts                # Database seeder
public/
└── uploads/               # Uploaded media files
```

## API Endpoints

### Authentication
- `POST /api/auth/login` — Admin login
- `POST /api/auth/logout` — Admin logout
- `GET /api/auth/me` — Get current user

### Pages
- `GET /api/pages` — List all pages
- `POST /api/pages` — Create page
- `GET /api/pages/[id]` — Get single page
- `PUT /api/pages/[id]` — Update page
- `DELETE /api/pages/[id]` — Delete page

### Sections
- `GET /api/sections` — List sections (optional `?page_id=` filter)
- `POST /api/sections` — Create section
- `GET /api/sections/[id]` — Get section
- `PUT /api/sections/[id]` — Update section
- `DELETE /api/sections/[id]` — Delete section

### Media
- `GET /api/media` — List all media
- `POST /api/media` — Upload image(s)
- `DELETE /api/media/[id]` — Delete media

### Settings
- `GET /api/settings` — Get all settings
- `PUT /api/settings` — Update settings (bulk)

## Security

- JWT tokens stored in httpOnly cookies (not accessible to JavaScript)
- Passwords hashed with bcrypt (12 rounds)
- All API routes protected by authentication
- Parameterized SQL queries (no SQL injection)
- Security headers configured (X-Frame-Options, CSP, etc.)
- Route protection via Next.js middleware

## License

Private project — all rights reserved.
