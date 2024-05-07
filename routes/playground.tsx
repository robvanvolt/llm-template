// route/playground.tsx

import PlaygroundIsland from "../islands/PlaygroundIsland.tsx";

export default function Playground() {
  return (
    <>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.10.5/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <html data-theme="bumblebee">
        <PlaygroundIsland />

      </html>
    </>
  );
}
