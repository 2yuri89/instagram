// document 객체를 대상으로 이벤트 리스너를 추가합니다.
// 이벤트 종류는 "DOMContentLoaded"입니다.
document.addEventListener("DOMContentLoaded",
    // 이벤트 핸들러임
    // html 코드가 로딩된 후 비동기적으로 수행할 작업들임
    function(e){
        // input 태그를 찾아 button 변수에 저장
        let button = document.querySelector("input")
        // button변수에 이벤트 리스너를 추가
        // 이벤트 종류는 "input임
        button.addEventListener("input",
            function(e){
                //콘솔에 입력창의 값을 출력
                console.log(e.target.value)
            }
        )
    }
)

// <p> 태그에서 인라인 이벤트 모델로 호출할 함수를 정의
// 함수의 이름은 hi
function hi(){
    // alert()를 띄워 "hi"를 출력
    alert("hi")
}