/*Question section starts here*/
const questionsUnit1 = [
  {
    question: "Which of the following best defines a database?",
    options: {
      A: "A collection of interrelated files stored on a computer",
      B: "A structured collection of data that allows for efficient retrieval and manipulation",
      C: "A system designed solely for backup and recovery purposes",
      D: "A set of unrelated data files",
    },
    correct: "B",
  },
  {
    question: "What characteristic of a database helps minimize redundancy?",
    options: {
      A: "Data independence",
      B: "Centralized management",
      C: "Normalization",
      D: "Flat file storage",
    },
    correct: "C",
  },
  {
    question:
      "Which of the following is a common disadvantage of using a database?",
    options: {
      A: " Increased data sharing capabilities",
      B: "Complexity in design and management",
      C: "Enhanced data security",
      D: "Automatic Data backup",
    },
    correct: "B",
  },
  {
    question:
      "In which scenario is a database preferable over a traditional file system?",
    options: {
      A: "Managing a small amount of data",
      B: "Storing data for offline access",
      C: "Running complex queries on large datasets",
      D: "Simple text document storage",
    },
    correct: "C",
  },
  {
    question: "Which of the following is NOT a type of database user?",
    options: {
      A: "Database Administrator",
      B: "Application Developer",
      C: "System Architect",
      D: "End User",
    },
    correct: "C",
  },
  {
    question: "In the context of data models, what is a schema?",
    options: {
      A: "A physical representation of data",
      B: "A conceptual blueprint that defines the structure of a database",
      C: "A specific instance of data",
      D: "A collection of relationships only",
    },
    correct: "B",
  },
  {
    question:
      "What concept refers to the ability to change the schema without affecting the existing data?",
    options: {
      A: "Data Redundancy",
      B: "Data Independence",
      C: "Schema Normalization",
      D: "Logical Data Modeling",
    },
    correct: "B",
  },
  {
    question:
      "Which architecture divides a database system into three layers: presentation, application logic, and data storage?",
    options: {
      A: "Two-Tier Architecture",
      B: "Monolithic Architecture",
      C: "Client-Server Architecture",
      D: "Three-Tier Architecture",
    },
    correct: "D",
  },
  {
    question: "What does the database system structure typically consist of?",
    options: {
      A: "Only the user interface",
      B: "Data,database system, database application",
      C: "Data alone",
      D: "Physical storage only",
    },
    correct: "B",
  },
  {
    question:
      "Which of the following best describes a client-server architecture?",
    options: {
      A: "Data is processed only on the client side",
      B: " The server is responsible for storing data, while clients provide the user interface",
      C: "All processing is done by the server, requiring no client-side resources",
      D: "The client and server share equal responsibility for processing",
    },
    correct: "B",
  },
  {
    question: "In an ER diagram, how is a relationship represented?",
    options: {
      A: "Rectangle",
      B: "Circle",
      C: "Diamond",
      D: "Triangle",
    },
    correct: "C",
  },
  {
    question:
      "Which of the following is NOT an attribute of an entity in an ER model?",
    options: {
      A: "Name",
      B: "Age",
      C: "Relationship",
      D: "Date of Birth",
    },
    correct: "C",
  },
  {
    question: "What is an entity set in the context of an ER diagram?",
    options: {
      A: " A collection of similar relationships",
      B: " A collection of entities of the same type",
      C: "A single instance of an entity",
      D: "A type of attribute",
    },
    correct: "B",
  },
  {
    question:
      "What type of relationship exists when an entity can have multiple occurrences in another entity?",
    options: {
      A: "One-to-one",
      B: "One-to-many",
      C: "Many-to-one",
      D: "Many-to-many",
    },
    correct: "B",
  },
  {
    question: "Which of the following defines specialization in ER modeling?",
    options: {
      A: "Merging multiple entities into one",
      B: "Creating sub-entities from a parent entity based on some distinguishing characteristics",
      C: "Identifying common features from multiple entities",
      D: "Establishing relationships between entities",
    },
    correct: "B",
  },
  {
    question: "Generalization in ER modeling is the process of:",
    options: {
      A: "Creating specific sub-entities from a general entity",
      B: " Identifying a single entity from multiple entities",
      C: "Merging attributes from different entities",
      D: "Defining relationships based on shared attributes",
    },
    correct: "A",
  },
  {
    question: "What does aggregation in an ER model allow you to do?",
    options: {
      A: "Simplify relationships between entities",
      B: "Combine multiple entities into one",
      C: "Removw redundant attributes",
      D: "Define relationships at a higher level of abstraction",
    },
    correct: "D",
  },
  {
    question: "Which key uniquely identifies a record within a table?",
    options: {
      A: "Foreign Key",
      B: "Composite Key",
      C: "Primary Key",
      D: "Unique Key",
    },
    correct: "C",
  },
  {
    question: "Which type of key can consist of two or more attributes?",
    options: {
      A: "Foreign Key",
      B: "Candidate Key",
      C: "Composite Key",
      D: "Primary Key",
    },
    correct: "C",
  },
  {
    question: "What does a foreign key represent in a relational database?",
    options: {
      A: "A unique identifier for a record in the same table",
      B: "A reference to a primary key in another table",
      C: "A combination of multiple attributes",
      D: "An attribute that can be null",
    },
    correct: "B",
  },
  {
    question: "In an ER diagram, what does a dashed line typically represent?",
    options: {
      A: "A weak relationship",
      B: "A regular relationship",
      C: "A non-identifying relationship",
      D: "A mandatory relationship",
    },
    correct: "C",
  },
  {
    question: "Which of the following is a benefit of normalization?",
    options: {
      A: "Increased data redundancy",
      B: "Improved data integrity",
      C: "More complex database design",
      D: "Higher cost of storage",
    },
    correct: "B",
  },
  {
    question: "What does the term 'cardinality' refer to in an ER diagram?",
    options: {
      A: "The number of attributes in an entity",
      B: "The number of entities in a relationship",
      C: "The uniqueness of an attribute",
      D: "The total number of records in a table",
    },
    correct: "B",
  },
  {
    question:
      "Which of the following is used to define the constraints on data in a relational database?",
    options: {
      A: "A Data model",
      B: "DDL",
      C: "DML",
      D: "ER diagram",
    },
    correct: "B",
  },
  {
    question: "In an ER diagram, which symbol is used to denote a weak entity?",
    options: {
      A: "Rectangle with double lines",
      B: "Circle",
      C: "Rectangle with dashed lines",
      D: "Rectangle with a rounded corner",
    },
    correct: "A",
  },
];

