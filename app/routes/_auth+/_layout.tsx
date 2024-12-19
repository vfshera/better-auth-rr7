import React from "react";
import { Outlet, redirect } from "react-router";
import type { Route } from "./+types/_layout";
import { auth } from "~/.server/auth";
export async function loader({ request }: Route.LoaderArgs) {
  const session = await auth.api.getSession({ headers: request.headers });
  console.log({ session });

  if (session) {
    return redirect("/dashboard");
  }

  return { message: "Hello from Loader!" };
}
export default function AuthLayout() {
  return (
    <div className="grid text-center h-screen items-center p-8">
      <Outlet />
    </div>
  );
}
