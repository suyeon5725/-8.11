// Firebase 콘솔에서 만든 웹 앱의 설정값으로 바꾸세요.
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const sampleQuestions = [
  { category: "과학", question: "상대성 이론을 발표한 과학자는 누구일까요?", choices: ["아이작 뉴턴", "알베르트 아인슈타인", "갈릴레오 갈릴레이", "마리 퀴리"], answer: 1 },
  { category: "예술", question: "모나리자를 그린 화가는 누구일까요?", choices: ["빈센트 반 고흐", "클로드 모네", "레오나르도 다 빈치", "파블로 피카소"], answer: 2 },
  { category: "문학", question: "『어린 왕자』의 작가는 누구일까요?", choices: ["생텍쥐페리", "헤르만 헤세", "조지 오웰", "빅토르 위고"], answer: 0 },
  { category: "음악", question: "교향곡 5번 ‘운명’을 작곡한 음악가는 누구일까요?", choices: ["모차르트", "베토벤", "바흐", "쇼팽"], answer: 1 },
  { category: "역사", question: "한글을 창제한 조선의 왕은 누구일까요?", choices: ["세종대왕", "정조", "태종", "광해군"], answer: 0 }
];

const el = Object.fromEntries(["round", "total", "score", "category", "question", "choices", "feedback", "next", "result", "final-score", "result-message", "restart", "source-note"].map(id => [id, document.getElementById(id)]));
let questions = [], current = 0, score = 0, answered = false;

async function loadQuestions() {
  if (!firebaseConfig.projectId) return sampleQuestions;
  try {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js");
    const { getFirestore, collection, getDocs } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");
    const snapshot = await getDocs(collection(getFirestore(initializeApp(firebaseConfig)), "questions"));
    const remote = snapshot.docs.map(doc => doc.data()).filter(q => q.question && Array.isArray(q.choices) && Number.isInteger(q.answer));
    if (remote.length) { el.sourceNote.textContent = "Firebase 문제로 플레이 중"; return remote; }
  } catch (error) { console.warn("Firebase 문제를 불러오지 못했습니다.", error); }
  return sampleQuestions;
}

function renderQuestion() {
  const q = questions[current];
  answered = false;
  el.round.textContent = current + 1; el.score.textContent = score;
  el.category.textContent = q.category || "인물"; el.question.textContent = q.question;
  el.feedback.textContent = ""; el.next.hidden = true; el.choices.replaceChildren();
  q.choices.forEach((choice, index) => {
    const button = document.createElement("button"); button.className = "choice"; button.textContent = choice;
    button.addEventListener("click", () => answer(index)); el.choices.append(button);
  });
}
function answer(index) {
  if (answered) return; answered = true;
  const q = questions[current], buttons = [...el.choices.children], correct = index === q.answer;
  buttons.forEach((button, i) => { button.disabled = true; if (i === q.answer) button.classList.add("correct"); else if (i === index) button.classList.add("wrong"); });
  if (correct) { score += 10; el.score.textContent = score; el.feedback.textContent = "정답이에요! +10점"; }
  else el.feedback.textContent = `아쉬워요. 정답은 “${q.choices[q.answer]}”입니다.`;
  el.next.hidden = false; el.next.textContent = current + 1 === questions.length ? "결과 보기" : "다음 문제 →";
}
function showResult() {
  document.querySelector(".quiz-card").hidden = true; el.result.hidden = false; el["final-score"].textContent = score;
  el.resultMessage.textContent = score === questions.length * 10 ? "완벽해요! 인물 퀴즈 박사네요." : "다시 도전해서 최고 점수를 노려보세요!";
}
el.next.addEventListener("click", () => { current += 1; current < questions.length ? renderQuestion() : showResult(); });
el.restart.addEventListener("click", () => { current = 0; score = 0; el.result.hidden = true; document.querySelector(".quiz-card").hidden = false; questions.sort(() => Math.random() - .5); renderQuestion(); });

(async () => { questions = await loadQuestions(); el.total.textContent = questions.length; renderQuestion(); })();
