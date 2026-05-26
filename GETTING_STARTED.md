# PropEase - Getting Started Guide

Welcome to **PropEase**, the all-in-one property management platform for African landlords! 🏠

## 📋 Table of Contents
- [Project Setup](#project-setup)
- [Technology Stack](#technology-stack)
- [Backend Development](#backend-development)
- [Frontend Development](#frontend-development)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Next Steps](#next-steps)

---

## 🚀 Project Setup

### Option 1: Automated Setup (Recommended)
```bash
bash setup.sh
```

### Option 2: Manual Setup

#### Backend Setup
```bash
# Navigate to backend directory
cd apps/backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser
```

#### Frontend Setup
```bash
# Navigate to frontend directory
cd apps/frontend

# Install dependencies
npm install
```

---

## 💻 Technology Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | Next.js 15+ • React 19 • TypeScript • Tailwind CSS |
| **Backend** | Django 4.2 • Django Ninja • Python 3.9+ |
| **Database** | PostgreSQL 12+ |
| **Authentication** | JWT Tokens |
| **Payments** | M-Pesa Daraja API • Stripe |
| **Notifications** | Africa's Talking (SMS/WhatsApp) |

---

## 🔧 Backend Development

### Starting the Backend Server
```bash
cd apps/backend
source venv/bin/activate
python manage.py runserver
```

Backend will be available at: **http://localhost:8000**

### API Endpoints
- **API Root**: http://localhost:8000/api/
- **Admin Panel**: http://localhost:8000/admin/
- **Health Check**: http://localhost:8000/api/health/

### Database Models
The API includes these core models:
- **Property** - Property details managed by landlords
- **Tenant** - Tenant information and screening status
- **Lease** - Digital lease agreements
- **RentPayment** - Payment tracking and history
- **MaintenanceRequest** - Maintenance request management

### Creating Admin User
```bash
python manage.py createsuperuser
# Follow prompts to create admin user
# Access at http://localhost:8000/admin/
```

### Database Migrations
```bash
# Create migrations after model changes
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Show migration status
python manage.py showmigrations
```

---

## 🎨 Frontend Development

### Starting the Frontend Server
```bash
cd apps/frontend
npm run dev
```

Frontend will be available at: **http://localhost:3000**

### Project Structure
```
apps/frontend/
├── app/
│   ├── page.tsx          # Homepage
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/               # Static assets
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

### Building for Production
```bash
npm run build
npm start
```

---

## 🗄️ Database Setup

### PostgreSQL Setup (Optional)
For production or local testing with PostgreSQL:

1. Install PostgreSQL
2. Create database:
```bash
createdb propease
createuser propease_user
psql -U postgres -c "ALTER USER propease_user WITH PASSWORD 'your_password';"
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE propease TO propease_user;"
```

3. Update `.env` file:
```
DATABASE_ENGINE=django.db.backends.postgresql
DATABASE_NAME=propease
DATABASE_USER=propease_user
DATABASE_PASSWORD=your_password
DATABASE_HOST=localhost
DATABASE_PORT=5432
```

4. Run migrations:
```bash
python manage.py migrate
```

---

## ▶️ Running the Application

### Development Mode (All Services)

**Terminal 1 - Backend:**
```bash
cd apps/backend
source venv/bin/activate
python manage.py runserver
```

**Terminal 2 - Frontend:**
```bash
cd apps/frontend
npm run dev
```

### Using npm Scripts
From the root directory:
```bash
# Run setup
npm run setup

# Run backend
npm run backend:dev

# Run frontend
npm run frontend:dev
```

---

## 📚 API Documentation

### Health Check
```
GET /api/health/
```
Response:
```json
{
  "status": "ok",
  "service": "PropEase API"
}
```

### Authentication
API uses JWT tokens. Include in headers:
```
Authorization: Bearer <token>
```

### CORS Configuration
Frontend origins are configured in `CORS_ALLOWED_ORIGINS` in `.env`:
```
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001
```

---

## 🎯 Next Steps

1. **Environment Configuration**
   - Update `.env` files with your credentials
   - Configure M-Pesa keys in `apps/backend/.env`
   - Set up Africa's Talking credentials

2. **Database**
   - Set up PostgreSQL for production
   - Create initial superuser in admin panel

3. **Module Development**
   - **Module 1**: Tenant Screening - Create screening routes & components
   - **Module 2**: Lease Management - Digital lease generation
   - **Module 3**: Rent Collection - Payment integration
   - **Module 4**: Maintenance - Request tracking system
   - **Module 5**: Dashboard - Analytics & reporting

4. **Integration**
   - M-Pesa payment gateway
   - Africa's Talking SMS/WhatsApp
   - Digital signature service (DocuSeal)

5. **Deployment**
   - Frontend: Vercel, Netlify, or custom server
   - Backend: Heroku, Digital Ocean, or AWS

---

## 📖 Useful Resources

- [Django Documentation](https://docs.djangoproject.com/)
- [Django Ninja Documentation](https://django-ninja.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## ❓ Troubleshooting

### Django Migrations Error
```bash
# Reset migrations (development only)
python manage.py migrate --fake-initial
```

### Port Already in Use
```bash
# Kill process on port 8000
lsof -ti:8000 | xargs kill -9

# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Virtual Environment Issues
```bash
# Deactivate and reactivate
deactivate
source venv/bin/activate
```

---

**Happy coding! 🚀**
