import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
export const fetchCollectionsStart = () => ({
  type: "FETCH_COLLECTIONS_START",
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: "FETCH_COLLECTIONS_SUCCESS",
  payload: collectionsMap,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    });
  };
};
