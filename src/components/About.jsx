function About() {
  return (
    <section id="about" className="w-full min-h-screen flex items-center justify-center px-20 py-20">
      <div className="max-w-4xl w-full flex flex-col gap-12">

        <h2 className="text-5xl font-bold">
          About <span style={{ color: '#cc0000' }}>Me</span></h2>

        <div className="flex flex-col gap-6 max-w-2xl"> 
          <p className="text-[#aaaaaa] text-lg leading-relaxed">
            Hello to whoever's reading, I'm Trevor, a frontend dev student and video editor, 
            I enjoy making things that look and feel great to use and experience.
          </p>
          <p className="text-[#aaaaaa] text-lg leading-relaxed">
            Using core design principles as a base, I build and create projects that pique interests and leave a lasting impression.
          </p>
          <p className="text-[#aaaaaa] text-lg leading-relaxed"> 
            This portfolio is a look into my works and what I have to offer.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About