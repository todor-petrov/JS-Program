// // // Lab

// 01. Sum Numbers
function calc() {
    const firstNumber = Number(document.getElementById('num1').value);
    const secondNumber = Number(document.getElementById('num2').value);
    const result = document.getElementById('sum');
    result.value = Number(firstNumber) + Number(secondNumber);
    document.getElementById('num1').addEventListener('click', clearFields);
    function clearFields(event) {
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        document.getElementById('sum').value = '';
    }
}


// 02. Show More
function showText() {
    const moreBtn = document.getElementById('more');
    const text = document.getElementById('text');
    moreBtn.style.display = 'none';
    text.style.display = 'inline';
}


// 03. Collect List Items
function extractText() {
    let items = Array.from(document.getElementById('items').children);
    const textArea = document.getElementById('result');
    items = items.map((i) => i.textContent);
    textArea.textContent = items.join('\n');
}


// 04. List of Items
function addItem() {
    const input = document.getElementById('newItemText');
    const newItemText = input.value;
    const items = document.getElementById('items');
    const li = document.createElement('li');

    li.textContent = newItemText;
    items.appendChild(li);
    input.value = '';
}


// 05. Delete from Table
function deleteByEmail() {
    const email = document.getElementsByTagName('input')[0].value;
    console.log(email);
    const tableRows = Array.from(document.querySelectorAll('tbody > tr'));
    let emailIsNotFound = true;
    for (let row of tableRows) {
        if (row.textContent.includes(email)) {
            emailIsNotFound = false;
            let parent = row.parentElement;
            parent.removeChild(row);
            document.getElementById('result').textContent = 'Deleted.'
            break;
        }
    }
    if (emailIsNotFound) {
        document.getElementById('result').textContent = 'Not found.'
    }
}


// 06. Add / Delete
function addItem() {
    const input = document.getElementById('newItemText');
    const ul = document.getElementById('items');
    let newItemText = input.value;

    let li = document.createElement('li');
    let deleteAnchor = document.createElement('a');
    deleteAnchor.href = '#';
    deleteAnchor.addEventListener('click', removeItemHandler);
    li.textContent = newItemText;
    deleteAnchor.textContent = '[Delete]';
    li.appendChild(deleteAnchor);
    ul.appendChild(li);
    input.value = '';

    function removeItemHandler(event) {
        let liAsParent = event.currentTarget.parentNode;
        let ulAsParent = liAsParent.parentNode;
        ulAsParent.removeChild(liAsParent);
    }
}


// 07. Colorize Table
function colorize() {
    const tableRows = Array.from(document.querySelectorAll('tr'));
    for (let r = 0; r < tableRows.length; r++) {
        if (r % 2 !== 0) {
            tableRows[r].style.backgroundColor = 'Teal';
        }
    }
}


// 08. Sum Table
function sumTable() {
    const products = Array.from(document.getElementsByTagName('td'));
    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
        if (i % 2 !== 0) {
            console.log(products[i])
            totalPrice += Number(products[i].textContent);
        }
    }
    document.getElementById('sum').textContent = totalPrice;
}


// 09. Highlight Active
function focused() {
    const allInputs = Array.from(document.getElementsByTagName('input'));
    for (let input of allInputs) {
        input.addEventListener('focus', handleFocus);
        input.addEventListener('blur', handleBlur)
    }
    function handleFocus(event) {
        const currentInput = event.target;
        const parentDiv = currentInput.parentElement;
        parentDiv.classList.add('focused');
    }
    function handleBlur(event) {
        const currentInput = event.target;
        const parentDiv = currentInput.parentElement;
        if (parentDiv.classList.contains('focused')) {
            parentDiv.classList.remove('focused');
        }
    }
}


// // // Exercises


// 01. Subtraction
function subtract() {
    const firstNumberField = document.getElementById('firstNumber');
    const secondNumberField = document.getElementById('secondNumber');
    const result = document.getElementById('result');
    result.textContent = Number(firstNumberField.value) - Number(secondNumberField.value);
}


