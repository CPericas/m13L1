/* Task 1: Create a React component named ColorList that renders a predefined array
of colors (strings) directly within the component. Display each color as a list 
item.

Task 2: Implement a function named filterNumbers that takes an array of numbers and
returns a new array containing only even numbers and.

Task 3: Develop a React component named EvenNumbers that uses the filterNumbers 
function and renders the resulting even numbers directly within the component.

Task 4: Create a React component named UserList that directly renders a 
predefined array of user objects (each with name and age properties). */

const filterNumbers = (): number[] => {
    const numbers = [1, 2, 3, 4, 5];
    return numbers.filter(num => num % 2 === 0);
};

export const EvenNumbers = () => {
    const evenNumbers = filterNumbers();

    return (
        <div>
            <h2>Even Numbers</h2>
            <ul>
                {evenNumbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
        </div>
    );
};

export const ColorList = () => {
    const colors: string[] = ["Red", "Green", "Blue"];

    return (
        <div>
            <h2>Color List</h2>
            <ul>
                {colors.map((color, index) => (
                    <li key={index} style={{ color: color.toLowerCase() }}>
                        {color}
                    </li>
                ))}
            </ul>
        </div>
    );
};

type User = {
    name: string;
    age: number;
};

export const UserList = () => {
    const users: User[] = [
        { name: "Chris", age: 38 },
        { name: "Crystal", age: 40 },
        { name: "Jackson", age: 9 }
    ];

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.name} - {user.age} years old
                    </li>
                ))}
            </ul>
        </div>
    );
};
