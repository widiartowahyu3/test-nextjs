// pages/index.js (or any other page)
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Your App</h1>
      <Link href="/login">
        <a>Login</a>
      </Link>
    </div>
  );
};

export default HomePage;
