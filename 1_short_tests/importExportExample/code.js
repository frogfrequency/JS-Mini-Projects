import { testFunction } from './testImport.js';

export function useThisFunction() {
    testFunction();
}

document.querySelector('#myButton').addEventListener('click', useThisFunction);