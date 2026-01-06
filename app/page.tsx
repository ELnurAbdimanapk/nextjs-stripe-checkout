import PayButton from "./components/PayButton";

export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <h1 style={styles.title}>Stripe Checkout Demo</h1>
        <p style={styles.text}>
          Simple and clean payment integration using Next.js and Stripe Checkout.
        </p>
        <PayButton />
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
    background: "#ffffff",
    padding: "48px",
    borderRadius: "16px",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    textAlign: "center" as const,
  },
  title: {
    fontSize: "28px",
    marginBottom: "12px",
  },
  text: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "32px",
  },
};
