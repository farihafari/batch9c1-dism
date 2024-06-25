class employees {
    constructor(name, email, phone, salary, address) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.s = salary;
        this.address = address;
        // alert("hello world")
    }
    workingHours(h) {
        document.querySelector("#demo").innerHTML = `<h1> ${this.name} has ${h} working hours</h1>`

    }
}
class developer extends employees {
    constructor(a, b, c, d, e, skills) {
        super(a, b, c, d, e)
        this.skill = skills;
    }
    hiring(status) {
        document.querySelector("#demo").innerHTML += `<h1> ${this.name} is a ${this.skill} and he is hired as ${status}</h1>`
    }
}
let d1 = new developer("ali", "a@gmail.com", 485634767, "50k", "abc karachi", "php developer");
d1.workingHours(9);
d1.hiring("senior developer");
// let em1 = new employees("ali", "a@gmail.com", 485634767, "50k", "abc karachi");
// em1.workingHours(5)