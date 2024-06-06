import { JSX } from "preact/jsx-runtime";

import { PageProps } from "$fresh/server.ts";

import Header from "../../islands/Header.tsx";

import SimpleMathWrapper from "../../islands/llm-islands/SimpleMath/SimpleMathWrapper.tsx";
import DraggableWrapper from "../../islands/llm-islands/Draggable/DraggableWrapper.tsx";
import GPT4oWrapper from "../../islands/llm-islands/GPT4o/GPT4oWrapper.tsx";

interface ComponentMapping {
  [key: string]: () => JSX.Element;
}

const componentMapping: ComponentMapping = {
  "simple-math": SimpleMathWrapper,
  "draggable": DraggableWrapper,
  "gpt4o": GPT4oWrapper,
};

export default function SlugTemplate(props: PageProps) {
  const ComponentToRender = componentMapping[props.params.slug];
  return (
    <>
      <Header active={props.params.slug} />
      {ComponentToRender
        ? <ComponentToRender />
        : <p>No component found for this slug.</p>}
    </>
  );
}
