//todo 전역변수
const todoList = [];
console.log(todoList);

// 달력 클릭하면 회색 배경으로 변경
//.click-bg 추가하기
let clickBgMode = false;

const $modalOverlay = document.querySelector(".modal-overlay");
const $ulDate = document.querySelector("ul.date");

$ulDate.addEventListener("click", (e) => {
  const $dayBoxLi = e.target.closest(".day-box");

  //회색 배경이 있으면 이 함수를 종료한다
  [...$ulDate.children].forEach(($li) => {
    if ($li.classList.contains("click-bg")) {
      $li.classList.remove("click-bg");
    }
  });

  //회색 배경으로 변환
  $dayBoxLi.classList.toggle("click-bg");
});

//오른쪽 마우스 클릭 시 모달창 나오는 작업
document.querySelector("ul.date").addEventListener("contextmenu", (e) => {
  e.preventDefault();

  //style 속성 추가. left, right 넣기

  $modalOverlay.style.top = e.pageY + "px";
  $modalOverlay.style.left = e.pageX + "px";

  //.show 추가
  $modalOverlay.classList.add("show");
  if ($modalOverlay.classList.contains("show")) {
    document.querySelector("ul.date").addEventListener("click", () => {
      $modalOverlay.classList.remove("show");
    });
  }

  // sub 일정 숨기기
  document.querySelector(".list_agenda").classList.remove("agenda_show");
});

// 모달창 작업
document.querySelector(".modal-overlay").addEventListener("click", (e) => {
  //변수 선언

  //삭제 버튼 클릭 시 모달창 닫기
  if (e.target.matches(".modal-delete")) {
    $modalOverlay.classList.remove("show");
  }
  //저장 누르면
  else if (e.target.matches(".modal-save")) {
    // 배열에 모달 입력값 저장
    const $inputTitle = document.querySelector(".modal-title input").value;
    const $textareaMemo = document.querySelector(".modal-memo textarea").value;
    const todoId = () => {
      return todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1;
    };
    const NewTodo = { id: todoId(), title: $inputTitle, memo: $textareaMemo };

    //모달 내용 sub하단에 저장
    document.querySelector("p.event_content").textContent = $inputTitle;
    document.querySelector(".event_memo").textContent = $textareaMemo;

    //sub 하단 일정 나오게 하기 //.agenda_show
    document.querySelector(".list_agenda").classList.add("agenda_show");

    todoList.push(NewTodo);

    //모달 창 닫기
    $modalOverlay.classList.remove("show");

    //memo에  <div class="memo-text-box"><p></p></div> 넣기
  }
});
