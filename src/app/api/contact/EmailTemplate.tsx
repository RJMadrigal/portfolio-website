import * as React from "react";

type EmailTemplateProps = {
  name: string;
  email: string;
  message: string;
  sentAt?: string; // optional ISO string
};

export function EmailTemplate({ name, email, message, sentAt }: EmailTemplateProps) {
  const previewText = `New portfolio message from ${name}`;

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{previewText}</title>
      </head>

      <body style={styles.body}>
        {/* Preview text (hidden) */}
        <div style={styles.preview}>{previewText}</div>

        <table role="presentation" cellPadding={0} cellSpacing={0} width="100%" style={styles.wrapper}>
          <tbody>
            <tr>
              <td align="center" style={{ padding: "24px 12px" }}>
                <table role="presentation" cellPadding={0} cellSpacing={0} width="100%" style={styles.container}>
                  <tbody>
                    {/* Header */}
                    <tr>
                      <td style={styles.header}>
                        <div style={styles.brandRow}>
                          <div>
                            <div style={styles.brandTitle}>Josué Madrigal</div>
                            <div style={styles.brandSubtitle}>Full-Stack Engineer • Portfolio Contact</div>
                          </div>
                          <div style={styles.badge}>New Message</div>
                        </div>
                      </td>
                    </tr>

                    {/* Content */}
                    <tr>
                      <td style={styles.content}>
                        <h1 style={styles.h1}>You’ve got a new message</h1>

                        <p style={styles.p}>
                          Someone reached out through your portfolio contact form. Here are the details:
                        </p>

                        <table role="presentation" cellPadding={0} cellSpacing={0} width="100%" style={styles.card}>
                          <tbody>
                            <tr>
                              <td style={styles.cardInner}>
                                <div style={styles.metaRow}>
                                  <div style={styles.metaLabel}>Name</div>
                                  <div style={styles.metaValue}>{name}</div>
                                </div>

                                <div style={styles.metaRow}>
                                  <div style={styles.metaLabel}>Email</div>
                                  <div style={styles.metaValue}>
                                    <a href={`mailto:${email}`} style={styles.link}>
                                      {email}
                                    </a>
                                  </div>
                                </div>

                                <div style={styles.metaRow}>
                                  <div style={styles.metaLabel}>Sent</div>
                                  <div style={styles.metaValue}>
                                    {sentAt ? new Date(sentAt).toLocaleString() : "Just now"}
                                  </div>
                                </div>

                                <div style={{ height: 12 }} />

                                <div style={styles.metaLabel}>Message</div>
                                <div style={styles.messageBox}>
                                  <p style={{ ...styles.p, margin: 0, whiteSpace: "pre-wrap" }}>{message}</p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        {/* CTA */}
                        <table role="presentation" cellPadding={0} cellSpacing={0} style={{ marginTop: 16 }}>
                          <tbody>
                            <tr>
                              <td>
                                <a href={`mailto:${email}`} style={styles.button}>
                                  Reply to {name}
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <p style={{ ...styles.p, marginTop: 18, color: "#6B7280" }}>
                          Tip: replying will automatically go to the sender’s email.
                        </p>
                      </td>
                    </tr>

                    {/* Footer */}
                    <tr>
                      <td style={styles.footer}>
                        <div style={styles.footerRow}>
                          <span style={styles.footerText}>Josué Madrigal</span>
                          <span style={styles.footerDot}>•</span>
                          <a href="https://www.linkedin.com/in/rjosuemadrigal/" style={styles.footerLink}>
                            LinkedIn
                          </a>
                        </div>
                        <div style={styles.footerSmall}>
                          Sent from your portfolio contact form. If this wasn’t expected, you can ignore it.
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}

const styles: Record<string, React.CSSProperties> = {
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: "#0B1220",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    color: "#111827",
  },
  preview: {
    display: "none",
    overflow: "hidden",
    lineHeight: "1px",
    opacity: 0,
    maxHeight: 0,
    maxWidth: 0,
  },
  wrapper: {
    width: "100%",
    backgroundColor: "#0B1220",
  },
  container: {
    maxWidth: "640px",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  },
  header: {
    padding: "20px 22px",
    background:
      "linear-gradient(135deg, rgba(99,102,241,0.22), rgba(236,72,153,0.18))",
    borderBottom: "1px solid rgba(17, 24, 39, 0.08)",
  },
  brandRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  brandTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#0F172A",
    letterSpacing: 0.2,
  },
  brandSubtitle: {
    fontSize: 12,
    color: "#475569",
    marginTop: 2,
  },
  badge: {
    fontSize: 12,
    fontWeight: 700,
    color: "#0F172A",
    backgroundColor: "rgba(255,255,255,0.85)",
    border: "1px solid rgba(15, 23, 42, 0.08)",
    padding: "6px 10px",
    borderRadius: 999,
    whiteSpace: "nowrap",
  },
  content: {
    padding: "22px",
  },
  h1: {
    margin: "0 0 10px",
    fontSize: 20,
    lineHeight: "28px",
    color: "#0F172A",
  },
  p: {
    margin: "0 0 14px",
    fontSize: 14,
    lineHeight: "22px",
    color: "#334155",
  },
  card: {
    width: "100%",
    backgroundColor: "#F8FAFC",
    border: "1px solid rgba(15, 23, 42, 0.08)",
    borderRadius: 14,
  },
  cardInner: {
    padding: "16px",
  },
  metaRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    padding: "6px 0",
    borderBottom: "1px dashed rgba(15, 23, 42, 0.12)",
  },
  metaLabel: {
    fontSize: 12,
    color: "#64748B",
    fontWeight: 700,
    letterSpacing: 0.2,
    minWidth: 80,
  },
  metaValue: {
    fontSize: 13,
    color: "#0F172A",
    fontWeight: 600,
    textAlign: "right",
    wordBreak: "break-word",
  },
  messageBox: {
    marginTop: 8,
    backgroundColor: "#FFFFFF",
    border: "1px solid rgba(15, 23, 42, 0.08)",
    borderRadius: 12,
    padding: "12px",
  },
  link: {
    color: "#4F46E5",
    textDecoration: "none",
  },
  button: {
    display: "inline-block",
    backgroundColor: "#111827",
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: 700,
    textDecoration: "none",
    padding: "10px 14px",
    borderRadius: 12,
  },
  footer: {
    padding: "16px 22px 20px",
    borderTop: "1px solid rgba(15, 23, 42, 0.08)",
    backgroundColor: "#FFFFFF",
  },
  footerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    flexWrap: "wrap",
  },
  footerText: {
    fontSize: 12,
    color: "#64748B",
    fontWeight: 700,
  },
  footerDot: {
    fontSize: 12,
    color: "#94A3B8",
  },
  footerLink: {
    fontSize: 12,
    color: "#4F46E5",
    textDecoration: "none",
    fontWeight: 700,
  },
  footerSmall: {
    marginTop: 8,
    fontSize: 11,
    lineHeight: "16px",
    color: "#94A3B8",
    textAlign: "center",
  },
};
