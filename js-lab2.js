"use strict";

class AddressBook {
    constructor() {
        this.contacts = [];

    }
    add(info) {
        this.contacts.push(info);

    }

    deleteAt(index) {
        this.contacts.splice(index, 1);

    }

    print() {

        for (let i= 0; i<this.contacts.length; i++) {
            console.log (`
            Name: ${this.contacts[i].name}
            email: ${this.contacts[i].email}
            Phone Number: ${this.contacts[i].phone}
            Relation: ${this.contacts[i].relation}` );
        }

    }
    
}

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

const address = new AddressBook();

while (true) {
    const choice = prompt("Would you like to add, delete, print, or quit?");

    if (choice === "add") {
        let name = prompt("Please provide a name.");
        let email = prompt("Please provide an email address.");
        let phone = prompt ("Please provide a phone number.");
        let relation = prompt ("Please describe your relation to this contact.");

        address.add (new Contact (name, email, phone, relation,));


    }
    else if (choice === "delete") {
        let index = prompt("Select the index at which you would like to delete.");
        address.deleteAt(index);

    }
    else if (choice === "print") {
        address.print();

    }
    else if (choice === "quit") {

        break;

    }


}