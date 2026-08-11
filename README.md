# 누구게? 인물 퀴즈

설치와 빌드가 필요 없는 정적 웹 게임입니다. 기본적으로 샘플 문제 5개로 동작하며, Firebase Firestore를 연결하면 문제를 온라인에서 관리할 수 있습니다.

## Firebase 연결

1. Firebase에서 프로젝트와 **웹 앱**을 만듭니다.
2. Firestore Database를 만든 뒤, `firestore.rules` 내용을 Rules 탭에 붙여넣어 배포합니다.
3. `app.js` 맨 위 `firebaseConfig`의 빈 값들을 Firebase가 제공한 설정값으로 채웁니다.
4. Firestore에 `questions` 컬렉션을 만들고 문서를 추가합니다.

문서 예시:

```json
{
  "category": "영화",
  "question": "영화 기생충을 연출한 감독은 누구일까요?",
  "choices": ["봉준호", "박찬욱", "김지운", "류승완"],
  "answer": 0
}
```

`answer`는 정답의 위치이며, 첫 번째 선택지는 `0`입니다.

## GitHub와 Vercel 배포

1. 이 `person-quiz` 폴더를 새 GitHub 저장소에 올립니다.
2. Vercel에서 **Add New → Project**를 선택하고 GitHub 저장소를 연결합니다.
3. Framework Preset은 **Other**, 배포 폴더는 저장소 루트로 둔 뒤 Deploy를 누릅니다.

Vercel과 Firebase의 무료 플랜으로 시작할 수 있고, 방문자는 브라우저에서만 게임을 실행합니다.
