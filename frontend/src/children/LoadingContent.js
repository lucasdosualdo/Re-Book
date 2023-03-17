import ClipLoader from "react-spinners/ClipLoader";

export default function LoadingContent({ error, loading, children }) {
  if (error) {
    return <h1>{error}</h1>;
  }
  if (loading) {
    return (
      <ClipLoader
        color={"var(--pink-color)"}
        loading={loading}
        speedMultiplier={0.7}
        size={100}
      />
    );
  }

  return <>{children}</>;
}
