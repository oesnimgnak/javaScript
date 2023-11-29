
// 프로미스 체이닝
async function whatsYourFavorite() {
    let fav = "Javascript";
    // resolve 일때 Javascript를 반환
    return new Promise((resolve, reject) => resolve(fav));      
}

async function displaySubject(subject) {
    return `Hello, ${subject}`;      
}
  
whatsYourFavorite()
  .then(displaySubject)  // .then(response => displaySubject(response))
  .then (console.log); 