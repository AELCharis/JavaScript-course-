
/*
var john = {
    name: 'John',
    yearOfBirthL: 1990,
    job: 'teacher'

};

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    };


Person.prototype.calculateAge = function () {
    console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('Charis', 1989, 'teacher');
var jane = new Person('Jane', 1990, 'designer');
var mark = new Person('Mark', 1970, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

*/

//Object.create


/*
var personProto = {
    calculateAge: function () {
        constructor.log(2019 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1989;
john.job = 'teacher';

var jane = Object.create(personProto,
    {
                name: {value: 'Jane'},
                yearOfBirth: { value: 1989},
                job: {value: 'designer'}
});
*/


