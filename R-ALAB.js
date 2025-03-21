function convertToObjects(data) {
    const headers = data[0].map(header => header.toLowerCase());
    return data.slice(1).map((row) => {
        const obj = {};
        headers.forEach((key, index) => {
            obj[key] = row[index];
        });
        return obj;
    });
}
let modifiedArray = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "..." }
];
modifiedArray.pop();
modifiedArray.splice(1, 0, {
    id: "48",
    name: "Barry",
    occupation: "Runner",
    age: "25"
});
modifiedArray.push({
    id: "7",
    name: "Bilbo",
    occupation: "None",
    age: "111"
});
const ageSum = modifiedArray.reduce((total, person) =>
    total + parseInt(person.age), 0);
const averageAge = ageSum / modifiedArray.length;
const csvData = [
    'id,name,occupation,age',
    ...modifiedArray.map(person =>
        `${person.id},${person.name},${person.occupation},${person.age}`
    )
].join('\n');
