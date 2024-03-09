import firebase from '@/utils/database';
import {
  getFirestore,
  collection,
  getDocs,
} from 'firebase/firestore';
import ProjectCard from './ProjectCard';

const db = getFirestore(firebase);

export const getProjects = async () => {
  const docRef = collection(db, 'projects');
  const data = await getDocs(docRef);

  const projects = [];

  data.forEach((doc) =>
    projects.push({ id: doc.id, ...doc.data() })
  );
  return projects;
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
