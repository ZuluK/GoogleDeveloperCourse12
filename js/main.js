

//Persistent data structures for efficient immutablity

/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "ballroom";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room === "dining room") {
    weapon = "knife";
    solved = true;
    suspect = "Mr. Parkes";
} else if (room === "gallery") {
    weapon = "trophy"
    solved = true;
    suspect = "Ms. Van Cleve";
} else if (room == "ballroom") {
    weapon = "poison";
    solved = true;
    suspect = "Mr. Kalehoff";
} else {
    weapon = "pool stick";
    solved = true;
    suspect = "Mrs. Sparr";

}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
var x = 1;

while ( x <= 20) {
if ((x % 3 === 0) && (x % 5 === 0))  {
    console.log ("JuliaJames");
  }  else if ((x % 5 === 0) && (x % 3 !== 0)) {
      console.log ("James");
  } else if ((x % 3 === 0) && (x % 5 !== 0)){
  console.log ("Julia");
  } else if (x % 5 !== 0 && x % 3 !== 0 ) {
      console.log(x);

  }
 x=x+1;
}
