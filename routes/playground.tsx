// route/playground.tsx

import PlaygroundIsland from "../islands/PlaygroundIsland.tsx";

export default function Playground() {
  return (
    <>
      {
        /* <head>
        <script
          type="module"
          src="https://pyscript.net/releases/2024.1.1/core.js"
        >
        </script>
        <link
          rel="stylesheet"
          href="https://pyscript.net/releases/2024.1.1/core.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.10.5/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </head> */
      }
      <html data-theme="bumblebee">
        <script
          type="module"
          src="https://pyscript.net/releases/2024.1.1/core.js"
        >
        </script>
        <link
          rel="stylesheet"
          href="https://pyscript.net/releases/2024.1.1/core.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.10.5/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <PlaygroundIsland />
      </html>
    </>
  );
}
