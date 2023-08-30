# 프리온보딩 이슈 페이지 만들기

특정 깃헙 레파지토리(https://github.com/facebook/react/issues)의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

<br />

## 목차

- [🐼 만든 사람](#️-만든-사람)
- [🛠️ 기술 스택](#️-기술-스택)
- [💻 실행 방법](#️-실행-방법)
- [🔗 배포 링크](#-배포-링크)
- [📂 폴더 구조](#-폴더-구조)

<br />

### 🐼 만든 사람

- 박정민

<br />

### 🛠️ 기술 스택

<img src="https://img.shields.io/badge/
React-61DAFB?style=flat&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/
JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/
Axios-5A29E4?style=flat&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/
Styled Components-DB7093?style=flat&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/
React Router-CA4245?style=flat&logo=react router&logoColor=white">
<br />
<img src="https://img.shields.io/badge/
ESlint-4B32C3?style=flat&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/
Prettier-F7B93E?style=flat&logo=prettier&logoColor=black">

<br />

### 💻 프로젝트 실행 방법

```zsh
$ npm install
$ npm start
```

- git clone후, 위의 명령어를 순서대로 실행하면 프로젝트를 이용하실 수 있습니다.

<br />

### 🔗 배포 링크

- [Issues Page](https://pre-issues-page.netlify.app/)

<br />

### 📂 폴더 구조

```
📦pre-onboarding-12th-2
 ┃
 ┣ 📂src
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜requests.js
 ┃ ┃ ┗ 📜util.js
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┣ 📜IssuesList.jsx
 ┃ ┃ ┗ 📜MarkdownRender.jsx
 ┃ ┣ 📂images
 ┃ ┃ ┗ 📜ad_image.webp
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜IssuesDetail.jsx
 ┃ ┃ ┗ 📜IssuesPage.jsx
 ┃ ┣ 📜App.css
 ┃ ┣ 📜App.js
 ┃ ┣ 📜App.test.js
 ┃ ┣ 📜index.css
 ┃ ┣ 📜index.js
 ┃ ┣ 📜reportWebVitals.js
 ┃ ┗ 📜setupTests.js
 ┣ 📜.eslintrc.js
 ┣ 📜.gitignore
 ┣ 📜.prettierrc.js
 ┣ 📜README.md
 ┣ 📜jsconfig.json
 ┗ 📜package.json
```
