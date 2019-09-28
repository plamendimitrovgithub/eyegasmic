const publish = false;

console.log('\x1b[38;5;88m[Tests]\t started\x1b[0m');

if (!publish) {
    console.log('\n\x1b[38;5;75m[ HINT ]\x1b[0m     If ready for publishing set the publish variable to true\n');
    throw new Error('\x1b[38;5;88mApparently not ready to be published yet\x1b[0m');
}

console.log('\n\x1b[38;5;29m[Tests]\t completed\x1b[0m\n');