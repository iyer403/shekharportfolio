import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import heroImg from '../assets/hero.svg';
FaGithubSquare;

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <section className="align-element px-8 grid  md:grid-cols-2 gap-8">
        <article className="flex flex-col">
          <h1 className=" text-7xl font-bold tracking-wider">I'm Shekhar</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-end developer
          </p>
          <p className="mt-2 text-lg  text-slate-700 tracking-wide capitalize">
            Turning Ideas into Interactive Reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/iyer403">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black" />
            </a>
            <a href="https://www.linkedin.com/in/shekhar-iyer-26127036/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96"></img>
        </article>
      </section>
    </div>
  );
};
export default Hero;