// 02. Sections
function create(words) {
   const divContent = document.getElementById('content');
   for (let word of words) {
      let div = htmlCreator('div', divContent);
      let p = htmlCreator('p', div, word);
      div.addEventListener('click', loadWordHandler);
      p.style.display = 'none';
   }
   function loadWordHandler() {
      this.firstChild.style.display = 'block';
   }
   function htmlCreator(type, parentNode, textContent) {
      let htmlElement = document.createElement(type);
      parentNode.appendChild(htmlElement);
      if (textContent) {
         htmlElement.textContent = textContent;
      }
      return htmlElement;
   }
}


// 03. Accordion
function toggle() {
    const btn = document.querySelector('#accordion > div.head > span');
    if (btn.textContent === 'More') {
        btn.textContent = 'Less';
        document.getElementById('extra').style.display = 'block';
    }
    else {
        btn.textContent = 'More';
        document.getElementById('extra').style.display = 'none';
    }
}


// 04. Locked Profile
function lockedProfile() {
    const buttons = Array.from(document.getElementsByTagName('button'));
    for (let btn of buttons) {
        btn.addEventListener('click', showHideHandler);
    }
    function showHideHandler() {
        let profileDiv = this.parentNode;
        let hiddenDiv = profileDiv.getElementsByTagName('div')[0];
        let radioBtn = profileDiv.getElementsByTagName('input')[0];
        if (!radioBtn.checked) {
            if (this.textContent === 'Show more') {
                this.textContent = 'Hide it';
                hiddenDiv.style.display = 'block';
            }
            else {
                this.textContent = 'Show more';
                hiddenDiv.style.display = 'none';
            }
        }
    }
}


// 05. Fill Dropdown
function addItem() {
    const textField = document.getElementById('newItemText');
    const valueField = document.getElementById('newItemValue');
    const select = document.getElementById('menu');
    let option = document.createElement('option');
    option.textContent = textField.value; option.value = valueField.value;
    select.appendChild(option);
    textField.value = ''; valueField.value = '';
}


// 06. Table – Search Engine
function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const tbody = document.querySelector('body > table > tbody');
      const tableRows = Array.from(document.getElementsByTagName('tr'));
      const substringField = document.getElementById('searchField');
      let substring = substringField.value;
      for (let row of tableRows) {
         if (row.classList.contains('select')) {
            row.classList.remove('select');
         }
      }
      for (let row of tableRows) {
         if (row.textContent.includes(substring)) {
            row.classList.add('select');
         }
      }
      substringField.value = '';
   }
}


// 07. Format the Text
function solve() {
  const output = document.getElementById('output');
  const textarea = document.getElementById('input');
  let sentences = textarea.value.split('.');
  sentences.pop();

  while (sentences.length > 0) {
    let paragraphSentences = sentences.splice(0, 3)
      .map((p) => p.trimStart());
      const newParagraph = document.createElement('p');
      newParagraph.textContent = paragraphSentences.join('.') + '.';
      output.appendChild(newParagraph);
  }
}


