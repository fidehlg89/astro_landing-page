import React, { useEffect, useState } from "react";

type Tag = {
  name: string;
  gradient: string;
  shadow: string;
  initial: {
    top: string;
    left: string;
    rotate: string;
  };
  hover: {
    top: string;
    left: string;
    rotate?: string;
  };
  mobileInitial?: {
    top: string;
    left: string;
    rotate: string;
  };
  mobileHover?: {
    top: string;
    left: string;
    rotate?: string;
  };
  animation?: string;
};

// Grupo de tags
const tagsData: Tag[] = [
  {
    name: "React js",
    gradient: "linear-gradient(90deg, #F33C3A 0%, #F50C83 100%)",
    shadow: "0px 4px 14px rgba(244, 29, 104, 0.55)",
    initial: { top: "10px", left: "100px", rotate: "-2deg" },
    hover: { top: "120%", left: "35%" },
    mobileInitial: { top: "20px", left: "50px", rotate: "-2deg" },
    mobileHover: { top: "10%", left: "100%" },
    animation: "animate-floatwp",
  },  
  {
    name: "Vue js",
    gradient: "linear-gradient(90deg, #00FFC2 0%, #006DD2 100%)",
    shadow: "0px 4px 14px rgba(30, 223, 221, 0.55)",
    initial: { top: "70px", left: "380px", rotate: "20deg" },
    hover: { top: "90%", left: "50%" },
    mobileInitial: { top: "100px", left: "50px", rotate: "20deg" },
    mobileHover: { top: "30%", left: "100%" },
    animation: "animate-floatdjango",
  },
  {
    name: "Laravel",
    gradient: "linear-gradient(90deg, #44FF57 0%, #00D4FF 100%)",
    shadow: "0px 4px 14px rgba(0, 212, 255, 0.55)",
    initial: { top: "-20px", left: "560px", rotate: "-25deg" },
    hover: { top: "10%", left: "45%" },
    mobileInitial: { top: "180px", left: "50px", rotate: "-25deg" },
    mobileHover: { top: "50%", left: "100%" },
    animation: "animate-floatcsharp",
  },
  {
    name: "SQL",
    gradient: "linear-gradient(90deg, #85FF91 0%, #0FDBE8 100%)",
    shadow: "0px 4px 14px rgba(30, 223, 221, 0.55)",
    initial: { top: "190px", left: "180px", rotate: "-10deg" },
    hover: { top: "40%", left: "52%" },
    mobileInitial: { top: "50px", left: "200px", rotate: "-10deg" },
    mobileHover: { top: "70%", left: "100%" },
    animation: "animate-floatsql",
  },
  {
    name: "Tailwind CSS",
    gradient: "linear-gradient(90deg, #FBFF47 0%, #E5BD23 100%)",
    shadow: "0px 4px 14px rgba(229, 189, 35, 0.55)",
    initial: { top: "110px", left: "620px", rotate: "20deg" },
    hover: { top: "10%", left: "5%" },
    mobileInitial: { top: "100px", left: "260px", rotate: "20deg" },
    mobileHover: { top: "10%", left: "0%" },
    animation: "animate-floatruby",
  },
  {
    name: "CSS y CSS3",
    gradient: "linear-gradient(90deg, #C12DF5 0%, #9B0BF5 100%)",
    shadow: "0px 4px 14px rgba(155, 11, 245, 0.55)",
    initial: { top: "300px", left: "20px", rotate: "23.62deg" },
    hover: { top: "140%", left: "10%", rotate: "-2deg" },
    mobileInitial: { top: "140px", left: "160px", rotate: "23.62deg" },
    mobileHover: { top: "30%", left: "0%" },
    animation: "animate-floatcss",
  },
  {
    name: "MySQL",
    gradient: "linear-gradient(90deg, #FF4B4B 0%, #FF2149 100%)",
    shadow: "0px 4px 14px rgba(255, 65, 73, 0.55)",
    initial: { top: "340px", left: "320px", rotate: "1.6deg" },
    hover: { top: "60%", left: "35%" },
    mobileInitial: { top: "300px", left: "50px", rotate: "1.6deg" },
    mobileHover: { top: "70%", left: "0%" },
    animation: "animate-floatmongodb",
  },
  {
    name: "NodeJS",
    gradient: "linear-gradient(90deg, #85FFCE 0%, #0FCEE8 100%)",
    shadow: "0px 4px 14px rgba(64, 175, 208, 0.55)",
    initial: { top: "550px", left: "200px", rotate: "8.58deg" },
    hover: { top: "20%", left: "25%" },
    mobileInitial: { top: "40px", left: "300px", rotate: "5deg" },
    mobileHover: { top: "90%", left: "80%" },
    animation: "animate-floatnode",
  },
  {
    name: "Express js",
    gradient: "linear-gradient(90deg, #FFC147 0%, #9BE523 100%)",
    shadow: "0px 4px 14px rgba(128, 186, 104, 0.55)",
    initial: { top: "500px", left: "520px", rotate: "-15deg" },
    hover: { top: "160%", left: "35%" },
    mobileInitial: { top: "280px", left: "250px", rotate: "5deg" },
    mobileHover: { top: "90%", left: "0%" },
    animation: "animate-floatplayfrw",
  },
  {
    name: "Blazor WASM",    
    gradient: "linear-gradient(90deg, #E5BD23 0%, #F18822 100%)",
    shadow: "0px 4px 14px rgba(166, 216, 88, 0.55)",
    initial: { top: "200px", left: "350px", rotate: "-6.27deg" },
    hover: { top: "90%", left: "25%" },
    mobileInitial: { top: "220px", left: "130px", rotate: "-6.27deg" },
    mobileHover: { top: "50%", left: "0%" },
    animation: "animate-floatangular",
  }, 
  {
    name: "PHP",
    gradient: "linear-gradient(90deg, #FFB076 0%, #FF2149 100%)",
    shadow: "0px 4px 14px rgba(229, 189, 35, 0.55)",
    initial: { top: "80px", left: "60px", rotate: "-11.42deg" },
    hover: { top: "20px", left: "10%" },
    mobileInitial: { top: "-250px", left: "280px", rotate: "-11.42deg" },
    mobileHover: { top: "-100px", left: "50%" },
    animation: "animate-floatphp",
  },
  {
    name: "HTML y HTML5",
    gradient: "linear-gradient(90deg, #85FFCE 0%, #0FE859 100%)",
    shadow: "0px 4px 14px rgba(44, 185, 186, 0.55)",
    initial: { top: "450px", left: "20px", rotate: "-1.73deg" },
    hover: { top: "30%", left: "40%" },
    mobileInitial: { top: "-130px", left: "210px", rotate: "-1.73deg" },
    mobileHover: { top: "-150px", left: "20%" },
    animation: "animate-floathtml",
  },
  {
    name: "Bootstrap",
    gradient: "linear-gradient(90deg, #FCEF5E 0%, #FF5C00 100%)",
    shadow: "0px 4px 14px rgba(151, 212, 69, 0.55)",
    initial: { top: "230px", left: "630px", rotate: "-5.63deg" },
    hover: { top: "100px", left: "20%" },
    mobileInitial: { top: "-100px", left: "120px", rotate: "-5.63deg" },
    mobileHover: { top: "-200px", left: "60%" },
    animation: "animate-floatbootstrap",
  },
];


