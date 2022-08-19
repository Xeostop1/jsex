

$(document).ready(() => {
  // Trigger Navigation toggle button
  $('.trigger').on('click', function () {
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  // Trigger .gnb a 클릭 시 해당 위치로 스크롤 후 네비게이션 닫힘.
  $('.gnb a').on('click', function () {
    $('.gnb, .trigger').removeClass('active')
  })

  // jQuery.scrollTo
  $('.gnb a, .goToTop').on('click', function (e) {
    $.scrollTo(this.hash || 0, 800)
    e.preventDefault()
  })

  // scroll down 시 active class 추가
  $(window).on('scroll', () => {
    $(window).scrollTop() > 50 ? $('header, .goToTop').addClass('active') : $('header, .goToTop').removeClass('active')
  })
})


window.addEventListener('load',function (){
  // Trigger Navigation toggle button
 

  //=========배경화면정리==================
  
 // https://developer.mozilla.org/ko/docs/Web/API/Window/load_event

// Fetch the items from the JSON file
// JSON 파일에서 항목 가져오기
 function loadItems() {
  return fetch('/src/data/data.json')
    .then(response => response.json())
    .then(json =>json.items);
}

// Update the list with the given items
// 지정된 항목으로 목록 업데이트
function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// Update the list with the given items
// 지정된 항목으로 목록 업데이트
function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
}


//section button list 목록 HTML 생성
function createHTMLString(item) {
  return `
  <button class="btn colorBtn" + "${item}" data-key=" ${item.title}" data-value=" ${item.title}">
  "${item.title}"
 </button>
    `;
}

// Create HTML list item from the given data item
// 지정된 데이터 항목에서 HTML 목록 항목 생성
function createHTMLString(item) {
  return `
    <li class="item">
        <img src="${item.image}" alt="${item.title}" class="item__thumbnail" />
        <div class ="barDiv"></div>
        <button> ${item.year} </button>
        <br>
        <span class="item__description">${item.content}</span>
    </li>
    `;
}

// items 버튼이  클릭되면  displayItems 해당 아이템을 필터링을 해서 보여줘라

function onButtonClick(event, items) {
  const dataset = event.target.dataset;//dataset은 전용 속성: 읽기/쓰기 액세스 제공 
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return; //만약 key가 null이거나 value가 null이면 끝내라
  }

  displayItems(items.filter(item => item[key] === value));
}


function setEventListeners(items) {
  const logo = document.querySelector('.btnAll');
  const buttons = document.querySelector('.buttons');
  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', event => onButtonClick(event, items));
}


// main
loadItems()
  .then(items => {
   displayItems(items);
   setEventListeners(items);
  })
  .catch(console.log);

})//close