const questionsUnit2 = [
  {
    question:
      "Which of the following is NOT a fundamental operation in relational algebra?",
    options: {
      A: "Selection",
      B: "Projection",
      C: "Division",
      D: "Multiplication",
    },
    correct: "D",
  },
  {
    question:
      "What is the result of the projection operation in relational algebra?",
    options: {
      A: "A subset of the rows from a relation",
      B: "A subset of the columns from a relation",
      C: "A combination of two relations",
      D: "A sorted list of values",
    },
    correct: "B",
  },
  {
    question:
      "In relational calculus, which of the following is a tuple variable?",
    options: {
      A: "A variable representing a column",
      B: " A variable representing a relation",
      C: " A variable representing a single row of a relation",
      D: "All of the above",
    },
    correct: "C",
  },
  {
    question: "What does the domain relational calculus allow you to do?",
    options: {
      A: "Retrieve data by row",
      B: "Retrieve data by column",
      C: "Retrieve data using conditions based on the domain of attributes",
      D: "Define the structure of a database",
    },
    correct: "C",
  },
  {
    question:
      "Which of the following SQL commands is used to define a database schema?",
    options: { A: "DML", B: "DDL", C: "DCL", D: "TCL" },
    correct: "B",
  },
  {
    question:
      "What type of SQL command is used to manipulate existing data within a database?",
    options: {
      A: "DML",
      B: "DDL",
      C: "DCL",
      D: "TCL",
    },
    correct: "B",
  },
  {
    question:
      "Which of the following SQL statements is used to grant permissions on a database object?",
    options: {
      A: "GRANT",
      B: "CREATE",
      C: "UPDATE",
      D: "SELECT",
    },
    correct: "A",
  },
  {
    question: "What is the purpose of the UNIQUE constraint in SQL?",
    options: {
      A: "To ensure that no duplicate rows exist in a table",
      B: "To restrict null values in a column",
      C: "To set a default value for a column",
      D: "To limit the range of values in a column",
    },
    correct: "A",
  },
  {
    question: "Which SQL command is used to retrieve data from a database?",
    options: {
      A: "INSERT",
      B: "DELETE",
      C: "SELECT",
      D: "UPDATE",
    },
    correct: "C",
  },
  {
    question: "What is a subquery in SQL?",
    options: {
      A: "A query that retrieves data from multiple tables",
      B: " A query that is nested within another SQL query",
      C: "A query that defines the structure of a database",
      D: "A query that updates data in a table",
    },
    correct: "B",
  },
  {
    question:
      "In SQL, which of the following operations is used to combine the results of two or more queries?",
    options: {
      A: "UNION",
      B: "JOIN",
      C: "INTERSECT",
      D: "EXCEPT",
    },
    correct: "A",
  },
  {
    question:
      "Which of the following SQL functions is used to count the number of rows in a result set?",
    options: {
      A: "SUM()",
      B: "COUNT()",
      C: "AVG()",
      D: "MAX()",
    },
    correct: "B",
  },
  {
    question: "What does the GROUP BY clause do in an SQL query?",
    options: {
      A: "Sorts the result set",
      B: "Filters rows based on a condition",
      C: "Groups rows with the same value into specified columns",
      D: "Combines mutliple tables into a single result set",
    },
    correct: "C",
  },
  {
    question: "What is the purpose of the HAVING clause in SQL?",
    options: {
      A: "To filter rows before grouping",
      B: "To filter rows after grouping",
      C: "To sort the result set",
      D: "To join multiple tables",
    },
    correct: "B",
  },
  {
    question: "Which SQL command is used to create a view?",
    options: {
      A: "CREATE VIEW",
      B: "CREATE TABLE",
      C: "CREATE FUNCTION",
      D: "CREATE INDEX",
    },
    correct: "A",
  },
  {
    question: "What is an inner join?",
    options: {
      A: "Combines rows from two or more tables based on a related column, including all rows from both tables",
      B: "Combines rows from two tables only when there is a match in both tables",
      C: " Combines all rows from the left table with matched rows in the right table",
      D: "Combines all rows from the right table with matched rows in the left table",
    },
    correct: "B",
  },
  {
    question: "Which of the following describes a left join?",
    options: {
      A: " Returns all rows from the left table and matched rows from the right table",
      B: " Returns all rows from the right table and matched rows from the left table",
      C: " Returns only the rows that have matches in both tables",
      D: " Returns all rows from both tables regardless of matches",
    },
    correct: "A",
  },
  {
    question: "*What is a trigger in SQL?",
    options: {
      A: "A stored procedure that runs automatically in response to certain events on a particular table",
      B: "A command that manages user permissions",
      C: "A function that processes data before it is written to the database",
      D: " A query that retrieves data from multiple tables",
    },
    correct: "A",
  },
  {
    question:
      "Which of the following data types would be suitable for storing a person's name?",
    options: {
      A: "INTEGER",
      B: "VARCHAR",
      C: "DATE",
      D: "FLOAT",
    },
    correct: "B",
  },
  {
    question: "In SQL, what does the NOT NULL constraint do?",
    options: {
      A: "Prevents duplicate values in a column",
      B: "Prevents null values in a column",
      C: "Sets a default value for a column",
      D: "Restricts the range of values in a column",
    },
    correct: "B",
  },
  {
    question: "What is the purpose of the CHECK constraint?",
    options: {
      A: "To limit the type of data that can be inserted into a column",
      B: "To ensure a column is unique",
      C: "To enforce referential integrity",
      D: "To ensure a column is indexed",
    },
    correct: "A",
  },
  {
    question: "Which operator is used in SQL to test for values within a set?",
    options: {
      A: "BETWEEN",
      B: "LIKE",
      C: "IN",
      D: "EXISTS",
    },
    correct: "C",
  },
  {
    question:
      "Which SQL function would you use to find the maximum value in a column?",
    options: {
      A: "SUM()",
      B: "MAX()",
      C: "AVG()",
      D: "MIN()",
    },
    correct: "B",
  },
  {
    question:
      "What type of join returns only rows that have matching values in both tables?",
    options: {
      A: "Inner Join",
      B: "Left Join",
      C: "Right Join",
      D: "Full Join",
    },
    correct: "A",
  },
  {
    question:
      "Which of the following is NOT a valid aggregate function in SQL?",
    options: {
      A: "SUM()",
      B: "AVG()",
      C: "CONCAT()",
      D: "COUNT()",
    },
    correct: "C",
  },
];

