import { JSX } from "preact/jsx-runtime";

import { PageProps, Handlers } from "$fresh/server.ts";

import Header from "../../islands/Header.tsx";

import SimpleMathWrapper from "../../islands/llm-islands/SimpleMath/SimpleMathWrapper.tsx";
import DraggableWrapper from "../../islands/llm-islands/Draggable/DraggableWrapper.tsx";
import GPT4oWrapper from "../../islands/llm-islands/GPT4o/GPT4oWrapper.tsx";

import { handler as getEnvVarsForIsland } from "../api/getEnvVarsForIsland.ts";

export const handler: Handlers = {
  async GET(_req, _ctx) {
    const response = getEnvVarsForIsland(_req, _ctx);
    const content = await response.text();
    return _ctx.render(content);
  },
};

interface ComponentMapping {
  // deno-lint-ignore no-explicit-any
  [key: string]: (envValues?: any) => JSX.Element;
}

const componentMapping: ComponentMapping = {
  "simple-math": SimpleMathWrapper,
  "draggable": DraggableWrapper,
  "gpt4o": GPT4oWrapper,
};

export default function SlugTemplate(props: PageProps) {
  const env_vars = JSON.parse(props.data);
  const ComponentToRender = componentMapping[props.params.slug];
  return (
    <>
      <Header active={props.params.slug} />
      {ComponentToRender
        ? props.params.slug == 'gpt4o' ? <ComponentToRender envValues={env_vars} /> : <ComponentToRender />
        : <p>No component found for this slug.</p>}
    </>
  );
}
