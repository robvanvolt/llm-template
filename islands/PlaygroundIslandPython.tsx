import { useEffect, useState } from "preact/hooks";

export default function PlaygroundIslandPython() {
  const pmone = `<div class='card bg-white'>
  <div class='card-body'>
      <h2 class='card-title'>Math Practice: Multiply & Divide</h2>
      <p id='question' class='text-success'></p>
      <input type='number' id='answerField' class='input input-bordered' placeholder='Enter your answer'>
      <button py-click="submit_answer" class='btn btn-primary'>Check Answer</button>
      <p id='result'></p>
  </div>
</div>

<py-script>
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
  const plone = `<div class="flex justify-center items-center">
<div class="card bg-base-100 shadow-xl">
    <div class="card-body">
        <h2 class="card-title">English Practice: Vocabulary Quiz</h2>
        <p id="question" class="text-success text-lg"></p>
        <input type="text" id="answerField" class="input input-bordered input-primary w-full" placeholder="Enter your answer">
        <button py-click="submit_answer" class='btn btn-primary'>Check Answer</button>
        <p id="result" class="mt-4"></p>
    </div>
</div>

</div>

<py-script>
from pyscript import document
from pyweb import pydom
import random

words = [
    'apple', 'banana', 'orange', 'strawberry', 'grape', 'kiwi',
    'watermelon', 'pineapple', 'peach', 'blueberry'
]

synonyms = {
    'apple': ['fruit', 'pomaceous fruit'],
    'banana': ['fruit', 'yellow fruit'],
    'orange': ['fruit', 'citrus fruit'],
    'strawberry': ['fruit', 'red fruit'],
    'grape': ['fruit', 'vine fruit'],
    'kiwi': ['fruit', 'green fruit'],
    'watermelon': ['fruit', 'melon'],
    'pineapple': ['fruit', 'tropical fruit'],
    'peach': ['fruit', 'stone fruit'],
    'blueberry': ['fruit', 'berry']
}

current_word = ''

def generate_question():
    global current_word
    current_word = random.choice(words)
    pydom['#question'].html = 'What is the synonym for ' + current_word + '?'

def submit_answer(event):
    user_answer = pydom['#answerField'][0]._js.value.lower()
    correct_answers = synonyms[current_word]
    if user_answer in correct_answers:
        pydom['#result'][0].html = 'Correct! Great job!'
        pydom['#result'][0]._js.className = 'text-green-600'
    else:
        pydom['#result'][0].html = 'Incorrect. Try again!'
        pydom['#result'][0]._js.className = 'text-red-600'
    pydom['#answerField'][0].html = ''
    generate_question()

generate_question()
</py-script>`;
  const [input, setInput] = useState(plone);

  // const [input, setInput] = useState("<div class=flex justify-center items-center><div class=bg-white p-4 shadow-md rounded><h2 class=text-lg font-bold mb-4>English Practice: Vocabulary Quiz</h2><p id=question class=text-green-500 text-xl></p><input type=text id=answerField class=mt-2 p-2 border rounded w-full placeholder=Enter your answer><button onclick=submitAnswer() class=mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded>Check Answer</button><p id=result class=mt-4></p></div></div><script>let word='';function generateQuestion(){const words=['apple','banana','orange','strawberry','grape','kiwi','watermelon','pineapple','peach','blueberry'];word=words[Math.floor(Math.random()*words.length)];document.getElementById('question').textContent='What is the synonym for '+word+'?'}function submitAnswer(){const userAnswer=document.getElementById('answerField').value.toLowerCase(),synonyms={apple:['fruit','pomaceous fruit'],banana:['fruit','yellow fruit'],orange:['fruit','citrus fruit'],strawberry:['fruit','red fruit'],grape:['fruit','vine fruit'],kiwi:['fruit','green fruit'],watermelon:['fruit','melon'],pineapple:['fruit','tropical fruit'],peach:['fruit','stone fruit'],blueberry:['fruit','berry']},correctAnswers=synonyms[word];correctAnswers.includes(userAnswer)?(document.getElementById('result').textContent='Correct! Great job!',document.getElementById('result').className='text-green-600'):(document.getElementById('result').textContent='Incorrect. Try again!',document.getElementById('result').className='text-red-600')}window.onload=generateQuestion;generateQuestion();</script>");
  // const [input, setInput] = useState("<div class='flex justify-center items-center'><div class='bg-white p-4 shadow-md rounded'><h2 class='text-lg font-bold mb-4'>Math Practice: Multiply & Divide</h2><p id='question' class='text-green-500 text-xl'></p><input type='number' id='answerField' class='mt-2 p-2 border rounded w-full' placeholder='Enter your answer'><button onclick='submitAnswer()' class='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Check Answer</button><p id='result' class='mt-4'></p></div></div><script>let a=0;function g(){let o=Math.random()>0.5?'*':'/',n1=Math.floor(Math.random()*12)+1,n2=Math.floor(Math.random()*12)+1;a=o==='*'?n1*n2:n1;document.getElementById('question').textContent=o==='*'?`${n1} x ${n2}`:`${n1*n2} ÷ ${n2}`}function submitAnswer(){let u=parseInt(document.getElementById('answerField').value);document.getElementById('result').textContent=u===a?'Correct! Great job!':'Incorrect. Try again!';document.getElementById('result').className=u===a?'text-green-600':'text-red-600';g()}window.onload=g;</script>");
  // const [input, setInput] = useState(
  //   "<div class='card bg-slate-200'><div class='card-body'><h2 class='card-title'>Math Practice: Multiply & Divide</h2><p id='question' class='text-success'></p><input type='number' id='answerField' class='input input-bordered' placeholder='Enter your answer'><button onclick='submitAnswer()' class='btn btn-primary'>Check Answer</button><p id='result'></p></div></div><script>let a=0;function g(){let o=Math.random()>0.5?'*':'/',n1=Math.floor(Math.random()*12)+1,n2=Math.floor(Math.random()*12)+1;a=o==='*'?n1*n2:n1;document.getElementById('question').textContent=o==='*'?`${n1} x ${n2}`:`${n1*n2} ÷ ${n2}`}function submitAnswer(){let u=parseInt(document.getElementById('answerField').value);document.getElementById('result').textContent=u===a?'Correct! Great job!':'Incorrect. Try again!';document.getElementById('result').classList.remove('text-success','text-error');document.getElementById('result').classList.add(u===a?'text-success':'text-error');g()}window.onload=g;</script>",
  // );
  // const [input, setInput] = useState("<div class='flex justify-center items-center'><div class='card bg-base-100 shadow-xl'><div class='card-body'><h2 class='card-title'>Math Practice: Multiply & Divide</h2><p id='question' class='text-success text-xl'></p><input type='number' id='answerField' class='input input-bordered w-full mt-2' placeholder='Enter your answer'><button onclick='submitAnswer()' class='btn btn-primary mt-4'>Check Answer</button><p id='result' class='mt-4'></p></div></div></div><script>let a=0;function g(){let o=Math.random()>0.5?'*':'/',n1=Math.floor(Math.random()*12)+1,n2=Math.floor(Math.random()*12)+1;a=o==='*'?n1*n2:n1;document.getElementById('question').textContent=o==='*'?`${n1} x ${n2}`:`${n1*n2} ÷ ${n2}`}function submitAnswer(){let u=parseInt(document.getElementById('answerField').value);document.getElementById('result').textContent=u===a?'Correct! Great job!':'Incorrect. Try again!';document.getElementById('result').classList.remove('text-success','text-error');document.getElementById('result').classList.add(u===a?'text-success':'text-error');g()}window.onload=g;</script>");

  useEffect(() => {
    console.log("Reloading...!");
    dispatchEvent(new Event("load"));
  }, [input]);

  return (
    <div class="w-full h-full flex">
      <div class="w-1/2 h-full flex flex-col justify-center items-center">
        {/* create 4 buttons for different examples */}
        <div class="grid grid-cols-2 gap-2 my-2">
          <button
            class="btn btn-primary"
            onClick={() => setInput(pmone)}
          >
            Python Math
          </button>
          <button
            class="btn btn-primary"
            onClick={() => setInput(plone)}
          >
            Python Lang
          </button>
        </div>
        <textarea
          class="w-full h-full p-1"
          id="textareaInput"
          value={input}
          onInput={(e) => setInput((e.target as HTMLTextAreaElement).value)}
        >
        </textarea>
      </div>
      {
        /* <iframe class="w-1/2 h-full" srcDoc={`<html data-theme="bumblebee"><head>
        <script src="https://cdn.tailwindcss.com"></script>
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
      </head><body>` + input + `</body></html>`} /> */
      }
      <div class="w-1/2 h-full flex flex-col justify-center items-center">
        <div
          dangerouslySetInnerHTML={{ __html: input || "" }}
        />
      </div>
    </div>
  );
}
