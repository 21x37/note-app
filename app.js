const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

yargs.version('1.1.0')


yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: ({ title, body}) => {
        notes.addNote(title, body)
    }
});

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'title to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler: ({ title }) => {
        notes.removeNote(title);
    }
})

yargs.command({
    command: 'list',
    describe: 'list all the notes',
    handler: () => {
        notes.listNotes();
    }
});

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'title to display',
            demandOption: true,
            type: 'string'
        }
    },
    handler: ({ title }) => {
        notes.readNote(title)
    }
})

yargs.parse();

//console.log(yargs.argv)

