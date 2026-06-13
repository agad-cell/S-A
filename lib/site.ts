export const GUMROAD_STORE = 'https://siaventure.gumroad.com'

export const CONTACT_EMAIL = 'hello@siaventure.com'

export const SOCIALS = {
  instagram: 'https://www.instagram.com/sia78888/',
  pinterest: 'https://www.pinterest.com/sia078/',
  gumroad: GUMROAD_STORE,
}

export type Category =
  | 'Digital Planners'
  | 'Study Resources'
  | 'Habit Trackers'
  | 'Productivity Tools'
  | 'Reading Trackers'

export type Product = {
  slug: string
  name: string
  category: Category
  price: string
  blurb: string
  description: string
  image: string
  gumroad: string
  bestseller?: boolean
  formats: string[]
  isFree?: boolean
}

export const products: Product[] = [
  {
    slug: 'ultimate-reading-journal',
    name: 'The Ultimate Reading Journal',
    category: 'Reading Trackers',
    price: '',
    blurb: 'Track your reading journey with this beautifully designed reading journal.',
    description: 'Organize your reading life with dedicated pages for tracking books, setting goals, and reflecting on your favorite reads. Perfect for BookTok lovers.',
    image: '/products/reading-journal.png',
    gumroad: ${GUMROAD_STORE}/l/ultimatej,
    formats: ['Printable', 'PDF', 'Digital'],
  },
  {
    slug: 'essay-writing-cheat-sheet',
    name: 'Essay Writing Cheat Sheet',
    category: 'Study Resources',
    price: '',
    blurb: 'Essential tips and frameworks for writing better essays.',
    description: 'A quick reference guide with proven frameworks, structure templates, and editing tips to elevate your essay writing.',
    image: '/products/essay-cheat-sheet.png',
    gumroad: ${GUMROAD_STORE}/l/essaysg,
    formats: ['Printable', 'PDF'],
  },
  {
    slug: 'memory-techniques-cheat-sheet',
    name: 'Memory Techniques Cheat Sheet',
    category: 'Study Resources',
    price: '',
    blurb: 'Study hacks for students, exam prep guide, learning & revision.',
    description: 'Master proven memory techniques like the method of loci, spaced repetition, and active recall. Designed for exam success.',
    image: '/products/memory-techniques.png',
    gumroad: ${GUMROAD_STORE}/l/mcht,
    formats: ['Printable', 'PDF'],
  },
  {
    slug: 'student-success-weekly-planner',
    name: 'Student Success Weekly Planner',
    category: 'Digital Planners',
    price: '',
    blurb: 'Organize your week for academic success.',
    description: 'A comprehensive weekly planning system designed specifically for students. Includes assignment tracking, class schedules, and study blocks.',
    image: '/products/student-planner.png',
    gumroad: ${GUMROAD_STORE}/l/studentsp,
    formats: ['Printable', 'PDF', 'Digital'],
  },
  {
    slug: 'ultimate-student-planner',
    name: 'Ultimate Student Planner + Assignment Tracker',
    category: 'Digital Planners',
    price: '',
    blurb: 'Complete planning system with assignment tracking.',
    description: 'Everything a student needs in one system: semester overview, weekly planning, assignment tracker, grade calculator, and study scheduler.',
    image: '/products/student-assignment-tracker.png',
    gumroad: ${GUMROAD_STORE}/l/tutassign,
    bestseller: true,
    formats: ['Printable', 'PDF', 'Digital'],
  },
  {
    slug: 'weekly-planner',
    name: 'Weekly Planner',
    category: 'Digital Planners',
    price: '',
    blurb: 'Stay organized with a clean weekly planning system.',
    description: 'Minimalist weekly layout with time-blocking, priority lists, and space for notes. Works with GoodNotes, Notability, or as a printable.',
    image: '/products/weekly-planner.png',
    gumroad: ${GUMROAD_STORE}/l/weeklyplanner,
    formats: ['Printable', 'PDF', 'Digital'],
  },
  {
    slug: 'exam-planner',
    name: 'Exam Planner',
    category: 'Study Resources',
    price: '',
    blurb: 'Plan your exam prep with structured study schedule.',
    description: 'Organize your exam preparation with a study schedule builder, topic breakdown pages, and practice problem tracker.',
    image: '/products/exam-planner.png',
    gumroad: ${GUMROAD_STORE}/l/Classds,
    formats: ['Printable', 'PDF'],
  },
  {
    slug: 'exam-preparation-tracker',
    name: 'Exam Preparation Tracker',
    category: 'Study Resources',
    price: '',
    blurb: 'Track your exam preparation progress.',
    description: 'Monitor your revision progress with topic checkers, practice score tracking, and confidence level charts for each exam subject.',
    image: '/products/exam-tracker.png',
    gumroad: ${GUMROAD_STORE}/l/Irtslx,
    formats: ['Printable', 'PDF'],
  },
  {
    slug: 'productivity-planner',
    name: 'Productivity Planner',
    category: 'Productivity Tools',
    price: '',
    blurb: 'Maximize your productivity with proven planning frameworks.',
    description: 'Combines productivity systems like time-blocking, the Eisenhower matrix, and daily goal-setting into one cohesive planner.',
    image: '/products/productivity-planner.png',
    gumroad: ${GUMROAD_STORE}/l/cjKR3k,
    formats: ['Printable', 'PDF', 'Digital'],
  },
  {
    slug: 'study-planner-1',
    name: 'Study Planner',
    category: 'Study Resources',
    price: '',
    blurb: 'Organize your studies with a comprehensive study plan.',
    description: 'Create a personalized study schedule with subject breakdowns, study goal tracking, and weekly review pages.',
    image: '/products/study-planner-1.png',
    gumroad: ${GUMROAD_STORE}/l/ndstudp,
    formats: ['Printable', 'PDF'],
  },
  {
    slug: 'study-planner-2',
    name: 'Study Planner Pro',
    category: 'Study Resources',
    price: '',
    blurb: 'Advanced study planning system with detailed tracking.',
    description: 'Premium study planner with comprehensive tracking for multiple subjects, progress monitoring, and exam countdown features.',
    image: '/products/study-planner-2.png',
    gumroad: ${GUMROAD_STORE}/l/kkjkau,
    formats: ['Printable', 'PDF'],
  },
  {
    slug: 'daily-tracker',
    name: 'Daily Tracker',
    category: 'Habit Trackers',
    price: '',
    blurb: 'Track your daily habits and activities.',
    description: 'A simple, beautiful daily tracker for habits, tasks, and reflections. Free to download and use.',
    image: '/products/daily-tracker.png',
    gumroad: ${GUMROAD_STORE}/l/Hnsuokd,
    isFree: true,
    formats: ['Printable', 'PDF'],
  },
  {
    slug: 'daily-planner',
    name: 'Daily Planner',
    category: 'Digital Planners',
    price: '',
    blurb: 'Plan your day with detailed daily schedule.',
    description: 'Start each day with intention. Includes hourly time-blocks, priority list, habit tracker, and evening reflection.',
    image: '/products/daily-planner.png',
    gumroad: ${GUMROAD_STORE}/l/lhmsanz,
    formats: ['Printable', 'PDF', 'Digital'],
  },
  {
    slug: 'study-tracker-1',
    name: 'Study Tracker',
    category: 'Study Resources',
    price: '',
    blurb: 'Track your study sessions and progress.',
    description: 'Monitor your study time, track completion of topics, and measure your progress toward exam readiness.',
    image: '/products/study-tracker-1.png',
    gumroad: ${GUMROAD_STORE}/l/jzjpdzd,
    formats: ['Printable', 'PDF'],
  },
  {
    slug: 'study-tracker-2',
    name: 'Study Tracker Premium',
    category: 'Study Resources',
    price: '',
    blurb: 'Advanced study tracking with analytics.',
    description: 'Free advanced study tracker with session logging, subject progress analytics, and productivity insights.',
    image: '/products/study-tracker-2.png',
    gumroad: ${GUMROAD_STORE}/l/bqsnm,
    isFree: true,
    formats: ['Printable', 'PDF'],
  },
  {
    slug: 'anti-procrastination-planner',
    name: 'Anti-Procrastination Planner',
    category: 'Productivity Tools',
    price: '',
    blurb: 'Overcome procrastination with structured planning.',
    description: 'Beat procrastination with task-breaking worksheets, motivation tracking, and accountability systems designed for chronic procrastinators.',
    image: '/products/anti-procrastination.png',
    gumroad: ${GUMROAD_STORE}/l/3fyfskk,
    formats: ['Printable', 'PDF'],
  },
  {
    slug: 'study-planner-3',
    name: 'Study Planner Deluxe',
    category: 'Study Resources',
    price: '',
    blurb: 'Premium study planning with all features.',
    description: 'The complete study planning system with everything: schedules, trackers, goals, and detailed progress monitoring.',
    image: '/products/study-planner-3.png',
    gumroad: ${GUMROAD_STORE}/l/Tsqf,
    formats: ['Printable', 'PDF'],
  },
  {
    slug: 'not-random',
    name: 'Not Random Dashboard',
    category: 'Productivity Tools',
    price: '',
    blurb: 'Organize your projects and tasks efficiently.',
    description: 'A comprehensive project dashboard with task organization, progress tracking, and visual project overview system.',
    image: '/products/not-random.png',
    gumroad: ${GUMROAD_STORE}/l/notdash,
    formats: ['PDF', 'Digital'],
  },
]

