import { useState } from "preact/hooks";
import {
  mathExample,
  pyscriptDependencies,
  startPrompt,
  systemPrompt,
} from "./config.ts";
import html2canvas from "npm:html2canvas-pro";

export default function GPT4oWrapper() {
  const [imageSrc, setImageSrc] = useState(null);
  const [screenshotData, setScreenshotData] = useState<string | null>(null);
  const [prompt, setPrompt] = useState(startPrompt);
  const [currentTask, setCurrentTask] = useState(mathExample);
  const [chatHistory, setChatHistory] = useState([
    {
      role: "system",
      content: systemPrompt,
    },
  ]);

  const API_KEY = "hypr-lab-dhItb5DFQctQvafMzqgKT3BlbkFJfot58G96B2VMaS4u0015";
  const API_URL = "https://api.hyprlab.io/v1/chat/completions";

  //   const takeScreenshot = () => {
  //     // const taskUiElement = document.getElementById("task-ui");
  //     const taskUiElement = document.body;
  //     if (!taskUiElement) return;

  //     html2canvas(taskUiElement).then((canvas) => {
  //       canvas.toBlob((blob) => {
  //         if (blob) {
  //           const screenshotUrl = URL.createObjectURL(blob);
  //           setScreenshotData(screenshotUrl);

  //           // Download image
  //           const a = document.createElement("a");
  //           a.href = screenshotUrl;
  //           a.download = "screenshot.png";
  //           a.click();
  //         }
  //       }, "image/png");
  //     });
  //   };

  const takeScreenshot = () => {
    const element = document.getElementById("task-ui");

    html2canvas(element).then((canvas) => {
      // Convert the canvas to a data URL
      const dataUrl = canvas.toDataURL("image/png");

      // Create a link element
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "task-ui-screenshot.png";

      // Append the link to the body
      document.body.appendChild(link);

      // Trigger the download by simulating a click
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);
    }).catch((err) => {
      console.error("Screenshot capture failed:", err);
    });
  };

  const returnScreenshot = async () => {
    const element = document.getElementById("task-ui");
    try {
      const canvas = await html2canvas(element);
      // Convert the canvas to a data URL
      const dataUrl = canvas.toDataURL("image/png");
      // Call sendRequest with the data URL
      return dataUrl;
    } catch (err) {
      console.error("Screenshot capture failed:", err);
      return null;
    }
  };

  const sendRequest = async (content: string) => {
    const imageUrl = await returnScreenshot();
    const prompt = imageUrl
      ? "This is the code of the current exercise for the provided image:\n\n" +
        currentTask +
        "\n\nNow modify the code of the current exercise to adhere to the following request: " +
        content
      : content;
    const messages = [
      ...chatHistory,
      {
        role: "user",
        content: imageUrl
          ? [
            {
              type: "text",
              text: prompt,
            },
            {
              type: "image_url",
              image_url: {
                url: imageUrl,
                detail: "high",
              },
            },
          ]
          : prompt,
      },
    ];

    console.table(messages);

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({ model: "gpt-4o", messages }),
    });

    if (response.ok) {
      const data = await response.json();
      const assistantResponse = data.choices[0].message.content;
      console.log(assistantResponse);

      // get everything between ```html and ``` and set it as the current task
      const newTask = assistantResponse.match(/```html([\s\S]*?)```/)[1];
      setCurrentTask(newTask);
      setChatHistory([
        ...messages,
        {
          role: "assistant",
          content: assistantResponse,
        },
      ]);
    } else {
      console.error("Error:", response.status, response.statusText);
    }
  };

  // const takeScreenshot = () => {
  //   const taskUiElement = document.getElementById("task-ui");
  //   if (!taskUiElement) return;

  //   const canvas = document.createElement("canvas");
  //   const context = canvas.getContext("2d");

  //   if (!context) return;

  //   const rect = taskUiElement.getBoundingClientRect();
  //   canvas.width = rect.width;
  //   canvas.height = rect.height;

  //   const tempImage = new Image();
  //   tempImage.src =
  //     `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="${rect.width}" height="${rect.height}"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml">${taskUiElement.innerHTML}</div></foreignObject></svg>`;

  //   tempImage.onload = () => {
  //     context.drawImage(tempImage, 0, 0);
  //     canvas.toBlob((blob) => {
  //       if (blob) {
  //         const screenshotUrl = URL.createObjectURL(blob);
  //         setScreenshotData(screenshotUrl);
  //         // download image
  //         const a = document.createElement("a");
  //         a.href = screenshotUrl;
  //         a.download = "screenshot.png";
  //         a.click();
  //       }
  //     }, "image/png");
  //   };
  // };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleRemoveScreenshot = () => {
    setScreenshotData(null);
  };

  const handleRemoveImage = () => {
    setImageSrc(null);
  };

  //   const sendRequest = async (content, imageUrl = null) => {
  //     const messages = [
  //       ...chatHistory,
  //       {
  //         role: "user",
  //         content: imageUrl
  //           ? [
  //             {
  //               type: "text",
  //               text: content,
  //             },
  //             {
  //               type: "image_url",
  //               image_url: {
  //                 url: imageUrl,
  //                 detail: "high",
  //               },
  //             },
  //           ]
  //           : content,
  //       },
  //     ];

  //     console.table(messages);

  //     const response = await fetch(API_URL, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${API_KEY}`,
  //       },
  //       body: JSON.stringify({ model: "gpt-4o", messages }),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       const assistantResponse = data.choices[0].message.content;
  //       console.log(assistantResponse);
  //       setChatHistory([...messages, {
  //         role: "assistant",
  //         content: assistantResponse,
  //       }]);
  //     } else {
  //       console.error("Error:", response.status, response.statusText);
  //     }
  //   };

  const iterate = () => {
    const taskDescription = document.getElementById("layout-description").value;
    sendRequest(taskDescription, screenshotData);
  };

  const tasksubmit = () => {
    const taskDescription = document.getElementById("layout-description").value;
    sendRequest(taskDescription);
  };

  return (
    <div
      className="flex h-full"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div class="h-full w-1/2 flex flex-col">
        <textarea
          id="layout-description"
          value={prompt}
          placeholder="Layout description from GPT4o"
          class="w-full h-1/3 resize-none border-r bg-blue-100 border-gray-300 outline-none p-2"
        >
        </textarea>
        <textarea
          id="gpt4o-output"
          placeholder="Editable Output from GPT4o"
          value = {currentTask}
          class="w-full h-1/3 resize-none border-r bg-teal-100 border-gray-300 outline-none p-2"
        >
        </textarea>
        <div class="w-full h-1/3 bg-orange-100 p-2 overflow-scroll max-h-[33.33vh]">
          {chatHistory.map((chat, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  {chat.role[0].toUpperCase()}
                </div>
                <div className="ml-2">
                  {chat.role[0].toUpperCase() + chat.role.slice(1)}
                </div>
              </div>
              {Array.isArray(chat.content)
                ? (
                  <div className="ml-10">
                    {chat.content.map((content, contentIndex) => (
                      <div key={contentIndex}>
                        {content.type === "text"
                          ? (
                            <div className="whitespace-pre-wrap">
                              {content.text}
                            </div>
                          )
                          : content.type === "image_url"
                          ? (
                            <img
                              src={content.image_url.url}
                              alt={`Chat Image ${contentIndex}`}
                              className="max-w-full h-auto"
                            />
                          )
                          : null}
                      </div>
                    ))}
                  </div>
                )
                : (
                  <div className="ml-10 whitespace-pre-wrap">
                    {chat.content}
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
      <div class="absolute bottom-4 right-4 grid grid-cols-2 space-x-2">
        <button
          class="bg-yellow-600 p-2 hover:bg-yellow-800 text-white rounded-md flex items-center justify-center cursor:pointer z-20"
          onClick={iterate}
        >
          Iterate
        </button>
        <button
          class="bg-blue-500 p-2 hover:bg-blue-800 text-white rounded-md flex items-center justify-center cursor:pointer z-20"
          onClick={tasksubmit}
        >
          Submit
        </button>
      </div>
      <div class="relative w-1/2 h-full p-4">
        {screenshotData && (
          <div
            class="absolute top-4 left-4 w-16 h-16 object-cover shadow-lg cursor-pointer"
            onClick={handleRemoveScreenshot}
          >
            <img
              src={screenshotData}
              alt="Dropped Thumbnail"
              class="w-full h-full hover:opacity-50"
            />
          </div>
        )}
        {imageSrc && (
          <div
            class="absolute top-4 right-4 w-16 h-16 object-cover shadow-lg cursor-pointer"
            onClick={handleRemoveImage}
          >
            <img
              src={imageSrc}
              alt="Dropped Thumbnail"
              class="w-full h-full hover:opacity-50"
            />
          </div>
        )}
        <div class="h-full w-full flex flex-col justify-center items-center">
          <div id="task-ui">
            <div
              dangerouslySetInnerHTML={{
                __html: pyscriptDependencies + currentTask,
              }}
            />
            {}
          </div>
          <button class="z-40" onClick={() => takeScreenshot()}>
            Take Screenshot
          </button>
        </div>
      </div>
    </div>
  );
}
