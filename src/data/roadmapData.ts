export const roadmapData = {
  q1a: {
    title: "Closing Loose Ends",
    quarter: "Q1",
    items: [
      {
        title: "Migrate simulation API to Modal as stopgap",
      },
      {
        title: "Finish migrating app v2 onto API v2",
        description: "Commit to completing migration by Feb. 28",
      },
      {
        title: "Display nationwide outputs from US congressional districts",
      },
      {
        title: "Begin Cosilico migration as it ramps up",
      },
      {
        title: "Improve processes to ensure tech team work responds to new needs",
      },
    ],
  },
  q1b: {
    title: "Closing Loose Ends",
    quarter: "Q1",
    subtitle: "Points for consideration",
    items: [
      {
        title: "Determine future of app v2",
      },
      {
        title: "Refine our mission",
      },
      {
        title: "Identify any other outstanding projects",
      },
      {
        title: "Determine approach to AI interface work",
        description:
          "How should we anticipate working (if at all) with Nikhil's PolicyEngine AI interface experiments?",
      },
    ],
  },
  q2: {
    title: "Ramping Up on the New Mission",
    quarter: "Q2",
    items: [
      {
        title: "Conduct market assessment and increase lead generation involvement",
      },
      {
        title: "Support more complex visualizations from the Policy Team",
      },
      {
        title: "Create reusable components to increase pace of applet creation",
        description: "Working with the policy team, driven by their needs. Possible areas include:",
        subItems: [
          "Front-end components, graphs, charts, especially things Claude struggles with (Plotly/other chart library, OBBBA scrolly story-style scatter plot)",
          "Front-end Claude brand skills",
          "Back-end libraries that can be invoked instead of needing to reinvent/deploy new back end (Modal, .py can help enable this)",
          "Reusable monitoring/tracking library to determine primary users, traffic, etc.",
        ],
      },
      {
        title: "Define app v2 direction based on role and market assessment",
        description: "Possible directions include:",
        subItems: [
          "Subscription-based tool for policy analysis with free and paid tiers?",
          "Training tool for recent grads?",
          "Demonstration of our capabilities?",
          "At minimum, integrate applets/dashboards from policy team into app",
        ],
      },
      {
        title: "Continue Cosilico migration as needed",
      },
    ],
  },
  q3: {
    title: "Product Expansion",
    quarter: "Q3+",
    items: [
      {
        title: "New products to support applets",
        description: "Possible options include:",
        subItems: [
          "AI interface building on Nikhil's work that can produce and launch applets for constrained visualization/charting requirements on a framework like Modal",
        ],
      },
      {
        title: "New products driven by market assessment",
        description: "Possible options include:",
        subItems: [
          "Internal dashboard/visualization tools for public and/or NGO clients",
          "Local-level analytical tools powered by local-level datasets (e.g., NYC), GIS visualizations",
          "Non-applet on-demand tools/features for external clients (back-end technologies, front ends)",
          "Technical consulting services",
        ],
      },
      {
        title: "Improved analytics and monitoring",
        description: "Possible options include:",
        subItems: [
          "Front-end user analytics",
          "Internal cost monitoring aggregating all cost sources",
        ],
      },
    ],
  },
};
