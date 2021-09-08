import { TEST } from '../constants';
import { useLongPress } from '../useLongPress';

const logSpy = jest.spyOn(global.console, 'log');
require('../useLongPress');

describe('useLongPress', () => {
  beforeEach(() => {
    logSpy.mockClear();
  });

  it('Should console log constant', () => {
    useLongPress();
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(TEST);
  });
});
