import type { Deliverable, DeliverableStatus } from "../../data/roadmapData";

// Status styling configuration
const statusStyles: Record<
  DeliverableStatus,
  {
    background: string;
    textColor: string;
    titleColor: string;
    borderColor: string;
    bulletColor: string;
    fontStyle?: "italic" | "normal";
    textDecoration?: string;
    badgeBackground: string;
    badgeText: string;
  }
> = {
  backlog: {
    background: "white",
    textColor: "var(--pe-gray-500)",
    titleColor: "var(--pe-gray-800)",
    borderColor: "var(--pe-gray-100)",
    bulletColor: "var(--pe-gray-400)",
    badgeBackground: "var(--pe-gray-100)",
    badgeText: "var(--pe-gray-600)",
  },
  planning: {
    background: "white",
    textColor: "var(--pe-gray-500)",
    titleColor: "var(--pe-gray-800)",
    borderColor: "var(--pe-gray-100)",
    bulletColor: "var(--pe-gray-400)",
    badgeBackground: "var(--pe-gray-200)",
    badgeText: "var(--pe-gray-700)",
  },
  active: {
    background: "linear-gradient(135deg, #E6FFFA 0%, #B2F5EA 100%)",
    textColor: "var(--pe-teal-700)",
    titleColor: "var(--pe-teal-800)",
    borderColor: "var(--pe-teal-200)",
    bulletColor: "var(--pe-teal-500)",
    badgeBackground: "var(--pe-teal-600)",
    badgeText: "white",
  },
  completed: {
    background: "var(--pe-gray-100)",
    textColor: "var(--pe-gray-500)",
    titleColor: "var(--pe-gray-600)",
    borderColor: "var(--pe-gray-200)",
    bulletColor: "var(--pe-gray-400)",
    badgeBackground: "var(--pe-gray-300)",
    badgeText: "var(--pe-gray-600)",
  },
  cancelled: {
    background: "var(--pe-gray-100)",
    textColor: "var(--pe-gray-400)",
    titleColor: "var(--pe-gray-500)",
    borderColor: "var(--pe-gray-200)",
    bulletColor: "var(--pe-gray-300)",
    fontStyle: "italic",
    textDecoration: "line-through",
    badgeBackground: "var(--pe-gray-300)",
    badgeText: "var(--pe-gray-500)",
  },
};

const statusLabels: Record<DeliverableStatus, string> = {
  backlog: "Backlog",
  planning: "Planning",
  active: "Active",
  completed: "Completed",
  cancelled: "Cancelled",
};

interface DeliverableCardProps {
  item: Deliverable;
}

export function DeliverableCard({ item }: DeliverableCardProps) {
  const style = statusStyles[item.status];

  return (
    <div
      style={{
        background: style.background,
        borderRadius: "12px",
        padding: "1.25rem",
        border: `1px solid ${style.borderColor}`,
        boxShadow:
          item.status === "active"
            ? "0 4px 16px rgba(49, 151, 149, 0.15)"
            : "0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.03)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "1rem",
        }}
      >
        <span
          style={{
            minWidth: "8px",
            height: "8px",
            marginTop: "0.5rem",
            borderRadius: "50%",
            background: style.bulletColor,
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Header row with title and status badge */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "0.75rem",
              marginBottom: "0.25rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "1.0625rem",
                color: style.titleColor,
                margin: 0,
                lineHeight: 1.4,
                fontStyle: style.fontStyle || "normal",
                textDecoration: style.textDecoration || "none",
              }}
            >
              {item.title}
            </p>
            <span
              style={{
                flexShrink: 0,
                padding: "0.1875rem 0.5rem",
                borderRadius: "4px",
                background: style.badgeBackground,
                color: style.badgeText,
                fontFamily: "var(--font-body)",
                fontSize: "0.6875rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}
            >
              {statusLabels[item.status]}
            </span>
          </div>

          {/* Metadata row: deadline */}
          {item.deadline && (
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                color: style.textColor,
                margin: "0.25rem 0 0 0",
                lineHeight: 1.4,
                fontStyle: style.fontStyle || "normal",
              }}
            >
              <span style={{ fontWeight: 500 }}>Deadline:</span> {item.deadline}
            </p>
          )}

          {/* Description */}
          {item.description && (
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: style.textColor,
                margin: "0.375rem 0 0 0",
                lineHeight: 1.5,
                fontStyle: style.fontStyle || "normal",
              }}
            >
              {item.description}
            </p>
          )}

          {/* Sub-items */}
          {item.subItems && item.subItems.length > 0 && (
            <ul
              style={{
                margin: "0.5rem 0 0 0",
                paddingLeft: "1.25rem",
                listStyle: "disc",
              }}
            >
              {item.subItems.map((subItem, idx) => (
                <li
                  key={idx}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    color: style.textColor,
                    lineHeight: 1.5,
                    marginBottom: "0.25rem",
                    fontStyle: style.fontStyle || "normal",
                  }}
                >
                  {subItem}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
