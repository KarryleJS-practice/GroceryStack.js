let groceryStack = [];

function peek() {
    if (groceryStack.length === 0) {
        return "Stack is empty";
    }
    return groceryStack[groceryStack.length - 1];
}

function push(item) {
    groceryStack.push(item);
    console.log("Stack after push:", groceryStack);
}

function pop() {
    if (groceryStack.length === 0) {
        console.log("Stack is empty");
        return null;
    }
    const poppedItem = groceryStack.pop();
    console.log("Stack after pop:", groceryStack);
    return poppedItem;
}


// Example usage (simulating user input):

push(prompt("Enter grocery item 1:"));
push(prompt("Enter grocery item 2:"));
push(prompt("Enter grocery item 3:"));
push(prompt("Enter grocery item 4:"));
push(prompt("Enter grocery item 5:"));

console.log("Top item:", peek());

pop();
pop();
