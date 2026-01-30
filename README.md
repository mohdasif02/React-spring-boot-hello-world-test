# Full Stack Hello World App
## React + Spring Boot

A modern full-stack application with React frontend and Spring Boot backend.

## 🏗️ Architecture

```
fullstack-hello-world/
├── backend/          # Spring Boot REST API (Port 8080)
│   ├── src/
│   └── pom.xml
├── frontend/         # React Application (Port 3000)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── webpack.config.js
└── README.md
```

## ✨ Features

- 🎨 Modern React UI with Tailwind CSS
- 🚀 Spring Boot REST API
- 🔄 Real-time data fetching with Axios
- 🎯 CORS enabled for local development
- 📱 Responsive design
- ⚡ Hot reload for both frontend and backend
- 🎭 Personalized greeting endpoint

## 📋 Prerequisites

- **Java 17 or higher** - [Download](https://adoptium.net/)
- **Maven 3.6+** - [Download](https://maven.apache.org/download.cgi)
- **Node.js 14+** - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)

## 🚀 Quick Start

### Option 1: Run Both Services

**Terminal 1 - Start Backend:**
```bash
cd backend
mvn spring-boot:run
```

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm install
npm start
```

### Option 2: Use Setup Scripts (see below)

## 🔧 Detailed Setup

### Backend Setup (Spring Boot)

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies and run:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

3. Backend will start on: `http://localhost:8080`

4. Test the API:
   ```bash
   curl http://localhost:8080/api/hello
   ```

### Frontend Setup (React)

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm start
   ```

4. Frontend will open automatically at: `http://localhost:3000`

## 🌐 API Endpoints

### GET `/api/hello`
Returns a hello world message with timestamp and version.

**Response:**
```json
{
  "text": "Hello World from Spring Boot!",
  "timestamp": "2026-01-30 12:34:56",
  "version": "1.0.0"
}
```

### GET `/api/hello/{name}`
Returns a personalized greeting.

**Example:**
```
GET /api/hello/John
```

**Response:**
```json
{
  "text": "Hello John from Spring Boot!",
  "timestamp": "2026-01-30 12:34:56",
  "version": "1.0.0"
}
```

### POST `/api/hello`
Send a name in the request body for a personalized response.

## 🧪 Testing

**Test Backend:**
```bash
cd backend
mvn test
```

**Test Frontend:**
Open browser to `http://localhost:3000` after starting both services.

## 📦 Building for Production

**Backend:**
```bash
cd backend
mvn clean package
java -jar target/hello-world-backend-1.0.0.jar
```

**Frontend:**
```bash
cd frontend
npm run build
```

## 🛠️ Technologies Used

### Backend
- ☕ Java 17
- 🍃 Spring Boot 3.2.0
- 🔧 Maven
- 🌐 Spring Web (REST API)
- 🔄 Spring DevTools (Hot reload)

### Frontend
- ⚛️ React 18
- 🎨 Tailwind CSS
- 📡 Axios (HTTP client)
- 📦 Webpack 5
- 🔄 Babel

## ❓ Troubleshooting

**Backend not starting?**
- Ensure Java 17+ is installed: `java -version`
- Check port 8080 is not in use
- Verify Maven is installed: `mvn -version`

**Frontend not connecting to backend?**
- Ensure backend is running on port 8080
- Check browser console for errors
- Verify CORS is enabled in Spring Boot controller

**Port already in use?**
- Backend: Change port in `application.properties`
- Frontend: Change port in `webpack.config.js`

## 📝 Project Structure Details

### Backend
- `HelloWorldApplication.java` - Main Spring Boot application
- `HelloWorldController.java` - REST API endpoints
- `Message.java` - Response model
- `application.properties` - Configuration

### Frontend
- `App.jsx` - Main React component
- `index.js` - Application entry point
- `webpack.config.js` - Build configuration

## 🎯 Next Steps

- Add a database (MySQL, PostgreSQL)
- Implement authentication (JWT, OAuth)
- Add more CRUD operations
- Deploy to cloud (AWS, Azure, Heroku)
- Add unit and integration tests

## 📄 License

MIT License - Feel free to use this project for learning!

---

**Happy Coding! 🎉**

Need help? Check the troubleshooting section or open an issue.
