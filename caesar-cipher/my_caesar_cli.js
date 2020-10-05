const { program } = require('commander');
const { fs } = require('fs');


function myParseInt(value, dummyPrevious) {
    // parseInt takes a string and an optional radix
    return parseInt(value);
}

program
    .option('-s, --shift <number>', 'a shift in cipher', myParseInt)
    .option('-a, --action [type]', 'an action encode/decode')
    .option('-i, --input [fileUrl]', 'an input file')
    .option('-o, --output [fileUrl]', 'an output file')
;

program.parse(process.argv);



if(program.action === 'encode') {

}

//node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"

if (program.cheese === undefined) console.log('no cheese');
else if (program.cheese === true) console.log('add cheese');
else console.log(`add cheese type ${program.cheese}`);