export const pyscriptDependencies = `<script
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
`
export const systemPrompt = `You are ChatGPT, a large language model trained by OpenAI.\nCarefully heed the user's instructions.\nYour help is needed to create UIs for various educational tasks (e.g., math problems, language tasks). We are using tailwindcss with daisyUI, that are already loaded. This keeps the UI simple and clean. You can also write Python code to interact with the UI elements using the <py-script> tag.

Here is an example for you so you know the syntax to use:

### Task 1: Simple Math Example
<div class='card bg-white'>
  <div class='card-body'>
      <h2 class='card-title'>Math Practice: Multiply & Divide</h2>
      <p id='question' class='text-success'></p>
      <input type='number' id='answerField' class='input input-bordered' placeholder='Enter your answer'>
      <button py-click="submit_answer" class='btn btn-primary'>Check Answer</button>
      <p id='result'></p>
  </div>
</div>

<py-script>
  from js import document
  import random
  from pyscript import document
  from pyweb import pydom

  a = 0

  def generate_question():
      global a
      operation = '*' if random.random() > 0.5 else '/'
      n1 = random.randint(1, 12)
      n2 = random.randint(1, 12)
      if operation == '*':
          a = n1 * n2
          pydom['#question'][0].html = f"{n1} x {n2}"
      else:
          a = n1
          pydom['#question'][0].html = f"{n1 * n2} ÷ {n2}"
      pydom['#answerField'][0].html = ''

  def submit_answer(event):
      user_answer = int(pydom['#answerField'][0].value) if pydom['#answerField'][0].value.isnumeric() else ''
      result_text = "Correct! Great job!" if user_answer == a else "Incorrect. Try again!"
      pydom['#answerField'][0].value = ''
      result_element = pydom['#result'][0]
      result_element.html = result_text
      result_element._js.className = ''
      if user_answer == a:
          print(type(result_element))
          result_element._js.classList.add('text-success')
      else:
          result_element._js.classList.add('text-error')
      generate_question()

  generate_question()
</py-script>
`;

export const startPrompt = `Add a second math task into the same window instead of just one.`;

export const mathExample = `
<div class='card bg-white'>
  <div class='card-body'>
      <h2 class='card-title'>Math Practice: Multiply & Divide</h2>
      <p id='question' class='text-success'></p>
      <input type='number' id='answerField' class='input input-bordered' placeholder='Enter your answer'>
      <button py-click="submit_answer" class='btn btn-primary'>Check Answer</button>
      <p id='result'></p>
  </div>
</div>

<py-script>
  from js import document
  import random
  from pyscript import document
  from pyweb import pydom

  a = 0

  def generate_question():
      global a
      operation = '*' if random.random() > 0.5 else '/'
      n1 = random.randint(1, 12)
      n2 = random.randint(1, 12)
      if operation == '*':
          a = n1 * n2
          pydom['#question'][0].html = f"{n1} x {n2}"
      else:
          a = n1
          pydom['#question'][0].html = f"{n1 * n2} ÷ {n2}"
      pydom['#answerField'][0].html = ''

  def submit_answer(event):
      user_answer = int(pydom['#answerField'][0].value) if pydom['#answerField'][0].value.isnumeric() else ''
      result_text = "Correct! Great job!" if user_answer == a else "Incorrect. Try again!"
      pydom['#answerField'][0].value = ''
      result_element = pydom['#result'][0]
      result_element.html = result_text
      result_element._js.className = ''
      if user_answer == a:
          print(type(result_element))
          result_element._js.classList.add('text-success')
      else:
          result_element._js.classList.add('text-error')
      generate_question()

  generate_question()
</py-script>`;

// export const startHistory = [
//   {
//     role: "system",
//     content:
//       "You are ChatGPT, a large language model trained by OpenAI.\nCarefully heed the user's instructions.",
//   },
// ];
