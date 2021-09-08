import { TEST } from '../constants';
import { printTest } from '../main';

const logSpy = jest.spyOn(global.console, 'log');
require('../main');

describe('Main', () => {
  beforeEach(() => {
    logSpy.mockClear();
  });

  it('Should console log constant', () => {
    printTest();
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(TEST);
  });
});
