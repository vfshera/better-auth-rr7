import { Link } from "react-router";
import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="grid text-center h-screen items-center p-8">
      <div className="space-y-10">
        <h1 className="text-4xl">React Router 7 + Better Auth</h1>
        <div className="flex justify-center gap-4 max-w-[600px] mx-auto">
          <Link
            to="/signin"
            className="px-4 py-2.5 rounded bg-primary text-primary-foreground "
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2.5 rounded bg-secondary text-secondary-foreground border border-black "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
