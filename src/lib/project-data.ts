export const PROJECT = {
  // ─── Brand Color ──────────────────────────────────────────
  // Change this hex AND the matching --color-accent in globals.css
  accentColor: "#333333",

  client: {
    name: "CLIENT_NAME",
    logo: "/client-logo.png",
    contactName: "CONTACT_NAME",
    contactRole: "CONTACT_ROLE",
    contactEmail: "client@example.com",
    industry: "CLIENT_INDUSTRY",
  },
  studio: {
    name: "STUDIO_NAME",
    role: "STUDIO_ROLE",
    email: "studio@example.com",
  },
  project: {
    name: "PROJECT_NAME",
    tagline: "PROJECT_TAGLINE",
    type: "PROJECT_TYPE",
    startDate: "第 1 週",
    endDate: "第 X 週",
    duration: "X 個月",
    status: "等待確認" as const,
  },
  overview: {
    summary: "PROJECT_SUMMARY",
    objectives: [
      "OBJECTIVE_1",
      "OBJECTIVE_2",
      "OBJECTIVE_3",
      "OBJECTIVE_4",
    ],
  },
  timeline: [
    {
      phase: "PHASE_1_NAME",
      week: "第 1-4 週",
      date: "第 1-4 週",
      status: "upcoming" as const,
      tasks: [
        "TASK_1",
        "TASK_2",
        "TASK_3",
        "TASK_4",
      ],
    },
    {
      phase: "PHASE_2_NAME",
      week: "第 5-8 週",
      date: "第 5-8 週",
      status: "upcoming" as const,
      tasks: [
        "TASK_1",
        "TASK_2",
        "TASK_3",
        "TASK_4",
      ],
    },
    {
      phase: "PHASE_3_NAME",
      week: "第 9-12 週",
      date: "第 9-12 週",
      status: "upcoming" as const,
      tasks: [
        "TASK_1",
        "TASK_2",
        "TASK_3",
        "TASK_4",
      ],
    },
    {
      phase: "PHASE_4_NAME",
      week: "第 13-16 週",
      date: "第 13-16 週",
      status: "upcoming" as const,
      tasks: [
        "TASK_1",
        "TASK_2",
        "TASK_3",
        "TASK_4",
      ],
    },
  ],
  deliverables: [
    {
      category: "CATEGORY_1",
      icon: "◆",
      items: [
        { name: "ITEM_NAME", quantity: "1 套", description: "ITEM_DESCRIPTION" },
        { name: "ITEM_NAME", quantity: "1 套", description: "ITEM_DESCRIPTION" },
        { name: "ITEM_NAME", quantity: "1 套", description: "ITEM_DESCRIPTION" },
        { name: "ITEM_NAME", quantity: "1 套", description: "ITEM_DESCRIPTION" },
      ],
    },
    {
      category: "CATEGORY_2",
      icon: "▶",
      items: [
        { name: "ITEM_NAME", quantity: "1 套", description: "ITEM_DESCRIPTION" },
        { name: "ITEM_NAME", quantity: "1 套", description: "ITEM_DESCRIPTION" },
        { name: "ITEM_NAME", quantity: "1 套", description: "ITEM_DESCRIPTION" },
      ],
    },
    {
      category: "CATEGORY_3",
      icon: "◇",
      items: [
        { name: "ITEM_NAME", quantity: "1 套", description: "ITEM_DESCRIPTION" },
        { name: "ITEM_NAME", quantity: "1 套", description: "ITEM_DESCRIPTION" },
        { name: "ITEM_NAME", quantity: "1 套", description: "ITEM_DESCRIPTION" },
        { name: "ITEM_NAME", quantity: "1 套", description: "ITEM_DESCRIPTION" },
      ],
    },
    {
      category: "CATEGORY_4",
      icon: "□",
      items: [
        { name: "ITEM_NAME", quantity: "1 套", description: "ITEM_DESCRIPTION" },
        { name: "ITEM_NAME", quantity: "1 套", description: "ITEM_DESCRIPTION" },
        { name: "ITEM_NAME", quantity: "1 套", description: "ITEM_DESCRIPTION" },
      ],
    },
  ],
  scope: {
    included: [
      "INCLUDED_ITEM_1",
      "INCLUDED_ITEM_2",
      "INCLUDED_ITEM_3",
      "INCLUDED_ITEM_4",
      "INCLUDED_ITEM_5",
      "INCLUDED_ITEM_6",
    ],
    excluded: [
      "EXCLUDED_ITEM_1",
      "EXCLUDED_ITEM_2",
      "EXCLUDED_ITEM_3",
      "EXCLUDED_ITEM_4",
      "EXCLUDED_ITEM_5",
      "EXCLUDED_ITEM_6",
    ],
  },
  quote: {
    currency: "TWD",
    lineItems: [
      { name: "LINE_ITEM_1", description: "DESCRIPTION", price: 0 },
      { name: "LINE_ITEM_2", description: "DESCRIPTION", price: 0 },
      { name: "LINE_ITEM_3", description: "DESCRIPTION", price: 0 },
    ],
    subtotal: 0,
    discount: { label: "DISCOUNT_LABEL", percentage: 0, amount: 0 },
    total: 0,
    paymentSchedule: [
      { milestone: "MILESTONE_1", percentage: 100, amount: 0, due: "簽約時支付" },
    ],
    paymentTerms: "PAYMENT_TERMS",
    paymentLink: "#",
  },
  nextSteps: [
    { step: 1, title: "STEP_1_TITLE", description: "STEP_1_DESCRIPTION" },
    { step: 2, title: "STEP_2_TITLE", description: "STEP_2_DESCRIPTION" },
    { step: 3, title: "STEP_3_TITLE", description: "STEP_3_DESCRIPTION" },
    { step: 4, title: "STEP_4_TITLE", description: "STEP_4_DESCRIPTION" },
    { step: 5, title: "STEP_5_TITLE", description: "STEP_5_DESCRIPTION" },
  ],
  cta: {
    headline: "CTA_HEADLINE",
    body: "CTA_BODY",
    buttonText: "CTA_BUTTON_TEXT",
    email: "studio@example.com",
  },
  images: {
    hero1: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
    hero2: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80",
    product: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1200&q=80",
    editorial: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
    texture: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&q=80",
    brutalist: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80",
  },
};
