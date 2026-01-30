#!/bin/bash

echo "🚀 Full Stack Hello World - Setup Script"
echo "=========================================="
echo ""

# Check Java
echo "📋 Checking prerequisites..."
if ! command -v java &> /dev/null; then
    echo "❌ Java is not installed. Please install Java 17 or higher."
    echo "   Download from: https://adoptium.net/"
    exit 1
fi

JAVA_VERSION=$(java -version 2>&1 | awk -F '"' '/version/ {print $2}' | cut -d'.' -f1)
if [ "$JAVA_VERSION" -lt 17 ]; then
    echo "❌ Java 17 or higher is required. Current version: $JAVA_VERSION"
    exit 1
fi
echo "✅ Java version: $(java -version 2>&1 | head -n 1)"

# Check Maven
if ! command -v mvn &> /dev/null; then
    echo "❌ Maven is not installed. Please install Maven 3.6+."
    echo "   Download from: https://maven.apache.org/download.cgi"
    exit 1
fi
echo "✅ Maven version: $(mvn -version | head -n 1)"

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 14+."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi
echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"

echo ""
echo "📦 Installing dependencies..."
echo ""

# Setup Backend
echo "🔧 Setting up Spring Boot backend..."
cd backend
mvn clean install -DskipTests
if [ $? -eq 0 ]; then
    echo "✅ Backend setup complete!"
else
    echo "❌ Backend setup failed!"
    exit 1
fi

cd ..

# Setup Frontend
echo ""
echo "🔧 Setting up React frontend..."
cd frontend
npm install
if [ $? -eq 0 ]; then
    echo "✅ Frontend setup complete!"
else
    echo "❌ Frontend setup failed!"
    exit 1
fi

cd ..

echo ""
echo "✨ Setup Complete!"
echo ""
echo "📝 To run the application:"
echo ""
echo "Terminal 1 - Start Backend:"
echo "  cd backend"
echo "  mvn spring-boot:run"
echo ""
echo "Terminal 2 - Start Frontend:"
echo "  cd frontend"
echo "  npm start"
echo ""
echo "Or use the provided run scripts:"
echo "  ./run-backend.sh    (in one terminal)"
echo "  ./run-frontend.sh   (in another terminal)"
echo ""
echo "🌐 Access the app at: http://localhost:3000"
echo "🔌 Backend API at: http://localhost:8080/api/hello"
