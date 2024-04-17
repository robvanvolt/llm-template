import { useState, useEffect } from "preact/hooks";

function shuffleArray(array: Array<string>) {
  const newArr = array.slice(); // Create a copy of the array to maintain immutability
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]]; // swap elements
  }
  return newArr;
}

function findAllIndices(arr: any[], target: any): number[] {
  const indices: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      indices.push(i);
    }
  }
  return indices;
}

export default function DraggableTemplate({ config, configInput }) {
  if (!config || !configInput) {
    return <div>Configuration does not contain valid JSON!</div>;
  }

  const [checkedResults, setCheckedResults] = useState({});
  const [configInputState, setConfigInput] = useState(
    configInput.map((task) => ({
      ...task,
      draggableButtons: shuffleArray(task.draggableButtons), // Shuffle only the buttons, not the task structure
    })),
  ); // sort all draggable buttons in random order

  useEffect(() => {
    setConfigInput(
      configInput.map((task) => ({
        ...task,
        draggableButtons: shuffleArray(task.draggableButtons), // Shuffle only the buttons, not the task structure
      })),
    );
  }, [configInput]);

  const handleDragStart = (event, item, type) => {
    const dragInfo = JSON.stringify({ item, type });
    event.dataTransfer.setData("text/plain", dragInfo);
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Necessary to allow dropping
  };

  const handleDropSort = (event, index, rowIndex) => {
    const { item, type } = JSON.parse(event.dataTransfer.getData("text/plain"));
    if (type !== "sort") return;

    const itemsCopy = Array.from(configInputState[rowIndex].draggableButtons);
    const draggedIndex = itemsCopy.indexOf(item);
    if (draggedIndex !== -1) {
      itemsCopy.splice(draggedIndex, 1); // Remove the item from its old position
      itemsCopy.splice(index, 0, item); // Insert the item at its new position

      const updatedConfigInput = configInputState.map((input, i) => {
        if (i === rowIndex) {
          return { ...input, draggableButtons: itemsCopy };
        }
        return input;
      });

      setConfigInput(updatedConfigInput); // Update the state with the new order
    }
  };

  const handleDropFill = (event, rowIndex, dropIndex) => {
    const { item, type } = JSON.parse(event.dataTransfer.getData("text/plain"));
    if (type !== "fill") return;

    const updatedConfigInput = configInputState.map((input, i) => {
      if (i === rowIndex) {
        // Replace "DROP" with the item if DROP is found or replace the existing item
        const newDropRow = input.dropRow.map((el, idx) =>
          idx === dropIndex ? item : el
        );
        return { ...input, dropRow: newDropRow };
      }
      return input;
    });

    setConfigInput(updatedConfigInput);
  };

  function checkResults() {
    const checkedAnswers: { [key: string]: number } = {};
    const results = configInput.map((task, index) => {
      if (task.type === "sort") {
        task.draggableButtons.forEach((button, i) => {
          checkedAnswers[index + "," + i] =
            button === configInputState[index].draggableButtons[i] ? 1 : 0;
        });
      }
      if (task.type === "fill") {
        const userInput = findAllIndices(task.dropRow, "DROP");
        userInput.forEach((el, i) => {
          checkedAnswers[index + "," + el] =
            configInputState[index].dropRow[el] === task.draggableButtons[i] ? 1 : 0;
        });
      }
    });
    setCheckedResults(checkedAnswers);
  }

  return (
    <div class={config.wrapperClass}>
      {configInputState.map((input, rowIndex) => (
        <div key={rowIndex}>
          <div class={config.cssClasses.staticText}>{input.task}</div>
          {input.type === "sort" && (
            <div class={config.rowClass}>
              {input.draggableButtons.map((button, index) => (
                <div
                  key={index}
                  draggable="true"
                  onDragStart={(event) =>
                    handleDragStart(event, button, "sort")}
                  onDragOver={handleDragOver}
                  onDrop={(event) => handleDropSort(event, index, rowIndex)}
                  class={`${config.cssClasses.draggableButton} ${config.itemClass} ${checkedResults[rowIndex + ',' + index] === 1 ? `${config.cssClasses.correct}` : checkedResults[rowIndex + ',' + index] === 0 ? `${config.cssClasses.incorrect}` : ``} cursor-move select-none mb-2`}
                >
                  {button}
                </div>
              ))}
            </div>
          )}
          {input.type === "fill" && (
            <div>
              <div class={config.rowClass}>
                {input.draggableButtons.map((button) => (
                  <div
                    key={button}
                    draggable="true"
                    onDragStart={(event) =>
                      handleDragStart(event, button, "fill")}
                    class={`${config.cssClasses.draggableButton} ${config.itemClass} cursor-move select-none mb-2`}
                  >
                    {button}
                  </div>
                ))}
              </div>
              <div class={config.rowClass}>
                {input.dropRow.map((element, index) => (
                  <div
                    key={index}
                    class={`${
                      element === "DROP"
                        ? `${config.cssClasses.droppedButton}`
                        : `${config.cssClasses.staticButton}`
                    } ${config.itemClass} ${checkedResults[rowIndex + ',' + index] === 1 ? `${config.cssClasses.correct}` : checkedResults[rowIndex + ',' + index] === 0 ? `${config.cssClasses.incorrect}` : ``} ${configInput[rowIndex].dropRow[index] === "DROP" ? `${config.cssClasses.dropButton}` : ``}`}
                    onDragOver={configInput[rowIndex].dropRow[index] === "DROP" ? handleDragOver : null}
                    onDrop={(event) => configInput[rowIndex].dropRow[index] === "DROP" ? handleDropFill(event, rowIndex, index) : null}
                  >
                    {element === "DROP" ? "" : element}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
      <div>
        <button
          class={config.cssClasses.submitButton}
          onClick={() => checkResults()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
