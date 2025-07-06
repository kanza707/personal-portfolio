import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Freelance Web Developer',
      company: 'NJ (Client Project)',
      location: 'Karachi, Pakistan',
      period: '04/2024 - Present',
      type: 'Freelance',
      current: true,
      description: 'Currently developing an E-commerce website for NJ with full-stack functionality using PHP, MySQL, and Bootstrap.',
      achievements: [
        'Implemented core functionalities including product listing, admin dashboard, user authentication',
        'Developed add-to-cart and wishlist system with local storage persistence',
        'Collaborating closely with client for UI improvements and backend optimization',
        'Building responsive design with modern UI/UX principles'
      ],
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Full Stack Web Developer',
      company: 'YAM Group of Companies',
      location: 'Karachi, Pakistan',
      period: '02/2024 - 04/2024',
      type: 'Full-time',
      description: 'Responsible for both frontend and backend development using PHP and MySQL.',
      achievements: [
        'Built live e-commerce features including product listings and admin panel',
        'Implemented key features like product management and basic security',
        'Collaborated with team on multiple client projects',
        'Optimized database queries for better performance'
      ],
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'AJAX']
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Codexo',
      location: 'Karachi, Pakistan',
      period: '12/2023 - 02/2024',
      type: 'Internship',
      description: 'Assisted in developing responsive frontend layouts using HTML, CSS, and Bootstrap.',
      achievements: [
        'Collaborated with senior developers to integrate AJAX and jQuery for interactive UI',
        'Participated in bug fixing and UI improvements for client-based projects',
        'Learned best practices for responsive web design',
        'Gained experience in version control with Git'
      ],
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'AJAX', 'Git']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey in web development, from internship to freelance projects
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-secondary-600"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full border-4 border-white dark:border-gray-800 z-10">
                  {exp.current && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} ml-16 md:ml-0`}>
                  <motion.div
                    className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-primary-600 dark:text-primary-400 mb-2">
                          <Building className="w-4 h-4 mr-2" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-6">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;