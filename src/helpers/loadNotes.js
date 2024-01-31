import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseCloudFirestore } from "../firebase/config";

export const loadNotes = async (uid = '') => {
  if (!uid) throw new Error('The UID of user does not exist');

  const collectionRef = collection(FirebaseCloudFirestore, `${uid}/journal/notes`);
  const docs = await getDocs(collectionRef);

  const notes = [];

  docs.forEach(doc => {
    notes.push({
      id: doc.id,
      ...doc.data()
    });
  })

  return notes;
}