function greet(person: string, date: Date){
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

// Date()는 string을 반환하기 때문에 에러 발생
greet("Maddsion", Date());