// 08. Furniture
function solve() {
  const generateBtn = document.querySelector('#exercise > button:nth-child(3)');
  const textareaField = document.querySelector('#exercise > textarea:nth-child(2)');
  const tbody = document.querySelector('#exercise > div > div > div > div > table > tbody');
  const buyBtn = document.querySelector('#exercise > button:nth-child(6)');
  const resultTextBox = document.querySelector('#exercise > textarea:nth-child(5)');
  let tableRows = tbody.getElementsByTagName('tr');
  let checkboxes = Array.from(document.getElementsByTagName('input'));
  checkboxes.map((checkbox) => checkbox.disabled = false);
  generateBtn.addEventListener('click', loadRowsHandler);
  buyBtn.addEventListener('click', showResultHandler);

  let boughtFurniture = []; let totalPrice = 0; let allDecFactors = [];

  function loadRowsHandler() {
    let data = JSON.parse(textareaField.value);
    if (data) {
      for (let object of data) {
        let name = object['name']; let imgSrc = object['img'];
        let price = object['price']; let decFactor = object['decFactor'];
        let tr = htmlCreator('tr', tbody);
        let imgTd = htmlCreator('td', tr);
        let img = htmlCreator('img', imgTd); img.src = imgSrc;
        let nameTd = htmlCreator('td', tr);
        htmlCreator('p', nameTd, name);
        let priceTd = htmlCreator('td', tr);
        htmlCreator('p', priceTd, price);
        let decorationTd = htmlCreator('td', tr);
        htmlCreator('p', decorationTd, decFactor);
        let checkboxTd = htmlCreator('td', tr);
        let input = htmlCreator('input', checkboxTd);
        input.type = 'checkbox';
      }
      textareaField.value = '';
    }
  }
  function showResultHandler() {
    let productsToBuy = false;
    for (let tr of tableRows) {
      let checkbox = tr.getElementsByTagName('input')[0];
      let name = tr.getElementsByTagName('p')[0].textContent;
      let price = Number(tr.getElementsByTagName('p')[1].textContent);
      let decFactor = Number(tr.getElementsByTagName('p')[2].textContent);
      console.log(name); console.log(price); console.log(decFactor);
      if (checkbox.checked) {
        boughtFurniture.push(name); totalPrice += price; allDecFactors.push(decFactor);
        productsToBuy = true;
      }
    }
    if (productsToBuy) {
      let avgDecFactor = allDecFactors.reduce((a, b) => a + b, 0) / allDecFactors.length;
    let result = [];
    result.push(`Bought furniture: ${boughtFurniture.join(', ')}`);
    result.push(`Total price: ${totalPrice.toFixed(2)}`);
    result.push(`Average decoration factor: ${avgDecFactor}`);
    resultTextBox.value = result.join('\n');
    }
    else {
      return;
    }
  }
  function htmlCreator(type, parentNode, textContent) {
    let htmlElement = document.createElement(type);
    parentNode.appendChild(htmlElement);
    if (textContent) {
      htmlElement.textContent = textContent;
    }
    return htmlElement
  }
}


// // // More Exercises

// 01. Edit Element
function editElement(ref, match, replacer) {
    let text = ref.textContent;
    while (text.includes(match)) {
        text = text.replace(match, replacer);
    }
    ref.textContent = text;
}

// 02. Extract Parenthesis
function extract(content) {
    let text = document.getElementById('content').textContent;
    let matches = text.match(/\(([^()]*)\)/g).map(function($0) { return $0.substring(1,$0.length-1) });
    return matches.join('; ');
}

// 03. Mouse Gradient
function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);
    function gradientMove(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + "%";
    }
    function gradientOut(event) {
        document.getElementById('result').textContent = "";
    }
}

// 05. Shopping Cart
function solve() {
    let textArea = document.querySelector('body > div > textarea');
    let totalPrice = 0;
    let listOfUniqueThings = [];
    let addBtn = document.getElementsByClassName('add-product');
    let arrayAddBtn = Array.from(addBtn);
    for (let i = 0; i < arrayAddBtn.length; i++) {
        arrayAddBtn[i].addEventListener('click', function one() {
            let name = document.querySelector(`body > div > div:nth-child(${i + 2}) > div.product-details > div`).textContent;
            let price = document.querySelector(`body > div > div:nth-child(${i + 2}) > div.product-line-price`).textContent;
            if (!listOfUniqueThings.includes(name)) {
                listOfUniqueThings.push(name);
            }
            let result = `Added ${name} for ${price} to the cart.\n`;
            totalPrice += Number(price);
            textArea.value += result;
        });
    }
    let checkOut = document.querySelector('body > div > button');
    checkOut.addEventListener('click', function final() {
        let finalSting = `You bought ${listOfUniqueThings.join(', ')} for ${totalPrice.toFixed(2)}.`;
        textArea.value += finalSting;
        disableButtons();
    });

    function disableButtons() {
       let buttons = Array.from(document.querySelectorAll('button'));
       buttons.forEach(button => button.disabled = true);
    }
}

