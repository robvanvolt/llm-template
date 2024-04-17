import { useState } from "preact/hooks";
import SimpleMathTemplate from "../SimpleMath/SimpleMathTemplate.tsx";

// import inputConfig from "./config.ts";
// import templateConfig from "./config.ts";
import { inputConfig, templateConfig } from "./config.ts";

function parseJson(jsonString: string) {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    return null;
  }
}

export default function SimpleMathWrapper() {
  const [configExamples, setConfigExamples] = useState(
    JSON.stringify(inputConfig, null, 4),
  );

  const [layout, setLayout] = useState(JSON.stringify(templateConfig, null, 4));

  return (
    <div class="flex h-full">
      <div class="w-1/2">
        <div class="h-1/2 p-4">
          <textarea
            class="w-full h-full"
            placeholder="Type config comes here"
            value={layout}
            onInput={(e) => setLayout(e.target.value)}
          >
          </textarea>
        </div>
        <div class="h-1/2 p-4">
          <textarea
            class="w-full h-full"
            placeholder="Type config comes here"
            value={configExamples}
            onInput={(e) => setConfigExamples(e.target.value)}
          >
          </textarea>
        </div>
      </div>
      <div class="w-1/2 h-full flex justify-center items-center">
        <SimpleMathTemplate
          config={parseJson(layout)}
          configInput={parseJson(configExamples)}
        />
      </div>
    </div>
  );
}
