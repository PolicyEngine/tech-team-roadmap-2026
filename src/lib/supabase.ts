/**
 * Supabase client for fetching CRM data
 *
 * Note: The anon key is intentionally public - Supabase anon keys are designed
 * to be embedded in client-side code. Security is enforced via Row Level Security
 * (RLS) policies on the database, not by hiding the key.
 */

const SUPABASE_URL = "https://hvqyfiiltljknfefuhvn.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2cXlmaWlsdGxqa25mZWZ1aHZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2MjQ4MjEsImV4cCI6MjA3NjIwMDgyMX0.tEhLgzJEFVvmsfT0N3pn6N4aSZIOlCDhzbZWS8NpSSk";

// Sprint types matching the CRM database schema
export type SprintStatus = "planning" | "active" | "completed" | "cancelled";

export interface SprintGoal {
  id: string;
  text: string;
  completed?: boolean;
}

export interface Sprint {
  id: string;
  name: string;
  description: string | null;
  start_date: string;
  end_date: string;
  status: SprintStatus;
  goals: SprintGoal[];
  project_id: string | null;
  created_at: string;
  updated_at: string;
  created_by_id: string | null;
  updated_by_id: string | null;
}

/**
 * Fetch all sprints from the CRM
 * Sprints table has public read access (RLS: FOR SELECT USING (true))
 */
export async function fetchSprints(): Promise<Sprint[]> {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/sprints?order=start_date.desc`,
    {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch sprints: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetch sprints filtered by status
 */
export async function fetchSprintsByStatus(
  status: SprintStatus
): Promise<Sprint[]> {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/sprints?status=eq.${status}&order=start_date.desc`,
    {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch sprints: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetch a single sprint by ID
 */
export async function fetchSprintById(id: string): Promise<Sprint | null> {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/sprints?id=eq.${id}`,
    {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch sprint: ${response.statusText}`);
  }

  const data = await response.json();
  return data.length > 0 ? data[0] : null;
}

/**
 * Get the currently active sprint (if any)
 */
export async function fetchActiveSprint(): Promise<Sprint | null> {
  const sprints = await fetchSprintsByStatus("active");
  return sprints.length > 0 ? sprints[0] : null;
}
