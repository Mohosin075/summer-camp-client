import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Fade } from "react-awesome-reveal";
const Banner = () => {
    return (
        <div>
            <Carousel>
            <div>
                    <img src="https://i.ibb.co/k64DcKy/teacher-talking-with-her-students-online-2.jpg" />
                    <div className="absolute top-0 flex items-center px-8 md:px-36 inset-0 bg-gray-900 opacity-75">
                        <div className="text-white">
                        <h2 className="text-2xl md:text-6xl font-semibold mb-4"><Fade cascade duration={30}>Discover the Beauty of Italian</Fade></h2>
                        
                        <Fade delay={1e2} cascade damping={1e-1}><p className="text-xs md:text-lg">Ciao! Uncover the beauty of Italian, the language of love, art, and exquisite cuisine. From the grandeur of the Colosseum to the melodies of opera, let Italian transport you to a land of rich history, passion, and dolce vita.</p></Fade>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                <img src="https://i.ibb.co/WgdT6MR/front-view-smiley-girl-wearing-headphones-1.jpg" />
                    <div className="absolute top-0 flex items-center px-8 md:px-36 inset-0 bg-gray-900 opacity-75">
                        <div className="text-white">
                        <h2 className="text-2xl md:text-6xl font-semibold mb-4"><Fade cascade duration={30}>Explore the Beauty of French</Fade></h2>
                        <Fade delay={1e2} cascade damping={1e-1}><p className="text-xs md:text-lg">Bonjour! Dive into the romantic language of French and unlock a world of elegance, culture, and sophistication. Immerse yourself in the melodic sounds of French and discover the art of expressing yourself with finesse.</p></Fade>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/JFd95kP/learning-education-ideas-insight-intelligence-study-concept-1.jpg" />
                    <div className="absolute top-0 flex items-center px-8 md:px-36 inset-0 bg-gray-900 opacity-75">
                        <div className="text-white">
                        <h2 className="text-2xl md:text-6xl font-semibold mb-4"><Fade cascade duration={30}>Journey into the Heart of Japanese</Fade></h2>
                        <Fade delay={1e2} cascade damping={1e-1}><p className="text-xs md:text-lg">こんにちは! Embark on a captivating journey into the heart of Japanese. Immerse yourself in the harmony of ancient traditions and cutting-edge technology. Let the beauty of Japanese characters and the allure of its cultural heritage captivate your senses.</p></Fade>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/KyKwGxx/close-up-woman-class-1.jpg" />
                    <div className="absolute top-0 flex items-center px-8 md:px-36 inset-0 bg-gray-900 opacity-75">
                        <div className="text-white">
                        <h2 className="text-2xl md:text-6xl font-semibold mb-4"><Fade cascade duration={30}>Experience the Magic of Mandarin</Fade></h2>
                        <Fade delay={1e2} cascade damping={1e-1}><p className="text-xs md:text-lg">你好! Immerse yourself in the enchanting world of Mandarin Chinese. Unlock a fascinating culture, delve into the intricate characters, and embrace a language spoken by billions. Let Mandarin lead you to limitless possibilities in both business and personal connections.</p></Fade>
                        </div>
                    </div>
                </div>
                <div>
                <img src="https://i.ibb.co/L1LXWLw/mixed-race-boy-glasses-rising-hand-answer-during-lesson-1.jpg" />
                <div className="absolute top-0 flex items-center px-8 md:px-36 inset-0 bg-gray-900 opacity-75">
                        <div className="text-white">
                        <h2 className="text-2xl md:text-6xl font-semibold mb-4"><Fade cascade duration={30}>Embark on a Spanish Adventure</Fade></h2>
                        <Fade delay={1e2} cascade damping={1e-1}><p className="text-xs md:text-lg">¡Hola! Prepare to embark on a vibrant Spanish adventure filled with passion, excitement, and rich heritage. From the sultry rhythms of Flamenco to the mouthwatering flavors of paella, let Spanish ignite your senses and open doors to a whole new world.</p></Fade>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;