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
        title: "Create US congressional district-level breakdown map in app v2",
      },
      {
        title: "Begin Cosilico migration as it ramps up",
      },
      {
        title: "Improve processes to ensure tech team work responds to new needs",
      },
      {
        title: "Create cost monitoring platform",
        description: "Aggregate all technical cost sources and create dashboard for viewing/monitoring; consider integration into Teamverse",
      },
    ],
  },
  q1b: {
    title: "Closing Loose Ends",
    quarter: "Q1",
    subtitle: "Points for consideration",
    items: [
      {
        title: "Determine future of app v2 and sunset schedule for app v1",
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
        title: "Support more complex visualizations from the Policy Team",
      },
      {
        title: "Continue Cosilico migration as needed",
      },
      {
        title: "Conduct market assessment and increase lead generation involvement",
        description: "This includes:",
        subItems: [
          "Engaging more closely with existing and new policy stakeholders to understand technical product needs",
          "Driving new engagement with tech community",
          "Publishing more blog posts, articles, and newsletter blurbs about our technical processes and achievements",
          "Attending open-source conferences",
        ],
      },
      {
        title: "Create components and technical structures to increase pace of applet/dashboard creation",
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
        description: "Possible options include:",
        subItems: [
          "Improved data orchestration workflow",
          "AI interface building on Nikhil's work that can produce and launch applets for constrained visualization/charting requirements on a framework like Modal",
          "Explicit connection between app v2 and dashboards that allows users to seamlessly use saved households in dashboards and vice-versa",
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
        title: "App v2 and dashboard/applet user analytics, metrics, and tracing",
      },
    ],
  },
};
