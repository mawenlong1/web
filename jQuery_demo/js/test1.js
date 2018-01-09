function demo() {
    alert('hello');
}

$(".demo").click(function () {

    const arr = [1, 2, 3, 4];
    console.log('hello world');
    if(true){
        var color = "blue";
        var num = 1;
        return num;
    }
    alert(color);
    alert(num);
})



function Person(name,age,job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["aaaa","bbbbb"];
}
Person.prototype = {
    constructor : Person,
    sayName : function () {
        alert(this.name);
    }
}
var person1 = new Person("ccc",32,"cdss");
var person2 = new Person("cdsdc",23,"dcsd");
person1.friends.push("dddddd");
alert(person1.friends);
alert(person2.friends);
alert(person1.friends == person2.friends);
alert(person1.sayName() == person2.sayName());


















