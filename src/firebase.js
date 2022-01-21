import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';

/*const firebaseConfig = {
  apiKey: 'AIzaSyCN5OgMG180-2TPRZoFkoLo6bGhb0EH8WA',
  authDomain: 'stina-31ca9.firebaseapp.com',
  projectId: 'stina-31ca9',
  storageBucket: 'stina-31ca9.appspot.com',
  messagingSenderId: '621210675058',
  appId: '1:621210675058:web:2098d970c8db3367f65feb',
};*/

const firebaseConfig = {
  apiKey: 'AIzaSyBoiEXbkW3T-vvSqxgCemk3r6lBwrqpd_E',
  authDomain: 'stina-5526f.firebaseapp.com',
  projectId: 'stina-5526f',
  storageBucket: 'stina-5526f.appspot.com',
  messagingSenderId: '725192705343',
  appId: '1:725192705343:web:f6112cde8c92f135bf7f8a',
  measurementId: 'G-QJ4PL4F98T',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export async function getCollectionsData(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const data = querySnapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
  return data;
}

export async function getDataWithSubCollection(
  collectionName,
  subCollectionName,
) {
  const data = await getCollectionsData(collectionName);

  const dataWithSubCollection = await Promise.all(
    data.map(async (document) => ({
      ...document,
      [subCollectionName]: await getCollectionsData(
        `${collectionName}/${document.id}/${subCollectionName}`,
      ),
    })),
  );

  return dataWithSubCollection;
}

export async function addDataToCollection(collectionName, data) {
  const newDocRef = await addDoc(collection(db, collectionName), data);
  const docSnap = await getDoc(newDocRef);
  return {
    id: docSnap.id,
    ...docSnap.data(),
  };
}

export async function addDataToSubCollection(subCollectionRoute, data) {
  const newDocRef = await addDoc(collection(db, subCollectionRoute), data);
  const docSnap = await getDoc(newDocRef);
  return {
    id: docSnap.id,
    ...docSnap.data(),
  };
}

export async function editDocumentInCollection(collectionName, id, body) {
  await updateDoc(doc(db, collectionName, id), body);
}

export async function editDocumentInSubCollection(
  subCollectionRoute,
  id,
  body,
) {
  await updateDoc(doc(db, subCollectionRoute, id), body);
}

export async function deleteDocument(collectionName, id) {
  await deleteDoc(doc(db, collectionName, id));
}

export async function deleteDocumentFromSubCollection(subCollectionRoute, id) {
  await deleteDoc(doc(db, subCollectionRoute, id));
}
