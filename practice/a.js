var parent = function() {

}

parent.prototype.name = "123"

let p1 = new parent()
console.log(p1.name)
console.log(p1.__proto__ === parent.prototype);

