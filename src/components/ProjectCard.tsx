import Image from 'next/image';
import Link from 'next/link';
import { ImageModal } from './ImageModal';

export const ProjectCard = ({
  project: {
    title,
    desc,
    stack,
    images,
    githubLink,
    productionLink,
  },
}: {
  project: ProjectProp;
}) => {
  return (
    <div className='border-2 bg-gradient rounded-2xl p-8 pb-0 mb-12 grid lg:grid-cols-2 gap-8'>
      <div>
        <h3 className='text-2xl uppercase font-bold'>
          {title}
        </h3>
        {desc && <p className='text-sm'>{desc}</p>}
        <h4 className='text-lg uppercase font-semibold my-8'>
          Stack
        </h4>
        <ul>
          {stack.map((item) => (
            <li
              key={`${title}-${item}`}
              className='text-active uppercase text-sm mb-2'
            >
              {item}
            </li>
          ))}
        </ul>
        {githubLink && (
          <p className='my-8'>
            Link to{' '}
            <Link
              href={githubLink}
              target='_blank'
              className='text-active uppercase text-sm mb-2 font-semibold underline'
            >
              Github
            </Link>
          </p>
        )}
        {productionLink && (
          <p className='my-8'>
            Link to{' '}
            <Link
              href={productionLink}
              target='_blank'
              className='text-active uppercase text-sm font-semibold mb-2 underline'
            >
              Preview
            </Link>
          </p>
        )}
      </div>
      <div>
        {images.map((img) => (
          <ImageModal key={img} image={img} />
        ))}
      </div>
    </div>
  );
};
