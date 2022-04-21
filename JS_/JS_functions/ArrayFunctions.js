const projects = [
    "sample",
    "0x2B951381CB4Cf4c6CC76D9262E750D4c345D8E3D",
    "PRJCT",
    "5",
    "50",
    "50",
    "1649536499",
    "1659236499",
];

const returnedData = (arr) => {
    const obj = Object.assign({}, arr);
    const name = obj[0];
    const objectId = obj[1];
    const secretCode = obj[2];
    const assignee = { name, objectId, secretCode };
    return assignee;
};
// print object
console.log(returnedData(projects));