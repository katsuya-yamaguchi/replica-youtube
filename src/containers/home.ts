import * as MyTypes from "MyTypes";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { actionTypes, addItems, hasMore } from "../actions/actions";
import Home from "../components/home";

const mapStateToProps = (state: MyTypes.ReducerState) => ({
  flag: state.loadItems,
  tracks: state.infinitScroll,
});

const mapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
  addItems: (item: object) => dispatch(addItems(item)),
  hasMore: (flag: boolean) => dispatch(hasMore(flag)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
