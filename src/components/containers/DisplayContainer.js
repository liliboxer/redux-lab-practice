import { connect } from 'react-redux';
import { getTitles, getSubtitles } from '../../selectors/inputSelectors';
import Display from '../Display';


const mapStateToProps = state => ({
  title: getTitles(state),
  subtitle: getSubtitles(state)
});

export default connect(
  mapStateToProps
)(Display);
