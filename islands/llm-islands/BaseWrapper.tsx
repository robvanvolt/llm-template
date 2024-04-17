import { useState } from "preact/hooks";
import BaseTemplate from "./BaseTemplate.tsx";
import { inputConfig, templateConfig } from "./BaseConfig.ts";

function parseJson(jsonString: string) {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    return null;
  }
}

export default function BaseWrapper() {
  const [configExamples, setConfigExamples] = useState(
    JSON.stringify(inputConfig, null, 4),
  );

  const [layout, setLayout] = useState(JSON.stringify(
    templateConfig,
    null,
    4,
  ));

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
        <BaseTemplate
          config={parseJson(layout)}
          configInput={parseJson(configExamples)}
        />
      </div>
    </div>
  );
}
