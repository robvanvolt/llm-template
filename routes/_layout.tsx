import { PageProps } from "$fresh/server.ts";
import Header from "../islands/Header.tsx";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <div class="flex flex-col h-full">
      <Component />
    </div>
  );
}
