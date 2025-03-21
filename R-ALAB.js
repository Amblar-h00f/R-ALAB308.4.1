function convertToObjects (data) {
    const headers = data [0].map(header => header.toLowerCase());
    return data.slice(1).map(row=>; {
        obj[key] = row[index];
    };
    return obj;
};
const objectArray= converToObjects(csvArray);
console.log(objectArray);

objectArray.array.forEach(person => {
    console.log ('person.name') (id {person.id}); a $[person.occupation']; 
    
});
people.pop()//removes last element

people.splice(1,0,{
    id:"48",
    name:"Barry",
    occupation:"Runner",
    age:'25'
});
people.push({
    id:"42",
    name:"bruce",
    occupation:"Knight",
    age:"41",
});
let totalAge = 0;
for (let i = 0; i< people.length; i++) {
    totalAge += Number (people [i], age);
}
const AverageAge = totalAge/people.length; 
console.log ('Average age: $ {averageAge.Fixed'(i));

const ssvData =
    `Index,Mass (kg),Spring 1 (m),Spring 2 (m)
\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066
\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108
\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158
\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192
\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`


const rows = ssvData.split('\n');

const headers = rows[0].split(',');

const arsedData = ows.slice(1).map(ow => {
    const values = ow.split(',');
    return headers.reduce((obj, header, index) => {
        obj[header] = values[index];
        return obj;
    }, {});
});
console.log("headers:", eaders);
console.log("Parsed Data:");
ParsedData.forEach(ow => console.log(ow));