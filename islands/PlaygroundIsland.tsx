import { useEffect, useState } from "preact/hooks";

export default function PlaygroundIsland() {
  // const [input, setInput] = useState("<div class=flex justify-center items-center><div class=bg-white p-4 shadow-md rounded><h2 class=text-lg font-bold mb-4>English Practice: Vocabulary Quiz</h2><p id=question class=text-green-500 text-xl></p><input type=text id=answerField class=mt-2 p-2 border rounded w-full placeholder=Enter your answer><button onclick=submitAnswer() class=mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded>Check Answer</button><p id=result class=mt-4></p></div></div><script>let word='';function generateQuestion(){const words=['apple','banana','orange','strawberry','grape','kiwi','watermelon','pineapple','peach','blueberry'];word=words[Math.floor(Math.random()*words.length)];document.getElementById('question').textContent='What is the synonym for '+word+'?'}function submitAnswer(){const userAnswer=document.getElementById('answerField').value.toLowerCase(),synonyms={apple:['fruit','pomaceous fruit'],banana:['fruit','yellow fruit'],orange:['fruit','citrus fruit'],strawberry:['fruit','red fruit'],grape:['fruit','vine fruit'],kiwi:['fruit','green fruit'],watermelon:['fruit','melon'],pineapple:['fruit','tropical fruit'],peach:['fruit','stone fruit'],blueberry:['fruit','berry']},correctAnswers=synonyms[word];correctAnswers.includes(userAnswer)?(document.getElementById('result').textContent='Correct! Great job!',document.getElementById('result').className='text-green-600'):(document.getElementById('result').textContent='Incorrect. Try again!',document.getElementById('result').className='text-red-600')}window.onload=generateQuestion;generateQuestion();</script>");
  // const [input, setInput] = useState("<div class='flex justify-center items-center'><div class='bg-white p-4 shadow-md rounded'><h2 class='text-lg font-bold mb-4'>Math Practice: Multiply & Divide</h2><p id='question' class='text-green-500 text-xl'></p><input type='number' id='answerField' class='mt-2 p-2 border rounded w-full' placeholder='Enter your answer'><button onclick='submitAnswer()' class='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Check Answer</button><p id='result' class='mt-4'></p></div></div><script>let a=0;function g(){let o=Math.random()>0.5?'*':'/',n1=Math.floor(Math.random()*12)+1,n2=Math.floor(Math.random()*12)+1;a=o==='*'?n1*n2:n1;document.getElementById('question').textContent=o==='*'?`${n1} x ${n2}`:`${n1*n2} ÷ ${n2}`}function submitAnswer(){let u=parseInt(document.getElementById('answerField').value);document.getElementById('result').textContent=u===a?'Correct! Great job!':'Incorrect. Try again!';document.getElementById('result').className=u===a?'text-green-600':'text-red-600';g()}window.onload=g;</script>");
  const [input, setInput] = useState("<div class='flex justify-center items-center'><div class='card bg-base-100 shadow-xl'><div class='card-body'><h2 class='card-title'>Math Practice: Multiply & Divide</h2><p id='question' class='text-success text-xl'></p><input type='number' id='answerField' class='input input-bordered w-full mt-2' placeholder='Enter your answer'><button onclick='submitAnswer()' class='btn btn-primary mt-4'>Check Answer</button><p id='result' class='mt-4'></p></div></div></div><script>let a=0;function g(){let o=Math.random()>0.5?'*':'/',n1=Math.floor(Math.random()*12)+1,n2=Math.floor(Math.random()*12)+1;a=o==='*'?n1*n2:n1;document.getElementById('question').textContent=o==='*'?`${n1} x ${n2}`:`${n1*n2} ÷ ${n2}`}function submitAnswer(){let u=parseInt(document.getElementById('answerField').value);document.getElementById('result').textContent=u===a?'Correct! Great job!':'Incorrect. Try again!';document.getElementById('result').classList.remove('text-success','text-error');document.getElementById('result').classList.add(u===a?'text-success':'text-error');g()}window.onload=g;</script>");

  useEffect(() => {
    dispatchEvent(new Event('load'));
  }, [input]);

  return (
    <div class="w-full h-full flex">
      <div class="w-1/2 h-full flex flex-col justify-center items-center">
        <textarea
          class="w-full h-3/4 p-2 ml-12"
          id="textareaInput"
          value={input}
          onInput={((e) => setInput((e.target as HTMLTextAreaElement).value))}
        ></textarea>
      </div>
      <div
        class="w-1/2 h-full flex flex-col justify-center items-center"
      >
        <div
          dangerouslySetInnerHTML={{ __html: input || "" }}
        />
      </div>
    </div>
  );
}