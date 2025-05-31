import React from 'react';
import { Code, Server, PaintBucket, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            I'm a passionate developer who loves building creative and functional web applications.
            Here's a little more about who I am and what I do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I'm a Full Stack Developer with over 5 years of experience in web development.
              I specialize in building responsive, high-performance applications using modern
              technologies and best practices.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey in software development began during college when I built my first website.
              Since then, I've worked on a variety of projects ranging from e-commerce platforms to
              complex enterprise applications.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing my knowledge through technical blog posts.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and creating intuitive user experiences
              that solve real problems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-purple-400 mb-4">
                <Code size={36} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Frontend</h3>
              <p className="text-gray-400">
                Creating beautiful, responsive, and interactive user interfaces using modern frameworks.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-indigo-400 mb-4">
                <Server size={36} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Backend</h3>
              <p className="text-gray-400">
                Building robust, scalable APIs and server-side applications with security in mind.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-pink-400 mb-4">
                <PaintBucket size={36} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">UI/UX</h3>
              <p className="text-gray-400">
                Designing intuitive user experiences with attention to detail and aesthetics.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-blue-400 mb-4">
                <Lightbulb size={36} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Problem Solving</h3>
              <p className="text-gray-400">
                Analyzing complex problems and developing efficient, elegant solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;