### homework-01

---

- 바닐라 프로젝트에서 만든 헤더를 React를 이용하여 구현
  ![header](https://github.com/ParkjiDev/vanilla-to-react/assets/148675654/1529058f-1537-4de5-8612-94776d9da5c8)
- 카테고리 호버 시 펼쳐지는 메뉴에 관한 데이터는 header-data.js 파일에 저장
- header-data.js에 저장되어 있는 카테고리를 header.jsx의 categoryList()를 통해 그려줌
  ![code-1](https://github.com/ParkjiDev/vanilla-to-react/assets/148675654/560bece5-8039-4a11-b1de-6800ff7de908)
  ![code-2](https://github.com/ParkjiDev/vanilla-to-react/assets/148675654/72e1dea3-5791-4cab-b232-659d13e6ce8d)
- 관련 파일 바로가기
  - [header-data.js](https://github.com/ParkjiDev/vanilla-to-react/blob/main/src/pages/header/header-data.js)
  - [header.jsx](https://github.com/ParkjiDev/vanilla-to-react/blob/main/src/pages/header/header.jsx)

---

### 궁금한 점

- 헤더 사진에 빨간색 화살표로 표시한 부분엔 사용자의 로그인 여부에 따라 출력되는 화면이 다릅니다. .header\_\_div-top 영역 내부에 해당 내용을 그려주게 되는데, header.jsx의 createRoot(document.getElementById("root")).render() 가 모두 실행된 이후 로그인 여부를 판별하는 방법이 있을까요? react의 state와 관련이 있을 듯 한데.. 이 부분은 나중에 수업을 통해 배우게 되는지요.
- 스크롤에 이동에 따라 헤더 모양이 달라지는데, 이 부분 또한 위의 질문과 동일하게 render()가 모두 실행된 이후 스크롤에 관한 코드가 실행될 수 있는 방법이 있는지 궁금합니다. 스크롤에 관한 코드는 header.jsx 하단에 주석처리 해두었습니다.(현재로선 코드 실행 시 headerSimple이 null이므로 오류가 발생합니다.)
