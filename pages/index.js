import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Main from '../components/Main';
import PageMeta from '../components/PageMeta';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div>
      <PageMeta
        title='Shubham Kumar | Full-Stack Engineer'
        description='Full-stack engineer at JSW Steel and founder of DevMatch. I build production web products with Next.js, TypeScript, and Node.js.'
        path='/'
        image='/assets/shubham.jpg'
      />
      <Main />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
