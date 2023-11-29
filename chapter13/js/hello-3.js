
// 프로미스 체이닝
function whatsYourFavorite() {
    let fav = "Javascript";
    // resolve 일때 Javascript를 반환
    return new Promise((resolve, reject) => resolve(fav));      
  }
  
  function displaySubject(subject) {
    // resolve 일때 whatsYourFavorite() 함수의 결과 Javascript를 받아서 Hello와 함께 프로미스 반환
    return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));      
  }
  
  whatsYourFavorite()
  .then(displaySubject)  
  .then (console.log);   