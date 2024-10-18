import firebase from '@/utils/database';
import {
  getFirestore,
  doc,
  getDoc,
} from 'firebase/firestore';

import { v4 as uuidv4 } from 'uuid';
import { FaGithub, FaCode } from 'react-icons/fa';
import { GoBrowser } from 'react-icons/go';

import ImageModal from './ImageModal';

const getSingleProject = async (id) => {
  const db = getFirestore(firebase);

  const docRef = doc(db, 'projects', id);
  const data = await getDoc(docRef);

  const project = data.data();

  return project;
};

export default async function SingleProjectPage({ id }) {
  const project = await getSingleProject(id);

  return (
    <div className='block lg:grid grid-cols-2 w-full border border-slate-600 rounded-xl p-4 text-left shadow-lg shadow-slate-800'>
      <div>
        <h2 className='font-bold text-2xl mb-4'>
          {project.title}
        </h2>
        <h4 className='font-bold mb-2'>Used Stack:</h4>
        <ul className='mb-4'>
          {project.stack.map((item) => {
            return <li key={uuidv4()}>{item}</li>;
          })}
        </ul>
        {project.description && (
          <>
            <h4 className='font-bold mb-2'>Description:</h4>
            <div className='text-md mb-8'>
              <p>{project.description}</p>
            </div>
          </>
        )}
        {(project.githubLink ||
          project.ghpLink ||
          project.csbLink) && (
          <>
            <h4 className='font-bold mb-2'>Check out:</h4>
            <div className='flex gap-4 text-2xl mb-8'>
              {project.githubLink && (
                <a
                  data-tip='Check on Github'
                  target='_blank'
                  href={project.githubLink}
                >
                  <FaGithub />
                </a>
              )}
              {project.ghpLink && (
                <a
                  data-tip='Check on Github Pages'
                  target='_blank'
                  href={project.ghpLink}
                >
                  <GoBrowser />
                </a>
              )}
              {project.csbLink && (
                <a
                  data-tip='Check on codesandbox.io'
                  target='_blank'
                  href={project.csbLink}
                >
                  <FaCode />
                </a>
              )}
            </div>
          </>
        )}
      </div>
      <div>
        <h4 className='font-bold mb-2'>Screens:</h4>
        {project.images?.map((image) => (
          <div key={uuidv4()} className='mb-2'>
            <ImageModal image={image} />
          </div>
        ))}
      </div>
    </div>
  );
}
