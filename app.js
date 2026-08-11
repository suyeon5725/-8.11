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
  { category: "역사", question: "한글을 창제한 조선의 왕은 누구일까요?", choices: ["세종대왕", "정조", "태종", "광해군"], answer: 0 },
  { category: "과학", question: "만유인력의 법칙으로 유명한 과학자는 누구일까요?", choices: ["찰스 다윈", "아이작 뉴턴", "니콜라 테슬라", "루이 파스퇴르"], answer: 1 },
  { category: "예술", question: "‘별이 빛나는 밤’으로 유명한 화가는 누구일까요?", choices: ["빈센트 반 고흐", "살바도르 달리", "에드바르 뭉크", "앙리 마티스"], answer: 0 },
  { category: "역사", question: "거북선을 활용해 활약한 조선의 장군은 누구일까요?", choices: ["강감찬", "을지문덕", "이순신", "김유신"], answer: 2 },
  { category: "문학", question: "『해리 포터』 시리즈를 쓴 작가는 누구일까요?", choices: ["J. R. R. 톨킨", "J. K. 롤링", "스티븐 킹", "로알드 달"], answer: 1 },
  { category: "음악", question: "‘피아노의 시인’이라 불린 음악가는 누구일까요?", choices: ["쇼팽", "리스트", "비발디", "하이든"], answer: 0 },
  { category: "영화", question: "영화 『기생충』을 연출한 감독은 누구일까요?", choices: ["봉준호", "박찬욱", "김지운", "류승완"], answer: 0 },
  { category: "스포츠", question: "대한민국 최초의 메이저리그 야구 선수는 누구일까요?", choices: ["류현진", "박찬호", "추신수", "이승엽"], answer: 1 },
  { category: "과학", question: "DNA 이중나선 구조 연구로 노벨상을 받은 과학자는 누구일까요?", choices: ["그레고어 멘델", "마리 퀴리", "제임스 왓슨", "알렉산더 플레밍"], answer: 2 },
  { category: "예술", question: "천장화 ‘천지창조’를 그린 르네상스 예술가는 누구일까요?", choices: ["라파엘로", "미켈란젤로", "보티첼리", "도나텔로"], answer: 1 },
  { category: "역사", question: "미국의 초대 대통령은 누구일까요?", choices: ["에이브러햄 링컨", "토머스 제퍼슨", "조지 워싱턴", "존 애덤스"], answer: 2 },
  { category: "문학", question: "『로미오와 줄리엣』을 쓴 극작가는 누구일까요?", choices: ["셰익스피어", "찰스 디킨스", "오스카 와일드", "제인 오스틴"], answer: 0 },
  { category: "음악", question: "‘사계’를 작곡한 바로크 시대 음악가는 누구일까요?", choices: ["헨델", "비발디", "바흐", "파헬벨"], answer: 1 },
  { category: "스포츠", question: "‘축구 황제’라는 별명으로 알려진 브라질 선수는 누구일까요?", choices: ["펠레", "호나우두", "네이마르", "호나우지뉴"], answer: 0 },
  { category: "과학", question: "라듐과 폴로늄을 발견한 과학자는 누구일까요?", choices: ["에이다 러브레이스", "마리 퀴리", "로절린드 프랭클린", "제인 구달"], answer: 1 },
  { category: "역사", question: "몽골 제국을 세운 인물은 누구일까요?", choices: ["칭기즈 칸", "쿠빌라이 칸", "알렉산드로스", "나폴레옹"], answer: 0 },
  { category: "문학", question: "『1984』를 쓴 작가는 누구일까요?", choices: ["올더스 헉슬리", "조지 오웰", "어니스트 헤밍웨이", "프란츠 카프카"], answer: 1 },
  { category: "발명", question: "전화기를 발명한 인물로 널리 알려진 사람은 누구일까요?", choices: ["토머스 에디슨", "알렉산더 그레이엄 벨", "구글리엘모 마르코니", "라이트 형제"], answer: 1 },
  { category: "철학", question: "‘나는 생각한다, 고로 존재한다’로 유명한 철학자는 누구일까요?", choices: ["소크라테스", "플라톤", "르네 데카르트", "임마누엘 칸트"], answer: 2 },
  { category: "한국사", question: "신라를 통일로 이끈 장군은 누구일까요?", choices: ["김유신", "연개소문", "궁예", "견훤"], answer: 0 },
  { category: "영화", question: "애니메이션 『센과 치히로의 행방불명』을 만든 감독은 누구일까요?", choices: ["신카이 마코토", "미야자키 하야오", "호소다 마모루", "곤 사토시"], answer: 1 }
];

