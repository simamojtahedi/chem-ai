import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const domain = process.env.REACT_APP_DOMAIN;
  const { pathname } = useLocation();

  const footer_items = [
    {
      name: "رســم",
      path: `${domain}draw`,
      image: "draw",
      left: 0,
    },
    {
      name: "نــام",
      path: `${domain}name`,
      image: "write",
      left: 75,
    },
    {
      name: "راهنــما",
      path: `${domain}guide`,
      image: "guide",
      left: 150,
    },
    {
      name: "اطلاعــات",
      path: `${domain}info`,
      image: "info",
      left: 225,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#E2E8F0] px-3 py-1">
      <div className="footer_items flex justify-between mx-auto">
        <div
          className={`selected_footer_item ${
            pathname == domain || pathname == domain?.slice(0, -1)
              ? "opacity-0"
              : "opacity-1"
          }`}
          style={{
            left:
              pathname == domain || pathname == domain?.slice(0, -1)
                ? "-100px"
                : footer_items.find((item) => item.path == pathname)?.left,
          }}
        ></div>
        {footer_items.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className={`z-1 relative duration-300 text-xs min-w-[75px] text-center flex flex-col items-center py-2 rounded-2xl ${
              pathname == item.path ? "font-[900]" : "font-[400]"
            }`}
          >
            <img
              src={`${domain}assets/images/${item.image}.svg`}
              alt={item.image}
              className="w-6 mb-1"
            />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
