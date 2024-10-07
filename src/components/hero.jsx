import profilePic from "../assets/mypic.jpeg"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mr-8">
            <h1 className="pb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Shambhavi Kejriwal
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent mb-8">
              Full Stack Developer, Machine Learning Engineer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              I'm a Full Stack Developer with expertise in the PERN stack (PostgreSQL, Express, React, Node.js), dedicated to building scalable and efficient web applications. I enjoy creating seamless, user-friendly solutions while focusing on technical robustness. With knowledge of machine learning, I explore data-driven projects, and my experience in competitive coding helps me solve complex problems effectively. Combining these skills, I deliver high-quality, optimized software solutions.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img 
              src={profilePic} 
    className="max-w-full max-h-full w-80 h-80 object-contain border"
            /> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
