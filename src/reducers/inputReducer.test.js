import inputReducer from './inputReducer';
import { createTitle, createSubtitle } from '../actions/inputActions';

describe('inputReducer', () => {
  it('returns the same state when it does not understnad the action', () => {
    const state = { title: 'hello', subtitle: 'bye' };
    const action = {
      type: 'BOGUS',
      payload: 'hi'
    };
    const newState = inputReducer(state, action);
    expect(newState).toEqual(state);
  });

  it('updates title state when it gets CREATE_TITLE action', () => {
    const state = { title: 'hi', subtitle: 'bye' };
    const action = createTitle('not hi');

    const newState = inputReducer(state, action);
    expect(newState).toEqual({ title: 'not hi', subtitle: 'bye' });
  });

  it('updates the subtitle state when it gets a CREATE_SUBTITLE action', () => {
    const state = { title: 'hi', subtitle: 'bye' };
    const action = createSubtitle('whats up');

    const newState = inputReducer(state, action);

    expect(newState).toEqual({ title: 'hi', subtitle: 'whats up' });

  });
});
