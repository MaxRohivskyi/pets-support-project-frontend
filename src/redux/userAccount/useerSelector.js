export const selectUserData = (state) => state.user.userData;
export const testSelectUserData = (state) => console.log(state.user.userData);

export const selectIsLoading = (state) => state.user.isLoading;
export const selectError = (state) => state.user.error;
