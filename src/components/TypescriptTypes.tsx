/* Task 1: Declare a variable named greeting with the data type string and assign 
it the value "Hello, TypeScript!"

Task 2: Create a variable named numberList with the data type number[] and 
initialize it with an array of three numbers: 5, 10, and 15.

Task 3: Define a function named calculateSum that takes two parameters (a and b) 
of type number and returns their sum.

Task 4: Render the previous types to the screen in a React Typescript application. */


const greeting: string = 'Hello, TypeScript!'
const numberList: number[] = [5, 10, 15]

function calculateSum(a: number, b: number): number {
    return a + b;
}

const result = calculateSum(10, 20)
console.log(result)

const TypeScriptTypes = () => {   
    return (
        <div className="typescript-types">
            <h1>Defining basic TypeScript types</h1>
            <h2>#1</h2>
            <p>{greeting}</p>

            <h2>#2</h2>
            <p>{numberList.join(", ")}</p>

            <h2>#3</h2>
            10 + 20 = {result}
        </div>
    );
};

export default TypeScriptTypes;