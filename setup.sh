#!/bin/bash

# PropEase Development Setup Script

echo "🏠 PropEase - Property Management Platform"
echo "Setting up development environment...\n"

# Backend setup
echo "📦 Setting up backend..."
cd apps/backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Create .env from example
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✅ Created .env file - update with your credentials"
fi

# Run migrations
python manage.py migrate
python manage.py createsuperuser --noinput --username admin --email admin@propease.local 2>/dev/null || true

cd ../..

# Frontend setup
echo "\n🎨 Setting up frontend..."
cd apps/frontend
npm install
cd ../..

echo "\n✅ Setup complete!"
echo ""
echo "To start development:"
echo "  Backend:  cd apps/backend && source venv/bin/activate && python manage.py runserver"
echo "  Frontend: cd apps/frontend && npm run dev"
