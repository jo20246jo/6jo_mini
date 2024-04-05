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
    const newDate = document.querySelector('#date-input').value;
    const newLength = document.querySelector('#length-input').value;
    const newTime = document.querySelector('#time-input').value;
    // if문으로입력값 비는게 있는지 체크
    if(!newDate.length && !newLength.length && !newTime.length) return;
    // console.log(e.target);
    // 각 인풋에 있는 밸류 객체로 배열에 저장하고
    const newRecord = {};
    recordId++;
    newRecord.id = recordId;
    // 날짜 밸류 받기
    document.querySelector('#date-input').value = '';
    newRecord.date = newDate;
    // 뛴거리 밸류 받기
    document.querySelector('#length-input').value = '';
    newRecord.length = newLength;
    // 뛴시간 밸류 받기
    document.querySelector('#time-input').value = '';
    newRecord.time = newTime;
    recordList.push(newRecord);
    // li태그로 만들어서.record-list에 어펜드차일드
    const $newLi = document.createElement('li');
    $newLi.innerHTML = 
    `<div><span class="date">${newDate}</span></div>
    <div><span class="length">${newLength}km</span></div>
    <div><span class="time">${newTime}시간</span></div>
    <button class="remove-record">삭제하기</button>`;
    $newLi.dataset.id = recordId;
    $newLi.classList.add('ex-record');
    document.querySelector('.record-list').appendChild($newLi);
});

document.querySelector(".record-list").addEventListener("click", (e) => {
    if (!e.target.matches(".remove-record")) return;
    // console.log(e.target);
    // e.target을 기준으로 해당하는 조상li 삭제
    // 및 id값 연동을 통해 배열의 객체또한 제거 할 예정
});
// setInterval(() => {
//     const recordArr = JSON.stringify(recordList);
//     window.localStorage.setItem('records', recordArr);
// }, 100);
