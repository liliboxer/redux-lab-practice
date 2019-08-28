import { getTitles, getSubtitles } from './inputSelectors';

describe('input selectors', () => {
  it('gets title from redux state', () => {
    const state = {
      input: { title: 'hi', subtitle: 'bye' }
    };

    const title = getTitles(state);
    expect(title).toEqual('hi');
  });
  it('gets subtitle from redux state', () => {
    const state = {
      input: { title: 'hi', subtitle: 'bye' }
    };

    const title = getSubtitles(state);
    expect(title).toEqual('bye');
  });
})
;
