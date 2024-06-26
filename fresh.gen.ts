// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $api_getContent from "./routes/api/getContent.ts";
import * as $api_getEnvVarsForIsland from "./routes/api/getEnvVarsForIsland.ts";
import * as $components_slug_ from "./routes/components/[slug].tsx";
import * as $index from "./routes/index.tsx";
import * as $playground_python from "./routes/playground-python.tsx";
import * as $playground from "./routes/playground.tsx";
import * as $python from "./routes/python.tsx";
import * as $Header from "./islands/Header.tsx";
import * as $PlaygroundIsland from "./islands/PlaygroundIsland.tsx";
import * as $PlaygroundIslandPython from "./islands/PlaygroundIslandPython.tsx";
import * as $llm_islands_BaseConfig from "./islands/llm-islands/BaseConfig.ts";
import * as $llm_islands_BaseTemplate from "./islands/llm-islands/BaseTemplate.tsx";
import * as $llm_islands_BaseWrapper from "./islands/llm-islands/BaseWrapper.tsx";
import * as $llm_islands_Draggable_DraggableTemplate from "./islands/llm-islands/Draggable/DraggableTemplate.tsx";
import * as $llm_islands_Draggable_DraggableWrapper from "./islands/llm-islands/Draggable/DraggableWrapper.tsx";
import * as $llm_islands_Draggable_config from "./islands/llm-islands/Draggable/config.ts";
import * as $llm_islands_GPT4o_GPT4oWrapper from "./islands/llm-islands/GPT4o/GPT4oWrapper.tsx";
import * as $llm_islands_GPT4o_config from "./islands/llm-islands/GPT4o/config.ts";
import * as $llm_islands_SimpleMath_SimpleMathTemplate from "./islands/llm-islands/SimpleMath/SimpleMathTemplate.tsx";
import * as $llm_islands_SimpleMath_SimpleMathWrapper from "./islands/llm-islands/SimpleMath/SimpleMathWrapper.tsx";
import * as $llm_islands_SimpleMath_config from "./islands/llm-islands/SimpleMath/config.ts";
import * as $menus from "./islands/menus.ts";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/api/getContent.ts": $api_getContent,
    "./routes/api/getEnvVarsForIsland.ts": $api_getEnvVarsForIsland,
    "./routes/components/[slug].tsx": $components_slug_,
    "./routes/index.tsx": $index,
    "./routes/playground-python.tsx": $playground_python,
    "./routes/playground.tsx": $playground,
    "./routes/python.tsx": $python,
  },
  islands: {
    "./islands/Header.tsx": $Header,
    "./islands/PlaygroundIsland.tsx": $PlaygroundIsland,
    "./islands/PlaygroundIslandPython.tsx": $PlaygroundIslandPython,
    "./islands/llm-islands/BaseConfig.ts": $llm_islands_BaseConfig,
    "./islands/llm-islands/BaseTemplate.tsx": $llm_islands_BaseTemplate,
    "./islands/llm-islands/BaseWrapper.tsx": $llm_islands_BaseWrapper,
    "./islands/llm-islands/Draggable/DraggableTemplate.tsx":
      $llm_islands_Draggable_DraggableTemplate,
    "./islands/llm-islands/Draggable/DraggableWrapper.tsx":
      $llm_islands_Draggable_DraggableWrapper,
    "./islands/llm-islands/Draggable/config.ts": $llm_islands_Draggable_config,
    "./islands/llm-islands/GPT4o/GPT4oWrapper.tsx":
      $llm_islands_GPT4o_GPT4oWrapper,
    "./islands/llm-islands/GPT4o/config.ts": $llm_islands_GPT4o_config,
    "./islands/llm-islands/SimpleMath/SimpleMathTemplate.tsx":
      $llm_islands_SimpleMath_SimpleMathTemplate,
    "./islands/llm-islands/SimpleMath/SimpleMathWrapper.tsx":
      $llm_islands_SimpleMath_SimpleMathWrapper,
    "./islands/llm-islands/SimpleMath/config.ts":
      $llm_islands_SimpleMath_config,
    "./islands/menus.ts": $menus,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
