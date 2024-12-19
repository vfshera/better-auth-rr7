import type { Route } from "./+types/index";
export async function loader({}: Route.LoaderArgs) {
  return {};
}

export default function Dashboard(props: Route.ComponentProps) {
  return <div>page</div>;
}
