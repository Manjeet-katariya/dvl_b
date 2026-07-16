const dotenv = require('dotenv');

dotenv.config();

const express = require('express');
const dns = require('dns');
dns.setServers(['8.8.8.8']);
console.log('DNS Servers:', dns.getServers());

const mongoose = require('mongoose');
const logger = require('./logger');
const cors = require('cors');


const app = express();

// Compression middleware - reduces response size
const compression = require('compression');
app.use(compression());

const allowedOrigins = [
  'http://93.127.194.6',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://localhost:3001',
  'http://127.0.0.1:3001',
  'https://dvlarchitects.com',    // Add this
  'https://www.dvlarchitects.com' // Add this
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, postman)
    if (!origin) return callback(null, true);
    
    // Check if origin is localhost or local IP
    const isLocal = origin.startsWith('http://localhost') || 
                    origin.startsWith('http://127.0.0.1') || 
                    origin.startsWith('http://192.168.') || 
                    origin.startsWith('http://10.') ||
                    origin.startsWith('http://172.'); // Docker/Vagrant/standard local ranges
                    
    if (isLocal || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple MongoDB connection for local database (no SSL options needed)
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('✅ MongoDB connected successfully to local database');
  console.log('📊 Database:', mongoose.connection.db.databaseName);
  console.log('📍 Host:', mongoose.connection.host);
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err.message);
  console.log('⚠️  Please make sure MongoDB is running locally');
  console.log('💡 To start MongoDB: net start MongoDB');
});

// Routes
app.get('/', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected';
  res.json({ 
    message: 'Architecture Backend API is running',
    database: {
      status: dbStatus,
      name: mongoose.connection.name || 'Not connected'
    },
    timestamp: new Date().toISOString()
  });
});


const emailTestRoutes = require('./routes/emailTest');
app.use('/api/email', emailTestRoutes);
// Import routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

const teamRoutes = require('./routes/team');
app.use('/api/team', teamRoutes);

const projectRoutes = require('./routes/projects');
app.use('/api/projects', projectRoutes);

const uploadRoutes = require('./routes/upload');
app.use('/api/upload', uploadRoutes);

// Contact and Estimate Routes
const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);

const contactDetailsRoutes = require('./routes/contactDetails');
app.use('/api/contact-details', contactDetailsRoutes);

const estimateRoutes = require('./routes/estimate');
app.use('/api/estimate', estimateRoutes);

const socialRoutes = require('./routes/social');
app.use('/api/social', socialRoutes);

const socialIconsRoutes = require('./routes/socialIcons');
app.use('/api/social-icons', socialIconsRoutes);

const founderRoutes = require('./routes/founder');
app.use('/api/founder', founderRoutes);

const websiteContentRoutes = require('./routes/websiteContent');
app.use('/api/website-content', websiteContentRoutes);

// Serve uploaded files statically
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 API URL: http://localhost:${PORT}`);
  console.log(`👥 Users API: http://localhost:${PORT}/api/users`);
  console.log(`👥 Team API: http://localhost:${PORT}/api/team`);
  console.log(`🏗️  Projects API: http://localhost:${PORT}/api/projects`);
  console.log(`📣 Social API: http://localhost:${PORT}/api/social`);  console.log(`🔗 Social Icons API: http://localhost:${PORT}/api/social-icons`);  console.log(`� Founder API: http://localhost:${PORT}/api/founder`);
  console.log(`�📤 Upload API: http://localhost:${PORT}/api/upload (CLOUDINARY)`);
  console.log(`📁 Uploads served at: http://localhost:${PORT}/uploads/`);
});