export const categories: Category[] = [
  'Digital Planners',
  'Study Resources',
  'Habit Trackers',
  'Productivity Tools',
  'Reading Trackers',
]

export type FreeResource = {
  slug: string
  title: string
  description: string
  image: string
  gumroad: string
}

export const freeResources: FreeResource[] = [
  {
    slug: 'daily-tracker',
    title: 'Daily Tracker',
    description: 'A simple, beautiful daily tracker for habits, tasks, and reflections. Perfect for building consistency.',
    image: '/products/daily-tracker.png',
    gumroad: ${GUMROAD_STORE}/l/Hnsuokd,
  },
  {
    slug: 'study-tracker-free',
    title: 'Study Tracker',
    description: 'Track your study sessions, monitor your progress, and measure your readiness for exams. Completely free.',
    image: '/products/study-tracker-2.png',
    gumroad: ${GUMROAD_STORE}/l/bqsnm,
  },
]

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  category: string
  body: { heading?: string; subheading?: string; paragraphs: string[]; productSlug?: string }[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'best-digital-planners-2026',
    title: 'Best Digital Planners for Productivity in 2026',
    excerpt: 'The digital planners worth your time this year — and how to pick the one that fits your routine.',
    image: '/blog/best-planners-2026.png',
    date: 'January 8, 2026',
    readTime: '6 min read',
    category: 'Digital Planners',
    body: [
      {
        paragraphs: [
          'Digital planning has gone from a niche habit to the default way thousands of students, creators, and entrepreneurs organise their lives. But not all planners are created equal. In this guide we break down what actually makes a digital planner worth using in 2026.',
        ],
      },
      {
        heading: 'What to look for in a digital planner',
        paragraphs: [
          'A great planner should be hyperlinked, so you can jump between months, weeks, and days in a single tap. It should work across the tools you already use — GoodNotes, Notability, Notion, or a plain PDF reader. And it should be simple enough that you actually open it every day.',
        ],
      },
      {
        heading: 'Our top pick',
        paragraphs: [
          'If you want a single system that does it all, the Ultimate Student Planner covers daily, weekly, and monthly planning with clean, distraction-free pages. It is the planner we recommend to anyone getting started.',
        ],
        productSlug: 'ultimate-student-planner',
      },
      {
        heading: 'Build the habit, not just the setup',
        paragraphs: [
          'The best planner is the one you keep using. Pair your planner with a simple habit tracker and a five-minute daily review, and you will see your consistency climb week over week.',
        ],
      },
    ],
  },
  {
    slug: '30-habit-tracker-ideas',
    title: '30 Habit Tracker Ideas That Actually Work',
    excerpt: 'Stuck on what to track? Here are 30 habits worth tracking — from health to focus to finances.',
    image: '/blog/habit-tracker-ideas.png',
    date: 'January 2, 2026',
    readTime: '5 min read',
    category: 'Habit Trackers',
    body: [
      {
        paragraphs: [
          'A habit tracker is only as useful as the habits you choose to track. Pick too many and you will burn out; pick the wrong ones and you will lose interest. Here are 30 ideas across the areas that matter most.',
        ],
      },
      {
        heading: 'Health and energy',
        paragraphs: [
          'Drink water, move for 20 minutes, sleep before midnight, stretch, take a daily walk, eat a vegetable with every meal. Small physical habits compound fast.',
        ],
      },
      {
        heading: 'Focus and work',
        paragraphs: [
          'Plan tomorrow tonight, do a single deep-work block, clear your inbox to zero, review your top three priorities, and shut down at a set time. These build a calmer, more focused workday.',
        ],
        productSlug: 'daily-tracker',
      },
      {
        heading: 'Mind and money',
        paragraphs: [
          'Journal for five minutes, read ten pages, log your spending, and check your budget weekly. Tracking these quietly improves your whole month.',
        ],
      },
    ],
  },
  {
    slug: 'stay-consistent-daily-trackers',
    title: 'How to Stay Consistent Using Daily Trackers',
    excerpt: 'Consistency is a system, not a personality trait. Here is how daily trackers make it easy.',
    image: '/blog/stay-consistent.png',
    date: 'December 20, 2025',
    readTime: '4 min read',
    category: 'Habit Trackers',
    body: [
      {
        paragraphs: [
          'Most people quit their habits not because they lack willpower, but because they lack a system. A daily tracker gives you that system — a simple, visual cue that keeps you accountable.',
        ],
      },
      {
        heading: 'Make it visible',
        paragraphs: [
          'A tracker only works if you see it. Keep it on the first page of your planner or pinned in your notes app so checking off your habits becomes part of your daily routine.',
        ],
        productSlug: 'daily-planner',
      },
      {
        heading: 'Never miss twice',
        paragraphs: [
          'Missing one day is normal. The trick is to never miss two in a row. A tracker makes those gaps obvious, so you can get back on track before a slip becomes a pattern.',
        ],
      },
    ],
  },
  {
    slug: 'printable-vs-digital-planners',
    title: 'Printable vs Digital Planners: What Should You Use?',
    excerpt: 'Paper or pixels? We compare the two so you can choose the right planner for your life.',
    image: '/blog/printable-vs-digital.png',
    date: 'December 12, 2025',
    readTime: '5 min read',
    category: 'Digital Planners',
    body: [
      {
        paragraphs: [
          'There is no single right answer — only the planner that fits your routine. Here is an honest comparison of printable and digital planning to help you decide.',
        ],
      },
      {
        heading: 'Why people love printable planners',
        paragraphs: [
          'Writing by hand helps you remember, and there are no notifications to distract you. Printables are perfect if you enjoy the tactile feel of pen on paper.',
        ],
      },
      {
        heading: 'Why digital planners are winning',
        paragraphs: [
          'Digital planners are reusable, searchable, and always with you. You can duplicate pages, move tasks, and never run out of paper. Most of our planners come in both formats, so you do not have to choose.',
        ],
        productSlug: 'ultimate-student-planner',
      },
    ],
  },
  {
    slug: 'organize-your-life-as-a-student',
    title: 'How to Organize Your Life as a Student Using Templates',
    excerpt: 'From class schedules to assignment deadlines — templates that keep student life under control.',
    image: '/blog/student-organization.png',
    date: 'December 4, 2025',
    readTime: '6 min read',
    category: 'Digital Planners',
    body: [
      {
        paragraphs: [
          'Student life moves fast. Between lectures, assignments, and a social life, it is easy to feel buried. The right templates turn that chaos into a clear, manageable system.',
        ],
      },
      {
        heading: 'Start with a single dashboard',
        paragraphs: [
          'Keep your semester schedule, deadlines, and goals in one place. A monthly tracker gives you the big picture so nothing sneaks up on you.',
        ],
        productSlug: 'ultimate-student-planner',
      },
      {
        heading: 'Plan your week, then your day',
        paragraphs: [
          'Every Sunday, map your week. Each morning, pick three priorities. This simple two-layer routine keeps you ahead of your workload without the overwhelm.',
        ],
      },
    ],
  },
]
