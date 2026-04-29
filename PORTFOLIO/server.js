const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// ============================================
// 🔴 CHANGE THIS: Your last 4 digits
// ============================================
const CORRECT_PASSWORD = "5300";  //

// ============================================
// PROTECTED CASE STUDY CONTENT
// ============================================
const caseStudies = {
    project1: {
        content: `
            <div class="case-study">
                <h2></h2> ABSA NextGen Wealth Studio – First Five Years
                <div class="case-meta">UI/UX Designer | Jan 2025 - Mar 2025</div>
                <h3>The Challenge</h3>
                <p>Elderly users struggled with small text and complex navigation.</p>
                <h3>My Process</h3>
                <p>I conducted 5 user interviews with adults 65+ and created personas.</p>
                <h3>The Solution</h3>
                <p>A simplified dashboard with larger text and voice navigation.</p>
                <img src="/images/project1.jpg" alt="Project 1">
                <h3>Results</h3>
                <p>Users completed tasks 40% faster.</p>
            </div>
        `
    },
    project2: {
        content: `
            <div class="case-study">
                <h2>E-Learning Platform</h2>
                <div class="case-meta">UX Researcher | Apr 2025 - Jun 2025</div>
                <h3>The Challenge</h3>
                <p>Students missed deadlines because progress tracking was unclear.</p>
                <h3>My Solution</h3>
                <p>A visual progress bar and personalized reminders.</p>
                <img src="/images/project2.jpg" alt="Project 2">
                <h3>Results</h3>
                <p>Assignment completion increased by 35%.</p>
            </div>
        `
    },
    project3: {
        content: `
            <div class="case-study">
                <h2>Food Delivery App</h2>
                <div class="case-meta">UI Designer | Jul 2025 - Sep 2025</div>
                <h3>The Challenge</h3>
                <p>5-step checkout caused 25% cart abandonment.</p>
                <h3>My Solution</h3>
                <p>Single-page checkout with auto-filled addresses.</p>
                <img src="/images/project3.jpg" alt="Project 3">
                <h3>Results</h3>
                <p>Checkout time reduced from 90 to 30 seconds.</p>
            </div>
        `
    }
};

// ============================================
// API ENDPOINT (checks password)
// ============================================
app.post('/api/verify-password', (req, res) => {
    const { password, projectId } = req.body;
    
    if (password === CORRECT_PASSWORD) {
        const caseStudy = caseStudies[projectId];
        if (caseStudy) {
            res.json({ success: true, caseStudy: caseStudy.content });
        } else {
            res.json({ success: false, error: "Project not found" });
        }
    } else {
        res.json({ success: false, error: "Incorrect password" });
    }
});

// ============================================
// SERVE HTML PAGES
// ============================================
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    // About content is on index.html, so just send that
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/work', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'work.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// ============================================
// START SERVER
// ============================================
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
    console.log(`   Press Ctrl+C to stop`);
});