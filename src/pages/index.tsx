import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>welcome to our project</h1>
      <div>
        <button>
          <Link href="./auth/signin">signin</Link>
        </button>
        <button>
          <Link href="./auth/signup">signup</Link>
        </button>
      </div>
    </div>
  );
}
