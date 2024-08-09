import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const Intro = () => {
  const domain = process.env.REACT_APP_DOMAIN;

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <Slide triggerOnce direction="down">
        <h1 className="text-5xl lg:text-8xl text-center mb-10">
          {" "}
          شـــیمی‌بات{" "}
        </h1>
      </Slide>
      <Slide triggerOnce direction="down">
        <p
          className="text-lg text-center max-w-sm lg:max-w-md"
          style={{ direction: "rtl" }}
        >
          کافیه اسم ترکیب رو وارد کنی یا شکلش رو رسم کنی تا کلی اطلاعات مفید در
          موردش بگیری. <br />
          در موردش سوال داری؟ از چت بات تخصصی شیمی ما بپرس، همینقدر راحت!
        </p>
      </Slide>
      <Slide triggerOnce direction="down">
        <div className="mt-14 flex gap-2.5">
          <button className="btn btn-primary p-0 font-lg hover:-translate-y-1">
            <Link
              to={`${domain}name`}
              className="py-2 px-[10px] lg:px-[20px] flex items-center h-full"
            >
              <img
                src={`${domain}assets/images/arrow.svg`}
                className="mr-9 w-6 rotate-90"
              />
              <h6 className="mt-2 lg:mt-0">نام ترکیب</h6>
            </Link>
          </button>
          <button className="btn btn-primary p-0 font-lg hover:-translate-y-1">
            <Link
              to={`${domain}draw`}
              className="py-2 px-[10px] lg:px-[20px] flex items-center h-full"
            >
              <img
                src={`${domain}assets/images/arrow.svg`}
                className="mr-9 w-6 rotate-90"
              />
              <h6 className="mt-2 lg:mt-0">رسم ترکیب</h6>
            </Link>
          </button>
        </div>
      </Slide>
    </div>
  );
};

export default Intro;
