const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

yargs.version('1.1.0')


yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: ({ title }) => {
        console.log('Adding a new note', title)
    }
});

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: () => {
        console.log('Removing the note')
    }
})

yargs.command({
    command: 'list',
    describe: 'list all the notes',
    handler: () => {
        console.log('Listing all the notes')
    }
});

yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: () => {
        console.log('Read a note')
    }
})

console.log(yargs.argv)

