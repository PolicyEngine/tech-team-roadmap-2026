# PolicyEngine Tech Roadmap - Task Structure Draft

This document organizes tasks from the tech team roadmap discussion into a structured format for import into the CRM.

---

## CRM CLI/MCP Tools Available

### CLI Commands (`crm`)

| Command | Description |
|---------|-------------|
| `crm auth login` | Authenticate via browser (OAuth device flow) |
| `crm auth whoami` | Show currently logged-in user |
| `crm auth logout` | Clear stored credentials |
| `crm sync pull` | Download CRM data to local YAML/markdown |
| `crm sync push` | Upload local changes to CRM |
| `crm sync status` | Show what's changed locally vs cloud |

### MCP Server Tools

| Tool | Description |
|------|-------------|
| `list_contacts` | List all contacts with optional filters |
| `get_contact` | Get detailed information about a specific contact |
| `create_contact` | Create a new contact |
| `find_similar_contacts` | AI-powered similarity search |
| `list_tasks` | List tasks with optional filters |
| `create_task` | Create a new task |
| `list_projects` | List projects with optional filters |

### Recommended Workflow for Bulk Task Import

```bash
# 1. Pull current data
crm sync pull

# 2. Edit YAML files or use Claude Code to categorize
claude "Review tasks in crm-data/tasks/ and set priorities"

# 3. Review changes
crm sync status

# 4. Push back
crm sync push
```

---

## Project Structure Overview

### Special Projects (Ongoing)

| Project | Purpose | Status |
|---------|---------|--------|
| Bug Triage | All bugs, triaged by priority | active (always) |
| Ideas & Exploration | Uncertain/exploratory items, no commitment | active (always) |
| Minor Features & Polish | Small improvements, triaged by priority | active (always) |

### Existing Projects (in Teamverse)

> **Note:** Projects already assigned to Anthony Volk and/or Sakshi Kekre should be preserved. Fetch current projects via `crm sync pull` to merge with this structure.

- Split App into Separate Repositories
- Migrate App v2 onto API v2

### New Projects (Deliverables)

| Project | Scope | Tasks |
|---------|-------|-------|
| Determine Future of App v2 and Sunset App v1 | Strategic decision on app v2 direction + v1 feature parity | 10 |
| Migrate to Cosilico | Infrastructure migration | TBD |
| Create Cost Monitoring Platform | Observability and cost tracking | TBD |
| Sunset GCP Simulation API | Wind down legacy infrastructure | 3 |
| Congressional District Improvements | Map UX, lazy loading, terminology | 4 |

---

## Bug Triage Project

**Type:** deliverable
**Status:** active (always)
**Description:** Ongoing bug triage and maintenance backlog.

Priority mapping:
- **urgent** = P0 (fix immediately)
- **high** = P1 (fix this week)
- **medium** = P2 (fix when in area)
- **low** = P3 (opportunistic/maybe never)

### P0 - Urgent (fix immediately)

| Title | GitHub Issue | Notes |
|-------|--------------|-------|
| (none currently) | | |

### P1 - High (fix this week)

| Title | GitHub Issue | Notes |
|-------|--------------|-------|
| Unable to create standalone household following refactor | #463 | Blocks core workflow |
| Year '2025' not selectable in parameter value setter | #401 | |
| Report output - population not displayed for household-level reports | | |
| Report output - empty table header when single current-law simulation | | Shows "No policy changes" (correct) but empty header (incorrect) |
| "< Reports" navigation doesn't work | | |
| Policy tab sometimes shows "no policy changes" incorrectly | | |
| Stop serving blank Dashboard page | | Currently shows empty page |

### P2 - Medium (fix when in area)

