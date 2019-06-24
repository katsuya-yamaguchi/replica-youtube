import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { actionTypes } from '../actions/actions';
import Home from '../components/home';
import * as MyTypes from 'MyTypes';

const mapStateToProps = (state: any) => ({
  tracks: state.tracks,
});

const mapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
  addItems: (item: object) => dispatch({ type: actionTypes.ADD, payload: item}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
