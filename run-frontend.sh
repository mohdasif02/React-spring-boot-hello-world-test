#!/bin/bash

echo "⚛️  Starting React Frontend..."
echo "============================="
echo ""

cd frontend

if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies for the first time..."
    npm install
fi

echo "🔥 Starting development server on http://localhost:3000"
echo ""

npm start
