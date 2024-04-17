export const inputConfig = [
  [5, "+", "INPUT", "=", 10, "FEEDBACK"],
  [20, "-", "INPUT", "=", 2, "FEEDBACK"],
  [20, "-", "INPUT", "=", "INPUT", "FEEDBACK"],
  ["INPUT", "+", 4, "=", 8, "FEEDBACK"],
];

export const templateConfig = {
  "wrapperClass": "flex flex-col",
  "rowClass": "flex gap-2 mb-2",
  "itemClass": "w-12 h-12 flex items-center justify-center",
  "feedback": {
    true: "✅",
    false: "❌",
  },
  "elements": [
    {
      "element": "div",
      "cssClass": "bg-blue-200 p-4 rounded-lg",
    },
    {
      "element": "input",
      "cssClass": "rounded-lg p-2 w-12",
    },
    {
      "element": "submit",
      "cssClass":
        "bg-blue-400 w-full flex items-center justify-center rounded-lg py-2 hover:bg-blue-600 text-white font-bold",
    },
  ],
};
