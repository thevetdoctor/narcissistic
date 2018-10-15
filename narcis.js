const numberInput = document.getElementById('number');
const btn = document.getElementById('btn');
const result = document.getElementById('result');


const narcisCheck = (num) => {

    result.style.display = 'block';


	number = numberInput.value;

    numberString = number.toString();

	let numberArray = numberString.split('');

	console.log(numberArray)

	let x = numberArray.map(y => Math.pow(y, numberArray.length))

	console.log(x)

	let z = x.reduce((a, b) => (a + b));

	console.log(number)
	console.log(z)

	let k = '';

	if(Number(number) === z) {
		k = 'TRUE';
	} else {
		k = 'FALSE';
	}

	result.innerHTML = `Test: ${k}`;

	// return k;
}


btn.addEventListener('click', narcisCheck);
number.addEventListener('change', narcisCheck);

const para = document.querySelector('.left');
    const timeIn = () => {
    let period = new Date().toLocaleTimeString();
    para.innerHTML = '<h1>' + period + '</h1>';
      };

    setInterval(timeIn, 1000);