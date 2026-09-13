import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Chip,
  Container,
  Drawer,
  IconButton,
  Link,
  Paper,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TerminalIcon from "@mui/icons-material/Terminal";
import EastIcon from "@mui/icons-material/East";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

const profile = {
  email: "tusharsupanekar60@gmail.com",
  github: "https://github.com/TusharSupanekar",
  linkedin: "https://linkedin.com/in/tushar-supanekar",
};

const projects = [
  {
    number: "01",
    title: "Electronic Trading Exchange",
    label: "Featured build",
    accent: "#69e0c1",
    description:
      "A complete exchange and order-matching engine built from scratch, pairing a concurrent FastAPI backend with a real-time React dashboard.",
    outcome:
      "Sub-second streaming · <50ms average response · zero transactional errors",
    tags: [
      "FastAPI",
      "PostgreSQL",
      "React + TypeScript",
      "WebSockets",
      "Docker",
      "Locust",
    ],
    github:
      "https://github.com/TusharSupanekar/Electronic-Trading-Exchange-and-Matching-Engine",
  },
  {
    number: "02",
    title: "AI Job Application Tracker",
    label: "In progress",
    accent: "#f5b971",
    description:
      "An AI-assisted workspace for organizing applications, managing resumes, monitoring search analytics, and comparing resumes with job descriptions.",
    outcome:
      "Gemini-powered analysis · JWT data protection · search, filters, pagination",
    tags: ["Node.js", "MongoDB", "React", "Gemini AI", "JWT", "Jest"],
    github: "https://github.com/TusharSupanekar",
  },
  {
    number: "03",
    title: "Customer Churn Prediction",
    label: "Machine learning",
    accent: "#90b6ff",
    description:
      "An explainable prediction system that surfaces at-risk customers and turns model outputs into useful business signals.",
    outcome:
      "91% AUC with XGBoost · SHAP feature explanations · 7K records analyzed",
    tags: ["Python", "XGBoost", "SHAP", "Pandas", "scikit-learn"],
    github: "https://github.com/TusharSupanekar",
  },
  {
    number: "04",
    title: "Expense Tracker",
    label: "Full-stack product",
    accent: "#d69cff",
    description:
      "A shared-expense ledger for groups with per-user balances, role-based access control, and fast visual summaries.",
    outcome: "4 dashboard views · 15+ test cases · tuned aggregation queries",
    tags: ["MongoDB", "Express", "React", "Node.js", "Chart.js"],
    github: "https://github.com/TusharSupanekar",
  },
];

const skillGroups = [
  [
    "Frontend",
    "React.js",
    "Next.js",
    "TypeScript",
    "Vite",
    "Material UI",
    "SWR",
    "Chart.js",
  ],
  [
    "Backend & APIs",
    "Python",
    "FastAPI",
    "Node.js",
    "Express",
    "Java",
    "Spring Boot",
    "REST APIs",
    "WebSockets",
  ],
  [
    "Data & AI",
    "PostgreSQL",
    "MongoDB",
    "SQL",
    "TensorFlow",
    "scikit-learn",
    "XGBoost",
    "Pandas",
    "LLM integration",
  ],
  [
    "Delivery",
    "Docker",
    "Git",
    "CI/CD",
    "Locust",
    "Linux",
    "Agile/Scrum",
    "Testing",
    "WCAG 2.1",
  ],
];

const navItems = ["About", "Projects", "Experience", "Education", "Contact"];

