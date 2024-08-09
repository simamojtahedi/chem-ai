import { TypeAnimation } from "react-type-animation";

const Typing = ({
  text,
  setTypingStatus,
}: {
  text: any;
  setTypingStatus: any;
}) => {
  return (
    <>
      <TypeAnimation
        sequence={[
          text,
          () => {
            setTypingStatus("Done");
          },
        ]}
        wrapper="p"
        speed={80}
        cursor={false}
        className="en-font"
        style={{ display: "inline-block", fontWeight: 400 }}
      />
    </>
  );
};

export default Typing;
