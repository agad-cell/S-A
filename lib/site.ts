export const GUMROAD_STORE = 'https://siaventure.gumroad.com'

export const CONTACT_EMAIL = 'hello@siaventure.com'

export const SOCIALS = {
  instagram: 'https://instagram.com/siaventure',
  pinterest: 'https://pinterest.com/siaventure',
  gumroad: GUMROAD_STORE,
}

export type Category =
  | 'Digital Planners'
  | 'Habit Trackers'
  | 'Productivity Cheat Sheets'

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
}

export const products: Product[] = [
  {
    slug: 'ultimate-digital-planner',
    name: 'Ultimate Digital Planner',
    category: 'Digital Planners',
    price: '$18',
    blurb: 'Plan your whole year with hyperlinked daily, weekly, and monthly pages.',
    description:
      'A complete, hyperlinked planning system that keeps your goals, schedule, and notes in one beautiful place. Built for GoodNotes, Notability, and any PDF reader.',
    image: '/products/digital-planner.png',
    gumroad: `${GUMROAD_STORE}/l/digital-planner`,
    bestseller: true,
    formats: ['GoodNotes', 'PDF', 'Notion'],
  },
  {
    slug: 'minimal-habit-tracker',
    name: 'Minimal Habit Tracker',
    category: 'Habit Trackers',
    price: '$9',
    blurb: 'Track up to 20 habits a month and watch your streaks build.',
    description:
      'A clean, no-clutter habit tracker that makes consistency feel effortless. Includes monthly grids, reflection prompts, and a streak overview.',
    image: '/products/habit-tracker.png',
    gumroad: `${GUMROAD_STORE}/l/habit-tracker`,
    bestseller: true,
    formats: ['Printable', 'PDF', 'Notion'],
  },
  {
    slug: 'productivity-cheat-sheets',
    name: 'Productivity Cheat Sheets',
    category: 'Productivity Cheat Sheets',
    price: '$7',
    blurb: 'A pack of proven frameworks to plan, prioritise, and focus.',
    description:
      'Ten beautifully designed cheat sheets covering time-blocking, the Eisenhower matrix, weekly reviews, and more. Print them or keep them on your tablet.',
    image: '/products/cheat-sheet.png',
    gumroad: `${GUMROAD_STORE}/l/cheat-sheets`,
    formats: ['Printable', 'PDF'],
  },
  {
    slug: 'daily-focus-planner',
    name: 'Daily Focus Planner',
    category: 'Digital Planners',
    price: '$12',
    blurb: 'A single-page daily system to plan, focus, and reflect.',
    description:
      'Start each day with intention. This daily planner pairs time-blocking with a top-3 priority list and an evening reflection to keep you on track.',
    image: '/products/daily-planner.png',
    gumroad: `${GUMROAD_STORE}/l/daily-planner`,
    formats: ['GoodNotes', 'PDF'],
  },
  {
    slug: 'monthly-productivity-tracker',
    name: 'Monthly Productivity Tracker',
    category: 'Habit Trackers',
    price: '$10',
    blurb: 'See your month at a glance and stay accountable to your goals.',
    description:
      'A monthly dashboard for tracking habits, tasks, and wins. Includes goal-setting pages and a monthly review to help you finish strong.',
    image: '/products/monthly-tracker.png',
    gumroad: `${GUMROAD_STORE}/l/monthly-tracker`,
    formats: ['Printable', 'PDF', 'Notion'],
  },
  {
    slug: 'goal-setting-planner',
    name: 'Goal-Setting Planner',
    category: 'Digital Planners',
    price: '$14',
    blurb: 'Turn big goals into clear, achievable steps.',
    description:
      'A guided planner that walks you from vision to action with quarterly goals, milestone tracking, and weekly check-ins.',
    image: '/products/goal-planner.png',
    gumroad: `${GUMROAD_STORE}/l/goal-planner`,
    formats: ['Printable', 'PDF', 'Notion'],
  },
]

export const categories: Category[] = [
  'Digital Planners',
  'Habit Trackers',
  'Productivity Cheat Sheets',
]

export type FreeResource = {
  slug: string
  title: string
  description: string
  image: string
}

export const freeResources: FreeResource[] = [
  {
    slug: 'habit-tracker',
    title: 'Free Habit Tracker PDF',
    description:
      'A printable monthly habit tracker to help you build consistency, one day at a time.',
    image: '/products/habit-tracker.png',
  },
  {
    slug: 'daily-planner-sample',
    title: 'Daily Planner Sample',
    description:
      'A free sample page from our Daily Focus Planner so you can try before you buy.',
    image: '/products/daily-planner.png',
  },
  {
    slug: 'goal-setting-sheet',
    title: 'Goal-Setting Sheet',
    description:
      'A one-page worksheet to clarify your goals and map out your next steps.',
    image: '/products/goal-planner.png',
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
    excerpt:
      'The digital planners worth your time this year — and how to pick the one that fits your routine.',
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
          'If you want a single system that does it all, the Ultimate Digital Planner covers daily, weekly, and monthly planning with clean, distraction-free pages. It is the planner we recommend to anyone getting started.',
        ],
        productSlug: 'ultimate-digital-planner',
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
    excerpt:
      'Stuck on what to track? Here are 30 habits worth tracking — from health to focus to finances.',
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
        productSlug: 'minimal-habit-tracker',
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
    excerpt:
      'Consistency is a system, not a personality trait. Here is how daily trackers make it easy.',
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
        productSlug: 'daily-focus-planner',
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
    excerpt:
      'Paper or pixels? We compare the two so you can choose the right planner for your life.',
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
        productSlug: 'ultimate-digital-planner',
      },
    ],
  },
  {
    slug: 'organize-your-life-as-a-student',
    title: 'How to Organize Your Life as a Student Using Templates',
    excerpt:
      'From class schedules to assignment deadlines — templates that keep student life under control.',
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
        productSlug: 'monthly-productivity-tracker',
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
