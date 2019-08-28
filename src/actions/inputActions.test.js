import { createTitle, CREATE_TITLE, createSubtitle, CREATE_SUBTITLE } from './inputActions';

describe('inputActions', () => {
  it('creates a CREATE_TITLE action', () => {
    const action = createTitle('my title');
    expect(action).toEqual({
      type: CREATE_TITLE,
      payload: 'my title'
    });
  });
  it('create a CREATE_SUBTITLE action', () => {
    const action = createSubtitle('my subtitle');
    expect(action).toEqual({
      type: CREATE_SUBTITLE,
      payload: 'my subtitle'
    });
  });
})
;
