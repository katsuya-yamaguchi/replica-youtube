import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { actionTypes, addItems } from '../actions/actions';
import Home from '../components/home';
import * as MyTypes from 'MyTypes';

const mapStateToProps = (state: MyTypes.ReducerState) => ({
  tracks: state.infinitScroll,
});

const mapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
  addItems: (item: string) => dispatch({ type: actionTypes.ADD, payload: item }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
