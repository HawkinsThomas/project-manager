import { getClientList } from './actions';


export const mapStateToProps = (state) => ({
  userID: state.user.id,
});

export const mapDispatchToProps = {
  getClientList,
};