| Title | GitHub Issue | Notes |
|-------|--------------|-------|
| Parameter change column not working correctly | #337 | |
| Winners & Losers wealth decile chart - flip lines horizontal | | |
| Chart menu scroll issue | | Need to scroll far back and forth when accessing low menu items |
| Report panel layout sits weirdly | | "< Reports" takes too much space |
| "Current law" displays as "Unknown policy" with ID | | |
| Current law values show "-" instead of actual values | | In ingredient pages |
| Last-run date incorrect | | |
| Map color scheme - un-impacted hexagons not visible | | |
| Metadata loading - awkward period where stuff doesn't load | | |
| Policy tab needs loading spinner | | Or better way of getting policy params |
| Population tab baseline/reform distinction unclear | | For economy-wide runs |
| Duplicate of current law possible in param setter | #364 | |
| Param setter menu scroll issue | #355 | Menu extends below screen |
| Multiple associations bug | | Ensure it's fixed |
| Geographies shouldn't be nameable | | Confusing behavior, leads to bugs |
| Country pathways incorrectly allow any country ID | | Should be restricted |
| Fix "Current law" display (shows "Unknown policy" with ID) | | In report output |
| Fix current law values in ingredient pages (shows "-") | | |
| Fix last-run date accuracy | | |
| Fix Winners & Losers chart orientation | | Flip lines horizontal |
| Fix chart menu scroll UX | | |
| Reformat panel layout and "< Reports" spacing | | |
| Add loading spinner to Policy tab | | |
| Improve map color scheme for visibility | | Un-impacted hexagons not visible |
| Improve metadata loading state | | |
| Fix parameter change column | #337 | Ingredient pages |

### P3 - Low (cosmetic/edge cases)

| Title | GitHub Issue | Notes |
|-------|--------------|-------|
| What is the "View All" next to last-run date? | | Clarify or remove |
| What is point of stack icon in tab headers? | | Clarify or remove |
| Titles should be sentence case | | Part of larger effort |
| Visually improve external link loading page | | |
| Clarify "View All" button purpose (or remove) | | |
| Clarify Population tab baseline/reform for economy-wide | | |
| Improve external link loading page | | |
| Remove or clarify stack icon in tab headers | | |

---

## Ideas & Exploration Project

**Type:** deliverable
**Status:** active (always)
**Description:** Raw ideas and explorations. NOT a commitment to build.

Lifecycle:
1. **Capture:** Add anything here, low friction
2. **Review:** Monthly, group related ideas
3. **Shape:** Promising ideas get a brief write-up
4. **Promote:** Shaped ideas become real projects (or die)

### Needs Discussion/Shaping

| Idea | Notes |
|------|-------|
| Draft reports feature | What does this mean exactly? |
| "Suggested reports" | Push users toward pre-created reports |
| User metrics strategy | Pathways, clicks, dropout, accessibility |
| Variable tracker flowchart integration | Integrate into app v2 |
| Improve geographic population selector | How? |
| Integrate Auth0 into website | User authentication |
| Admin user experience | What would admins do? |

### Maybe Someday

| Idea | Notes |
|------|-------|
| Integrate D3 geographic maps | Complex, unclear value |
| Claude visual skills for checking PRs | Experimental |
| AI description feature for reports | Test first |
| Reproduce in Python | Why? For whom? |
| Hex map for congressional districts | vs geographic map |

---

## Minor Features & Polish Project

**Type:** deliverable
**Status:** active (always)
**Description:** Small improvements. Not committed work — pulled opportunistically during sprints.

Priority mapping:
- **urgent** = do now
- **high** = do this sprint
- **medium** = do this quarter
- **low** = not important if done

### Sprint Planning Rules

1. **Bundle check:** Pull items in the same area as major work
2. **Budget allocation:** Pick 1-2 items per sprint if capacity allows
3. **Culling:** Items older than 6 months → promote, kill, or explicitly defer

### Urgent (do now)

| Title | GitHub Issue | Notes |
|-------|--------------|-------|
| Change default year to 2026 | | Congressional district maps |

### High (do this sprint)

| Title | GitHub Issue | Notes |
|-------|--------------|-------|
| (none currently) | | |

