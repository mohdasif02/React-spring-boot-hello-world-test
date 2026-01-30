#!/bin/bash

echo "🚀 Starting Spring Boot Backend..."
echo "=================================="
echo ""

cd backend

if [ ! -d "target" ]; then
    echo "📦 Building project for the first time..."
    mvn clean install -DskipTests
fi

echo "🔥 Starting server on http://localhost:8080"
echo ""

mvn spring-boot:run
