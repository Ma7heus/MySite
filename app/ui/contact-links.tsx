import Image from "next/image";
import instagramIcon from "../../public/instagram.png";
import githubIcon from "../../public/github.png";
import linkedinIcon from "../../public/linkedin.png";

export default function ContactLinks() {
  return (
    <div className="flex space-x-1 mt-4 justify-center">
      <a
        href="https://www.instagram.com/matheushpalacios/?hl=en"
        target="_blank"
      >
        <Image
          src={instagramIcon}
          alt="Instagram"
          width={30}
          height={30}
          style={{ marginRight: "2rem" }}
        />
      </a>
      <a href="https://github.com/Ma7heus" target="_blank">
        <Image
          src={githubIcon}
          alt="Github"
          width={30}
          height={30}
          style={{ marginRight: "2rem" }}
        />
      </a>

      <a
        href="https://www.linkedin.com/in/matheus-henrique-saldias-palacios-pietro-biasi-322034193"
        target="_blank"
      >
        <Image src={linkedinIcon} alt="Linkedin" width={30} height={30} />
      </a>
    </div>
  );
}
