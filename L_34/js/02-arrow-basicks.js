const user = {
    name: "John ",
    age: 30,
    showName: function (){
        console.log(this.name)
        console.log(this.age)
    }
};

user.showName();

const user1 = {
    name: "Jane ",
    age: 25,
    showName(){
        console.log(this.name)
        console.log(this.age)
    }
};

user1.showName();

function showName(){
    console.log(this.name)
}

const user2 ={
    name:"Bob",
    age:40,
    showName:showName
};

const user3 = {
    name:"Alice",
    age:35,
    showName:showName
}

user2.showName();
user3.showName();