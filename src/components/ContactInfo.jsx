import { FaGithub } from "react-icons/fa6";
import { SiGmail, SiVelog } from "react-icons/si";
import { MdOutlinePhoneIphone } from "react-icons/md";

const contactLinks = [
  { icon: <FaGithub />, label: "Github", href: "https://github.com/ahnzi91" },
  { icon: <SiVelog />, label: "Blog", href: "https://velog.io/@ahnzi/posts" },
  { icon: <SiGmail />, label: "ahnzi91@gmail.com", href: "#" },
  { icon: <MdOutlinePhoneIphone />, label: "010-8869-4712", href: "#" },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      {contactLinks.map((contact, index) => (
        <a
          key={index}
          href={contact.href}
          className="flex items-center space-x-2 text-gray-600 transition-colors dark:text-gray-300 hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          {contact.icon}
          <span>{contact.label}</span>
        </a>
      ))}
    </div>
  );
}
