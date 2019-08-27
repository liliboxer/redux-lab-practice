import { connect } from 'react-redux';
import Controls from '../Controls';
import { getTitles, getSubtitles } from '../../selectors/inputSelectors';
import { createTitle, createSubtitle } from '../../actions/inputActions';


const mapStateToProps = state => ({
  title: getTitles(state),
  subtitle: getSubtitles(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    if(target.name === 'title') {
      dispatch(createTitle(target.value));
    } else {
      dispatch(createSubtitle(target.value));
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
