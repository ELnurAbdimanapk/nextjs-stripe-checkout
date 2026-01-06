export default function Success() {
  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <div style={styles.iconSuccess}>✓</div>
        <h1 style={styles.title}>Payment successful</h1>
        <p style={styles.text}>
          Your payment was completed successfully.
        </p>
        <a href="/" style={styles.link}>Back to home</a>
      </div>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f9fafb",
  },
  card: {
    background: "#fff",
    padding: "48px",
    borderRadius: "16px",
    maxWidth: "420px",
    width: "100%",
    textAlign: "center" as const,
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },
  iconSuccess: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    background: "#22c55e",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    margin: "0 auto 20px",
  },
  title: { fontSize: "26px", marginBottom: "12px" },
  text: { color: "#555", marginBottom: "24px" },
  link: { color: "#635bff", textDecoration: "none", fontWeight: 500 },
};
