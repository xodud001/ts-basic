function greet(person: string, date: Date){
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

// 원하는 Date 객체는 new Date()로 생성해야 한다.
greet("Maddsion", new Date());
