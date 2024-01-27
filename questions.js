// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Javascript is the progamming language of the ____?",
    answer: "Web",
    options: ["Desktop", "Web", "Mobile", "Server"],
  },
  {
    numb: 2,
    question: "What is the default value of an uninitialised variable?",
    answer: "undefined",
    options: ["0", "undefined", "null", "NaN"],
  },
  {
    numb: 3,
    question: "Which symbol is used separate JavaScript statements?",
    answer: "Semicolon (;)",
    options: ["Semicolon (;)", "Colon (:)", "Comma (,)", "Hyphen (_)"],
  },
  {
    numb: 4,
    question:
      " Which property is used to define the HTML content to an HTML element with a specific id?",
    answer: "innerHTML",
    options: ["innerText", "innerContent", "innerHTML", "None of the above."],
  },

  {
    numb: 5,
    question: "Which JavaScript method is used to write HTML output?",
    answer: "document.write()",
    options: [
      "document.write()",
      "document.output()",
      "console.log()",
      "document.writeHTML()",
    ],
  },

  {
    numb: 6,
    question: "Which JavaScript method is used to write into an alert box?",
    answer: "window.alert()",
    options: [
      " window.alertHTML()",
      "window.alert()",
      " window.alertBox()",
      " window.alertContent()",
    ],
  },

  {
    numb: 7,
    question: "In JavaScript, single line comment begins with ___?",
    answer: "//",
    options: ["#", "/*", "//", "$"],
  },

  {
    numb: 8,
    question:
      "In JavaScript, multi-line comments start with __ and end with ___?",
    answer: "/* and /*",
    options: ["/* and /*", "-- and --", "## and ##", "// and //"],
  },

  {
    numb: 9,
    question:
      "How many keywords are there in JavaScript to declare variables or constants?",
    answer: "3",
    options: ["4", "3", "2", "1"],
  },

  {
    numb: 10,
    question:
      "What is the main difference between var and let keywords in JavaScript?",
    answer:
      "var defined function scoped variable while let define block scoped variable",
    options: [
      "var defined function scoped variable while let define block scoped variable",
      "The value of a variable declared with var can be changed while the value of a variable declared with let cannot be changed",
      "var defines a variable while let defines a constant",
      "All of the above",
    ],
  },

  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 11,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
