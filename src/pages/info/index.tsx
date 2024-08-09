import { Fade } from "react-awesome-reveal";

const Info = () => {
  const domain = process.env.REACT_APP_DOMAIN;

  return (
    <div className="flex-1 flex flex-col justify-start items-center">
      <Fade triggerOnce>
        <p
          style={{ direction: "rtl" }}
          className="text-lg font-[400] leading-relaxed max-w-sm lg:max-w-none"
        >
          <strong> شـــیمی‌بات </strong> یه اپلیکیشن کاربردی و تخصصی برای شیمی و
          کسایی هستش که با ترکیبات شیمیایی سروکار دارن! <br />
          اینجا می‌تونی به دو روش اطلاعات ترکیبات شیمیایی رو به دست بیاری:{" "}
          <br />
          یا اسم ترکیب رو وارد کنی، یا خودت شکلش رو رسم کنی. بعدش چی؟ اطلاعات
          کامل و دقیق درباره اون ترکیب رو دریافت می‌کنی و اگه سوالی داشتی،
          می‌تونی از چت بات تخصصی شیمی ما بپرسی. <br />
          فرض کن دانشجویی و روی یه پروژه تحقیقاتی کار می‌کنی و نیاز داری سریع
          بفهمی یه ترکیب چیه و چه ویژگی‌هایی داره. یا شاید یه شیمیدان باشی که
          می‌خوای اطلاعات جدیدی رو کشف کنی. حتی اگه فقط به شیمی علاقه داری و
          دوست داری بیشتر بدونی، <strong> شـــیمی‌بات </strong> بهترین همراه و
          کمک دستت می‌شه. <br /> ویژگی جذاب <strong> شـــیمی‌بات </strong> اینه
          که خیلی راحت و کاربرپسنده. اصلاً نیاز نیست که حتماً یه متخصص باشی. فقط
          کافیه ترکیب مورد نظرت رو وارد کنی یا رسم کنی و بقیه‌ش با ما! <br />
          پس اگه دنبال یه همراه خوب تو دنیای شیمی می‌گردی،{" "}
          <strong> شـــیمی‌بات </strong> منتظرته تا هر چی سوال داری رو جواب بده
          و تو رو به دنیای جادویی ترکیبات شیمیایی ببره.
        </p>

        <p
          style={{ direction: "rtl" }}
          className="text-lg font-[900] leading-relaxed mt-16 text-center max-w-sm lg:max-w-none"
        >
          اگه سوال یا پیشنهادی داری، می‌تونی از طریق لینک‌های زیر با من در
          ارتباط باشی:
        </p>
      </Fade>

      <div className="flex justify-center items-center gap-2 lg:gap-3 mt-10">
        <a
          href="https://github.com/simamojtahedi"
          target="_blank"
          className="h-[100px] w-[100px] lg:w-auto py-2 px-5 lg:px-10 rounded-xl flex flex-col justify-center items-center bg-[#E2E8F0] hover:-translate-y-1 duration-300"
        >
          <img
            src={`${domain}assets/images/github.png`}
            alt="Github"
            width={40}
          />
          <h3 className="mt-2 text-sm lg:text-md ">گیت‌هاب</h3>
        </a>
        <a
          href="https://www.linkedin.com/in/sima-mojtahedi/"
          target="_blank"
          className="h-[100px] w-[100px] lg:w-auto py-2 px-5 lg:px-10 rounded-xl flex flex-col justify-center items-center bg-[#E2E8F0] hover:-translate-y-1 duration-300"
        >
          <img
            src={`${domain}assets/images/linkedin.png`}
            alt="Linkedin"
            width={45}
          />
          <h3 className="mt-2 text-sm lg:text-md ">لینکدین</h3>
        </a>
        <a
          href="https://t.me/simamojtahedi/"
          target="_blank"
          className="h-[100px] w-[100px] lg:w-auto py-2 px-5 lg:px-10 rounded-xl flex flex-col justify-center items-center bg-[#E2E8F0] hover:-translate-y-1 duration-300"
        >
          <img
            src={`${domain}assets/images/telegram.png`}
            alt="Telegram"
            width={40}
          />
          <h3 className="mt-2 text-sm lg:text-md ">تلگرام</h3>
        </a>
      </div>
    </div>
  );
};

export default Info;
