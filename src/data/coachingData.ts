import { ServiceProgram, Testimonial, PricingPlan, Article } from '../types';

export const COACH_PROFILE = {
  name: "Dr. Elena Valenzuela",
  role: "Executive Advisor & Master Certified Coach (MCC)",
  credential: "Ex-VP of Operations at Globant · 14 years advising 240+ C-Suite leaders",
  location: "London, Madrid & Global Remote",
  bio: "Specialized in partnering with high-growth technology founders and C-Suite executives to scale organizations without sacrificing cognitive clarity, physical vitality, or leadership integrity.",
  philosophy: "Modern leadership is not about accumulating work hours—it is about elevating the caliber of decisions made under severe uncertainty.",
  metrics: [
    { value: "+240", label: "C-Level Leaders Advised" },
    { value: "94%", label: "Annual Client Retention Rate" },
    { value: "$62M", label: "Capital Raised by Advised Founders" },
    { value: "4.98/5", label: "Average Rating Across 180+ Reviews" }
  ]
};

export const SERVICES_DATA: ServiceProgram[] = [
  {
    id: "executive-mastery",
    number: "01",
    title: "1:1 Executive Advisory",
    tagline: "For CEOs, Managing Directors, and Founders navigating critical scaling inflection points.",
    description: "A bi-weekly, strictly confidential strategic sparring arena to pressure-test critical capital allocations, boardroom politics, and executive organizational design.",
    duration: "6 or 12 Months",
    format: "Bi-weekly 75-min sessions + Asynchronous strategic hotline",
    audience: "CEOs, Series A-C Founders, and Managing Directors",
    outcomes: [
      "Decisional clarity on high-stakes funding, hiring, and product pivots",
      "Autonomous executive operating committee setup",
      "Demonstrated reduction in cognitive fatigue and reactive fire-fighting"
    ],
    features: [
      "360° Leadership Audit & Decision Architecture Mapping",
      "Direct private access via encrypted Signal / WhatsApp channel",
      "Board meeting rehearsal & pitch deck review",
      "Crisis communication frameworks and governance playbooks"
    ],
    featured: true
  },
  {
    id: "startup-scale",
    number: "02",
    title: "Organizational Scaling Strategy",
    tagline: "A structured operating transition from agile startup to enterprise scaleup.",
    description: "Designing and deploying strategic alignment architectures (evolved OKRs, executive operating cadences, and transparent delegation matrices) for rapid-growth teams.",
    duration: "Quarterly Intensive Program",
    format: "Bi-weekly workshops + Committee advisory sessions",
    audience: "Founding teams, Chief Operating Officers (COO), and VP Leadership",
    outcomes: [
      "Cross-functional synchronization between Engineering, Product, and Sales",
      "Effective decentralization of day-to-day decision authority",
      "Accelerated executive onboarding for key senior hires"
    ],
    features: [
      "Decision Flow Friction Audit across business units",
      "Agile Delegation Matrix and ownership charter",
      "Internal communication architecture for distributed global teams",
      "Executive quarterly alignment summits"
    ]
  },
  {
    id: "team-alignment",
    number: "03",
    title: "High Performance & Team Alignment",
    tagline: "Friction resolution and operational synchronization for senior leadership teams.",
    description: "Targeted executive group interventions engineered to build psychological safety, eliminate defensive corporate silos, and establish synchronized execution.",
    duration: "2-Day Offsite + 90 Days Integration",
    format: "In-person strategic retreat + 6 follow-up integration sessions",
    audience: "Executive Committees, Board Directors, and VP Cohorts",
    outcomes: [
      "Difficult boardroom conflicts resolved without residual friction",
      "Aligned goals across previously competing departments",
      "35% acceleration in major product release cycles"
    ],
    features: [
      "Sociometric assessment of executive team dynamics",
      "Offsite retreat moderation and strategic vision synthesis",
      "Constructive dissent and 'Disagree & Commit' protocols",
      "Shared cross-functional accountability dashboards"
    ]
  },
  {
    id: "career-transition",
    number: "04",
    title: "C-Level Transition Sprints (First 100 Days)",
    tagline: "Securing immediate executive authority and early operational wins in a new role.",
    description: "Tactical coaching for newly promoted or externally hired VPs and C-Suite officers to establish credibility, assemble relational capital, and align direct reports.",
    duration: "100-Day Acceleration",
    format: "8 high-impact sessions + Strategic deliverable reviews",
    audience: "Newly appointed CXOs, VPs, and Executive Directors",
    outcomes: [
      "100-Day Strategic Plan backed by Board of Directors",
      "Relational capital and stakeholder influence mapping",
      "Demonstrable early wins within the first 30 days"
    ],
    features: [
      "Informal power and stakeholder relationship audit",
      "Executive listening tour methodology",
      "Non-negotiable strategic priorities matrix",
      "High-stakes board presentation dry runs"
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Carlos Mendez",
    role: "Co-Founder & CEO",
    company: "Kredia Technologies (Fintech)",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    category: "founders",
    metric: "+$14M Series A Closed",
    timeframe: "Within 6 months of coaching",
    quote: "Dr. Valenzuela helped me transform growth chaos into a disciplined operating cadence. I went from putting out daily fires 14 hours a day to leading with calm, strategic foresight.",
    detailedCase: "Complete redesign of executive operating hierarchy and rigorous pitch preparation with tier-1 US venture capital funds."
  },
  {
    id: "test-2",
    name: "Mariana Alarcon",
    role: "VP of Product",
    company: "CloudHealth Technologies",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    category: "product",
    metric: "+42% Delivery Cadence",
    timeframe: "First 90 days in new VP seat",
    quote: "Stepping into the VP seat overseeing 65 engineers and designers was daunting. Elena gave me practical, battle-tested mental models to lead with vision without micromanaging.",
    detailedCase: "Deployment of an autonomous ownership model that eliminated interdepartmental bottlenecks and reduced senior attrition to zero."
  },
  {
    id: "test-3",
    name: "David H. Steinberg",
    role: "Chief Technology Officer",
    company: "Vanguard Mobility (Logistics)",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    category: "engineering",
    metric: "0% Senior Staff Turnover",
    timeframe: "12-month engagement",
    quote: "Her grasp of tech architecture and human psychology is surgical. There is zero fluffy self-help; every session is a rigorous masterclass in strategic decision-making.",
    detailedCase: "Aligned technical debt resolution with core business margins, establishing peace between Product and Engineering leadership."
  },
  {
    id: "test-4",
    name: "Sophia Arismendi",
    role: "Managing Director",
    company: "IberCapital Partners",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    category: "founders",
    metric: "3x Portfolio Expansion",
    timeframe: "Annual board advisory",
    quote: "Elena's advisory is a direct ROI driver for our portfolio ventures. Her diagnostic accuracy in the first hour saves founders quarters of costly misalignment.",
    detailedCase: "Board member training and executive burnout mitigation programs for venture-backed seed-stage founders."
  }
];

export const PRICING_DATA: PricingPlan[] = [
  {
    id: "plan-essential",
    name: "Strategic Clarity Sprint",
    tagline: "Laser-focused on resolving an urgent strategic crossroad or leadership inflection point.",
    monthlyPrice: 1950,
    quarterlyPrice: 5200,
    sprintPrice: 3500,
    deliverables: [
      "4 intensive 1:1 strategic sessions (60 min)",
      "360° Leadership & Decision Pattern Audit",
      "Executive priority map & delegation matrix",
      "Asynchronous voice note strategic sparring (<24h turnaround)",
      "Full access to proprietary executive framework vault"
    ],
    idealFor: "Leaders facing a high-stakes negotiation, board review, or critical career transition.",
    ctaText: "Select Clarity Sprint"
  },
  {
    id: "plan-executive",
    name: "Executive Advisory (Flagship)",
    tagline: "Our premier comprehensive advisory partnership for CEOs and scaleup directors.",
    monthlyPrice: 3450,
    quarterlyPrice: 9200,
    sprintPrice: 6400,
    popular: true,
    deliverables: [
      "Bi-weekly confidential 1:1 sessions (75 min)",
      "Direct encrypted hotline for emergency strategic counsel",
      "Live review & redlining of Board of Directors slide decks",
      "Quarterly direct report alignment & friction audit",
      "Sociometric power dynamics & stakeholder mapping",
      "30-Day Money-Back Value Guarantee (no questions asked)"
    ],
    idealFor: "CEOs and C-Level executives leading teams of 20+ people through high-growth phases.",
    ctaText: "Request Executive Seat"
  },
  {
    id: "plan-enterprise",
    name: "Executive Committee & Scale",
    tagline: "Synchronized transformation and strategic alignment for the entire senior leadership team.",
    monthlyPrice: 5900,
    quarterlyPrice: 16200,
    sprintPrice: 10500,
    deliverables: [
      "In-person immersive strategic retreat (1-2 days)",
      "Individual 1:1 advisory for up to 5 executive committee members",
      "Corporate governance architecture & cascading OKR rollout",
      "Monthly conflict resolution & strategic debate facilitation",
      "Executive maturity assessments for the Advisory Board",
      "Confidential support on critical executive hirings and transitions"
    ],
    idealFor: "Series B+ scaleups and mid-sized enterprises needing complete leadership alignment.",
    ctaText: "Inquire About Enterprise"
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: "art-1",
    title: "The Technical Founder Paradox: When to Stop Coding and Start Governing",
    slug: "technical-founder-paradox-delegation",
    category: "Leadership & Scale",
    readTime: "6 min read",
    date: "October 14, 2026",
    excerpt: "The single greatest obstacle preventing a tech startup from scaling beyond 50 employees is the founder's addictive urge to write code rather than architect human systems.",
    keyTakeaways: [
      "The Competency Trap: Solving engineering challenges provides immediate dopamine; managing organizational dynamics offers delayed, ambiguous feedback.",
      "Opportunity Cost Principle: Every hour spent reviewing a pull request is an hour stolen from capital strategy, executive talent recruiting, and strategic partnerships.",
      "The Inverse Question Protocol: Before offering a technical answer to your VP of Engineering, ask two clarifying context questions to build their autonomy."
    ],
    content: [
      "During a startup's first two years, the founder's capability to commit code at 2:00 AM and single-handedly patch architectural flaws is the company's greatest moat. However, past 25 team members, that same super-power rapidly becomes the company's most expensive bottleneck.",
      "Many founders equate leadership with technical omniscience. They fear losing their engineering team's respect if they cannot quote the latest changes in the codebase. This creates two catastrophic failure modes: it strips senior leaders of agency and blinds the CEO to impending cash flow, cultural, and market threats.",
      "To navigate this transition, founders must transition from 'first-order operators' to 'system architects'. Your code is no longer syntax in a repository; your code is corporate incentives, executive communication rhythms, and decision-making criteria."
    ]
  },
  {
    id: "art-2",
    title: "The Art of Constructive Dissent in Executive Boardrooms",
    slug: "constructive-dissent-boardroom-culture",
    category: "Team Dynamics",
    readTime: "8 min read",
    date: "September 28, 2026",
    excerpt: "Artificial boardroom harmony is far more fatal than open conflict. How to institutionalize rituals where dissent is celebrated as an ethical imperative.",
    keyTakeaways: [
      "Artificial harmony breeds cynical corridors: When nobody challenges proposals during the meeting, real objections are whispered in private chats.",
      "Formalize the Devil's Advocate: Explicitly designating a contrarian protects the speaker's social standing while surfacing blind spots.",
      "The 'Disagree and Commit' compact: Vigorous debate during deliberation must be backed by disciplined execution once a decision is formalized."
    ],
    content: [
      "Over fourteen years of advising boardrooms, I have noticed that the lowest-performing leadership teams are rarely the ones having fiery arguments. On the contrary: they are the ones where polite smiles dominate and everyone nods along to the CEO's proposals.",
      "When department heads feel that expressing genuine concern will be construed as disloyalty, they choose self-protective silence. The cost reveals itself months later in missed quarters, blown budgets, and catastrophic product launches.",
      "The antidote is institutionalized 'dissent hygiene'. For any capital allocation exceeding $100k or multi-month roadmap initiative, one executive should be assigned the explicit duty of presenting the strongest failure thesis."
    ]
  },
  {
    id: "art-3",
    title: "Cognitive Sovereignty: Shielding Deep Focus from Hyperconnectivity",
    slug: "cognitive-sovereignty-deep-focus",
    category: "Executive Performance",
    readTime: "5 min read",
    date: "September 12, 2026",
    excerpt: "Top executives do not manage minutes; they manage cerebral glucose, biological rhythms, and inviolable blocks of deep strategic contemplation.",
    keyTakeaways: [
      "Decision fatigue is strictly cumulative: Reducing trivial early morning micro-choices preserves cognitive sharpness for afternoon boardroom stakes.",
      "The Golden 90-Minute Strategic Block: No recurring meetings should ever be booked before 10:30 AM to protect uninterrupted creative thinking.",
      "Async by Default: If an issue does not require real-time emotional calibration, it must be formulated as a structured 2-page briefing document."
    ],
    content: [
      "We operate under the dangerous illusion that an effective executive is one who replies to Slack pings in under ninety seconds. Empirical reality reveals the inverse: the most impactful leaders communicate with deliberate slowness on daily minutiae to preserve acute sharpness for structural milestones.",
      "Attention fragmentation destroys the capacity for complex synthesis. If your calendar looks like a patchwork of back-to-back 30-minute slots, your brain is condemned to frantic reactive survival mode.",
      "Instituting meeting-free mornings and replacing slide presentations with silent reading of 2-page memos fundamentally transforms the intellectual rigor of strategic discussions."
    ]
  }
];

export const READINESS_QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is your single greatest leadership or operational bottleneck right now?",
    options: [
      { text: "Trapped in daily operational firefights with zero bandwidth for long-range strategy", category: "essential", score: "Clarity & Delegation" },
      { text: "Executive team working in departmental silos with chronic cross-functional friction", category: "enterprise", score: "Team Alignment" },
      { text: "Stepping into a newly expanded C-level role and needing to establish quick authority", category: "career", score: "Leadership Transition" },
      { text: "Navigating major venture capital rounds or high-stakes boardroom governance decisions", category: "executive", score: "Capital & Governance" }
    ]
  },
  {
    id: 2,
    question: "How many individuals report directly or indirectly under your organizational purview?",
    options: [
      { text: "Under 10 team members (Early-stage venture or boutique professional practice)", category: "essential", score: "Foundational" },
      { text: "10 to 45 team members (Fast acceleration phase with emerging middle management)", category: "executive", score: "Growth Scale" },
      { text: "45 to 150 team members (Multi-department scaleup with distinct executive layers)", category: "executive", score: "Scaleup" },
      { text: "150+ team members (Large enterprise or multinational corporation)", category: "enterprise", score: "Enterprise" }
    ]
  },
  {
    id: 3,
    question: "Which working cadence provides the highest strategic leverage for you?",
    options: [
      { text: "Confidential 1:1 sessions and continuous strategic sparring on demand", category: "executive", score: "1:1 Confidential" },
      { text: "Group retreats and structured team alignment workshops for my leadership committee", category: "enterprise", score: "Team Offsite" },
      { text: "A fast, intensive sprint focused on delivering a concrete strategic deliverable in 30 days", category: "essential", score: "Targeted Sprint" }
    ]
  }
];
