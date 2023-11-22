function test1() {
    const arr = [];
    const drink = Array.from(document.querySelectorAll("li"))
    .reduce(function(arr, ul){
            arr.push(ul.textContent.toUpperCase());
            return arr;
        }, []);
        console.log(drink);
}

/**
 * 주어진 데이터를 일단 문자열로
 * 주어진 데이터를 split (, enter)단위로 한 후 
 * 그 데이터를 테이블에 넣어준다.
 * 
 */
function test2() {
    const arr = [];
    const data = 
    `김지영,25,010-1234-5678
    박준호,32,010-9876-5432
    이민지,28,010-5555-5555
    정승훈,45,010-1111-2222
    최현우,19,010-7777-8888
    장수민,37,010-4444-3333
    송지원,31,010-8888-9999
    이도현,26,010-2222-1111
    신영주,42,010-6666-7777
    강현우,23,010-3333-4444
    김지현,29,010-9999-8888
    이승희,35,010-4444-5555
    박동진,41,010-2222-3333
    최진우,20,010-7777-6666
    장윤서,27,010-5555-4444`
    ;
    const rows = data.split('\n').map(function(rows){
        return rows.split(',');
    });

    const tableBody = document.getElementById('contact').getElementsByTagName('tbody')[0];

    // 기존 내용 초기화
    tableBody.innerHTML = '';
    
    // 데이터 채우기
    rows.forEach(function (row) {
        const newRow = tableBody.insertRow(tableBody.rows.length);
  
        row.reduce(function (acc, cellData, index) {
          const cell = newRow.insertCell(index);
          cell.appendChild(document.createTextNode(cellData));
          return acc;
        }, '');
      });
}

function sortContactByAge(type) {
  const trs = Array.from(document.querySelectorAll("table#contact tbody tr"));
  
  const compareFunction = 
    type === 'asc' ? 
      function(tr1, tr2){
        // 해당태그의 자식/후손태그 중에 가져오기
        const age1 = tr1.querySelector("td:nth-child(2)").innerText;
        const age2 = tr2.querySelector("td:nth-child(2)").innerText;
        return age1 - age2;
      } : 
        function(tr1, tr2){
          const age1 = tr1.querySelector("td:nth-child(2)").innerText;
          const age2 = tr2.querySelector("td:nth-child(2)").innerText;
          return age2 - age1;
        };
  trs.sort(compareFunction);
  trs.forEach(function(tr) {
    // 마지막 자식요소로 추가
    document.querySelector("table#contact tbody").append(tr);
  });
}

function sortContactByName(type) {
  const trs = Array.from(document.querySelectorAll("table#contact tbody tr"));
  console.log(trs);

  let compareFunction;
  if(type === 'asc') {
    // 이름 오름차순
    compareFunction = function(tr1, tr2){
      const name1 = tr1.querySelector("td:first-child").innerText;
      const name2 = tr2.querySelector("td:first-child").innerText;
      if(name1 > name2) return 1;
      if(name1 < name2) return -1;
      return 0;
    };
  }
  else {
    // 이름 내림차순
    compareFunction = function(tr1, tr2){
      const name1 = tr1.querySelector("td:first-child").innerText;
      const name2 = tr2.querySelector("td:first-child").innerText;
      if(name1 > name2) return -1;
      if(name1 < name2) return 1;
      return 0;
    };
  }
  trs.sort(compareFunction);

  // DOM tree 구조
  trs.forEach(function(tr) {
    document.querySelector("table#contact tbody").append(tr);
  });

}