import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideData {
  id: number;
  images: string[];
  title: string;
  description: string;
}

const PhotoAlbum: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const slides: SlideData[] = [
    {
      id: 1,
      images: ['image3.jpeg'],
      title: '我們最棒最棒的阿嬤',
      description: ''
    },
    {
      id: 2,
      images: ['image4.jpeg'],
      title: '阿嬤在22歲時與爺爺結婚',
      description: ''
    },
    {
      id: 3,
      images: ['image5.jpeg', 'image6.jpeg'],
      title: '民國34年阿嬤與長子郁卿',
      description: '飄洋過海定居台灣65年'
    },
    {
      id: 4,
      images: ['image7.png', 'image8.jpeg'],
      title: '在台北12年，在台中53年',
      description: ''
    },
    {
      id: 5,
      images: ['image9.jpeg'],
      title: '阿嬤勤儉持家',
      description: '為兒孫縫製衣裳'
    },
    {
      id: 6,
      images: ['image10.jpeg'],
      title: '阿嬤是一棵大樹',
      description: '庇蔭著我們大家'
    },
    {
      id: 7,
      images: ['image11.jpeg'],
      title: '看我92歲的身手！',
      description: ''
    },
    {
      id: 8,
      images: ['image12.jpeg', 'image13.jpeg'],
      title: '阿嬤神奇的後院（一）',
      description: '有向日葵、茄子、仙桃…'
    },
    {
      id: 9,
      images: ['image14.jpeg', 'image15.jpeg'],
      title: '阿嬤神奇的後院（二）',
      description: '綠意盎然的花園世界'
    },
    {
      id: 10,
      images: ['image16.jpeg'],
      title: '阿嬤與她的美麗花園',
      description: ''
    },
    {
      id: 11,
      images: ['image17.jpeg', 'image18.jpeg'],
      title: '大家都說阿嬤很有福氣（一）',
      description: '實際上這是我們的福氣！'
    },
    {
      id: 12,
      images: ['image19.jpeg'],
      title: '大家都說阿嬤很有福氣（二）',
      description: '阿嬤的慈祥笑容'
    },
    {
      id: 13,
      images: ['image20.jpeg', 'image21.jpeg'],
      title: '畢業時光',
      description: '求學路上的重要時刻'
    },
    {
      id: 14,
      images: ['image22.jpeg', 'image23.jpeg'],
      title: '結婚喜悅',
      description: '人生最美好的開始'
    },
    {
      id: 15,
      images: ['image24.jpeg', 'image25.jpeg'],
      title: '阿祖，我們來了！',
      description: ''
    },
    {
      id: 16,
      images: ['image26.jpeg', 'image27.jpeg'],
      title: '全家出遊',
      description: '遊覽車司機說我們好幸福'
    },
    {
      id: 17,
      images: ['image28.jpeg', 'image29.jpeg'],
      title: '熱鬧的團圓飯（一）',
      description: '溫馨的家庭聚會'
    },
    {
      id: 18,
      images: ['image30.jpeg'],
      title: '熱鬧的團圓飯（二）',
      description: '滿桌的歡聲笑語'
    },
    {
      id: 19,
      images: ['image31.jpeg', 'image32.jpeg'],
      title: '紅包嬤不在了',
      description: '我們的年要怎麼過啊！'
    },
    {
      id: 20,
      images: ['image33.jpeg', 'image34.jpeg'],
      title: '最願意配合演出的阿嬤',
      description: '帶給我們好多歡樂與驚喜'
    },
    {
      id: 21,
      images: ['image35.jpeg'],
      title: '射飛鏢比賽阿嬤頒獎',
      description: ''
    },
    {
      id: 22,
      images: ['image36.jpeg'],
      title: '阿嬤也會玩保齡球',
      description: ''
    },
    {
      id: 23,
      images: ['image37.jpeg'],
      title: '苗栗縣桐花季請阿嬤植樹',
      description: '十年樹木、百年樹人，阿嬤一生樹人無數'
    },
    {
      id: 24,
      images: ['image38.jpeg'],
      title: '珍貴時光',
      description: ''
    },
    {
      id: 25,
      images: ['image39.jpeg'],
      title: '這是我們最偉大的媽媽！',
      description: ''
    },
    {
      id: 26,
      images: [],
      title: '感謝',
      description: '叔公、嬸婆、姨婆，各位爺爺奶奶鄉親好友，經常來電向阿嬤問好或親臨探訪，帶給阿嬤許多歡樂'
    },
    {
      id: 27,
      images: ['image40.jpeg'],
      title: '珍貴回憶',
      description: ''
    },
    {
      id: 28,
      images: ['image41.jpeg'],
      title: '溫馨時光',
      description: ''
    },
    {
      id: 29,
      images: ['image42.jpeg'],
      title: '家庭聚會',
      description: ''
    },
    {
      id: 30,
      images: ['image43.jpeg'],
      title: '快樂時光',
      description: ''
    },
    {
      id: 31,
      images: ['image44.jpeg'],
      title: '美好回憶',
      description: ''
    },
    {
      id: 32,
      images: ['image45.jpeg'],
      title: '溫暖時刻',
      description: ''
    },
    {
      id: 33,
      images: ['image46.jpeg', 'image47.jpeg'],
      title: '三次返鄉探親（一）',
      description: '回到故鄉的溫暖'
    },
    {
      id: 34,
      images: ['image48.jpeg'],
      title: '三次返鄉探親（二）',
      description: '與親人的珍貴團聚'
    },
    {
      id: 35,
      images: ['image49.jpeg', 'image50.jpeg'],
      title: '捐建寄雲樓',
      description: '讓爺爺一生功德圓滿'
    },
    {
      id: 36,
      images: ['image51.jpeg'],
      title: '清靜不多語',
      description: '永遠帶著淺淺的微笑陪著家人，平凡中見不平凡'
    },
    {
      id: 37,
      images: ['image52.jpeg'],
      title: '多謝了，阿嬤',
      description: '珍重再見!'
    }
  ];

  // 自動播放功能
  useEffect(() => {
    if (isAutoPlay) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isAutoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-cream to-warm-beige">
      <div className="container mx-auto px-4 py-8">
        {/* 標題 */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-warm-gold mb-4">
            影像紀念專輯
          </h1>
          <div className="w-24 h-1 bg-warm-gold mx-auto"></div>
        </motion.div>

        {/* 投影片主體 */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* 投影片內容區域 */}
            <div className={`relative ${
              currentSlideData.images.length === 0
                ? 'h-64 sm:h-80 md:h-96'
                : currentSlideData.images.length === 1 
                ? 'h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]'
                : 'h-80 sm:h-96 md:h-[450px] lg:h-[500px] xl:h-[550px]'
            }`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8"
                >
                  {currentSlideData.images.length > 0 ? (
                    <div className="w-full h-full flex items-center justify-center">
                      {currentSlideData.images.length === 1 ? (
                        <img
                          src={`${process.env.PUBLIC_URL}/gallery/${currentSlideData.images[0]}`}
                          alt={currentSlideData.title}
                          className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                          onError={(e) => {
                            e.currentTarget.src = `./gallery/${currentSlideData.images[0]}`;
                          }}
                        />
                      ) : (
                        <div className={`w-full h-full ${
                          currentSlideData.images.length === 2 
                            ? 'flex flex-row gap-3 sm:gap-4 md:gap-6 p-2 sm:p-4' 
                            : 'flex flex-col gap-2 sm:gap-3 p-1 sm:p-2'
                        }`}>
                          {currentSlideData.images.map((image, index) => (
                            <div key={index} className={`flex items-center justify-center ${
                              currentSlideData.images.length === 2
                                ? 'flex-1 h-full'
                                : 'w-full'
                            }`}>
                              <img
                                src={`${process.env.PUBLIC_URL}/gallery/${image}`}
                                alt={`${currentSlideData.title} ${index + 1}`}
                                className="w-full h-full max-w-full max-h-full object-contain rounded-lg shadow-lg"
                                onError={(e) => {
                                  e.currentTarget.src = `./gallery/${image}`;
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="text-6xl mb-6">🙏</div>
                      <h2 className="text-3xl font-bold text-gentle-brown mb-4">
                        {currentSlideData.title}
                      </h2>
                      <p className="text-lg text-memorial-gray leading-relaxed max-w-2xl">
                        {currentSlideData.description}
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* 導航箭頭 */}
              <button
                onClick={prevSlide}
                className="absolute left-1 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gentle-brown p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gentle-brown p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* 投影片資訊 */}
            <div className="bg-gradient-to-r from-warm-gold/10 to-gentle-brown/10 p-4 lg:p-6 border-t border-warm-gold/20">
              <div className="text-center">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gentle-brown mb-2 leading-tight">
                  {currentSlideData.title}
                </h2>
                {currentSlideData.description && (
                  <p className="text-sm sm:text-base lg:text-lg text-memorial-gray leading-relaxed max-w-4xl mx-auto">
                    {currentSlideData.description}
                  </p>
                )}
                <div className="mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm text-warm-gold/70">
                  <span>第 {currentSlide + 1} 張</span>
                  <span>•</span>
                  <span>共 {slides.length} 張</span>
                </div>
              </div>
            </div>
          </div>

          {/* 控制面板 */}
          <div className="mt-4 sm:mt-6 lg:mt-8 bg-white rounded-xl shadow-lg p-3 sm:p-4 lg:p-6 border border-warm-gold/20">
            <div className="flex flex-col gap-4 sm:gap-5">
              {/* 播放控制 */}
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <button
                  onClick={prevSlide}
                  className="p-2 sm:p-3 rounded-full bg-gray-100 hover:bg-warm-gold/20 text-gentle-brown transition-all duration-200 hover:scale-105"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 ${
                    isAutoPlay
                      ? 'bg-warm-gold text-white hover:bg-warm-gold/90'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {isAutoPlay ? '⏸️ 暫停播放' : '▶️ 自動播放'}
                </button>
                
                <button
                  onClick={nextSlide}
                  className="p-2 sm:p-3 rounded-full bg-gray-100 hover:bg-warm-gold/20 text-gentle-brown transition-all duration-200 hover:scale-105"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* 投影片指示器 */}
              <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5 max-w-full overflow-x-auto px-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-200 hover:scale-125 ${
                      index === currentSlide
                        ? 'bg-warm-gold scale-125 shadow-md'
                        : 'bg-gray-300 hover:bg-warm-gold/50'
                    }`}
                    title={`第 ${index + 1} 張投影片`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoAlbum; 