// 06. Pascal or Camel Case
function solve() {
  const text = document.querySelector("#text").value.split(' ');
  const convention = document.getElementById('naming-convention').value;
  const result = document.querySelector("#result");
  let availableConventions = ['Camel Case', 'Pascal Case'];
  let conversedText = '';
  if (availableConventions.includes(convention)) {
    for (let i = 0; i < text.length; i++) {
      conversedText += (text[i].charAt(0).toUpperCase() + text[i].slice(1).toLowerCase());
    }
    if (convention === 'Camel Case') {
      conversedText = conversedText.charAt(0).toLowerCase() + conversedText.slice(1);
    }
  }
  else {
    conversedText = 'Error!'
  }
  result.textContent = conversedText;
}

// 07. Search in List
function search() {
   const searchArea = document.querySelector('#searchText');
   searchArea.addEventListener('click', refreshHandler);
   const towns = document.querySelectorAll('#towns > li');
   function refreshHandler(event) {
      searchArea.value = '';
      result.textContent = '';
      for (let i = 0; i < towns.length; i++) {
         towns[i].style = {};
      }
   }
   const searchText = searchArea.value;
   const result = document.getElementById('result');
   let matches = 0;
   result.textContent = '';
   for (let town of towns) {
      if (town.textContent.includes(searchText)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches += 1;
      }
   }
   result.textContent = `${matches} matches found`;
}

// 08. Hells Kitchen
function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const line = JSON.parse(document.querySelector("#inputs > textarea").value);
      const bestRestaurantOutput = document.querySelector("#bestRestaurant > p");
      const workersOutput = document.querySelector("#workers > p");
      let restaurants = {};
      for (let i = 0; i < line.length; i++) {
         let [restaurant, workers] = line[i].split(' - ');
         if (!restaurants.hasOwnProperty(restaurant)) {
            restaurants[restaurant] = [];
         }
         workers = workers.split(', ');
         for (let worker of workers) {
            let [name, salary] = worker.split(' ');
            let currentWorker = [];
            currentWorker.push(name);
            currentWorker.push(Number(salary));
            restaurants[restaurant].push(currentWorker);
         }
      }
      restaurants = Object.entries(restaurants);
      for (let i = 0; i < restaurants.length; i++) {
         let avgSalary = 0;
         for (let j = 0; j < restaurants[i][1].length; j++) {
            avgSalary += restaurants[i][1][j][1];
         }
         restaurants[i].push(avgSalary / restaurants[i][1].length);
      }
      let sorted = restaurants.sort((a, b) => b[2] - a[2]);
      let bestRestaurantData = sorted[0];
      console.log(bestRestaurantData);
      let workers = bestRestaurantData[1];
      let sortedWorkers = workers.sort((a, b) => b[1] - a[1]);
      let restaurantName = bestRestaurantData[0];
      let averageSalary = bestRestaurantData[2];
      let bestSalary = sortedWorkers[0][1];
      let result = `Name: ${restaurantName} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
      console.log(result);
      let secondResult = [];
      for (let w of sortedWorkers) {
         secondResult.push(`Name: ${w[0]} With Salary: ${w[1]}`);
      }
      let workersInfo = secondResult.join(' ');
      bestRestaurantOutput.textContent = result;
      workersOutput.textContent = workersInfo;
   }
}

// 09. Generate Report
function generateReport() {
    const inputs = Array.from(document.getElementsByTagName('input'));
    const tableRows = Array.from(document.querySelectorAll('tbody > tr'));
    const textarea = document.getElementById('output');
    let checkedInputs = inputs.filter((input) => input.checked);
    let checkedNames = checkedInputs.map((input) => input.name);
    let checkedIndices = []; let data = [];
    for (let input of inputs) {
        if (checkedNames.includes(input.name)) {
            let index = inputs.indexOf(input);
            checkedIndices.push(index);
        }
    }
    for (let tableRow of tableRows) {
        let cells = Array.from(tableRow.getElementsByTagName('td'));
        let object = {};
        for (let i = 0; i < cells.length; i++) {
            if (checkedIndices.includes(i)) {
                object[inputs[i].name] = cells[i].textContent;
            }
        }
        data.push(object);
    }
    textarea.textContent = JSON.stringify(data);
}