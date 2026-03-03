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
    desc: 'A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows.',
    content: [
      { heading: 'Built for Another Era',  body: 'Most data infrastructure was built to optimize for sales, user growth, or cost—not carbon. This creates friction when sustainability teams try to source emissions data from systems that were not designed to capture it.' },
      { heading: 'Bridging the Gaps',      body: 'Emissions data lives everywhere—and nowhere. From procurement software to building sensors, critical signals are often siloed across teams, formats, or departments.' },
      { heading: 'Stack With Strategy',    body: "A modern climate stack is not just a bundle of tools—it is an integrated system that mirrors how your business actually operates. Tools alone won't solve a misaligned data-meets-strategy split." },
      { heading: 'Bake in Flexibility',    body: "Regulatory frameworks, emission factors, and supplier data are constantly evolving. Future-proofing your system is less about perfecting what's next and more about building with change in mind." },
      { heading: 'From Stack to Story',    body: 'At the end of the day, data infrastructure is only valuable if it drives action. With the right foundations in place, sustainability becomes more than a report—it becomes a capability.' },
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
    desc: 'Why climate goals belong in your core roadmap—not just in the annual ESG report.',
    content: [
      { heading: 'The Side Project Trap',   body: "Too many sustainability efforts live in a separate lane—disconnected from procurement decisions, product planning, and financial targets. Strategy without systems doesn't scale." },
      { heading: 'Operationalizing Intent', body: 'Making sustainability operational means assigning ownership, setting measurable milestones, and connecting environmental KPIs to business outcomes.' },
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
    desc: 'A behind-the-scenes look at our platform logic, system architecture, and sustainability reasoning.',
    content: [
      { heading: 'Why We Built It This Way', body: 'Aetherfield was designed around a simple belief: sustainability data should be as usable as financial data. That meant rethinking how emissions, energy, and waste signals are ingested and surfaced to decision-makers.' },
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
    desc: "Why legacy tools aren't enough—and what the next generation of reporting looks like.",
    content: [
      { heading: 'The Spreadsheet Era', body: 'For years, sustainability reporting meant exporting data into spreadsheets, manually reconciling figures, and hoping nothing broke before the deadline.' },
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
    desc: 'Debunking common assumptions and offering a framework for getting it right.',
    content: [
      { heading: 'Myth: Scope 3 Is Optional', body: "Many organizations treat Scope 3 as a future problem. But with regulatory pressure mounting, upstream and downstream emissions are no longer optional to measure—they're essential to disclose." },
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
    desc: 'Building responsive systems that keep sustainability strategy adaptive and actionable.',
    content: [
      { heading: 'What a Feedback Loop Actually Does', body: 'A feedback loop is not just a dashboard. It is a system that connects measurement to decision-making in near real time, surfacing anomalies and flagging goal drift before targets are missed.' },
    ],
  },
]