let questions = [
  {
    id: 1,
    question: "In which American city is the Golden Gate Bridge located?",

    options: ["San Francisco", "San Diego", "San Antonio", "San jose"],
  },
  {
    id: 2,
    question: "Which country is the second biggest in the world?",

    options: ["Brazil", "Russia ", "China", "Canada"],
  },
  {
    id: 3,
    question: "What is a nickname for New York City?",

    options: ["Pink City", "The Big Apple", "Barna", "Land Of Raising Sun"],
  },
  {
    id: 4,
    question: "Which country does not belong in asia?",

    options: ["Kenya", "Malaysia", "Singapore", "India "],
  },
  {
    id: 5,
    question: "Which mountain is the closest to space?",

    options: [
      "Mount Everest",
      "Table Mountain",
      "Mount Chimborazo",
      "Mount Fuji",
    ],
  },
  {
    id: 6,
    question: "Which state in the US was once called Deseret?",

    options: ["Alaska", "California", "Ohio", "Utah"],
  },
  {
    id: 7,
    question: "What is the worlds largest country",

    options: ["Canada ", "China", "Russia", "United States"],
  },
  {
    id: 8,
    question: "What is the smallest continent in the world?",

    options: ["Asia", "Australia", "Africa", "Europe"],
  },
  {
    id: 9,
    question: "How many states make up the united states ?",

    options: ["50", "54", "29", "26"],
  },
  {
    id: 10,
    question:
      "In which country would you be if you were traveling the Taj Mahal?",

    options: ["China", "India", "Korea", "Pakistan"],
  },
];

let question_count = 0;
//let points = 0;
Max_Questions = 10;
let Points = 0;
let firstPoints = 0;
let secondPoints = 0;
let thirdPoints = 0;
// let fourthPoints = 0;

window.onload = function () {
  show(question_count);
};

function next(e) {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    location.href = "mailchimpform.html";
  }

  let user_answer = document.querySelector(".option.active").innerHTML;

  //check answer
  // for (let i = 0; i < questions.length; i++) {

  // if (user_answer == questions[0].options[0]) {
  //   secondPoints += 1;
  //   fourthPoints += 1;
  // }
  // if (user_answer == questions[0].options[1]) {
  //   firstPoints += 1;
  // }
  // if (user_answer == questions[0].options[2]) {
  //   thirdPoints += 1;
  // }

  // if (user_answer == questions[1].options[0]) {
  //   firstPoints += 1;
  //   fourthPoints += 1;
  // }
  // if (user_answer == questions[1].options[1]) {
  //   secondPoints += 1;
  // }
  // if (user_answer == questions[1].options[2]) {
  //   thirdPoints += 1;
  // }

  // }
  let arr = [
    "San Francisco",
    "Canada",
    "The Big Apple",
    "Kenya",
    "Mount Chimborazo",
    "Utah",
    "Russia",
    "Australia",
    "50",
    "India",
  ];
  for (let i = 0; i < questions.length; i++) {
    if (user_answer == arr[i]) {
      // firstPoints += 1;
      Points += 1;
      console.log("one adding", Points);
    }
  }
  // for (let i = 0; i < questions.length; i++) {
  //   if (user_answer == questions[i].options[1]) {
  //     secondPoints += 1;
  //   }
  // }
  // for (let i = 0; i < questions.length; i++) {
  //   if (user_answer == questions[i].options[2]) {
  //     thirdPoints += 1;
  //   }
  // }
  // for (let i = 0; i < questions.length; i++) {
  //   if (user_answer == questions[i].options[3]) {
  //     //console.log("hana")
  //     fourthPoints += 1;
  //   }
  // }
  sessionStorage.setItem("points", Points);
  if (Points >= 7) {
    sessionStorage.setItem("user_type", "Best");
  }
  // secondPoints
  else if (Points >= 4 && Points < 7) {
    sessionStorage.setItem("user_type", "Neutral");
  }
  //thirdPoints
  else if (Points < 4) {
    sessionStorage.setItem("user_type", "Worst");
  }
  //fourthPoints
  // else if (
  //   fourthPoints > secondPoints &&
  //   fourthPoints > thirdPoints &&
  //   fourthPoints > firstPoints
  // ) {
  //   sessionStorage.setItem("user_type", "Hourglass");
  // }
  //firstPoints === secondPoints
  // else if (firstPoints == secondPoints && firstPoints > thirdPoints) {
  //   sessionStorage.setItem("user_type", "Montessori");
  // }
  // //secondPoints == thirdPoints
  // else if (secondPoints == thirdPoints && secondPoints > firstPoints) {
  //   sessionStorage.setItem("user_type", "Neutral");
  // }
  // //thirdPoints == firstPoints
  // else if (thirdPoints == firstPoints && thirdPoints > secondPoints) {
  //   sessionStorage.setItem("user_type", "Neutral");
  // }
  else {
    sessionStorage.setItem("user_type", "Neutral");
  }

  // let user_result = user_answer;
  // sessionStorage.setItem("user_result", user_result);
  // sessionStorage.setItem("firstPoints", firstPoints);
  // sessionStorage.setItem("secondPoints", secondPoints);
  // sessionStorage.setItem("third", thirdPoints);
  // sessionStorage.setItem("fourth", fourthPoints);
  sessionStorage.setItem("firstPoints", firstPoints);
  sessionStorage.setItem("secondPoints", secondPoints);
  sessionStorage.setItem("thirdPoints", thirdPoints);

  //let coloranswer = document.querySelector("li.option.active");
  //e.target.coloranswer.classList.add("correct");

  question_count++;
  show(question_count);
  toggleActive();
  //Update the progress Bar

  const progressBarFull = document.getElementById("progressBarFull");

  progressBarFull.style.width = ` ${
    (question_count / Max_Questions) * 100 + 10
  }%`;
}

function show(count) {
  //progress text
  const progressText = document.getElementById("progressText");

  progressText.innerText = ` ${count + 1}/${Max_Questions}`;

  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;
  ///////no of questions

  question.innerHTML = `
  <p class="iamquestion"> ${questions[count].question}</p>
   <ul class="option_group">
  <li><span class="option">${first}</span></li>
  <li ><span class="option">${second}</span></li>
  <li ><span class="option">${third}</span></li>
  <li ><span class="option">${fourth}</span></li>
 
 
</ul> 
  `;

  /* question.innerHTML = questions[question_count].options.map((single) => {
    (
    `<li><span class="option">${single}</span></li>`
    )
  }) */

  //   if(question_count == 11 ){
  //     let [first, second , third , fourth , fifth] = questions[count].options;
  //     question.innerHTML = `
  //   <p class="iamquestion"> ${questions[count].question}</p>
  //    <ul class="option_group">
  //   <li><span class="option">${first}</span></li>
  //   <li ><span class="option">${second}</span></li>
  //   <li ><span class="option">${third}</span></li>
  //   <li ><span class="option">${fourth}</span></li>
  //   <li ><span class="option">${fifth}</span></li>

  // </ul>
  //   `;
  //   }

  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll(".option");

  //  setTimeout(() => {
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
  //  },2000)
}
