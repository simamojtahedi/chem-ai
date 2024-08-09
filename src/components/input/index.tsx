import { useState } from "react";

const Input = ({
  placeholder,
  value,
  setValue,
  onSubmit,
}: {
  placeholder: string;
  value: string;
  setValue: any;
  onSubmit: any;
}) => {
  const domain = process.env.REACT_APP_DOMAIN;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <form
      onSubmit={(e: any) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <label
        className={`relative form-control w-full transition-all duration-[.7s]`}
      >
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder={placeholder}
          className="input input-bordered w-full mx-auto font-[100] en-font bg-white"
        />
        <button
          type="submit"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          disabled={!value}
          className={`btn overflow-hidden min-h-0 w-[38px] h-[38px] absolute right-1.5 top-[10%] h-[80%] bg-[#e2e8f0] hover:bg-[#e2e8f0] ${
            !value ? "opacity-[.6]" : "opacity-[1]"
          }`}
        >
          <img
            width={27}
            alt="send-button"
            src={`${domain}assets/images/active-send.svg`}
            className={`absolute top-[5px] transition-all duration-[.4s] ${
              isHovered ? "left-[7px] opacity-1" : "opacity-0 -left-[17px]"
            }`}
          />
          <img
            width={27}
            alt="send-button"
            src={`${domain}assets/images/send.svg`}
            className={`absolute top-[5px] transition-all duration-[.4s] ${
              isHovered ? "-left-[17px] opacity-0" : "opacity-1 left-[7px]"
            }`}
          />
        </button>
      </label>
    </form>
  );
};

export default Input;