const Tags: React.FC = () => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Detecta si la pantalla es móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Ejecutar al cargar
    window.addEventListener("resize", handleResize); // Detectar cambios en tamaño de pantalla

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderTagPosition = (tag: Tag, isHovered: boolean) => {
    // Usa mobileInitial y mobileHover si está en móvil
    const initial = isMobile ? tag.mobileInitial || tag.initial : tag.initial;
    const hover = isMobile ? tag.mobileHover || tag.hover : tag.hover;

    return {
      top: isHovered ? hover.top : initial.top,
      left: isHovered ? hover.left : initial.left,
      transform: `rotate(${
        isHovered ? hover.rotate || initial.rotate : initial.rotate
      })`,
    };
  };

  return (
    <div className="relative w-full h-[700px]">
      {/* Texto */}
      <div className="max-w-md">
        <p className="text-center md:text-left text-base md:text-2xl leading-relaxed text-black shadow-xl rounded-lg p-5">
          {`A skilled web developer with a robust background in full stack development, specializing in frontend and backend technologies like Next.js, React, TypeScript, and Laravel. Proven experience working remotely in diverse international teams, with a focus on creating efficient, user-centric web applications. Experienced in agile methodologies (SCRUM) using tools like Jira and Trello for project management.`}
        </p>
      </div>

      {/* Grupo 1 de Tags */}
      <div
        className="relative md:absolute top-0 md:left-1/2 -translate-x-10 md:-translate-x-40 w-full h-1/2 z-0"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {tagsData.map((tag, index) => (
          <div
            key={index}
            className={`absolute text-base md:text-4xl px-5 md:px-8 py-1.5 md:py-2.5 rounded-full text-black font-semibold shadow-lg transition-all duration-700 ease-in-out whitespace-nowrap 
              ${hovered ? "" : tag.animation}`}
            style={{
              background: tag.gradient,
              boxShadow: tag.shadow,
              ...renderTagPosition(tag, hovered),
            }}
          >
            {tag.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
