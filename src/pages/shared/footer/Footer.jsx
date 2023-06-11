import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content">
      <div>
        <img
          className="w-12 h-12 mr-2 rounded"
          src="https://i.ibb.co/sqvyqPF/download.png"
          alt=""
        />
        <div className="text-lg md:text-xl lg:text-2xl font-semibold">
          <span className="text-orange-600"> SpeakEasy</span>
          <span className="text-blue-600">Language</span>
          <span className="text-green-600">Institute</span>
        </div>
      </div>
      <div>
        <span className="footer-title">Quice Links</span>
        <Link to='/' className="link link-hover">Home</Link>
        <Link to='/instructors' className="link link-hover">Instructors</Link>
        <Link to='/classes' className="link link-hover">Classes</Link>
        {/* TODO : conditional  */}
        <Link to='/dashboard' className="link link-hover">Dashboard</Link>
      </div>
      <div>
        <span className="footer-title">Info</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div>
    <span className="footer-title">Social</span> 
    <div className="grid grid-flow-col gap-6    "> 
    <a href=""><FaFacebook className='w-8 h-8'/></a>
    <a href=""><FaGithub className='w-8 h-8'/></a>
    <a href=""><FaTwitter className='w-8 h-8'/></a>
    <a href=""><FaInstagram className='w-8 h-8'/></a>
    </div>
  </div>
    </footer>
  );
};

export default Footer;
