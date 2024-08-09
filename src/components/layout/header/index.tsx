import { Link } from "react-router-dom";

const Header = () => {
  const domain = process.env.REACT_APP_DOMAIN;

  return (
    <div className="pt-3 w-full mx-auto flex items-center justify-between">
      <div className="flex items-center">
        <a
          href="https://github.com/simamojtahedi"
          target="_blank"
          className="h-[20px] w-[23px] rounded-full flex flex-col justify-center items-center"
        >
          <img
            src={`${domain}assets/images/github.png`}
            alt="Github"
            width={23}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/sima-mojtahedi/"
          target="_blank"
          className="h-[20px] w-[25px] rounded-full mx-[6px] flex flex-col justify-center items-center"
        >
          <img
            src={`${domain}assets/images/linkedin.png`}
            alt="Linkedin"
            width={25}
          />
        </a>
        <a
          href="https://t.me/simamojtahedi/"
          target="_blank"
          className="h-[20px] w-[23px] rounded-full flex flex-col justify-center items-center"
        >
          <img
            src={`${domain}assets/images/telegram.png`}
            alt="Telegram"
            width={23}
          />
        </a>
      </div>
      <h2 className="font-[900] text-center">
        <Link to={`${domain}`}>شـــیمی‌بات</Link>
      </h2>
    </div>
  );
};

export default Header;
