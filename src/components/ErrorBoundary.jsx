import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.container}>
          <div style={styles.content}>
            <h1 style={styles.title}>
              <span style={styles.emoji}>⚠️</span>
              Oops! Something went wrong
            </h1>
            
            <p style={styles.message}>
              Don't worry, even the best code has bad days! 🌈
            </p>
            
            <button style={styles.button} onClick={this.handleReset}>
              🏠 Back to Home
            </button>
            
            {process.env.NODE_ENV === "development" && this.state.error && (
              <details style={styles.details}>
                <summary style={styles.summary}>Error Details</summary>
                <pre style={styles.pre}>{this.state.error.toString()}</pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg, #FAFBFC 0%, #F5F6F7 100%)",
    padding: "20px",
  },
  content: {
    textAlign: "center",
    maxWidth: "600px",
    padding: "40px",
    background: "rgba(250, 251, 252, 0.85)",
    backdropFilter: "blur(20px)",
    borderRadius: "24px",
    boxShadow: "0 8px 32px rgba(0, 102, 255, 0.15)",
    border: "1px solid rgba(0, 102, 255, 0.1)",
  },
  title: {
    fontSize: "clamp(1.5rem, 4vw, 2rem)",
    color: "#0A0B0D",
    marginBottom: "16px",
    fontWeight: "700",
  },
  emoji: {
    display: "block",
    fontSize: "4rem",
    marginBottom: "16px",
  },
  message: {
    fontSize: "1.1rem",
    color: "#71757D",
    marginBottom: "32px",
    lineHeight: "1.6",
  },
  button: {
    padding: "12px 28px",
    borderRadius: "30px",
    background: "linear-gradient(135deg, #0066FF, #4A00E0)",
    color: "white",
    fontWeight: "600",
    fontSize: "1rem",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 16px rgba(0, 102, 255, 0.3)",
    transition: "all 0.3s ease",
  },
  details: {
    marginTop: "24px",
    textAlign: "left",
    background: "rgba(0, 0, 0, 0.05)",
    padding: "16px",
    borderRadius: "8px",
  },
  summary: {
    cursor: "pointer",
    fontWeight: "600",
    color: "#0066FF",
    marginBottom: "8px",
  },
  pre: {
    fontSize: "0.85rem",
    color: "#0A0B0D",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
  },
};

export default ErrorBoundary;
