/**
 * PolicyEngine Color Palette
 * Source: https://github.com/PolicyEngine/policyengine-app-v2
 * Extracted from: packages/design-system/src/tokens/colors.ts
 */

export const colors = {
  // Primary Brand Colors (Teal)
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795", // Main brand color
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044",
  },

  // Secondary Colors (Gray Scale)
  gray: {
    50: "#F9FAFB",
    100: "#F2F4F7",
    200: "#E2E8F0",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#344054",
    800: "#1F2937",
    900: "#101828",
  },

  // Blue Accent Colors
  blue: {
    50: "#F0F9FF",
    100: "#E0F2FE",
    200: "#BAE6FD",
    300: "#7DD3FC",
    400: "#38BDF8",
    500: "#0EA5E9",
    600: "#0284C7",
    700: "#026AA2",
    800: "#075985",
    900: "#0C4A6E",
  },

  // Semantic Colors
  semantic: {
    success: "#22C55E",
    warning: "#FEC601",
    error: "#EF4444",
    info: "#1890FF",
  },

  // Neutral Colors
  neutral: {
    white: "#FFFFFF",
    black: "#000000",
  },

  // Background Colors
  background: {
    primary: "#FFFFFF",
    secondary: "#F5F9FF",
    tertiary: "#F1F5F9",
  },

  // Text Colors
  text: {
    primary: "#000000",
    secondary: "#5A5A5A",
    tertiary: "#9CA3AF",
    inverse: "#FFFFFF",
  },

  // Border Colors
  border: {
    light: "#E2E8F0",
    medium: "#CBD5E1",
    dark: "#94A3B8",
  },

  // Legacy Exports (for compatibility)
  TEAL_PRIMARY: "#319795",
  TEAL_ACCENT: "#39C6C0",
} as const;

// Chart-specific color schemes
export const chartColors = {
  // For salary comparison charts
  salary: {
    current: colors.semantic.error, // Your current rate (red - below market)
    target: colors.semantic.success, // Your target rate (green - reasonable ask)
    market: colors.gray[500], // Market average (neutral gray)
    percentile25: colors.blue[300],
    percentile75: colors.blue[600],
  },

  // For contribution charts
  contributions: {
    commits: colors.teal[500],
    pullRequests: colors.teal[600],
    reviews: colors.teal[400],
    issues: colors.teal[300],
  },

  // For repository breakdown
  repositories: [
    colors.teal[500],
    colors.teal[400],
    colors.teal[600],
    colors.blue[500],
    colors.blue[400],
    colors.teal[300],
    colors.blue[600],
    colors.teal[700],
    colors.blue[300],
  ],
} as const;

export type Colors = typeof colors;
export type ChartColors = typeof chartColors;
