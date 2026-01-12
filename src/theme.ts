/**
 * Mantine Theme Configuration
 * Uses PolicyEngine color palette
 */

import { createTheme } from "@mantine/core";
import type { MantineColorsTuple } from "@mantine/core";
import { colors } from "./data/colors";

// Convert PolicyEngine teal palette to Mantine format
const teal: MantineColorsTuple = [
  colors.teal[50],
  colors.teal[100],
  colors.teal[200],
  colors.teal[300],
  colors.teal[400],
  colors.teal[500],
  colors.teal[600],
  colors.teal[700],
  colors.teal[800],
  colors.teal[900],
];

// Convert PolicyEngine gray palette to Mantine format
const gray: MantineColorsTuple = [
  colors.gray[50],
  colors.gray[100],
  colors.gray[200],
  colors.gray[300],
  colors.gray[400],
  colors.gray[500],
  colors.gray[600],
  colors.gray[700],
  colors.gray[800],
  colors.gray[900],
];

export const theme = createTheme({
  primaryColor: "teal",
  colors: {
    teal,
    gray,
  },
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  headings: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontWeight: "600",
  },
  defaultRadius: "md",
});
