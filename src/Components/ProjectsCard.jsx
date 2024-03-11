import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

import { TbWorldWww } from 'react-icons/tb';

const ProjectsCard = ({ project }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:scale-105 ease-out duration-300">
      <img
        src={project.img}
        alt={project.title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{project.title}</h2>
        <p className="mt-4 text-slate-700 leading-loose">{project.text}</p>
        <div className="mt-4 flex gap-x-4">
          <a href={project.url}>
            <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href={project.github}>
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard;
