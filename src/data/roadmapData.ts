// Status types for quarterly deliverables
export type DeliverableStatus =
  | "backlog"
  | "planning"
  | "active"
  | "completed"
  | "cancelled";

// Status sort order: active first, then completed, planning, backlog, cancelled
const STATUS_ORDER: Record<DeliverableStatus, number> = {
  active: 0,
  completed: 1,
  planning: 2,
  backlog: 3,
  cancelled: 4,
};

/**
 * Sort deliverables by status priority
 */
export function sortByStatus<T extends { status: DeliverableStatus }>(
  items: T[]
): T[] {
  return [...items].sort(
    (a, b) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status]
  );
}

// Quarterly deliverable item with optional metadata
export interface Deliverable {
  title: string;
  status: DeliverableStatus;
  deadline?: string;
  description?: string;
  subItems?: string[];
}

// Quarter data structure
export interface QuarterData {
  title: string;
  quarter: string;
  subtitle?: string;
  items: Deliverable[];
}

export const roadmapData: {
  q1: QuarterData;
  q2: QuarterData;
  q3: QuarterData;
} = {
  q1: {
    title: "Closing Loose Ends",
    quarter: "Q1",
    items: [
      {
        title: "Migrate simulation API to Modal as stopgap",
        status: "completed",
        deadline: "Jan. 15, 2026",
      },
      {
        title: "Finish migrating app v2 onto API v2",
        status: "active",
        deadline: "Feb. 28, 2026",
        description: "Commit to completing MVP by Feb. 28",
      },
      {
        title: "Create US congressional district-level breakdown map in app v2",
        status: "completed",
        deadline: "Jan. 15, 2026",
      },
      {
        title: "Begin Cosilico migration as it ramps up",
        status: "backlog",
      },
      {
        title: "Create cost monitoring platform",
        status: "backlog",
        description:
          "Aggregate all technical cost sources and create dashboard for viewing/monitoring; consider integration into Teamverse",
      },
      {
        title: "Determine future of app v2 and sunset schedule for app v1",
        status: "planning",
      },
    ],
  },
  q2: {
    title: "Ramping Up on the New Mission",
    quarter: "Q2",
    items: [
      {
        title: "Support more complex visualizations from the Policy Team",
        status: "backlog",
      },
      {
        title: "Continue Cosilico migration as needed",
        status: "backlog",
      },
      {
        title:
          "Conduct market assessment and increase lead generation involvement",
        status: "backlog",
        description: "This includes:",
        subItems: [
          "Engaging more closely with existing and new policy stakeholders to understand technical product needs",
          "Driving new engagement with tech community",
          "Publishing more blog posts, articles, and newsletter blurbs about our technical processes and achievements",
          "Attending open-source conferences",
        ],
      },
      {
        title:
          "Create components and technical structures to increase pace of applet/dashboard creation",
        status: "backlog",
        description: "Working with the policy team, driven by their needs. Possible areas include:",
        subItems: [
          "Improved orchestration/deployment structures",
          "AI skills, agents, workflows",
          ".py integration into dashboards",
          "Front-end components, graphs, charts, especially things Claude struggles with (Plotly/other chart library, OBBBA scrolly story-style scatter plot)",
          "Front-end Claude brand skills",
          "Back-end libraries that can be invoked instead of needing to reinvent/deploy new back end (Modal, .py can help enable this)",
          "Reusable monitoring/tracking library to determine primary users, traffic, etc.",
        ],
      },
      {
        title: "Define app v2 direction based on role and market assessment",
        status: "backlog",
        description: "Possible directions include:",
        subItems: [
          "Subscription-based tool for policy analysis with free and paid tiers?",
          "Training tool for recent grads?",
          "Demonstration of our capabilities?",
          "At minimum, integrate applets/dashboards from policy team into app",
        ],
      },
    ],
  },
  q3: {
    title: "Product Expansion",
    quarter: "Q3+",
    items: [
      {
        title: "New products and continued improvements to applets/dashboards",
        status: "backlog",
        description: "Possible options include:",
        subItems: [
          "Improved data orchestration workflow",
          "AI interface building on Nikhil's work that can produce and launch applets for constrained visualization/charting requirements on a framework like Modal",
          "Explicit connection between app v2 and dashboards that allows users to seamlessly use saved households in dashboards and vice-versa",
        ],
      },
      {
        title: "New products driven by market assessment",
        status: "backlog",
        description: "Possible options include:",
        subItems: [
          "Internal dashboard/visualization tools for public and/or NGO clients",
          "Local-level analytical tools powered by local-level datasets (e.g., NYC), GIS visualizations",
          "Non-applet on-demand tools/features for external clients (back-end technologies, front ends)",
          "Technical consulting services",
        ],
      },
      {
        title: "App v2 and dashboard/applet user analytics, metrics, and tracing",
        status: "backlog",
      },
    ],
  },
};
