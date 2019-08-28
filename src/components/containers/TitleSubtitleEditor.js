import { connect } from 'react-redux';
import Controls from '../Controls';
import { getTitles, getSubtitles } from '../../selectors/inputSelectors';
import { createTitle, createSubtitle } from '../../actions/inputActions';

// factory method pattern
const handleChangeActionMap = {
  title: createTitle,
  subtitle: createSubtitle
};

const mapStateToProps = state => ({
  title: getTitles(state),
  subtitle: getSubtitles(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    // instead of the if block
    const action = handleChangeActionMap[target.name](target.value);
    dispatch(action);

    // if(target.name === 'title') {
    //   dispatch(createTitle(target.value));
    // } else if(target.name === 'subtitle'){
    //   dispatch(createSubtitle(target.value));
    // }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