### Medium (do this quarter)

| Title | GitHub Issue | Notes |
|-------|--------------|-------|
| Switch to sentence case throughout repo | #312 | |
| Create consistent terminology for ingredient buttons | #326 | |
| Set up RUM monitoring | | |
| Outline improved dataset generation pipeline | | |
| Properly hook into calculations on site load | | |
| Integration testing setup | | |
| Determine blog migration approach | | New report format? Link to v2 reports? |
| Improve overview page | | Currently lacking |
| Add baseline/reform simulation pages for comparative household reports | | Including charts |
| Download chart images | | PNG, SVG, etc. |
| Download map images | | PNG, SVG, etc. |
| Implement pagination | | Ingredient pages |
| Allow clicking ingredient for more info | | Fixes Anvar's bug #2 |
| Add ingredient editing capability | | |
| Add ingredient deletion capability | | |
| Add recent ingredients dropdown in simulation setup | #330 | |
| Show count of modified params in footer | | Param setter |
| Add list of modified params display | | Param setter |
| Show full param names on confirmation (not codes) | | If possible |
| Add param search | | |
| Add param reset | | |
| Handle infinity values | | Requires API fixes |
| Add Enter key to set param value | | |
| Default param start dates to 2026 | | Or inherit from tax year |
| Think through Overview/Comparative/Congressional unification | | What we have now is good |
| Cookie-based association for non-signed-in users | | Max's preference |
| Prompt to port saved values when creating account | | |

### Low (not important if done)

| Title | GitHub Issue | Notes |
|-------|--------------|-------|
| Add validation for ingredient naming | | At minimum, require name |
| Add footer to site | | |
| Add API T&C to site | | |
| Static pages | | |
| Metadata lazy loading for non-calculator pages | | |
| Refine country autoloading | | |
| Implement batched/lazy loading for blog images | | |
| Apply sentence case to titles | | Report output |
| Improve maps - D3 geographic option | | Better hexagon rendering |
| "Add this policy to my library" button | | Depends on auth |
| Test AI description feature | | |
| Add ingredient tagging | | Optional? |
| Consider offensive term filtering | | |
| Rename "Next" to "Finalize policy" or similar | | Param setter |
| Evaluate Boolean param setter UX | | How user-friendly? |

---

## Determine Future of App v2 and Sunset App v1

**Type:** deliverable
**Status:** planning
**Description:** Strategic decision on the direction and future of app v2, including determining which app v1 features need to be brought over before sunsetting v1. This is a critical planning exercise that will inform other projects.

### Tasks

| Title | Priority | Notes |
|-------|----------|-------|
| Document current state of app v2 | high | What works, what doesn't |
| Identify key stakeholders and their needs | high | |
| Define success criteria for app v2 | high | |
| Make go/no-go decision on app v2 | high | Outcome of this project |
| Build out remainder of home page | medium | App v1 parity |
| Household cliff impacts | medium | App v1 parity |
| Society-wide cliff impacts | medium | App v1 parity |
| Multi-year simulation running | medium | App v1 parity |
| Restrict country pathways to correct interactives | low | Currently any country ID works |
| Modify report schema for datasets, etc. | low | App v1 parity |

---

## Split App into Separate Repositories

**Type:** deliverable
**Status:** planning (existing in Teamverse)
**Description:** Separate the monolithic app into distinct repositories for better maintainability.

> Tasks managed in Teamverse — do not duplicate here.

---

## Migrate App v2 onto API v2

**Type:** deliverable
**Status:** planning (existing in Teamverse)
**Description:** Transition app v2 to use the new API v2 backend.

> Tasks managed in Teamverse — do not duplicate here.

---

## Migrate to Cosilico

**Type:** deliverable
**Status:** planning
**Description:** Infrastructure migration to Cosilico platform.

### Tasks

| Title | Priority | Notes |
|-------|----------|-------|
| TBD | | Scope to be defined |

---

