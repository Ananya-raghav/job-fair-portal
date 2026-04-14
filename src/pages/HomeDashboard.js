import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const jobs = [
  {
    id: 1,
    title: "Product Designer",
    company: "Bright Labs",
    location: "Bengaluru",
    type: "Design",
    experience: "Mid-level",
    description: "Design user flows, wireframes and product experiences for fast-growing startups.",
  },
  {
    id: 2,
    title: "Frontend Engineer",
    company: "CodeCraft",
    location: "Remote",
    type: "Engineering",
    experience: "Senior",
    description: "Build responsive React applications with strong performance and usability.",
  },
  {
    id: 3,
    title: "Marketing Strategist",
    company: "GrowthHub",
    location: "Mumbai",
    type: "Marketing",
    experience: "Junior",
    description: "Plan campaigns and support brand growth across digital channels.",
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "InsightWorks",
    location: "Hyderabad",
    type: "Analytics",
    experience: "Mid-level",
    description: "Generate reports and analytics to guide product decisions.",
  },
  {
    id: 5,
    title: "UI/UX Researcher",
    company: "PixelRise",
    location: "Chennai",
    type: "Design",
    experience: "Junior",
    description: "Run research sessions and improve the product experience for users.",
  },
  {
    id: 6,
    title: "Growth Engineer",
    company: "Launchpad",
    location: "Pune",
    type: "Engineering",
    experience: "Senior",
    description: "Build customer acquisition flows and optimize the onboarding journey.",
  },
];

const stats = [
  { label: "Active Users", value: "2400+" },
  { label: "Open Roles", value: "92" },
  { label: "Hiring Partners", value: "18" },
  { label: "Live Events", value: "12" },
];

const categories = ["All", "Engineering", "Design", "Marketing", "Analytics"];
const locations = ["All", "Bengaluru", "Mumbai", "Hyderabad", "Pune", "Chennai", "Remote"];
const experiences = ["All", "Junior", "Mid-level", "Senior"];

function HomeDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedExperience, setSelectedExperience] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  const filteredJobs = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return jobs.filter((job) => {
      const text = `${job.title} ${job.company} ${job.type} ${job.description}`.toLowerCase();
      const matchesSearch = query === "" || text.includes(query);
      const matchesCategory = selectedCategory === "All" || job.type === selectedCategory;
      const matchesLocation = selectedLocation === "All" || job.location === selectedLocation;
      const matchesExperience = selectedExperience === "All" || job.experience === selectedExperience;
      return matchesSearch && matchesCategory && matchesLocation && matchesExperience;
    });
  }, [searchQuery, selectedCategory, selectedLocation, selectedExperience]);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-70" />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="relative px-6 py-10 lg:px-16 lg:py-24">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Job Fair Portal</p>
                <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Discover your next job with a smarter portal.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                  Browse curated job cards, apply instantly, and filter down the perfect role with a powerful search experience.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/dashboard/register"
                    className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-sky-500/20 transition hover:bg-sky-400"
                  >
                    Register Now
                  </Link>
                  <button
                    onClick={() => setDarkMode((prev) => !prev)}
                    className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                  >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                  </button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:w-[420px]">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-[2rem] border border-white/20 bg-white/10 p-6 text-white shadow-xl shadow-slate-950/20"
                  >
                    <p className="text-4xl font-bold">{stat.value}</p>
                    <p className="mt-3 text-sm text-slate-200">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 grid gap-6 sm:grid-cols-3"
            >
              <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 text-white shadow-xl shadow-slate-950/20">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Fast search</p>
                <p className="mt-4 text-xl font-semibold">Look up jobs instantly.</p>
              </div>
              <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 text-white shadow-xl shadow-slate-950/20">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Smart filters</p>
                <p className="mt-4 text-xl font-semibold">Choose by location and experience.</p>
              </div>
              <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 text-white shadow-xl shadow-slate-950/20">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Easy apply</p>
                <p className="mt-4 text-xl font-semibold">Join events and apply quickly.</p>
              </div>
            </motion.div>

            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute left-10 top-24 h-24 w-24 rounded-full bg-sky-400/20 blur-3xl" />
            <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute right-16 top-32 h-28 w-28 rounded-full bg-fuchsia-400/20 blur-3xl" />
            <motion.div animate={{ x: [0, 15, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute left-1/2 top-10 h-20 w-20 rounded-full bg-emerald-400/20 blur-3xl" />
          </div>
        </header>

        <main className="px-6 pb-16 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            <aside className="rounded-[2rem] border border-slate-200/10 bg-slate-100/80 p-6 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/80">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Filters</p>
                  <h2 className="mt-3 text-2xl font-bold">Refine the feed</h2>
                </div>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedLocation("All");
                    setSelectedExperience("All");
                    setSearchQuery("");
                  }}
                  className="text-sm font-semibold text-sky-600 hover:text-sky-500"
                >
                  Reset
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Job Type</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="mt-3 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                  >
                    {categories.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Location</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="mt-3 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                  >
                    {locations.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Experience</label>
                  <select
                    value={selectedExperience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    className="mt-3 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                  >
                    {experiences.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Why this works</p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <li>• Live search across roles and companies.</li>
                    <li>• Filter by location, experience and job type.</li>
                    <li>• Fast, animated job cards for a modern experience.</li>
                  </ul>
                </div>
              </div>
            </aside>

            <section>
              <div className="mb-8 rounded-[2rem] border border-slate-200/10 bg-white p-6 shadow-lg shadow-slate-900/5 dark:border-slate-800/80 dark:bg-slate-950/90">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Job Cards</p>
                    <h2 className="mt-2 text-3xl font-bold">Matching roles</h2>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{filteredJobs.length} opportunities found</p>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredJobs.slice(0, 3).map((job) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: job.id * 0.05 }}
                      className="rounded-[1.75rem] border border-slate-200/80 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{job.title}</p>
                          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{job.company}</p>
                        </div>
                        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-900/40 dark:text-sky-200">{job.type}</span>
                      </div>
                      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{job.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="rounded-full bg-slate-200/80 px-3 py-1 dark:bg-slate-800">{job.location}</span>
                        <span className="rounded-full bg-slate-200/80 px-3 py-1 dark:bg-slate-800">{job.experience}</span>
                      </div>
                      <div className="mt-6 flex items-center justify-between gap-3">
                        <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">Apply</button>
                        <Link to="/dashboard/register" className="text-sm font-semibold text-sky-600 hover:text-sky-500">
                          Register now
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {filteredJobs.slice(3).map((job) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{job.title}</p>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{job.company}</p>
                      </div>
                      <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700 dark:bg-violet-900/40 dark:text-violet-200">{job.experience}</span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{job.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="rounded-full bg-slate-200/80 px-3 py-1 dark:bg-slate-800">{job.location}</span>
                      <span className="rounded-full bg-slate-200/80 px-3 py-1 dark:bg-slate-800">{job.type}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredJobs.length === 0 && (
                <div className="mt-8 rounded-[2rem] border border-dashed border-slate-300 bg-white/80 p-12 text-center text-slate-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300">
                  <p className="text-xl font-semibold">No matches found.</p>
                  <p className="mt-3 text-sm">Try a different keyword, category, or location filter.</p>
                </div>
              )}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomeDashboard;

