import { useEffect, useState } from "react";

export default function App() {
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/releases")
      .then((res) => res.json())
      .then((data) => {
        setReleases(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
        fontFamily: "Arial, sans-serif",
        padding: "40px"
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "24px 32px",
          borderRadius: "8px",
          marginBottom: "32px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
        }}
      >
        <h1 style={{ margin: 0 }}>Release Tracker Dashboard</h1>
        <p style={{ marginTop: "8px", color: "#6b7280" }}>
          Built by <strong>Mohammed Ahmed Mourad</strong>
        </p>
      </div>

      {/* Content */}
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "24px",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
        }}
      >
        <h2>Latest Releases</h2>

        {loading ? (
          <p>Loading releases...</p>
        ) : (
          <table width="100%" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#f9fafb" }}>
                <th style={thStyle}>Service</th>
                <th style={thStyle}>Version</th>
                <th style={thStyle}>Environment</th>
                <th style={thStyle}>Status</th>
              </tr>
            </thead>
            <tbody>
              {releases.map((r, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{r.service}</td>
                  <td style={tdStyle}>{r.version}</td>
                  <td style={tdStyle}>{r.environment}</td>
                  <td
                    style={{
                      ...tdStyle,
                      color: r.status === "success" ? "green" : "red",
                      fontWeight: "bold"
                    }}
                  >
                    {r.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

const thStyle = {
  padding: "12px",
  borderBottom: "1px solid #e5e7eb",
  textAlign: "left"
};

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #e5e7eb"
};
