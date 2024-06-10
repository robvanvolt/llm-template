export default function Python() {
    const code = `
      <py-config type="toml">
        packages = ["numpy"]
      </py-config>
  
      <py-script>
        import numpy as np
  
        print("NumPy version:", np.__version__)
        a = np.array([1, 2, 3]) 
        print("Array:", a)
        print("Hello from Python in the browser!")
  
        async function fetchTranscript(videoId) {
          try {
            const response = await fetch(\`http://localhost:8000/python?videoId=\${videoId}\`);
            if (response.ok) {
              const transcript = await response.json();
              console.log("Transcript:", transcript);
            } else {
              console.error("Error fetching transcript:", response.statusText);
            }
          } catch (error) {
            console.error("Error fetching transcript:", error);
          }
        }
  
        fetchTranscript("6_3cLlSlTKw");
      </py-script>`;
    
    return (
      <div>
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
        <div
          dangerouslySetInnerHTML={{
            __html: code,
          }}
        >
        </div>
      </div>
    );
  }
  