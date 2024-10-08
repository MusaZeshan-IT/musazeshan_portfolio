import { Icon } from '@iconify/react';
import html5Icon from '@iconify/icons-simple-icons/html5';
import css3Icon from '@iconify/icons-simple-icons/css3';
import javascriptIcon from '@iconify/icons-simple-icons/javascript';
import reactIcon from '@iconify/icons-simple-icons/react';
import pythonIcon from '@iconify/icons-simple-icons/python';
import djangoIcon from '@iconify/icons-simple-icons/django';
import postgresqlIcon from '@iconify/icons-simple-icons/postgresql';
import awsIcon from '@iconify/icons-simple-icons/amazonaws';
import githubIcon from '@iconify/icons-simple-icons/github';

const skills = [
    { name: 'HTML', percentage: '95%', icon: html5Icon },
    { name: 'CSS', percentage: '90%', icon: css3Icon },
    { name: 'JavaScript', percentage: '90%', icon: javascriptIcon },
    { name: 'Python', percentage: '90%', icon: pythonIcon },
    { name: 'React', percentage: '92%', icon: reactIcon },
    { name: 'Django & DRF', percentage: '88%', icon: djangoIcon },
    { name: 'PostgreSQL', percentage: '74%', icon: postgresqlIcon },
    { name: 'AWS (EC2, S3)', percentage: '70%', icon: awsIcon },
    { name: 'Git & GitHub', percentage: '92%', icon: githubIcon },
];

const Skills = () => {
    return (
        <section id="skills" className="pt-28">
            <div className="mx-auto text-center bg-white 2xl:px-28 xl-custom:px-20 xl:px-16 lg-custom:px-14 lg:px-10 md:px-8 sm-custom:px-24 sm:px-16 xs-custom:px-14 xs:px-10 2xs-custom:px-8 2xs:px-6 px-4">
                <h2 className="lg:text-[45px] md:text-[40px] sm:text-[35px] xs:text-[30px] text-[28px] leading-[1.05] font-bold text-blue-700 mb-6">My Skills</h2>
                <div className='flex justify-center'>
                    <p className="text-gray-600 xs:text-base 2xs-custom:text-sm text-[13px] mb-16 text-center w-[530px]">
                        With 2+ years in full stack development, I craft seamless, scalable solutions from front-end to back-end.
                    </p>
                </div>
                <div className="grid xs-custom:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {skills.map((skill, index) => (
                        <div>
                            <div key={index} className="bg-blue-50 h-40 flex flex-col items-center justify-center p-6 rounded-[24px] text-center">
                                <Icon icon={skill.icon} className="text-[55px] text-gray-600 mx-auto mb-4" />
                                <p className="text-gray-500 mt-2 font-bold text-lg">{skill.percentage}</p>
                            </div>
                            <h3 className="mt-4 text-blue-600 mb-2">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
