const XLSX = require('xlsx');
const fs = require('fs');

const workbook = XLSX.readFile('excel.xlsx');
const sheetName = 'Sheet1';

const worksheet = workbook.Sheets[sheetName];
const jsonData = XLSX.utils.sheet_to_json(worksheet);

fs.writeFileSync('output.json', JSON.stringify(jsonData, null, 2));

console.log('Excel to JSON conversion complete. Data saved to output.json');
