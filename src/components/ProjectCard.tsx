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
    <div className='z-2 border-2 border-secondary3 bg-gradient4 rounded-7xl p-8 pb-0 mb-12 grid lg:grid-cols-2 gap-8'>
      <div>
        <h3 className='h5'>{title}</h3>
        {desc && <p>{desc}</p>}
        <h4 className='h6 text-primary1 my-8'>Stack</h4>
        <ul>
          {stack.map((item) => (
            <li
              key={`${title}-${item}`}
              className='caption'
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
              className='caption !text-primary1 underline'
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
              className='caption !text-primary1 underline'
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
