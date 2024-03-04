import { css } from "../../styled-system/css";

const styles = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
  p: "6rem",
  minH: "100vh",
});

export default function Home() {
  return (
    <main className={styles}>
      <h1>Hello world</h1>
    </main>
  );
}
