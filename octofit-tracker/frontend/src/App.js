import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';

const platformStats = [
  { label: 'Daily check-ins', value: '128', tone: 'sunrise' },
  { label: 'Active teams', value: '12', tone: 'lagoon' },
  { label: 'Workout plans', value: '24', tone: 'ember' },
];

const launchTracks = [
  {
    title: 'Profiles and identity',
    description: 'Secure sign-in, athlete bios, and progress snapshots for every member.',
  },
  {
    title: 'Activity intelligence',
    description: 'Workout logs, recovery notes, and streak monitoring in one place.',
  },
  {
    title: 'Competition layer',
    description: 'Teams, rankings, and shared milestones that keep training social.',
  },
];

const leaderboardPreview = [
  { name: 'Harbor Sprinters', score: '2,410 pts', trend: '+14%' },
  { name: 'Peak Mechanics', score: '2,320 pts', trend: '+11%' },
  { name: 'South Loop Lifters', score: '2,140 pts', trend: '+9%' },
];

const workoutSuggestions = [
  'Mobility reset after strength blocks',
  'Threshold run tuned to recent pace logs',
  'Partner circuit for team challenge day',
];

function HomePage() {
  return (
    <>
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">OctoFit Tracker</p>
          <h1>Train together. Track everything. Compete with intent.</h1>
          <p className="hero-text">
            This starter app pairs a Django API with a React dashboard so you can build profiles,
            logging, team competition, and personalized programming on top of a focused scaffold.
          </p>
          <div className="hero-actions">
            <a className="btn btn-octofit" href="http://localhost:8000/api/" target="_blank" rel="noreferrer">
              View API root
            </a>
            <NavLink className="btn btn-outline-light" to="/leaderboard">
              Preview leaderboard
            </NavLink>
          </div>
        </div>
        <div className="hero-visual">
          <div className="badge-cloud">Launch scaffold</div>
          <img src="/octofitapp-small.png" alt="OctoFit mascot" className="hero-image" />
        </div>
      </section>

      <section className="stats-grid">
        {platformStats.map((item) => (
          <article key={item.label} className={`stat-card ${item.tone}`}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </section>

      <section className="content-grid">
        <div className="panel-card">
          <p className="section-label">Launch tracks</p>
          {launchTracks.map((track) => (
            <div key={track.title} className="track-row">
              <h2>{track.title}</h2>
              <p>{track.description}</p>
            </div>
          ))}
        </div>
        <div className="panel-card dark-panel">
          <p className="section-label">Suggested first milestone</p>
          <h2>Ship the activity log flow first</h2>
          <p>
            It unlocks useful data for the leaderboard and workout recommendation features, which
            keeps the early product coherent instead of building disconnected screens.
          </p>
        </div>
      </section>
    </>
  );
}

function TeamsPage() {
  return (
    <section className="page-panel">
      <p className="section-label">Teams</p>
      <h1>Squad setup for accountability</h1>
      <p>
        Start with invite flows, shared weekly goals, and a team activity feed. Those pieces create
        enough structure to support challenges without overbuilding administration screens.
      </p>
      <div className="pill-row">
        <span>Invite members</span>
        <span>Assign captains</span>
        <span>Track team streaks</span>
      </div>
    </section>
  );
}

function LeaderboardPage() {
  return (
    <section className="page-panel">
      <p className="section-label">Leaderboard</p>
      <h1>Competition snapshot</h1>
      <div className="leaderboard-list">
        {leaderboardPreview.map((entry, index) => (
          <article key={entry.name} className="leaderboard-row">
            <span className="rank">0{index + 1}</span>
            <div>
              <h2>{entry.name}</h2>
              <p>{entry.score}</p>
            </div>
            <strong>{entry.trend}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function WorkoutsPage() {
  return (
    <section className="page-panel">
      <p className="section-label">Workout suggestions</p>
      <h1>Recommendation seeds</h1>
      <div className="suggestion-list">
        {workoutSuggestions.map((item) => (
          <article key={item} className="suggestion-card">
            <h2>{item}</h2>
            <p>Use recent volume, fatigue tags, and team schedule data to rank this suggestion.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="app-shell">
        <header className="topbar">
          <NavLink className="brand-mark" to="/">
            <span className="brand-kicker">OF</span>
            <span>OctoFit Tracker</span>
          </NavLink>
          <nav className="main-nav">
            <NavLink to="/">Overview</NavLink>
            <NavLink to="/teams">Teams</NavLink>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
            <NavLink to="/workouts">Workouts</NavLink>
          </nav>
        </header>

        <main className="page-wrap">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/workouts" element={<WorkoutsPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
