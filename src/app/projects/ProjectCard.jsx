import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

export default function ProjectCard({ project }) {
  const stack =
    project.stack.length > 4
      ? project.stack.slice(0, 3)
      : project.stack;

  const moreStack =
    project.stack.length > 4
      ? `+${project.stack.length - 3} more`
      : '';

  return (
    <div className='border border-slate-600 p-4 rounded-xl min-h-60 max-w-80 w-full shadow-lg shadow-slate-800'>
      <h3 className='font-bold text-lg mb-4'>
        {project.title}
      </h3>
      <h4 className='font-bold'>Used Stack:</h4>
      <ul className='mb-4'>
        {stack.map((item) => {
          return <li key={uuidv4()}>{item}</li>;
        })}
        {moreStack}
      </ul>
      <Link href={`/projects/${project.id}`}>
        <p className='font-bold'>See details</p>
      </Link>
    </div>
  );
}
