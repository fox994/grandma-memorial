import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* 主要標題 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-warm-gold mb-4 text-shadow">
            緬懷我們親愛的阿嬤
          </h1>
          <div className="w-24 h-1 bg-warm-gold mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-memorial-gray font-light">
            目不識丁 卻活出一本巨著
          </p>
        </motion.div>

        {/* 主要照片區域 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <div className="relative inline-block">
            <div className="w-80 h-80 md:w-96 md:h-96 mx-auto bg-gradient-to-br from-warm-gold/20 to-gentle-brown/20 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
              <img 
                src={`${process.env.PUBLIC_URL}/gallery/image3.jpeg`}
                alt="阿嬤的照片" 
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  console.log('Image failed to load, trying alternative path');
                  e.currentTarget.src = './gallery/image3.jpeg';
                }}
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 text-4xl"
            >
              🌸
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 text-3xl"
            >
              🌺
            </motion.div>
          </div>
        </motion.div>

        {/* 優雅的標題呈現 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <div className="memorial-card max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-gentle-brown mb-4">
              永遠的愛與思念
            </h2>
            <p className="memorial-text text-lg leading-relaxed">
              阿嬤的愛如春風般溫暖，如山川般深厚。<br />
              她的智慧與慈愛將永遠在我們心中閃耀，<br />
              指引著我們前行的道路。
            </p>
          </div>
        </motion.div>

        {/* 導航按鈕 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        >
          <Link to="/photos" className="memorial-button flex items-center space-x-2 w-full sm:w-auto text-center justify-center">
            <span>📸</span>
            <span className="text-sm sm:text-base">影像紀念專輯</span>
          </Link>
          <Link to="/texts" className="memorial-button flex items-center space-x-2 w-full sm:w-auto text-center justify-center">
            <span>📝</span>
            <span className="text-sm sm:text-base">文字紀念專輯</span>
          </Link>
        </motion.div>

        {/* 裝飾性元素 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 text-memorial-gray/50"
        >
          <div className="flex justify-center space-x-4 text-2xl">
            <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }}>🕊️</motion.span>
            <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}>🌸</motion.span>
            <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}>🕊️</motion.span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage; 