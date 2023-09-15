function personInfo(firstName, lastName, age) {
    let data;
    data = {};
    data.firstName = firstName;
    data.lastName = lastName;
    data.age = age;

    return (data);
}

console.log(personInfo("Peter",
"Pan",
"20"
));
console.log("-------------------------");
personInfo("George",
"Smith",
"18"
);