class Pet {
    // 프로퍼티 생성
    constructor(name, color) {
        this.color = color;
        this.name = name;
    }
    // 메서드 생성
    run() {
        document.write(`<h1>${this.color} ${this.name}가 달린다. </h1><hr>`);
    }
}

const pet1 = new Pet("바둑이", "하얀");
pet1.run();

class Cat extends Pet {
    constructor(name, color, breed) {
        super(name, color);
        this.breed = breed;
    }

    viewInfo() {
        document.write(`<h1> 이름 : ${this.name} 품종 : ${this.breed}, 색깔 : ${this.color} </h1><hr>`);
    }
}

const cat1 = new Cat("보리","흰색","페르시안 친칠라");
cat1.viewInfo();
cat1.run(); 