const personPages = {
  "알베르트 아인슈타인": "Albert Einstein", "레오나르도 다 빈치": "Leonardo da Vinci", "생텍쥐페리": "Antoine de Saint-Exupéry", "베토벤": "Ludwig van Beethoven", "세종대왕": "Sejong the Great",
  "아이작 뉴턴": "Isaac Newton", "빈센트 반 고흐": "Vincent van Gogh", "이순신": "Yi Sun-sin", "J. K. 롤링": "J. K. Rowling", "쇼팽": "Frédéric Chopin",
  "봉준호": "Bong Joon-ho", "박찬호": "Park Chan-ho", "제임스 왓슨": "James Watson", "미켈란젤로": "Michelangelo", "조지 워싱턴": "George Washington",
  "셰익스피어": "William Shakespeare", "비발디": "Antonio Vivaldi", "펠레": "Pelé", "마리 퀴리": "Marie Curie", "칭기즈 칸": "Genghis Khan",
  "조지 오웰": "George Orwell", "알렉산더 그레이엄 벨": "Alexander Graham Bell", "르네 데카르트": "René Descartes", "김유신": "Kim Yushin", "미야자키 하야오": "Hayao Miyazaki"
};

const el = Object.fromEntries(["round", "total", "score", "category", "question", "choices", "feedback", "next", "result", "final-score", "result-message", "restart", "source-note", "portrait-wrap", "portrait", "portrait-fallback", "photo-hint"].map(id => [id, document.getElementById(id)]));
let questions = [], current = 0, score = 0, answered = false, hintUsed = false;

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
  answered = false; hintUsed = false;
  el.round.textContent = current + 1; el.score.textContent = score;
  el.category.textContent = q.category || "인물"; el.question.textContent = q.question;
  el.feedback.textContent = ""; el.next.hidden = true; el.choices.replaceChildren(); el["portrait-wrap"].classList.remove("revealed");
  el["photo-hint"].disabled = false; el["photo-hint"].hidden = false;
  loadPortrait(q);
  q.choices.forEach((choice, index) => {
    const button = document.createElement("button"); button.className = "choice"; button.textContent = choice;
    button.addEventListener("click", () => answer(index)); el.choices.append(button);
  });
}
async function loadPortrait(q) {
  const page = q.person || personPages[q.choices[q.answer]];
  el.portrait.hidden = true; el["portrait-fallback"].hidden = false; el["portrait-fallback"].textContent = "사진 힌트를 준비 중이에요";
  if (!page) return;
  try {
    const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(page)}`);
    const data = await response.json(); const url = data.thumbnail?.source || data.originalimage?.source;
    if (!url) throw new Error("이미지 없음");
    if (q !== questions[current]) return;
    el.portrait.onload = () => { if (q === questions[current]) { el.portrait.hidden = false; el["portrait-fallback"].hidden = true; } };
    el.portrait.src = url;
  } catch { el["portrait-fallback"].textContent = "이 문제의 사진 힌트는 없어요"; }
}
function showPhotoHint() {
  if (answered || el.portrait.hidden) return;
  hintUsed = true; el["portrait-wrap"].classList.add("revealed"); el["photo-hint"].disabled = true; el["photo-hint"].textContent = "사진 힌트를 사용했어요";
}
function answer(index) {
  if (answered) return; answered = true;
  const q = questions[current], buttons = [...el.choices.children], correct = index === q.answer;
  buttons.forEach((button, i) => { button.disabled = true; if (i === q.answer) button.classList.add("correct"); else if (i === index) button.classList.add("wrong"); });
  el["photo-hint"].hidden = true;
  if (correct) { const earned = hintUsed ? 8 : 10; score += earned; el.score.textContent = score; el.feedback.textContent = `정답이에요! +${earned}점`; }
  else el.feedback.textContent = `아쉬워요. 정답은 “${q.choices[q.answer]}”입니다.`;
  el.next.hidden = false; el.next.textContent = current + 1 === questions.length ? "결과 보기" : "다음 문제 →";
}
function showResult() {
  document.querySelector(".quiz-card").hidden = true; el.result.hidden = false; el["final-score"].textContent = score;
  el.resultMessage.textContent = score === questions.length * 10 ? "완벽해요! 인물 퀴즈 박사네요." : "다시 도전해서 최고 점수를 노려보세요!";
}
el.next.addEventListener("click", () => { current += 1; current < questions.length ? renderQuestion() : showResult(); });
el["photo-hint"].addEventListener("click", showPhotoHint);
el.restart.addEventListener("click", () => { current = 0; score = 0; el.result.hidden = true; document.querySelector(".quiz-card").hidden = false; questions.sort(() => Math.random() - .5); renderQuestion(); });

(async () => { questions = await loadQuestions(); el.total.textContent = questions.length; renderQuestion(); })();
