////////////////////////////////////////////
class OldSyntax {
    constructor() {
        this.name = 'mike';
        this.getGreeting = this.getGreeting.bind(this)
    }
    getGreeting() {
        return `my name is ${this.name}`;
    }
}


const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting
console.log(getGreeting());
///////////////////////

class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return `my name is ${this.name}`
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;

console.log(newGetGreeting());