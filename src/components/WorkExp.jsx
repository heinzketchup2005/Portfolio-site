import React from 'react';

const WorkExp = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-neutral-950 text-neutral-300 border-b border-neutral-900 pb-4 lg:mb-35">
      <h2 className="text-4xl font-bold mb-6">Work Experience & Contributions</h2>

      <div className="w-full lg:w-3/4">

        {/* Competitive Coding Club */}
        <div className="flex items-center mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
            {/* Add image source later */}
            <img src="src\assets\cclogo.png" alt="CC Club" className="object-cover w-full h-full" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Member - Competitive Coding Club (CC Club)</h3>
            <p className="max-w-2xl text-lg">
              As a member of the CC Club, I engage in competitive programming challenges, problem-solving sessions, and contribute to coding contests. My participation has enhanced my algorithmic skills and ability to tackle complex coding problems efficiently.
            </p>
          </div>
        </div>

        {/* Robotics Club */}
        <div className="flex items-center mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
            {/* Add image source later */}
            <img src="src\assets\roboclub.jpeg" alt="Robotics Club" className="object-cover w-full h-full" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Member - Robotics Club</h3>
            <p className="max-w-2xl text-lg">
              Being part of the Robotics Club, I work on robotics projects, learning about hardware-software integration and automation. The experience has allowed me to apply my coding skills to real-world mechanical systems.
            </p>
          </div>
        </div>

        {/* GSSoC Contribution */}
        <div className="flex items-center mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
            {/* Add image source later */}
            <img src="src\assets\gssoc.png" alt="GSSoC" className="object-cover w-full h-full" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Contributor - GirlScript Summer of Code (GSSoC)</h3>
            <p className="max-w-2xl text-lg">
              As a contributor to GSSoC, I have actively contributed to open-source projects. This experience has helped me collaborate with developers worldwide, contribute to diverse projects, and improve my knowledge of version control and open-source development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExp;
