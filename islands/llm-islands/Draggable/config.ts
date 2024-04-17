export const inputConfig = [
  {
    "task": "Sort the following fruits from heavy (left) to light (right).",
    "draggableButtons": ["Apple", "Banana", "Cherry", "Fig"], // this is the correct order
    "type": "sort",
  },
  {
    "task": "Fill in the blank position with the correct number.",
    "draggableButtons": ["7", "1", "0", "10"], // the first number is the correct answer
    "dropRow": ["DROP", "-", "DROP", "=", "6"], // the correct draggableButton needs to be placed in the DROP position
    "type": "fill",
  },
  {
    "task": "Sort the following numbers from small to big.",
    "draggableButtons": ["1/8", "0.25", "0.5", "3/2"], // this is the correct order
    "type": "sort",
  },
  {
    "task": "Fill in the blank position with the correct number.",
    "draggableButtons": ["1", "2", "3", "4"], // the first number is the correct answer
    "dropRow": ["5", "+", "DROP", "=", "6"], // the correct draggableButton needs to be placed in the DROP position
    "type": "fill",
  },
];

export const templateConfig = {
  "wrapperClass": "p-8 bg-slate-200 rounded-lg",
  "rowClass": "mb-2 grid grid-cols-5 gap-2",
  "itemClass": "p-2 rounded-lg flex justify-center items-center text-lg",
  "cssClasses": {
    "draggableButton":
      "bg-blue-200 hover:bg-blue-300 cursor-move select-none mb-2",
    "staticText": "text-lg font-semibold mb-3 bg-white p-2 rounded-md",
    "dropButton": "bg-yellow-200",
    "droppedButton": "bg-yellow-400",
    "staticButton": "bg-white",
    "submitButton":
      "bg-blue-400 w-full flex items-center justify-center rounded-lg py-2 hover:bg-blue-600 text-white font-bold",
    "correct": "bg-green-600 text-white",
    "incorrect": "bg-red-600 text-white",
  },
  // "elements": [
  //   {
  //     "element": "draggableButton",
  //     "cssClass":
  //       "bg-blue-200 p-4 gap-4 bg-green-200 rounded-lg flex justify-center items-center",
  //   },
  //   {
  //     "element": "droppedButton",
  //     "cssClass":
  //       "bg-blue-200 p-4 gap-4 bg-red-200 rounded-lg flex justify-center items-center",
  //   }
  // ],
};
