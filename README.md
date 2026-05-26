# PropEase - Property Management Platform

All-in-one property management platform for small landlords in Africa.

## Project Structure

```
propease/
├── apps/
│   ├── backend/      # Django + Django Ninja REST API
│   └── frontend/     # Next.js + Tailwind CSS
├── package.json      # Root npm scripts
└── README.md
```

## Tech Stack

**Frontend:** Next.js 15+ | React 19 | TypeScript | Tailwind CSS
**Backend:** Django 4.2 | Django Ninja | PostgreSQL
**Payments:** M-Pesa Daraja API | Stripe
**Communications:** Africa's Talking (SMS/WhatsApp)
**Auth:** JWT Tokens

## Quick Start

### Prerequisites
- Node.js 18+
- Python 3.9+
- PostgreSQL 12+

### Installation

1. Clone the repository
```bash
git clone <repo-url>
cd propease
```

2. Set up backend
```bash
cd apps/backend
cp .env.example .env
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

3. Set up frontend
```bash
cd apps/frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Development

**Backend**: http://localhost:8000
- API: http://localhost:8000/api/
- Admin: http://localhost:8000/admin/

**Frontend**: http://localhost:3000

## Modules

1. **Tenant Screening** - Online application, background checks, scoring
2. **Lease Management** - Digital agreements, e-signatures, renewal tracking
3. **Rent Collection** - Payment tracking, M-Pesa integration, auto-reminders
4. **Maintenance Requests** - Tenant submissions, assignment, progress tracking
5. **Dashboard & Reports** - Occupancy, income, analytics

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)
# PropEase-
