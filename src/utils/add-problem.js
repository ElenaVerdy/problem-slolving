import fs from 'fs';

let problemName;

try {
    problemName = process.argv[2].split('--name=')[1];

    if (!problemName) {
        throw new Error();
    }
} catch {
    throw new Error('Wrong arguments');
}

fs.readdir('./src/problems', {}, (err, files) => {
    if (err) {
        throw new Error('Could not find problems folder: ', err?.message);
    }

    if (files.includes(problemName)) {
        throw new Error('Problem with this name already exists');
    }

    createNewProblem(problemName);
});

async function createNewProblem(problemName) {
    await fs.mkdir(`./src/problems/${problemName}`, (err) =>
        errorHandler(err, 'Folder is created')
    );
    await fs.writeFile(
        `./src/problems/${problemName}/index.ts`,
        getEmptyFunctionFile(problemName),
        (err) => errorHandler(err, 'index.ts is created')
    );
    await fs.writeFile(
        `./src/problems/${problemName}/index.test.ts`,
        getEmptyTestFile(problemName),
        (err) => errorHandler(err, 'index.test.ts is created')
    );
}

function getEmptyFunctionFile(problemName) {
    return `export const ${problemName} = () => {

};`;
}

function getEmptyTestFile(problemName) {
    return `import { ${problemName} } from './index';

describe('${problemName}', () => {
    it('1', () => {
        expect(${problemName}()).toEqual();
    });
    it('2', () => {
        expect(${problemName}()).toEqual();
    });
    it('3', () => {
        expect(${problemName}()).toEqual();
    });
});
`;
}

function errorHandler(err, successMessage) {
    if (err) {
        throw err;
    }

    console.log(successMessage);
}
