"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';


const about = {
  title: "About Me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fuga.",
  info: [
    {
      filedName: "Name",
      fieldValue: "Saqib Rahim"
    },
    {
      filedName: "phone",
      fieldValue: "(+92) 32 3225946"
    },
    {
      filedName: "Experience",
      fieldValue: "1+ years"
    },
    {
      filedName: "Nationality",
      fieldValue: "Pakistani"
    },
    {
      filedName: "Email",
      fieldValue: "saqibraheem@gmail.com"
    },
    {
      filedName: "Freelance",
      fieldValue: "Available"
    },
  ]
}

const experience = {
  icon: '../public/assets/resume/badge.svg',
  title: 'My Experience',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fuga.",
  items: [
    {
      company: 'KoreDigital',
      position: "Jr. Full Stack Developer",
      duration: "2022 - 2023"
    },
    {
      company: 'KoreDigital',
      position: "Jr. Full Stack Developer",
      duration: "2022 - 2023"
    },
    {
      company: 'KoreDigital',
      position: "Jr. Full Stack Developer",
      duration: "2022 - 2023"
    },
    {
      company: 'KoreDigital',
      position: "Jr. Full Stack Developer",
      duration: "2022 - 2023"
    },
  ]
}
const education = {
  icon: '../public/assets/resume/badge.svg',
  title: 'My Education',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fuga.",
  items: [
    {
      institution: 'Federal Urdu University',
      position: "BS Computer Science",
      duration: "2019 - 2024"
    },
    {
      institution: 'Federal Urdu University',
      position: "BS Computer Science",
      duration: "2019 - 2024"
    },
    {
      institution: 'Federal Urdu University',
      position: "BS Computer Science",
      duration: "2019 - 2024"
    },

  ]
}
const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fuga.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5"
    },
    {
      icon: <FaCss3 />,
      name: "css 3"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <FaReact />,
      name: "React.JS"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.JS"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind css"
    },
    {
      icon: <FaNodeJs />,
      name: "Node JS"
    },
    {
      icon: <FaFigma />,
      name: "Figma"
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'


function Resume() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {  delay: 2.4, duration: 0.4, ease:"easeIn"},
    }}
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>


          {/* content */}
          <div className='min-h-[70vh] w-full' >
            {/* Experience */}
            <TabsContent value="experience" className='w-full'>
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item,index)=>{
                      return(
                        <li key={index} 
                        className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className='w-full'>experience</TabsContent>
            
            {/* skills */}
            <TabsContent value="skills" className='w-full'>experience</TabsContent>

            {/* About */}
            <TabsContent value="about" className='w-full'>experience</TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
