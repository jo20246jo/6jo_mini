// ==============변수..?==============//
const recordList = [
    {
        id: 1,
        date: "0404",
        length: "4",
        time: "1",
    },
    {
        id: 2,
        date: "0405",
        length: "10",
        time: "2",
    },
    {
        id: 3,
        date: "0406",
        length: "4",
        time: "1",
    },
];
let recordId = 3;
// ==============함수실행==============//

// 기록하기 버튼 클릭시 이벤트.
document.querySelector(".input-list").addEventListener("click", (e) => {
    if (!e.target.matches(".complete")) return;
    // if문으로입력값 비는게 있는지 체크

    // 각 인풋에 있는 밸류 객체로 배열에 저장하고
    const newRecord = {};
    // const $input = document.querySelector('.input.record');
    // const dateInput = $input.firstElementChild.firstElementChild.value;
    recordId++;
    newRecord.id = recordId;
    newRecord.date = dateInput;
    
    // console.log(e.target);
    // li태그로 만들어서.record-list에 어펜드차일드 할 예정.
});

document.querySelector(".record-list").addEventListener("click", (e) => {
    if (!e.target.matches(".remove-record")) return;
    // console.log(e.target);
    // e.target을 기준으로 해당하는 조상li 삭제
    // 및 id값 연동을 통해 배열의 객체또한 제거 할 예정
});
