import _ from 'lodash'

/**
 * this is just a dummy list. might want to get this from third-party vendor.
 * 
 */
export const rooms = [
  'J37xtsmGxpJxmRIUcX7YBuct',
  '3YoX2Wlh2j05yqKyYnEiBdby',
  '291BWMrnM8DPQsRTnKBJrqiu',
];

/**
 * all possible bot actions are defined here.
 * 
 */
export enum ControlAction {
  moveForward,
  moveBackward,
  turnLeft,
  turnRight,
  panLeft,
  panRight,
  tiltUp,
  tiltDown,
  reset,
}

/**
 * check if an input string is a valid bot action based in the control action dictionary
 *
 * @param action
 * @returns
 */
const isValidBotAction = (action: string) =>
  Object.keys(ControlAction)
    .filter((k) => isNaN(Number(k)))
    .includes(action);
