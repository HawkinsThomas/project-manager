export const mapStateToProps = (state) => ({
  clientList: state.client.clientList,
  clientListIsLoading: state.client.clientListIsLoading,
  clientListErrorMessage: state.client.clientListErrorMessage,
});
