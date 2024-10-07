import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap } from 'react-icons/fa';
import { SiPostgresql, SiNodedotjs, SiPython, SiExpress, SiTensorflow, SiScikitlearn, SiOpencv, SiNumpy, SiPandas } from 'react-icons/si';
import { DiReact } from 'react-icons/di';
import { MdGraphicEq } from 'react-icons/md'; // For Matplotlib

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-neutral-950 text-neutral-300 border-b border-neutral-900 pb-4 lg:mb-35">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="max-w-2xl text-center mb-8">
      I am a passionate Full Stack Developer with a diverse skill set that encompasses web development and machine learning. Proficient in HTML, CSS, and JavaScript, I build responsive and user-friendly web applications using React and Bootstrap. My backend expertise includes Node.js and Express, complemented by a strong command of PostgreSQL and MongoDB for database management. In addition to web technologies, I am skilled in Python and its essential libraries, such as NumPy, Pandas, and scikit-learn, enabling me to tackle data analysis and machine learning projects. I also have experience with TensorFlow and OpenCV for advanced applications, allowing me to integrate machine learning capabilities into my solutions. With a solid foundation in these technologies, I strive to create efficient and scalable applications that address real-world challenges.
      </p>
      <h3 className="text-4xl font-bold mb-6">Skills</h3>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex flex-col items-center">
          <FaHtml5 size={60} />
          <span className="mt-2">HTML</span>
        </div>
        
        <div className="flex flex-col items-center">
          <FaCss3Alt size={60} />
          <span className="mt-2">CSS</span>
        </div>
        <div className="flex flex-col items-center">
          <FaJsSquare size={60} />
          <span className="mt-2">JavaScript</span>
        </div>

        <div className="flex flex-col items-center">
          <FaBootstrap size={60} />
          <span className="mt-2">Bootstrap</span>
        </div>

        <div className="flex flex-col items-center">
          <SiNodedotjs size={60} />
          <span className="mt-2">Node.js</span>
        </div>

        <div className="flex flex-col items-center">
          <SiExpress size={60} />
          <span className="mt-2">Express js</span>
        </div>
        <div className="flex flex-col items-center">
          <SiPostgresql size={60} />
          <span className="mt-2">PostgreSQL</span>
        </div>
        <div className="flex flex-col items-center">
          <SiPython size={60} />
          <span className="mt-2">Python</span>
        </div>

        <div className="flex flex-col items-center">
          <SiTensorflow size={60} />
          <span className="mt-2">Tensorflow</span>
        </div>

        <div className="flex flex-col items-center">
          <SiScikitlearn size={60} />
          <span className="mt-2">Scikit Learn</span>
        </div>

        <div className="flex flex-col items-center">
          <SiOpencv size={60} />
          <span className="mt-2">OpenCV</span>
        </div>

        <div className="flex flex-col items-center">
          <SiNumpy size={60} />
          <span className="mt-2">NumPy</span>
        </div>
        <div className="flex flex-col items-center">
          <SiPandas size={60} />
          <span className="mt-2">Pandas</span>
        </div>
        <div className="flex flex-col items-center">
          <MdGraphicEq size={60} />
          <span className="mt-2">Matplotlib</span>
        </div>

        <div className="flex flex-col items-center">
          <DiReact size={60} />
          <span className="mt-2">React</span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