## Create Cost Monitoring Platform

**Type:** deliverable
**Status:** planning
**Description:** Set up comprehensive cost monitoring and observability.

### Tasks

| Title | Priority | Notes |
|-------|----------|-------|
| TBD | | Scope to be defined |

---

## Sunset GCP Simulation API

**Type:** deliverable
**Status:** planning
**Description:** Wind down legacy GCP simulation infrastructure.

### Tasks

| Title | Priority | Notes |
|-------|----------|-------|
| Wind down GCP simulation API | high | |
| Remove legacy code from simulation API | medium | |
| Remove legacy code from API v1 | medium | |

---

## Congressional District Improvements

**Type:** deliverable
**Status:** planning
**Description:** Improvements to the congressional district visualization and handling.

### Tasks

| Title | Priority | Notes |
|-------|----------|-------|
| Make map loading lazy | high | Performance + cost savings |
| Add outline to map | medium | |
| Change terminology from "average" to "absolute" | medium | Or clarify meaning |
| Unify Overview and Comparative analysis views | medium | |

---

## Completed Items (for reference)

The following items were marked as completed in the original list:

- ~~Migrate to having `app.` subdomain for calculator~~
- ~~Replace the Mantine favicon~~
- ~~Make the re-run report button work, or remove it~~
- ~~Report setup - Allow user to choose setup options, like dataset~~
- ~~Add economy parameters other than "region" to the `params` structure from `useEconomyCalculation`~~

---

## Summary

### Ongoing Projects

| Project | Purpose |
|---------|---------|
| Bug Triage | Bugs by priority (P0: 0, P1: 7, P2: 26, P3: 8) |
| Ideas & Exploration | Needs shaping: 7, Maybe someday: 5 |
| Minor Features & Polish | Urgent: 1, High: 0, Medium: 26, Low: 15 |

### Deliverable Projects

| Project | Tasks | Status |
|---------|-------|--------|
| Determine Future of App v2 and Sunset App v1 | 10 | planning |
| Split App into Separate Repositories | (Teamverse) | planning |
| Migrate App v2 onto API v2 | (Teamverse) | planning |
| Migrate to Cosilico | TBD | planning |
| Create Cost Monitoring Platform | TBD | planning |
| Sunset GCP Simulation API | 3 | planning |
| Congressional District Improvements | 4 | planning |

### Total Task Count

| Category | Count |
|----------|-------|
| Bug Triage | 41 |
| Ideas & Exploration | 12 |
| Minor Features & Polish | 42 |
| Deliverable Projects | ~17 + Teamverse + TBD |
| **Total** | **~112 + Teamverse + TBD** |

---

## Projects Dissolved or Merged

The following were originally projects but have been dissolved or merged:

| Original Project | Reason |
|------------------|--------|
| Report Output Polish | Bug fixes → Bug Triage; improvements → Minor Features |
| Report Output Features | All items → Minor Features & Polish |
| Ingredient Pages v2 | Bug fixes → Bug Triage; features → Minor Features |
| Param Setter UX | Bug fixes → Bug Triage; features → Minor Features |
| User Authentication | Most items deleted or moved to Ideas/Minor Features |
| Front-end Standards | All items → Minor Features & Polish |
| Blog Migration | All items → Minor Features & Polish |
| Infrastructure Modernization | Split into focused projects + Minor Features |
| App v1 Feature Parity | Merged into "Determine Future of App v2 and Sunset App v1" |

---

## Next Steps

1. **Fetch existing projects:** Run `crm sync pull` to get current projects for Anthony Volk and Sakshi Kekre
2. **Merge structures:** Integrate existing project tasks with this structure
3. **Define scope:** Fill in TBD tasks for Migrate to Cosilico and Cost Monitoring Platform
4. **Assign owners:** Determine who owns each project
5. **Prioritize projects:** Decide which projects to activate first
6. **Import to CRM:** Convert this markdown to YAML and push via CLI
