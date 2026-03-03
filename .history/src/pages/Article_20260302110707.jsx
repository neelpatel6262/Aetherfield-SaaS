import ArticleOne   from '../assets/images/ArticleOne.jpg'
import ArticleTwo   from '../assets/images/ArticleTwo.jpg'
import ArticleThree from '../assets/images/ArticleThree.jpg'
import ArticleFour  from '../assets/images/ArticleFour.jpg'
import ArticleFive  from '../assets/images/ArticleFive.jpg'
import ArticleSix   from '../assets/images/ArticleSix.jpg'

export const articles = [
  {
    id: 1,
    slug: 'how-to-build-a-climate-ready-data-stack',
    title: 'How to Build a Climate-Ready Data Stack',
    category: 'Insights',
    tag: 'Article',
    time: '4 min',
    published: 'May 7, 2026',
    author: 'Luna Teme',
    image: ArticleOne,
    desc: 'Climate action is only as strong as the data that informs it. But most data stacks weren't designed with emissions, supply chains, or climate modelling in mind. Teams are often stuck retrofitting existing systems or relying on brittle workarounds to generate insights. It's time to rethink our infrastructure—starting with the foundation.',
    content: [
      {
        heading: 'Built for Another Era',
        body: 'Most data infrastructure was built to optimize for sales, user growth, or cost—not carbon. This creates friction when sustainability teams try to source emissions data from systems that were not designed to capture it. Without foundational visibility, even basic reporting becomes a manual, error-prone task. The result? Delays, duplication, and disconnects.',
      },
      {
        heading: 'Bridging the Gaps',
        body: 'Emissions data lives everywhere—and nowhere. From procurement software to building sensors, critical signals are often siloed across teams, formats, or departments. The first step to a climate-ready stack is connection: mapping where relevant data lives, how it is structured, and where the friction points are in accessing it consistently.',
      },
      {
        heading: 'Stack With Strategy',
        body: "A modern climate stack isn't just a bundle of tools—it's an integrated system that mirrors how your business actually operates. This means prioritizing interoperability, aligning metrics across platforms, and investing in foundational data governance. Tools alone won't solve a misaligned data-meets-strategy split.",
      },
      {
        heading: 'Bake in Flexibility',
        body: "Regulatory frameworks, emission factors, and supplier data are constantly evolving. Your data stack should too. This means designing for modularity, version control, and extensibility. Future-proofing your system is less about perfecting what's next and more about building with change in mind.",
      },
      {
        heading: 'From Stack to Story',
        body: 'At the end of the day, data infrastructure is only valuable if it drives action. A climate-ready stack enables teams to monitor progress, identify trade-offs, and make informed decisions at speed. With the right foundations in place, sustainability becomes more than a report—it becomes a capability.',
      },
    ],
  },
  {
    id: 2,
    slug: 'sustainability-isnt-a-side-project',
    title: "Sustainability Isn't a Side Project: Making Impact Operational",
    category: 'Strategy',
    tag: 'Article',
    time: '7 min',
    published: 'Apr 18, 2026',
    author: 'James Okafor',
    image: ArticleTwo,
    desc: 'Why climate goals belong in your core roadmap—not just in the annual ESG report. When sustainability lives outside the business, it stays aspirational. Here is how to change that.',
    content: [
      {
        heading: 'The Side Project Trap',
        body: "Too many sustainability efforts live in a separate lane—disconnected from procurement decisions, product planning, and financial targets. When impact goals aren't embedded in core operations, they stay aspirational. Strategy without systems doesn't scale.",
      },
      {
        heading: 'Operationalizing Intent',
        body: 'Making sustainability operational means assigning ownership, setting measurable milestones, and connecting environmental KPIs to business outcomes. It requires the same rigor applied to revenue targets or customer satisfaction scores.',
      },
      {
        heading: 'Cross-Functional by Design',
        body: 'Sustainability cannot be owned by one team. It requires finance to price carbon risk, procurement to evaluate suppliers, and product to design for longevity. Building cross-functional accountability is not a cultural nice-to-have—it is a structural requirement.',
      },
    ],
  },
  {
    id: 3,
    slug: 'inside-the-aetherfield-model',
    title: 'Inside the Aetherfield Model: How We Turn Data Into Action',
    category: 'Insights',
    tag: 'Article',
    time: '5 min',
    published: 'Mar 29, 2026',
    author: 'Sana Mirza',
    image: ArticleThree,
    desc: 'A behind-the-scenes look at our platform logic, system architecture, and sustainability reasoning—and why we built it the way we did.',
    content: [
      {
        heading: 'Why We Built It This Way',
        body: 'Aetherfield was designed around a simple belief: sustainability data should be as usable as financial data. That meant rethinking how emissions, energy, and waste signals are ingested, normalized, and surfaced to decision-makers.',
      },
      {
        heading: 'The Intelligence Layer',
        body: 'Raw data rarely drives action on its own. Our model adds a layer of interpretation—benchmarking performance against science-based targets, flagging anomalies, and surfacing what matters most in any given reporting period.',
      },
      {
        heading: 'Built to Integrate',
        body: 'We designed Aetherfield to sit alongside your existing stack, not replace it. That means flexible APIs, pre-built connectors, and a data model that adapts to how your organization already works.',
      },
    ],
  },
  {
    id: 4,
    slug: 'from-spreadsheets-to-systems',
    title: 'From Spreadsheets to Systems: The Evolution of Climate Reporting',
    category: 'Tooling',
    tag: 'Article',
    time: '6 min',
    published: 'Mar 10, 2026',
    author: 'Luna Teme',
    image: ArticleFour,
    desc: "Legacy tools weren't built for this moment. The next generation of climate reporting demands systems that are automated, auditable, and built for scale.",
    content: [
      {
        heading: 'The Spreadsheet Era',
        body: 'For years, sustainability reporting meant exporting data into spreadsheets, manually reconciling figures, and hoping nothing broke before the deadline. It worked—until reporting requirements grew faster than the tools could handle.',
      },
      {
        heading: 'The Cost of Manual',
        body: 'Manual processes introduce error, slow down reporting cycles, and make it nearly impossible to audit your methodology. When regulators ask how you arrived at a number, "we calculated it in Excel" is no longer a sufficient answer.',
      },
      {
        heading: 'What Modern Looks Like',
        body: 'Modern climate reporting is automated, version-controlled, and integrated with source systems. It supports multiple frameworks simultaneously, flags data quality issues in real time, and generates audit-ready outputs on demand.',
      },
    ],
  },
  {
    id: 5,
    slug: 'carbon-accounting-myths-models-must-haves',
    title: 'Carbon Accounting: Myths, Models, and Must-Haves',
    category: 'Tooling',
    tag: 'Article',
    time: '8 min',
    published: 'Feb 22, 2026',
    author: 'James Okafor',
    image: ArticleFive,
    desc: 'Debunking common assumptions and offering a practical framework for organizations serious about getting carbon accounting right.',
    content: [
      {
        heading: 'Myth: Scope 3 Is Optional',
        body: "Many organizations treat Scope 3 as a future problem. But with regulatory pressure mounting and supply chain scrutiny increasing, upstream and downstream emissions are no longer optional to measure—they're essential to disclose.",
      },
      {
        heading: 'Myth: Precision Equals Accuracy',
        body: 'A highly precise number built on flawed assumptions is worse than an approximate number with strong methodology. Carbon accounting requires transparency about estimation approaches, data quality, and uncertainty ranges.',
      },
      {
        heading: 'Must-Have: A Single Source of Truth',
        body: 'Organizations that manage carbon data across multiple systems, teams, and spreadsheets consistently struggle with reconciliation. A centralized carbon ledger—versioned, auditable, and connected to source data—is the foundation of credible reporting.',
      },
    ],
  },
  {
    id: 6,
    slug: 'designing-feedback-loops-for-sustainable-growth',
    title: 'Seeing Clearly: Designing Feedback Loops for Sustainable Growth',
    category: 'Tooling',
    tag: 'Article',
    time: '5 min',
    published: 'Feb 5, 2026',
    author: 'Sana Mirza',
    image: ArticleSix,
    desc: 'Building responsive systems that keep sustainability strategy adaptive and actionable—so progress is measurable, not just intended.',
    content: [
      {
        heading: 'What a Feedback Loop Actually Does',
        body: 'A feedback loop is not just a dashboard. It is a system that connects measurement to decision-making in near real time. For sustainability, this means building pipelines that surface anomalies, flag goal drift, and recommend adjustments before targets are missed.',
      },
      {
        heading: 'Designing for Response',
        body: 'The best feedback loops are designed with decision rights in mind. Who sees the data? Who acts on it? What is the acceptable response time? Without clear ownership, even the most sophisticated monitoring system produces noise instead of action.',
      },
      {
        heading: 'Continuous Improvement Over Periodic Review',
        body: 'Annual sustainability reports create a false sense of rhythm. Real progress requires monthly, weekly, and sometimes daily feedback cycles—especially for energy, waste, and supply chain metrics where operational decisions happen fast.',
      },
    ],
  },
]