
import linkedin from '../../assets/linkedin.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import logo from './logo.svg';

const socialLinks = [
  { href: "https://www.cooliewale.in/", icon: logo},
  { href: "https://www.linkedin.com/company/cooliewale/?viewAsMember=true", icon: linkedin },
  { href: "https://www.facebook.com/CooliewaleOfficial", icon: facebook },
  { href: "https://www.facebook.com/CooliewaleOfficial", icon: twitter }
];

function Social() {
  return (
    <div className="absolute top-7 right-7">
      {socialLinks.map((link, index) => (
        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
          <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-lg mb-2 shadow-md transition-transform duration-500 hover:rotate-360">
            <img src={link.icon} alt="Social Link" className="w-7" />
          </div>
        </a>
      ))}
    </div>
  );
}

export default Social;
