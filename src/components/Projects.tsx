import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Layout, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
       liveUrl: '/E-Commerce%20Platform%20Proposal.pdf.pdf',
      category: 'Full-Stack Application',
      description: 'A fully functional e-commerce platform with product management, cart system, and user authentication. Features secure checkout system and responsive UI.',
      longDescription: [
        'Developed a comprehensive e-commerce platform with complete product lifecycle management',
        'Integrated MySQL database for efficient product storage and user data management',
        'Implemented secure user authentication and authorization system',
        'Built responsive UI using Bootstrap with AJAX for dynamic user interactions',
        'Created admin dashboard for inventory management and order processing'
      ],
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'AJAX', 'HTML5', 'CSS3'],
      features: ['Product Management', 'Shopping Cart', 'User Authentication', 'Admin Dashboard', 'Responsive Design'],
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      status: 'Completed',
      type: 'client'
    },
    {
      title: 'Research Center Website',
       liveUrl: '/research%20center.pdf.pdf',
      category: 'Content Management System',
      description: 'A comprehensive platform for managing research articles and publications with admin dashboard for researchers and submission management.',
      longDescription: [
        'Built a sophisticated content management system for academic research',
        'Developed admin dashboard for managing researchers and research submissions',
        'Implemented article categorization and search functionality',
        'Created user roles and permissions system for different access levels',
        'Integrated AJAX and jQuery for smooth user interactions and real-time updates'
      ],
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'AJAX', 'jQuery', 'CSS3'],
      features: ['Content Management', 'User Roles', 'Search System', 'Admin Dashboard', 'Publication Management'],
      image: 'https://images.pexels.com/photos/7057689/pexels-photo-7057689.jpeg?_gl=1*1hi8t5u*_ga*OTcyODc4NDU0LjE3NTEzMDc3MjY.*_ga_8JE65Q40S6*czE3NTE1NzAxMDckbzIkZzEkdDE3NTE1NzA3MTMkajU5JGwwJGgw',
      status: 'Completed',
      type: 'professional'
    },
    {
      title: 'Library Management System',
       liveUrl: 'https://helpful-mooncake-7b5b2e.netlify.app/signup',
    githubUrl: 'https://github.com/kanza707/book-library',
      category: 'Web Application',
      description: 'A modern library management system for tracking books and managing users, built with Firebase backend for real-time data synchronization.',
      longDescription: [
        'Developed a comprehensive library management solution with real-time capabilities',
        'Utilized Cloud Firestore for efficient data storage and retrieval',
        'Implemented book tracking system with check-in/check-out functionality',
        'Created user management system for library members and staff',
        'Built responsive frontend with modern UI/UX design principles'
      ],
      technologies: ['JavaScript', 'Firebase', 'Cloud Firestore', 'HTML5', 'CSS3', 'Bootstrap'],
      features: ['Book Tracking', 'User Management', 'Real-time Updates', 'Member Dashboard', 'Staff Portal'],
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Completed',
      type: 'personal'
    },
    {
      title: 'Laravel Blog website ',
       liveUrl: '#',
    githubUrl: 'https://github.com/kanza707/little-web',
      category: 'Learning Project',
      description: 'A practice project for mastering Laravel framework, featuring complete CRUD operations with authentication system using Laravel Breeze.',
      longDescription: [
        'Built comprehensive CRUD application to master Laravel framework',
        'Implemented authentication system using Laravel Breeze for secure user management',
        'Practiced advanced Laravel concepts including Eloquent ORM and relationships',
        'Developed RESTful API endpoints with proper routing and controller structure',
        'Applied Laravel best practices for code organization and security'
      ],
      technologies: ['Laravel', 'PHP', 'MySQL', 'Eloquent ORM', 'Laravel Breeze', 'Blade Templates'],
      features: ['CRUD Operations', 'Authentication', 'Database Relations', 'RESTful API', 'Security Features'],
      image: 'https://media.istockphoto.com/id/1406248045/photo/business-woman-with-finger-pressing-laravel-button-on-virtual-screens.jpg?b=1&s=612x612&w=0&k=20&c=xhmeQMd2c-9sfVYik_38XeVnMAfCcyei8RQVT9JcXHg=',
      status: 'In Progress',
      type: 'learning'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'from-green-500 to-emerald-500';
      case 'In Progress':
        return 'from-blue-500 to-indigo-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'client':
        return <ExternalLink className="w-4 h-4" />;
      case 'professional':
        return <Code className="w-4 h-4" />;
      case 'personal':
        return <Zap className="w-4 h-4" />;
      case 'learning':
        return <Database className="w-4 h-4" />;
      default:
        return <Layout className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
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
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my web development projects, from e-commerce platforms to learning exercises
          </p>
        </motion.div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Project Image */}
                <motion.div
                  className={`relative overflow-hidden rounded-xl ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
  <div className="flex space-x-3">
    <motion.a
      href={project.liveUrl} // 🔴 Now dynamic per project
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ExternalLink className="w-5 h-5" />
    </motion.a>
    <motion.a
      href={project.githubUrl} // 🔴 Now dynamic per project
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Github className="w-5 h-5" />
    </motion.a>
  </div>
</div>
                  </div>
                </motion.div>

                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex items-center gap-2 px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                        {getTypeIcon(project.type)}
                        {project.category}
                      </span>
                      <span className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(project.status)} text-white text-sm font-medium rounded-full`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                 <div className="flex flex-wrap gap-4 pt-4">
  <motion.a
    href={project.liveUrl}  
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    <ExternalLink className="w-4 h-4" />
    View Project
  </motion.a>
  
  <motion.a
    href={project.githubUrl}  
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    <Github className="w-4 h-4" />
    Source Code
  </motion.a>
</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;