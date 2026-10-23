import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Main from '../components/Main';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shubham Kumar | Full-Stack Engineer</title>
        <meta
          name='description'
          content='Full-stack engineer at JSW Steel and founder of DevMatch. I build production web products with Next.js, TypeScript, and Node.js.'
        />
        <link rel='icon' href='/assets/shubham.jpg' />
      </Head>
      <Main />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