function SocialLinks() {
  return (
    <Stack direction="row" spacing={1.2}>
      <IconButton
        component="a"
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="social-button"
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        component="a"
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="social-button"
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        component="a"
        href={`mailto:${profile.email}`}
        aria-label="Email"
        className="social-button"
      >
        <EmailOutlinedIcon />
      </IconButton>
    </Stack>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography className="eyebrow">{eyebrow}</Typography>
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: "2.1rem", md: "3.1rem" }, mt: 1 }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const navigate = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView();
    setDrawerOpen(false);
  };

  return (
    <>
      <Box sx={{ overflow: "hidden" }}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            bgcolor: "rgba(8,17,31,.84)",
            backdropFilter: "blur(14px)",
            borderBottom: "1px solid rgba(163,180,186,.12)",
          }}
        >
          <Toolbar
            className="section-shell"
            sx={{
              minHeight: "72px !important",
              px: "0 !important",
              justifyContent: "space-between",
            }}
          >
            <Link
              href="#top"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "text.primary",
              }}
            >
              <Box
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                  fontFamily: "Space Grotesk",
                  fontSize: "1.2rem",
                }}
              >
                TS
              </Box>
              <Typography
                variant="body2"
                sx={{ fontWeight: 700, letterSpacing: ".05em" }}
              >
                TUSHAR SUPANEKAR
              </Typography>
            </Link>
            <Stack
              direction="row"
              spacing={3}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {navItems.map((item) => (
                <Link
                  key={item}
                  component="button"
                  onClick={() => navigate(item)}
                  underline="none"
                  color="text.secondary"
                  sx={{
                    fontSize: ".82rem",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "text.primary",
              }}
              aria-label="Open navigation"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{ sx: { bgcolor: "#101c2e", width: 260, p: 3 } }}
        >
          <Stack spacing={3} sx={{ mt: 6 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => navigate(item)}
                sx={{ justifyContent: "flex-start", color: "text.primary" }}
              >
                {item}
              </Button>
            ))}
          </Stack>
        </Drawer>

        <Box id="top" component="main">
          <Box
            className="grid-overlay"
            sx={{
              position: "relative",
              minHeight: { xs: "auto", md: "760px" },
              pt: { xs: 16, md: 22 },
              pb: { xs: 10, md: 16 },
              "&:after": {
                content: '""',
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 82% 18%, rgba(105,224,193,.13), transparent 30%), radial-gradient(circle at 16% 70%, rgba(245,185,113,.08), transparent 27%)",
                pointerEvents: "none",
              },
            }}
          >
            <Container
              className="section-shell"
              sx={{ position: "relative", zIndex: 1, px: "0 !important" }}
            >
              <Typography className="eyebrow reveal">
                Full-stack engineer · builder · systems thinker
              </Typography>
              <Typography
                variant="h1"
                className="reveal"
                sx={{
                  maxWidth: 900,
                  mt: 2,
                  fontSize: { xs: "3.25rem", sm: "4.8rem", md: "6.8rem" },
                  lineHeight: 0.98,
                  letterSpacing: "-.05em",
                }}
              >
                I build systems
                <br />
                <Box component="span" sx={{ color: "primary.main" }}>
                  that stay useful.
                </Box>
              </Typography>
              <Typography
                className="reveal"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "1.05rem", md: "1.25rem" },
                  maxWidth: 610,
                  mt: 4,
                  lineHeight: 1.7,
                }}
              >
                MS CS grad building scalable web applications, real-time
                systems, and AI-powered products.
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{ mt: 5 }}
                className="reveal"
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<EastIcon />}
                  onClick={() => navigate("Projects")}
                  sx={{ px: 3, py: 1.5, color: "#08111f" }}
                >
                  View projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<DownloadIcon />}
                  component="a"
                  href="/assets/tushar-supanekar-resume.pdf"
                  download
                  sx={{ px: 3, py: 1.5 }}
                >
                  Download resume
                </Button>
              </Stack>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2.5}
                sx={{ mt: 7, alignItems: { xs: "flex-start", sm: "center" } }}
              >
                <SocialLinks />
                <Typography variant="body2" color="text.secondary">
                  Currently in Worcester, MA{" "}
                  <Box component="span" sx={{ color: "primary.main", ml: 1 }}>
                    ●
                  </Box>
                </Typography>
              </Stack>
            </Container>
          </Box>

          <Box id="about" component="section" sx={{ py: { xs: 10, md: 15 } }}>
            <Container className="section-shell" sx={{ px: "0 !important" }}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 6, md: 12 }}
                alignItems="flex-start"
              >
                <Box sx={{ flex: 1 }}>
                  <SectionHeading
                    eyebrow="01 / About"
                    title="Curious by default."
                  />
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 580 }}
                  >
                    I’m Tushar, a full-stack software engineer who enjoys taking
                    ambiguous problems and turning them into dependable
                    products. My work sits at the intersection of thoughtful
                    interfaces, resilient backend systems, and data-informed
                    decisions.
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{
                      fontSize: "1.1rem",
                      lineHeight: 1.8,
                      maxWidth: 580,
                      mt: 2,
                    }}
                  >
                    I recently completed my MS in Computer Science at Clark
                    University and I’m looking for a team where I can contribute
                    across the stack, learn quickly, and ship work that matters.
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{ mt: 4, color: "secondary.main" }}
                  >
                    <LocationOnOutlinedIcon fontSize="small" />
                    <Typography variant="body2" fontWeight={700}>
                      Available immediately on OPT · open to relocate anywhere
                      in the US
                    </Typography>
                  </Stack>
                </Box>
                <Box sx={{ width: { xs: "100%", md: 330 } }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      border: "1px solid rgba(163,180,186,.16)",
                      bgcolor: "rgba(16,28,46,.65)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Typography className="eyebrow">
                      A little more signal
                    </Typography>
                    <Box
                      sx={{
                        width: 210,
                        height: 240,
                        borderRadius: 4,
                        bgcolor: "primary.main",
                        color: "#08111f",
                        display: "grid",
                        placeItems: "center",
                        mt: 3,
                        mb: 3,
                        mx: "auto",
                        fontSize: "4.2rem",
                        fontFamily: "Space Grotesk",
                        fontWeight: 700,
                        overflow: "hidden",
                        border: "1px solid rgba(105,224,193,.35)",
                      }}
                    >
                      <Box
                        component="img"
                        src="/assets/tushar-supanekar.jpg"
                        alt="Tushar Supanekar"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center top",
                        }}
                      />
                      TS
                    </Box>
                    <Typography variant="h6">
                      Engineer with a product eye.
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ mt: 1, lineHeight: 1.6 }}
                    >
                      React, Python, Java, TypeScript, PostgreSQL, Docker and a
                      healthy respect for edge cases.
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
                      <Chip
                        size="small"
                        label="Clark University"
                        icon={<SchoolOutlinedIcon />}
                      />
                      <Chip size="small" label="3.84 GPA" />
                    </Stack>
                  </Paper>
                </Box>
              </Stack>
            </Container>
          </Box>
        </Box>

        <Box
          id="skills"
          component="section"
          sx={{
            py: { xs: 10, md: 13 },
            bgcolor: "#0c1728",
            borderTop: "1px solid rgba(163,180,186,.1)",
            borderBottom: "1px solid rgba(163,180,186,.1)",
          }}
        >
          <Container className="section-shell" sx={{ px: "0 !important" }}>
            <SectionHeading
              eyebrow="02 / Toolkit"
              title="Built across the stack."
            />
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 2,
              }}
            >
              {skillGroups.map(([title, ...skills]) => (
                <Paper
                  key={title}
                  elevation={0}
                  sx={{
                    p: 3,
                    minHeight: 185,
                    bgcolor: "transparent",
                    border: "1px solid rgba(163,180,186,.14)",
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    {title}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: "rgba(105,224,193,.24)",
                          color: "text.secondary",
                        }}
                      />
                    ))}
                  </Stack>
                </Paper>
              ))}
            </Box>
          </Container>
        </Box>

        <Box id="projects" component="section" sx={{ py: { xs: 10, md: 15 } }}>
          <Container className="section-shell" sx={{ px: "0 !important" }}>
            <SectionHeading
              eyebrow="03 / Selected work"
              title="Proof, not promises."
            />
            <Stack spacing={2}>
              {projects.map((project, index) => (
                <Paper
                  key={project.title}
                  elevation={0}
                  sx={{
                    p: { xs: 2.5, md: 4 },
                    bgcolor:
                      index === 0
                        ? "rgba(105,224,193,.055)"
                        : "rgba(16,28,46,.62)",
                    border: `1px solid ${index === 0 ? "rgba(105,224,193,.32)" : "rgba(163,180,186,.14)"}`,
                    transition: "transform .2s, border-color .2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      borderColor: project.accent,
                    },
                  }}
                >
                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={3}
                    justifyContent="space-between"
                  >
                    <Box sx={{ flex: 1 }}>
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Typography
                          sx={{
                            color: project.accent,
                            fontFamily: "Space Grotesk",
                            fontWeight: 700,
                          }}
                        >
                          {project.number}
                        </Typography>
                        <Chip
                          label={project.label}
                          size="small"
                          sx={{
                            color: project.accent,
                            bgcolor: `${project.accent}18`,
                            fontWeight: 700,
                          }}
                        />
                      </Stack>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: "1.7rem", md: "2.35rem" },
                          mt: 2,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        color="text.secondary"
                        sx={{ lineHeight: 1.7, maxWidth: 620, mt: 1.5 }}
                      >
                        {project.description}
                      </Typography>
                      <Typography
                        sx={{
                          color: project.accent,
                          fontSize: ".88rem",
                          fontWeight: 700,
                          mt: 2,
                        }}
                      >
                        {project.outcome}
                      </Typography>
                      <Stack
                        direction="row"
                        flexWrap="wrap"
                        gap={1}
                        sx={{ mt: 3 }}
                      >
                        {project.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            variant="outlined"
                            sx={{
                              color: "text.secondary",
                              borderColor: "rgba(163,180,186,.2)",
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: { xs: "flex-start", md: "flex-end" },
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        component="a"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        variant="text"
                        endIcon={<ArrowOutwardIcon />}
                        sx={{ color: project.accent }}
                      >
                        View on GitHub
                      </Button>
                    </Box>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </Container>
        </Box>

        <Box
          id="experience"
          component="section"
          sx={{ py: { xs: 10, md: 15 }, bgcolor: "#0c1728" }}
        >
          <Container className="section-shell" sx={{ px: "0 !important" }}>
            <SectionHeading
              eyebrow="04 / Experience"
              title="Shipping with a team."
            />
            <Stack spacing={5} sx={{ maxWidth: 820 }}>
              {[
                {
                  company: "Vosyn AI Inc",
                  role: "Front-End Developer Intern",
                  date: "May 2025 — August 2025 · Remote, Toronto",
                  bullets: [
                    "Shipped 10+ React + TypeScript components from Figma to production within a 6–10 person Agile team.",
                    "Integrated REST APIs with Axios and SWR across 5+ data-heavy views, reducing duplicate network fetches.",
                    "Maintained WCAG 2.1 ARIA compliance across delivered components, passing 3 independent accessibility audits.",
                  ],
                },
                {
                  company: "QSpiders / JSpiders",
                  role: "Trainee Full Stack Java Developer",
                  date: "February 2023 — December 2023 · Mumbai, India",
                  bullets: [
                    "Led a team of 6 to design, develop, and deploy a Restaurant Management System using Java, Spring Boot, SQL, and React.",
                    "Built Library and Product Management Systems with Hibernate and JPA across 15+ entity relationships.",
                    "Delivered 3 full-stack applications through requirements, implementation, testing, and deployment.",
                  ],
                },
              ].map((job) => (
                <Box
                  key={job.company}
                  sx={{
                    pl: 3,
                    borderLeft: "2px solid",
                    borderColor: "primary.main",
                  }}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <WorkOutlineIcon
                      sx={{ color: "primary.main", fontSize: 19 }}
                    />
                    <Typography variant="h5" sx={{ fontSize: "1.35rem" }}>
                      {job.company}
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: "secondary.main", mt: 1 }}>
                    {job.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 0.5 }}
                  >
                    {job.date}
                  </Typography>
                  <Stack spacing={1.2} sx={{ mt: 2 }}>
                    {job.bullets.map((bullet) => (
                      <Stack
                        key={bullet}
                        direction="row"
                        spacing={1}
                        alignItems="flex-start"
                      >
                        <CheckCircleOutlineIcon
                          sx={{ color: "primary.main", fontSize: 18, mt: 0.35 }}
                        />
                        <Typography
                          color="text.secondary"
                          sx={{ lineHeight: 1.65 }}
                        >
                          {bullet}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Container>
        </Box>

        <Box id="education" component="section" sx={{ py: { xs: 10, md: 15 } }}>
          <Container className="section-shell" sx={{ px: "0 !important" }}>
            <SectionHeading
              eyebrow="05 / Education"
              title="Always still learning."
            />
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 2,
              }}
            >
              {[
                {
                  school: "Clark University",
                  degree: "Master of Science in Computer Science",
                  meta: "Worcester, MA · May 2026",
                  gpa: "3.84 / 4.0",
                  courses:
                    "Applied Machine Learning · Distributed Systems · Modern Data Engineering · Database Systems",
                },
                {
                  school: "A.C. Patil College of Engineering",
                  degree: "Bachelor of Engineering in Information Technology",
                  meta: "Navi Mumbai, India · May 2023",
                  gpa: "8.18 / 10",
                  courses:
                    "Data Structures · OOP · DBMS · Operating Systems · Web Technologies",
                },
              ].map((item) => (
                <Paper
                  key={item.school}
                  elevation={0}
                  sx={{
                    p: 3.5,
                    border: "1px solid rgba(163,180,186,.14)",
                    bgcolor: "rgba(16,28,46,.62)",
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    gap={2}
                  >
                    <Box>
                      <Typography variant="h6">{item.school}</Typography>
                      <Typography color="secondary.main" sx={{ mt: 1 }}>
                        {item.degree}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        color: "primary.main",
                        fontFamily: "Space Grotesk",
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.gpa}
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    {item.meta}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 2, lineHeight: 1.6 }}
                  >
                    {item.courses}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Container>
        </Box>

        <Box
          id="contact"
          component="section"
          sx={{
            py: { xs: 10, md: 15 },
            bgcolor: "#0c1728",
            borderTop: "1px solid rgba(163,180,186,.1)",
          }}
        >
          <Container className="section-shell" sx={{ px: "0 !important" }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 6, md: 12 }}
            >
              <Box sx={{ flex: 1 }}>
                <SectionHeading
                  eyebrow="06 / Contact"
                  title="Let’s make something useful."
                />
                <Typography
                  color="text.secondary"
                  sx={{ fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 450 }}
                >
                  Have a product, system, or especially stubborn edge case in
                  mind? I’d love to hear what you’re building.
                </Typography>
                <Stack spacing={1.5} sx={{ mt: 4 }}>
                  <Link
                    href={`mailto:${profile.email}`}
                    underline="hover"
                    sx={{ color: "primary.main", fontWeight: 700 }}
                  >
                    {profile.email}
                  </Link>
                  <Typography color="text.secondary">
                    <LocationOnOutlinedIcon
                      sx={{ fontSize: 18, verticalAlign: "middle", mr: 0.5 }}
                    />
                    Worcester, Massachusetts, USA
                  </Typography>
                </Stack>
                <Box sx={{ mt: 3 }}>
                  <SocialLinks />
                </Box>
              </Box>
              <Paper
                elevation={0}
                sx={{
                  flex: 1,
                  p: { xs: 2.5, md: 4 },
                  bgcolor: "#101c2e",
                  border: "1px solid rgba(163,180,186,.14)",
                }}
              >
                <Stack
                  component="form"
                  spacing={2}
                  onSubmit={(event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const name = formData.get("name");
                    const email = formData.get("email");
                    const message = formData.get("message");
                    setFormSent(true);
                    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
                    window.location.href = `mailto:${profile.email}?subject=Portfolio%20inquiry&body=${encodeURIComponent(body)}`;
                  }}
                >
                  <TextField required name="name" label="Your name" fullWidth />
                  <TextField
                    required
                    name="email"
                    type="email"
                    label="Email address"
                    fullWidth
                  />
                  <TextField
                    required
                    name="message"
                    label="What are you building?"
                    multiline
                    minRows={4}
                    fullWidth
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<ArrowOutwardIcon />}
                    sx={{ alignSelf: "flex-start", color: "#08111f" }}
                  >
                    {formSent ? "Opening email..." : "Start a conversation"}
                  </Button>
                </Stack>
              </Paper>
            </Stack>
          </Container>
        </Box>
        <Box
          component="footer"
          sx={{ py: 4, borderTop: "1px solid rgba(163,180,186,.1)" }}
        >
          <Container className="section-shell" sx={{ px: "0 !important" }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              spacing={2}
            >
              <Typography variant="body2" color="text.secondary">
                © 2026 Tushar Ashok Supanekar
              </Typography>
              <Stack direction="row" spacing={2}>
                <Link
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  underline="hover"
                  variant="body2"
                  color="text.secondary"
                >
                  GitHub
                </Link>
                <Link
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  underline="hover"
                  variant="body2"
                  color="text.secondary"
                >
                  LinkedIn
                </Link>
                <Link
                  href="#top"
                  underline="hover"
                  variant="body2"
                  color="text.secondary"
                >
                  Back to top ↑
                </Link>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default App;
