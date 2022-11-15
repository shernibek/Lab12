console.log(document);

// print the initial document object
console.log(document);

document.getElementsByTagName('h1')[0].style.display = 'none';

// create an HTML element - h1
let lab12 = document.createElement("h1");
lab12.innerText = "Lab12 Assignment";
lab12.style.color = "blue";
document.body.appendChild(lab12);


let line = document.createElement("hr");
document.body.appendChild(line);

let task = document.createElement("h2");
task.innerText = "Task";
task.style.color = "red";
document.body.appendChild(task);


let text = document.createElement("p");
text.innerText = "In this task you have to reproduce this HTML page as is using only JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
document.body.appendChild(text);

let ul1 = document.createElement("ul");
document.body.appendChild(ul1);

let listItems = [
  {
    text: "find elements in the DOM (<b>5 points</b>);",
    style: { color: "green"
    }
  },
  {
    text: "create/add/remove elements (<b>5 points</b>);",
    style: { color: "purple"
    }
  },
  {
    text: "change content of the elements (<b>5 points</b>);",
    style: { color: "green"
    }
  },
  {
    text: "change styles of the elements (<b>5 points</b>);",
    style: { color: "purple"
    }
  },
  {
    text: "change attributes of the elements (<b>5 points</b>);",
    style: { color: "green"
    }
  },
  {
    text: "change classes of the elements (<b>5 points</b>).",
    style: { color: "purple"
    }
  },
]

addListItems(ul1, listItems)

let text2 = document.createElement("p");
text2.innerText = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this";
document.body.appendChild(text2);

var a = document.createElement('a'); 
var link = document.createTextNode("link.");
a.appendChild(link); 
a.title = "link."; 
a.href = "https://github.com/yessen/nu_web_programming/tree/main/week12";
document.body.appendChild(a); 

let line2 = document.createElement("hr");
document.body.appendChild(line2);

let submission = document.createElement("h2");
submission.innerText = "Submission";
submission.style.color = "red";
document.body.appendChild(submission);

let text3 = document.createElement("p");
text3.innerText = "To submit your work, follow these instructions:";
document.body.appendChild(text3);

let ul2 = document.createElement("ul")

listItems = [
  {
    text: " Create a new repository on Github, named <b>lab12</b> (<b>1 point</b>).",
    style: { color: "green"
    }
  },
  {
    text: "Clone this repository to your local machine and work inside it.",
    style: { color: "purple"
    }
  },
  {
    text: "Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with \"Hello, World!\" message (<b>1 point</b>).",
    style: { color: "green"
    }
  },
  {
    text: "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).",
    style: { color: "purple"
    }
  },
  {
    text: "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).",
    style: { color: "green"
    }
  },
  {
    text: "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).",
    style: { color: "purple"
    }
  },
  {
    text: "After you finish your work, submit it to the Github (<b>2 points</b>).",
    style: { color: "green"
    }
  },
]

addListItems(ul2, listItems);
document.body.appendChild(ul2);

let line3 = document.createElement("hr");
document.body.appendChild(line3);

function addListItems(ulist, objlist) {
    objlist.forEach( (obj) => {
      let li = document.createElement("li")
      li.innerHTML = obj.text;
      li.setAttribute("style", "color: " + obj.style.color);
      ulist.appendChild(li);
    } )
}