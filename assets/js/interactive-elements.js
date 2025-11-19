// Interactive Elements for About Page
document.addEventListener("readystatechange", () => {
  if (document.readyState === "complete") {
    // Random Quote/Motto
    initRandomQuote();

    // Fun Statistics
    initFunStats();

    // Goals Tracker
    initGoalsTracker();
  }
});

// Random Quote/Motto
function initRandomQuote() {
  const quoteContainer = document.getElementById("random-quote");
  if (!quoteContainer) return;

  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Stay curious, stay hungry. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Life is what happens to you while you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "You learn more from failure than from success. Don't let it stop you. Failure builds character. - Unknown",
    "If you are working on something exciting that you really care about, you don't have to be pushed. The vision pulls you. - Steve Jobs",
    "People who are crazy enough to think they can change the world, are the ones who do. - Rob Siltanen",
    "We may encounter many defeats but we must not be defeated. - Maya Angelou",
  ];

  // Get a random quote
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  quoteContainer.innerHTML = `<em>"${selectedQuote}"</em>`;
}

// Fun Statistics
function initFunStats() {
  const statsContainer = document.getElementById("fun-stats");
  if (!statsContainer) return;

  const stats = [
    { icon: "☕", label: "Cups of Coffee", value: "∞", description: "And counting..." },
    { icon: "📚", label: "Books Read This Year", value: "12+", description: "Always learning" },
    { icon: "✈️", label: "Countries Visited", value: "30+", description: "And still exploring" },
    { icon: "💻", label: "Lines of Code", value: "10k+", description: "And growing" },
    { icon: "🏔️", label: "Highest Altitude", value: "5000m", description: "Everest Base Camp" },
    { icon: "🌍", label: "Languages", value: "3", description: "English, Mandarin, Japanese" },
  ];

  let statsHTML = '<div class="row">';
  stats.forEach((stat, index) => {
    statsHTML += `
      <div class="col-md-4 col-sm-6 mb-3">
        <div class="fun-stat-card" style="
          background: var(--global-card-bg-color);
          border: 1px solid var(--global-divider-color);
          border-radius: 8px;
          padding: 1.5rem;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
        ">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">${stat.icon}</div>
          <div style="font-size: 2rem; font-weight: bold; color: var(--global-theme-color); margin-bottom: 0.25rem;">
            ${stat.value}
          </div>
          <div style="font-weight: 600; color: var(--global-text-color); margin-bottom: 0.25rem;">
            ${stat.label}
          </div>
          <div style="font-size: 0.875rem; color: var(--global-text-color-light);">
            ${stat.description}
          </div>
        </div>
      </div>
    `;
  });
  statsHTML += "</div>";

  statsContainer.innerHTML = statsHTML;

  // Add hover effects
  const statCards = statsContainer.querySelectorAll(".fun-stat-card");
  statCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
      this.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "none";
    });
  });
}

// Goals Tracker
function initGoalsTracker() {
  const goalsContainer = document.getElementById("goals-tracker");
  if (!goalsContainer) return;

  const currentYear = new Date().getFullYear();
  const goals = [
    {
      title: "Read 20 Books",
      progress: 12,
      target: 20,
      description: "📚 Expanding knowledge through reading",
    },
    {
      title: "Visit 5 New Countries",
      progress: 2,
      target: 5,
      description: "✈️ Exploring new cultures and places",
    },
    {
      title: "Complete MFin Degree",
      progress: 50,
      target: 100,
      description: "🎓 Master of Finance at LSE",
    },
    {
      title: "Build 3 Side Projects",
      progress: 1,
      target: 3,
      description: "💻 Creating and learning through projects",
    },
    {
      title: "Run a Marathon",
      progress: 0,
      target: 100,
      description: "🏃 Training for my first marathon",
    },
    {
      title: "Learn a New Skill",
      progress: 30,
      target: 100,
      description: "🎯 Continuously growing and learning",
    },
  ];

  let goalsHTML = `<h4 style="margin-bottom: 1.5rem;">${currentYear} Goals & Challenges</h4>`;
  goals.forEach((goal) => {
    const percentage = Math.min((goal.progress / goal.target) * 100, 100);
    const isComplete = goal.progress >= goal.target;

    goalsHTML += `
      <div class="goal-item" style="
        margin-bottom: 1.5rem;
        padding: 1.25rem;
        background: var(--global-card-bg-color);
        border: 1px solid var(--global-divider-color);
        border-radius: 8px;
      ">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <div>
            <div style="font-weight: 600; color: var(--global-text-color); margin-bottom: 0.25rem;">
              ${goal.title} ${isComplete ? "✅" : ""}
            </div>
            <div style="font-size: 0.875rem; color: var(--global-text-color-light);">
              ${goal.description}
            </div>
          </div>
          <div style="text-align: right; font-weight: 600; color: var(--global-theme-color);">
            ${goal.progress}/${goal.target}
          </div>
        </div>
        <div style="
          width: 100%;
          height: 8px;
          background: var(--global-divider-color);
          border-radius: 4px;
          overflow: hidden;
        ">
          <div style="
            width: ${percentage}%;
            height: 100%;
            background: ${isComplete ? "var(--global-theme-color)" : "linear-gradient(90deg, var(--global-theme-color), var(--global-theme-color))"};
            transition: width 0.5s ease;
            border-radius: 4px;
          "></div>
        </div>
      </div>
    `;
  });

  goalsContainer.innerHTML = goalsHTML;
}
