import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
} from "./user.actions";

import 'firebase/auth';
import { googleProvider, auth, getCurrentUser } from "../../firebase/firebaseUtils";

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* signInWithGoogle() {
    try {
        const result = yield auth.signInWithPopup(googleProvider);
        yield put(signInSuccess({id: result}));
    } catch (error) {
        yield put(signInFailure(error));
    }
};

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    yield put(signInFailure());
   //yield put(signInSuccess({id: userAuth}));
  } catch (error) {
    yield put(signInFailure(error));
  }
}



export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(isUserAuthenticated),
    call(onSignOutStart)
  ]);
}
