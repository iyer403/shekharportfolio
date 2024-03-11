import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8  leading-loose">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt harum
            sequi, excepturi quis voluptatum accusantium? Est quam suscipit iste
            quos voluptatibus necessitatibus molestias tempore nam id voluptate!
            Deserunt minus nam obcaecati cupiditate aperiam a pariatur. Est
            minima consequuntur cum, similique earum enim? Rem quis sed ut
            perspiciatis. Inventore qui laudantium deserunt natus doloribus
            sequi modi non ad nisi, perspiciatis rem officia quod illo iusto
            quibusdam? Aliquam quisquam nam eius consequuntur autem incidunt hic
            quasi. Temporibus ut corporis qui esse, ipsam numquam iure unde
            error fuga, architecto sunt dolorum quaerat quos provident aut
            eveniet quae vel ducimus, saepe illum. Nulla, quasi.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
