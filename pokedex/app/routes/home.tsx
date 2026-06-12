import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "tipos de pokemon" },
    { name: "description", content: "Todos os tipos de pokemon" },
  ];
}

export default function Home() {
  return <Welcome />;
}

