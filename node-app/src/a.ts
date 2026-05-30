interface User {
    firstName: string,
    lastName: string,
    age: number
};

function isLegal(user: User){
    if(user.age > 18){
        console.log("User is legal");
    } else {
        console.log("User is illegal");
    }
}

function greet(user: User){
    console.log("Hello "+user.firstName);
}

isLegal({
    firstName: "Ashutosh",
    lastName: "Vishwakarma",
    age: 23
})

greet({
    firstName: "Ashutosh",
    lastName: "Vishwakarma",
    age: 23
})