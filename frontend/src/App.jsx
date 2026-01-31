export default function App() {
  return (
    <div style={{ padding: "24px", fontFamily: "sans-serif" }}>
      <h1>Release Tracker</h1>
      <p>Frontend dashboard skeleton</p>

      <table border="1" cellPadding="8" style={{ marginTop: "16px" }}>
        <thead>
          <tr>
            <th>Service</th>
            <th>Version</th>
            <th>Environment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>backend</td>
            <td>1.0.0</td>
            <td>dev</td>
            <td>success</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
