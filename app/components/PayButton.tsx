"use client";

export default function PayButton() {
  async function handlePay() {
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();
    window.location.href = data.url;
  }

  return (
    <button onClick={handlePay} style={styles.button}>
      Pay $10
    </button>
  );
}

const styles = {
  button: {
    width: "100%",
    padding: "14px 24px",
    fontSize: "16px",
    fontWeight: 600,
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "#635bff", // Stripe color
    color: "#fff",
  },
};
