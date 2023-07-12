const person = {
  talk() {
    // The traditional function() when used within the function of objec => this points to global object.
    /*setTimeout(function () {
      console.log("this", this);
    }, 1000)*/

    // Arrow function by default inherit the obj. reference in this keyword.
    setTimeout(() => console.log("this", this), 1000);
  }
}

person.talk();