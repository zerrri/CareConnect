#!/bin/bash

echo "🚀 Setting up CareConnect Frontend Development Environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Create environment file if it doesn't exist
if [ ! -f .env ]; then
    echo "🔧 Creating .env file..."
    cat > .env << EOF
VITE_ML_DOC_API=http://localhost:5000
VITE_NODE_DOC_API=http://localhost:8080
EOF
    echo "✅ .env file created"
else
    echo "✅ .env file already exists"
fi

# Run type check
echo "🔍 Running TypeScript type check..."
npm run type-check

if [ $? -ne 0 ]; then
    echo "⚠️  TypeScript type check failed. Please fix the errors before continuing."
    exit 1
fi

echo "✅ TypeScript type check passed"

# Run linting
echo "🧹 Running ESLint..."
npm run lint

if [ $? -ne 0 ]; then
    echo "⚠️  ESLint found issues. You can run 'npm run lint:fix' to fix them automatically."
fi

echo "✅ Setup completed successfully!"
echo ""
echo "🎯 Next steps:"
echo "1. Start the development server: npm run dev"
echo "2. Open http://localhost:5173 in your browser"
echo "3. Make sure your backend services are running:"
echo "   - Node.js backend on port 8080"
echo "   - ML backend on port 5000"
echo ""
echo "📚 Available commands:"
echo "  npm run dev          - Start development server"
echo "  npm run build        - Build for production"
echo "  npm run lint         - Run ESLint"
echo "  npm run lint:fix     - Fix ESLint issues automatically"
echo "  npm run type-check   - Run TypeScript type check"
echo "  npm run test         - Run tests"
echo "  npm run test:ui      - Run tests with UI"
echo "  npm run test:coverage - Run tests with coverage"
