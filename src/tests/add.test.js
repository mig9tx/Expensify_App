const add = (a, b) => a + b;
const generateGreeting = (name = 'Anomymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add (3,4);
    expect(result).toBe(7);
});

test ('Greeting should be the same', ()=> {
    const greeting = generateGreeting('Michael');
    expect(greeting).toBe('Hello Michael!');
});

test ('should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anomymous!');
})