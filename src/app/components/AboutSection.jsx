export default function AboutSection() {
  return (
    <div className="py-20 sm:px-6 container mx-auto px-4 xl:px-32" id="about">
      <div className="">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="lg:w-3/5">
            <div className="w-full h-auto relative rounded overflow-hidden">
              <img
                src="https://i.ibb.co.com/Q7zQC7sY/1000000889.jpg"
                className="hidden lg:block w-full lg:h-[550px] xl:h-[450px] rounded object-cover"
                alt="Moshiur Islam"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full space-y-4 text-[17px] lg:text-[22px] xl:text-2xl text-gray-300">
            <p>
              Assalamu Assalam, I am Moshiur Islam, and I started my programming
              journey alongside my diploma. Initially, programming seemed like
              just another skill to learn, but over time, it became my passion.
              I genuinely enjoy writing code and solving complex problems, and
              each new challenge excites me even more.
            </p>
            <p>
              Apart from programming, I love playing games. Gaming is not just a
              source of entertainment for me but also a way to explore
              creativity and find inspiration. Living in a village keeps me
              connected to nature, bringing peace and balance to my thoughts and
              daily life.
            </p>
            <p>
              Beyond programming and gaming, I am always curious to learn new
              things and enhance my skills. I believe in continuous growth and
              am determined to achieve bigger dreams as I move forward in my
              journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
