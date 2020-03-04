import { ADD_NEW_BLOCK } from './actionTypes';
import { guidGenerator } from '../helpers';

export const addBlock = (block) => {
  block.id = guidGenerator();
  block.inputs.forEach(input => {
    input.id = block.id+"-"+guidGenerator();
  });
  block.outputs.forEach(output => {
    output.id = block.id+"-"+guidGenerator();
  });
  return { type: ADD_NEW_BLOCK , payload: { block } }
}