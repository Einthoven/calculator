let memory = 0; // To store memory operations

function appendToDisplay(value) {
    const display = document.getElementById('display');

    if (['+', '-', '*', '/'].includes(value)) {
        // Prevent adding multiple consecutive operators
        if (['+', '-', '*', '/'].includes(display.value.slice(-1))) return;

        if (display.value === '') return;

        display.value += value;
        return;
    }

    if (value === '.') {
        const parts = display.value.split(/[\+\-\*\/]/);
        const currentPart = parts[parts.length - 1];
        if (currentPart.includes('.')) return; // Prevent multiple decimals in the same number
    }

    const parts = display.value.split(/[\+\-\*\/]/);
    const currentPart = parts[parts.length - 1];

    if (currentPart === '' && value === '0') return; // Prevent leading zeroes in a new number

    // Limit the number of decimal places to 5
    if (currentPart.includes('.') && currentPart.split('.')[1].length >= 5) return;

    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function deleteLastCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Replace 'x' with '*' for multiplication and evaluate
        let result = eval(display.value.replace('x', '*'));

        // Remove trailing insignificant zeros for decimal numbers
        if (typeof result === 'number') {
            result = parseFloat(result.toFixed(5)); // Limit to 5 decimal places
        }

        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function memoryClear() {
    memory = 0;
    const display = document.getElementById('display');
    display.value = '';  // Clear display after memory clear
}

function memoryRecall() {
    const display = document.getElementById('display');
    if (memory != 0){ 
        display.value = `${memory}`;  // Display the current memory value on the screen
    } else {
        alert('Memory is currently zero');
    }  // Display the current memory value
}

function memoryAdd() {
    const display = document.getElementById('display');
    memory += parseFloat(display.value || '0');
    display.value = '';  // Clear the display after adding to memory
}

function memorySubtract() {
    const display = document.getElementById('display');
    memory -= parseFloat(display.value || '0');
    display.value = '';  // Clear the display after subtracting from memory
}

function memoryStore() {
    const display = document.getElementById('display');
    memory = parseFloat(display.value || '0');
    display.value = '';  // Clear the display after storing to memory
}

function memoryView() {
    const display = document.getElementById('display');
    alert('Memory: ' + memory);
}
