import ClassBasedComponent from "./ClassBasedComponent";

const About = () => {
  return (
    <>
      <h1 className="font-bold text-2xl my-10 px-32"> About</h1>
      <p className="mx-32 text-lg">
        I am a seasoned frontend developer with 2 years of experience
        specializing in React development. I possess expertise in React, Redux,
        Tailwind CSS, JavaScript, MongoDB, Material UI, Bootstrap, Jest, and
        Java data structures. My passion lies in crafting intuitive and visually
        appealing user interfaces that enhance the overall user experience. With
        a strong foundation in frontend technologies, I excel at translating
        design concepts into fully functional and responsive web applications. I
        am dedicated to staying up-to-date with the latest industry trends and
        continuously expanding my skillset. I thrive in collaborative
        environments and strive to deliver high-quality code that meets client
        requirements.
      </p>
      {/* <ClassBasedComponent name={"Prem"} /> */}
    </>
  );
};

export default About;
