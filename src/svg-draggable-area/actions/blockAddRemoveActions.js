import { ADD_NEW_BLOCK } from './actionTypes';
import { guidGenerator } from '../helpers';

export const addBlock = (block) => {
  block.id = guidGenerator();
  console.log(block.id);
  return { type: ADD_NEW_BLOCK , payload: { block } }
}