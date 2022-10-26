alert("مرحباً بك في موقعي الذي سيحسب درجتك!!");

let grade = prompt("اكتب درجتك بالأرقام");

console.log(prompt);
//if
if (grade >= 90) {
  console.log(
    "%cلقد حصلت على امتياز 🥳",
    "color: black; background: white; font-size: 30px"
  );
} else if (grade >= 80) {
  console.log(
    "%cلقد حصلت على جيد جداً🤩",
    "color: black; background: RED; font-size: 30px"
  );
} else if (grade >= 70) {
  console.log(
    "c%لقد حصلت على جيد🙂",
    "color: black; background: green; font-size: 30px"
  );
} else if (grade >= 60) {
  console.log(
    "لقد حصلت على مقبول😕",
    "color: black; background: white; font-size: 30px"
  );
} else if (grade >= 50) {
  console.log(
    "%cقد حصلت على ضعيف☹️",
    "color: green; background: yellow; font-size: 30px"
  );
} else if (grade < 50) {
  console.log("%cراسب💔", "color: black; background: blue; font-size: 30px");
}
