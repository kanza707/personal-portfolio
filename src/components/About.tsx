import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap, Award } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Enhanced Web Speed',
      description: 'Increased web application speed by 40% through optimized code and performance improvements',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Customer Satisfaction',
      description: 'Achieved 95% customer satisfaction rate by delivering innovative and user-friendly web solutions',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'LMS Engagement Boost',
      description: 'Implemented a new LMS feature, improving user engagement by 50%',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Full Stack Developer with a Passion for Innovation
            </h3>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Junior web developer with hands-on experience in frontend and full-stack development. 
                Proficient in <strong>HTML, CSS, Bootstrap, AJAX, jQuery, PHP, and MySQL</strong>, with recent 
                exposure to <strong>Laravel</strong> (CRUD, controllers, routers, Eloquent ORM, authentication with Breeze).
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I've developed multiple real-world projects, including an <strong>E-commerce website</strong>, 
                a <strong>research center platform</strong>, and a <strong>library management system</strong> 
                with Firebase backend. My focus is on creating efficient, scalable web applications.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently seeking opportunities to further enhance my backend expertise and contribute 
                to innovative web solutions that make a real impact.
              </p>
            </div>

            <motion.button
              onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Experience
            </motion.button>
          </motion.div>

          {/* Right Column - Achievements */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Key Achievements
            </h3>
            
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 group-hover:shadow-xl">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center text-white`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;