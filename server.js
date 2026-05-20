const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static("public"));

// ============================================
// 🔴 CHANGE THIS: Your last 4 digits
// ============================================
const CORRECT_PASSWORD = "5300";

// ============================================
// PROTECTED CASE STUDY CONTENT
// ============================================
const caseStudies = {
  project1: {
    content: `
      <div class="case-study">
        <h2>ABSA NextGen Wealth Studio – First Five Years</h2>
        <div class="case-meta">UI/UX Designer & Web Developer | Apr 2026 - Current</div>
        
        <h3>The Challenge</h3>
        <p>Young, high-earning professionals in South Africa earn R30,000-R70,000 per month but feel overwhelmed by financial choices. They lack clear, personalised guidance on whether to rent or buy, save or invest, prioritise cars or property and have no way to visualise how today's decisions will shape their next 5 years.</p>
        <p>Banking apps show them their balances, not possibilities or potential. They receive no guidance on what a "good" financial life looks like for someone their age, in their city, with their aspirations. They watch friends make different choices — some buying property, others travelling, a few seemingly getting ahead — and wonder if they're making mistakes that will financially set them back.</p>
        
        <h3>Product Goals</h3>
        <ol>
          <li>Create a personalised Money Snapshot that helps users intuitively understand their financial position and track progress toward their goals (rent vs buy, car vs invest, local vs offshore).</li>
          <li>Empower users to make confident financial decisions by visualising the 3-5 year outcomes of different choices through interactive simulations.</li>
          <li>Educate users on South African-specific financial concepts through embedded, contextual learning content.</li>
          <li>Build long-term ABSA loyalty by positioning the bank as a trusted partner during users' critical first five years of wealth-building.</li>
          <li>Drive sustainable engagement through timely nudges and milestone celebrations that keep users coming back.</li>
        </ol>
        
        <h3>User Personas</h3>
        
        <h4>Persona 1 - "The Ambitious Analyst"</h4>
        <p><strong>Age:</strong> 27</p>
        <p><strong>Occupation:</strong> Management Consultant at McKinsey</p>
        <p><strong>Salary:</strong> R65,000/month gross</p>
        <p><strong>Debt Situation:</strong> Thabo carries R120,000 in student debt remaining from his family (interest-free), alongside R8,500/month in vehicle finance for his BMW 1 Series, and typically pays off his R15,000 monthly credit card balance in full.</p>
        <p><strong>Lifestyle Aspirations:</strong> He aims to own a two-bedroom apartment in Sandton by age 30, drive a luxury vehicle, take two international holidays annually, and begin building a side investment portfolio.</p>
        <p><strong>Typical Financial Mistakes:</strong> Despite his high income, Thabo spends nearly 30% of his net income on vehicle costs and has no emergency fund. He invests sporadically without a clear strategy, and consistently underestimates how much tax reduces his take-home pay.</p>
        
        <h4>Persona 2 - "The Cautious Professional"</h4>
        <p><strong>Age:</strong> 31</p>
        <p><strong>Occupation:</strong> Engineer</p>
        <p><strong>Salary:</strong> R48,000/month gross</p>
        <p><strong>Debt Situation:</strong> Lisa recently took on a R1.2 million home loan for a property she rents out to tenants, pays R5,500/month for comprehensive medical aid, and drives a 2015 Toyota Corolla that she owns outright.</p>
        <p><strong>Lifestyle Aspirations:</strong> She hopes to move into her own property within two years, start a family, build a comfortable retirement plan, and take one European holiday before turning 35.</p>
        <p><strong>Typical Financial Mistakes:</strong> Lisa has over-invested in property at the expense of liquid savings, holds no offshore exposure despite her long investment horizon, consistently underestimates ongoing maintenance costs, and takes an overly conservative approach to investing that may limit her long-term growth.</p>
        
        <h3>User Flow</h3>
        <img src="/images/UserFlow.png" alt="User Flow Diagram">
        
        <h3>Sitemap</h3>
        <img src="/images/Sitemappng.png" alt="Sitemap">
        
        <h3>Wireframes (Mid-Fidelity)</h3>
        
        <div class="wireframe-section">
          
          <!-- Money Snapshot -->
          <div class="wireframe-subsection">
            <h4>Money Snapshot</h4>
            <div class="wireframe-description">
              <p><strong>Dashboard Grid</strong> – Money Snapshot uses a flexible card grid that reflows based on screen size.</p>
              <p><strong>Sticky Headers</strong> – Section headers remain visible during scroll for orientation.</p>
              <p><strong>Floating Action Button</strong> – "Learn more" or "Send" prominently positioned.</p>
            </div>
            <div class="wireframe-image">
              <img src="/images/HOME.png" alt="Money Snapshot Dashboard Wireframe">
            </div>
          </div>
          
          <!-- Strategy Tracks Overview -->
          <div class="wireframe-subsection">
            <h4>Strategy Tracks Overview</h4>
            <div class="wireframe-description">
              <p><strong>Track Selection</strong> – Users can choose between different financial strategy paths based on their goals.</p>
              <p><strong>Progress Indicators</strong> – Clear visual feedback on where users are in their journey.</p>
            </div>
            <div class="wireframe-image">
              <img src="/images/StrategyTrack.png" alt="Strategy Tracks Overview Wireframe">
            </div>
          </div>

          <!-- First Property Path -->
          <div class="wireframe-subsection">
            <h4>First Property Path (Individual Track View)</h4>
            <div class="wireframe-description">
              <p><strong>Card-based Navigation</strong> – Strategy Tracks use cards for scannable, comparable options.</p>
            </div>
            <div class="wireframe-image">
              <img src="/images/StrategyTrackProperty.png" alt="Strategy Tracks Property Overview Wireframe">
            </div>
          </div>

          <!-- Simulation Lab Overview -->
          <div class="wireframe-subsection">
            <h4>Simulation Lab Overview</h4>
            <div class="wireframe-image">
              <img src="/images/Simulation.png" alt="Simulation Lab Wireframe">
            </div>
          </div>

          <!-- Simulation Lab > Property vs Renting -->
          <div class="wireframe-subsection">
            <h4>Simulation Lab > Property vs Renting (Individual Studio view)</h4>
            <div class="wireframe-description">
              <p><strong>Left Rail/Right Rail:</strong> – Studios use left rail for inputs, right/main for results which is familiar calculator pattern.</p>
            </div>
            <div class="wireframe-image">
              <img src="/images/PropertyVsRenting.png" alt="Simulation Lab > Property vs Renting (Individual Studio view) Wireframe">
            </div>
          </div>

          <!-- Simulation Lab > Library -->
          <div class="wireframe-subsection">
            <h4>Simulation Lab > Library</h4>
            <div class="wireframe-image">
              <img src="/images/Library.png" alt="Simulation Lab > Library Wireframe">
            </div>
          </div>

        </div> <!-- Close wireframe-section -->

        <h3>Prototype</h3>
        <p><a href="https://tshegobless4.github.io/ABSA-Next-Gen/" target="_blank" rel="noopener noreferrer">View ABSA Next Gen Prototype</a></p>
        
      </div>
    `,
  },
  project2: {
    content: `
      <div class="case-study">
        <h2>Personal Portfolio</h2>
        <div class="case-meta">UX/UI Designer & Web Developer | March 2025 - Jun 2025</div>
        
        <h3>Goal Alignment</h3>
        <p>The goal for this website is to curate a space that reflects who I am as a digital artist and designer inspired by the digital world. The theme I am aiming for is a tech-forward, and futuristic aesthetic that offers a sleek and appealing look. This website highlights my design process and is intended for potential collaborators or those interested in engaging with my work in a clean, tech-forward space. I want users to find my website to be easy to navigate through, without feeling overwhemed.</p>
        
        <h3>My Process</h3>
        <h2>Visual Aesthetic</h2>
        <p>This website should present a clean, modern and tech tech-forward aesthetic with subtle sci-fi elements. The use of my colours is to provide a sleek yet futuristic vibe. Visually, it should have clean lines, subtle gradients or glows, and space to breathe. Think: sleek, cyber-cool, and modern. The futuristic feel of the website is intentional as it positions my portfolio within the evovling space of digital arts and UI/UX design, which today are inherently forward looking fields.</p>

        <h4>Colour Pallete</h4>
        <p>I chose a palette that aligns with the sci-fi theme, using a dark background with light, glowing accents to create a holographic effect. These contrasting tones enhance readability while highlighting key elements like titles. The design choice is inspired by futuristic visuals often seen in sci-fi movies. I also used glow elements to give the website a modern, high-tech feel that not only adds a sense of immersion. Using light accents on a darker parts enhances visual clarity.</p>
        <img src="/images/ColourPallette.png" alt="Colour Pallette">

        <h4>Fonts</h4>
        <p>For a sleek, futuristic look, I’m using Orbitron font for all headings and navigation bar and Chakra Petch for body text. Initially in my website i had chosed Orbitron font to use site-wide but it wasn't user friendly and it hurt the eyes of users in longer body text. Obitron, a geometric sans-serif typeface designed specifically for display purposes,reinforces the sci-fi and the digital theme I was aiming for.Its clean,tech-inspired letterforms pair well with the UI elements on my site such as in the titiles and section headers. Since Oribtron is designed as a font display, to maintain readability I limited its use to headings to avoid compromising readability.</p>
        <img src="/images/OrbitronFontImage.png" alt="Fonts">

        <p>To support user-friendly view for the site and to maintain the tech-theme I was aiming for, I used Chakra Petch as the body font. This font maintains a futuristic tone while offering better readability at smaller sizes. It also compliments Oribtrons sharp, modern style but suitable for body text.To enhance readability and to reduce eye strain I adjusted the font size and line space. The pairing of the two fonts create a balanced typographic hierarchy</p>
<img src="/images/ChakraPetchFont.png" alt="Fonts">

        <h3>Information Structure</h3>
        <p>The initial Information Structure of the website</p>
        <img src="/images/InformationStructureDiagram.png" alt="Information Structure Diagram">

         <h3>User Flow</h3>
         <p>This is the basic user flow of this website</p>
         <img src="/images/updated_website_structure.png" alt="updated website structure">

         <h3>Wireframes</h3>
        <h4>Homepage (Mobile)</h4>
        <p>The top of the page includes a navigation bar for easy access to different sections. Below it is a welcome text and a brief intro about me, followed by a photo. Contact details will be placed at the footer or near the bottom of the main section.</p>
        
<img src="/images/HomepageMobileWireframe.png" alt="Homepage Mobile Wireframe">

<h4>Homepage (Mobile)</h4>
<img src="/images/HomepageUpdatedWireframe.png" alt="Homepage Desktop Wireframe">

<h4>Blog Post (Mobile)</h4>
<p>This wireframe represents the layout for the blog page. It includes space for post previews, images, and filters or categories to explore blog topics.</p>
<img src="/images/BlogPageWireframe(Mobile).png" alt="BlogPage Wireframe(Mobile) wireframe">

<h4>Blog Post (Desktop)</h4>
<img src="/images/UpdatedBlogPage(desktop).png" alt="UpdatedBlogPage(desktop) wireframe">

     
<h4>Portfolio Page </h4>
<p>This page will showcase both artwork and games, using images to represent each category.</p>
<img src="/images/PortfolioPageWireframe(Mobile).png" alt="PortfolioPageWireframe(Mobile) wireframe">

<h4>Essay </h4>
<p>This page will showcase both artwork and games, using images to represent each category.</p>
<img src="/images/EssayPageWireframe(Mobile).png" alt="EssayPageWireframe(Mobile) wireframe">
<h4>Blog Post (Desktop)</h4>
        
        <h3>Iterations</h3>
        <h4>Information Structure</h4>
        
        <p>After iterations, this was the final information structure</p>
        <img src="/images/InformatedStructureUpdated.png" alt="Information Structure Diagram">

        <h4>User Flow</h4>
         <img src="/images/BasicFlowDiagramUpdated.png" alt="User Flow">

        
        <h3>Prototype</h3>
        <p><a href="https://tshegobless4.github.io/DIGA3008A--Interactive-Media-/index.html" target="_blank" rel="noopener noreferrer">View ABSA Next Gen Prototype</a></p>
        
        
      </div>
    `,
  },
  project3: {
    content: `
      <div class="case-study">
        <h2> VibeCheck — Music Discovery App </h2>
        <div class="case-meta">UX/UI Designer | Aug 2025 - Oct 2025</div>
        
         <h3>The Challenge</h3>
        <p>The primary challenge was breaking users free from algorithmic echo chambers. Existing streaming platforms keep users trapped in repetitive recommendation loops, making it difficult to discover new and diverse music</p>
        <p>Another significant challenge was reducing friction in the music discovery workflow. Users often hear snippets of songs on social media or in cafes but struggle to save them for later. The process typically involves remembering the song name, opening a separate music app, searching manually, and then adding to a playlist.A multi-step process that leads to forgotten songs and abandoned discoveries.</p>
        
        <h3>Product Goals</h3>
        <ol>
          <li>Empower Music Discovery by allowing users to break free from algorithmic loops on streaming apps and give users direct control over their music discovery journey </li>
          <li>Let users preview songs directly on the website without switching apps</li>
          <li>Allow users to explore music by genre when they don't have a specific artist in mind

</li>
          <li>Seamless Artist Information including displaying top tracks, follower counts, and genre information, Provide clean, modern interface for viewing artist details

</li>
         
        </ol>
        
        <h3>User Personas</h3>
        
        <h4>Persona 1 - Alex The Explorer</h4>
        <p><strong>Demographics:</strong>  20-year-old university student, constantly listening to music 
while studying.</p>
        <p><strong>Goals:</strong> To quickly find new music from artists they already like. Wants to hear a 
preview before committing to a full song, is open to discovering new music or 
genre. </p>
        <p><strong>Frustrations: </strong> Gets stuck in algorithmic loops on streaming apps. Finds it 
tedious to switch between apps to listen and then find the song again later. 
When they hear a cool song snippet in a video on social media, they want to 
save it but can’t do it directly in the app instead they have to open their music 
app, search for the song based on the snippet they remember and then only 
then save it to a playlist.  </p>
        <p><strong>Key Behaviours:</strong> Uses their phone for quick searches. Values efficiency and 
clean design. Likely to use the search function immediately. </p>
       
        <h4>Persona 2 -  Maya The Playlist Curator </h4>
        <p><strong>Demographics:</strong> 28-year-old who loves hosting friends and creating the perfect 
ambiance.</p>
        <p><strong>Goals:</strong> To find specific songs that fit a vibe and save them for later. To build a 
list of potential tracks for a party playlist. 
</p>
        <p><strong>Frustrations: </strong> G Forgets song names heard briefly in a cafe or online. Doesn't like 
cluttering her main streaming service with one-off saves.  </p>
        <p><strong>Key Behaviours:</strong>  Plans ahead on a laptop. Enjoys the process of discovering 
and curating. Will use the favourites feature extensively.  </p>
        
        <h3>User Flow</h3>
        <img src="/images/FlowDiagram.png" alt="User Flow Diagram">
        
        <h3>Sitemap</h3>
        <img src="/images/InformationStructureDiagram.png" alt="Information Structure Diagram">
      </div>
    `,
  },
};

// ============================================
// API ENDPOINT (checks password)
// ============================================
app.post("/api/verify-password", (req, res) => {
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
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/work", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "work.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// ============================================
// START SERVER
// ============================================
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log(`   Press Ctrl+C to stop`);
});
