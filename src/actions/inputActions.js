export const CREATE_TITLE = 'CREATE_TITLE';
export const CREATE_SUBTITLE = 'CREATE_SUBTITLE';

export const createTitle = title => ({
  type: CREATE_TITLE,
  payload: title
});

export const createSubtitle = subtitle => ({
  type: CREATE_SUBTITLE,
  payload: subtitle
});
