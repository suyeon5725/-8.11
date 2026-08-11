# DASOM NOTE

다솜모임, 헬로키티 카페, 몽골 여행의 세 가지 추억을 담은 반응형 개인 홈페이지입니다.

## GitHub Pages에 올리기

1. 이 폴더를 새 GitHub 저장소에 업로드합니다.
2. 저장소의 **Settings → Pages**를 엽니다.
3. **Deploy from a branch**에서 `main` 브랜치와 `/(root)`를 선택해 저장합니다.
4. 잠시 후 표시되는 주소로 홈페이지를 열 수 있습니다.

## Vercel에 올리기

Vercel에서 GitHub 저장소를 연결할 때 **Root Directory**를 `./`(저장소 최상단)으로 두세요. 이 프로젝트는 별도의 빌드 과정이 없는 정적 사이트입니다.

- Framework Preset: `Other`
- Build Command: 비워두기
- Output Directory: 비워두기

`index.html`, `style.css`, `script.js`, `assets` 폴더, `vercel.json` 파일이 모두 같은 최상단에 있어야 합니다.

## 구성

- `index.html` — 페이지 구조와 소개 문구
- `style.css` — 반응형 레이아웃 및 직접 제작한 CSS 일러스트
- `script.js` — 맨 위로 이동 버튼
- `assets/` — 다솜모임 및 헬로키티 이미지
- `vercel.json` — Vercel 배포 설정

각 카드의 링크는 사용자가 제공한 원문으로 새 창에서 열립니다.
