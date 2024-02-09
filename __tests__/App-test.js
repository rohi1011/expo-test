import { addNumbers } from "../src/mathUtils";

test('add numbers', ()=> {
   expect(addNumbers(1,2)).toBe(3); 
});

test('subtract numbers', ()=> {
   expect(addNumbers(3,2)).toBe(1); 
});