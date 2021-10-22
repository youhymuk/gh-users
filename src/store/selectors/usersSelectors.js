import { createSelector } from 'reselect';

const usersSelector = (state) => state.users;

export const selectUsersList = createSelector(usersSelector, (users) => users.usersList);

export const selectUserProfile = createSelector(usersSelector, (users) => users.userProfile);

export const selectIsLoaded = createSelector(usersSelector, (users) => users.isLoaded);

export const selectCurrentPage = createSelector(usersSelector, (users) => users.currentPage);
