import firebase from '@/utils/database';
import {
  getFirestore,
  collection,
  getDocs,
} from 'firebase/firestore';

const db = getFirestore(firebase);

export async function generateStaticParams() {
  const docRef = collection(db, 'projects');
  const data = await getDocs(docRef);

  const projects = [];

  data.forEach((doc) =>
    projects.push({
      id: doc.id,
    })
  );

  return projects;
}

export default function Layout({ children }) {
  return <>{children}</>;
}
