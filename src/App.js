import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from "framer-motion";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import img from './images/Untitled design (11).png';
import icon from './images/3e3ef5c892a4b234587a213d22fabbd8-removebg-preview.png';
import icon2 from './images/best-student-award-1579843-1335794-removebg-preview.png';
import icon3 from './images/icons8-goal-oriented-focus-100.png';
import icon4 from './images/4.png';
import icon5 from './images/5.png';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [duration, setDuration] = useState('1s');
  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());
  const controls = useAnimation();
  const controls2 = useAnimation(); 
  const secondPartRef = useRef(null);
  const hasAppeared = useRef(false);
  const [open, setOpen] = useState(false);
  const isScrolled1 = true;
  const duration1 = "300ms"; 
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();

      const distance = Math.abs(currentScrollY - lastScrollY.current);
      const timeElapsed = currentTime - lastTime.current;

      const speed = distance / (timeElapsed || 2);
      const dynamicDuration = Math.min(Math.max(800 / speed, 20), 1);

      setDuration(`${dynamicDuration}s`);
      setIsScrolled(currentScrollY > 1);
      lastScrollY.current = currentScrollY;
      lastTime.current = currentTime;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAppeared.current) {
            controls.start({ x: 0, opacity: 1 }); 
            controls2.start({ x: 0, opacity: 1 }); 
            hasAppeared.current = true;
          }
        });
      },
      { threshold: 0.4 }
    );

    if (secondPartRef.current) {
      observer.observe(secondPartRef.current);
    }

    return () => {
      if (secondPartRef.current) {
        observer.unobserve(secondPartRef.current);
      }
    };
  }, [controls]);



  return (
    <section>
    <div className="home reveal-up ">
      <div className="firstpart ">

      <div className="header z-50">
  <nav
    className={`w-screen bg-gradient-to-l to-slate-950/80 from-slate-950/80 backdrop-blur-[80px] p-3 ${
      isScrolled ? 'shadow-black' : ''
    }`}
    style={{ transitionDuration: duration }}
  >
    <div className="flex items-center w-full">
      <ul className="hidden md:flex justify-center w-full space-x-6 text-white font-semibold">
        {['Home', 'Programs', 'Pathways', 'Contact Us'].map((item) => (
          <li
            key={item}
            className="hover:bg-slate-200 cursor-pointer rounded-2xl px-3 py-1 hover:duration-100 hover:text-black"
          >
            <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white focus:outline-none"
      >
        {open ? (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
    </div>

    {open && (
      <ul className="md:hidden mt-4 space-y-2 text-white font-semibold">
        {['Home', 'Programs', 'Pathways', 'Contact Us'].map((item) => (
          <li
            key={item}
            className="hover:bg-slate-200 cursor-pointer rounded-2xl px-3 py-1 hover:duration-100 hover:text-black"
          >
            <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
          </li>
        ))}
      </ul>
    )}
  </nav>
</div>




        <h1 className=" md:text-5xl text-center mt-[120px] font-bold text-white">
  Shaping Global Citizens
</h1>
        <br />
        <div className="txt text-center">
          <small className="txt text-white ">
            Our college prepares students to excel in an interconnected world by offering globally
            <br />
            recognized programs, cutting-edge facilities, and access to a vibrant learning
            community.
            <br />
            Rooted in Campus Direct UK's legacy of excellence, we are dedicated to empowering
            students to achieve
            <br />
            their academic and professional aspirations.
          </small>
        </div>

        <div className="flex items-center justify-center md:mt-10">
  <div className="flex justify-center items-center border-[2px] backdrop-blur-[10px] p-3 rounded-xl shadow-2xl w-full max-w-[400px] mx-4">
    <input
      type="text"
      placeholder="Search Your Course Here..."
      className="w-full bg-transparent text-white placeholder-white/80 outline-none text-sm px-2"
    />
    <MagnifyingGlassIcon className="h-6 w-6 text-white/80" />
  </div>
</div>


        <div>
          <h1 className="text-3xl text-center md:mt-36 font-semibold text-gray-900">
            We Are<br /> Colombo International College
          </h1>
          <div className="leading-tight text-center p-3 text-gray-800">
            <small>
              Our college offers a unique edge with highly qualified faculty,
              <br />
              strong industry partnerships for internships, and access to state-of-the-art facilities.
              <br />
              With global university connections and scholarships, we ensure students achieve academic and professional success.
            </small>
          </div>
        </div>
      </div>
      <div className="secondpart" ref={secondPartRef}>
      <div className="relative flex justify-center">
       
  <img className='absolute max-w-32 bottom-[80px] left-[170px] opacity-90' src={icon} alt=''></img>
      <div className='absolute bottom-[20px] left-[130px] text-center'>
  <div className='text-[35px] font-bold -mb-3 text-slate-800'>3000+ Years</div>
  <small className=''>of Collective Experience</small>
</div>
<img className='absolute max-w-32 bottom-[75px] left-[420px] opacity-90' src={icon2} alt=''></img>
      <div className='absolute bottom-[20px] left-[394px] text-center'>
  <div className='text-[35px] font-bold -mb-3 text-slate-800'>Over 5000</div>
  <small className=''>Success Stories</small>
</div>

    <motion.div
      animate={controls}
      initial={{ x: -100, opacity: 0 }}
      transition={{ duration: 1.5, type: 'spring' }}
      className="motion-box text-white p-8 rounded-3xl shadow-xl w-[600px] absolute z-0"
    >
      <h2 className="text-5xl font-thin text-center">Welcome to CIC</h2>
      <br />
      <div className="text-center">
        <small className="font-light text-[15px]">
          Welcome to our campus, where academic excellence and innovation meet. Our state-of-the-art facilities are designed to foster creativity, collaboration, and intellectual growth. As part of a global network of institutions, we provide students with diverse opportunities to expand their horizons through industry partnerships, internships, and international exposure. With a team of highly qualified faculty and a focus on student success, our campus is the ideal place for ambitious individuals to shape their future and become leaders in their fields. We are committed to nurturing the next generation of global citizens, ready to make an impact in an interconnected world.
        </small>
      </div>
    </motion.div>
    <motion.div
      animate={controls2}
      initial={{ x: 100, opacity: 0 }}
      transition={{ duration: 1.5, type: 'spring' }}
      className="-z-10"
    >
      <img src={img} alt="Campus Design" className="logo" />
    </motion.div>
  </div>
      </div>

      <div className="flex flex-col items-center mb-14">
  <div className="degree flex flex-wrap justify-center gap-10 mt-10">
    {/* Box 1 */}
    <div className="box1 text-white flex flex-col items-center h-[400px] w-full sm:w-[350px]">
      <h1 className="text-3xl mb-2 text-center font-semibold pt-5">
        SCHOOL OF COMPUTING
      </h1>
      <div className="bg-white h-[2px] w-64 rounded-3xl"></div>
      <br />
      <small className="text-center pt-9">
        Explore a diverse range of customized academic computing programs, carefully designed to cater to your unique interests and career aspirations, guiding you toward success in the field you're most passionate about.
      </small>
      <button className="border-white border-[1px] border-opacity-40 text-[20px] mt-[42px] px-5 py-[5px] backdrop-blur-2xl text-white rounded-xl shadow-md hover:bg-white hover:bg-opacity-40">
        Explore More
      </button>
    </div>

    {/* Box 2 */}
    <div className="box2 text-white flex flex-col items-center h-[400px] w-full sm:w-[350px] ">
      <h1 className="text-3xl mb-2 text-center font-semibold pt-5">
        SCHOOL OF ENGINEERING
      </h1>
      <div className="bg-white h-[2px] w-64 rounded-3xl"></div>
      <br />
      <small className="text-center pt-9">
        Discover a comprehensive array of specialized engineering programs, tailored to equip you with the skills and knowledge needed to innovate and excel in your chosen field of engineering.
      </small>
      <button className="border-white border-[1px] border-opacity-40 text-[20px] mt-[62px] px-5 py-[5px] backdrop-blur-2xl text-white rounded-xl shadow-md hover:bg-white hover:bg-opacity-40">
        Explore More
      </button>
    </div>
  

    <div className="box3 text-white flex flex-col items-center h-[400px] w-full sm:w-[350px]">
      <h1 className="text-3xl mb-2 text-center font-semibold pt-5">
        SCHOOL OF BUSINESS
      </h1>
      <div className="bg-white h-[2px] w-64 rounded-3xl"></div>
      <br />
      <small className="text-center pt-9">
        Unlock a world of opportunities with our dynamic business programs, designed to develop your entrepreneurial mindset, leadership skills, and expertise to thrive in the ever-evolving world of business.
      </small>
      <button className="border-white border-[1px] border-opacity-40 text-[20px] mt-[45px] px-5 py-[5px] backdrop-blur-2xl text-white rounded-xl shadow-md hover:bg-white hover:bg-opacity-40">
        Explore More
      </button>
    </div>
  </div>
</div>



      <div className="ccc flex flex-col bg-red-800 py-10 mt-10">

  <div className="degree flex flex-col lg:flex-row items-center justify-around gap-10 px-5 lg:px-16">

    <div className="text-white text-center lg:text-left max-w-md">
      <div className="flex justify-center lg:justify-start mb-4">
        <img src={icon3} alt="Focus Areas" className="w-16 h-16" />
      </div>
      <h1 className="text-3xl font-bold mb-4">Core Focus Areas</h1>
      <p className="text-sm leading-relaxed">
        <strong>Global Partnerships:</strong> Leveraging their existing network of international universities, the new institution could offer joint degree programs, study-abroad opportunities.
        <br /><br />
        <strong>Career-Oriented Education:</strong> Emphasis on employability through skill development, internships, and connections with global industries.
        <br /><br />
        <strong>Inclusive Accessibility:</strong> Scholarships and financial aid programs to ensure education is accessible to students from diverse backgrounds.
      </p>
    </div>

    <div className="hidden lg:block w-1 h-48 bg-white rounded-full"></div>

    <div className="text-white text-center lg:text-left max-w-md">
      <div className="flex justify-center lg:justify-start mb-4">
        <img src={icon4} alt="Unique Features" className="w-16 h-16" />
      </div>
      <h1 className="text-3xl font-bold mb-4">Unique Features</h1>
      <p className="text-sm leading-relaxed">
        <strong>State-of-the-Art Infrastructure:</strong> Modern facilities like smart classrooms, high-tech labs, libraries, and recreational spaces.
        <br /><br />
        <strong>Industry Collaborations:</strong> Partnerships with top companies to integrate internships, mentorship, and live projects into the curriculum.
        <br /><br />
        <strong>Research and Innovation Hubs:</strong> Support for academic research with dedicated funding, labs, and partnerships with global research institutions.
      </p>
    </div>

    <div className="hidden lg:block w-1 h-48 bg-white rounded-full"></div>

    <div className="text-white text-center lg:text-left max-w-md">
      <div className="flex justify-center lg:justify-start mb-4">
        <img src={icon5} alt="Support Services" className="w-16 h-16" />
      </div>
      <h1 className="text-3xl font-bold mb-4">Support Services</h1>
      <p className="text-sm leading-relaxed">
        <strong>Comprehensive Counseling:</strong> Career guidance, mental health support, and academic mentoring.
        <br /><br />
        <strong>Industry Collaborations:</strong> Partnerships with top companies to integrate internships, mentorship, and live projects into the curriculum.
        <br /><br />
        <strong>Research and Innovation Hubs:</strong> Support for academic research with dedicated funding, labs, and partnerships with global research institutions.
      </p>
    </div>
  </div>
</div>




    </div>

    </section>
  );
}
export default App;