/*Question section ends here*/

let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];

// Landing Page Unit Selection
document
  .getElementById("unit1")
  .addEventListener("click", () =>
    startQuiz("Introduction to DBMS & ER diagrams", questionsUnit1)
  );
document
  .getElementById("unit2")
  .addEventListener("click", () =>
    startQuiz("RELATIONAL OPERATIONS & BASIC SQL", questionsUnit2)
  );

function startQuiz(unit, questions) {
  selectedQuestions = questions;
  document.getElementById("landing-page").style.display = "none";
  document.getElementById("quiz-page").style.display = "block";
  document.getElementById("quiz-title").textContent = unit;
  currentQuestion = 0;
  score = 0;
  document.getElementById("score-container").style.display = "none";
  displayQuestion();
}

function displayQuestion() {
  const question = selectedQuestions[currentQuestion];
  document.getElementById("question").textContent = question.question;
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = ""; // Clear previous options
  Object.keys(question.options).forEach((option) => {
    const btn = document.createElement("div");
    btn.textContent = option + ": " + question.options[option];
    btn.className = "option";
    btn.addEventListener("click", () => selectAnswer(option));
    optionsContainer.appendChild(btn);
  });
  document.getElementById("feedback").textContent = "";
  updateNavigationButtons();
}

function selectAnswer(selectedOption) {
  const question = selectedQuestions[currentQuestion];
  const options = document.querySelectorAll(".option");

  options.forEach((option) => {
    option.style.pointerEvents = "none"; // Disable further clicks
    if (option.textContent.startsWith(selectedOption)) {
      if (selectedOption === question.correct) {
        option.classList.add("correct");
        score++;
        document.getElementById("feedback").textContent = "Correct!";
      } else {
        option.classList.add("wrong");
        document.getElementById("feedback").textContent = "Incorrect!";
        // Highlight the correct answer
        options.forEach((opt) => {
          if (opt.textContent.startsWith(question.correct)) {
            opt.classList.add("correct");
          }
        });
      }
    }
  });

  currentQuestion++;
  updateNavigationButtons();
}

function updateNavigationButtons() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.disabled = currentQuestion === 0;
  nextBtn.disabled = currentQuestion >= selectedQuestions.length;

  if (nextBtn.disabled) {
    prevBtn.style.display = "block"; // Show only the previous button
  } else {
    prevBtn.style.display = "inline"; // Show both buttons
  }

  if (currentQuestion >= selectedQuestions.length) {
    showScore();
  }
}

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    displayQuestion();
  }
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentQuestion < selectedQuestions.length) {
    displayQuestion();
  }
});

function showScore() {
  document.getElementById("quiz-container").style.display = "none";
  const finalScore = document.getElementById("final-score");
  finalScore.textContent = `${score} / ${selectedQuestions.length}`;
  document.getElementById("score-container").style.display = "block";
}

document.getElementById("retakeQuizBtn").addEventListener("click", () => {
  document.getElementById("score-container").style.display = "none";
  document.getElementById("quiz-page").style.display = "none";
  document.getElementById("landing-page").style.display = "block";
});
