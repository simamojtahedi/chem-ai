import { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllChatsToOld,
  setComponentName,
  setComponentShape,
  clearNameBasedChat,
  clearShapeBasedChat,
} from "../../features/app/appSlice";
import Input from "../input";
import Loading from "../loading";
import Typing from "./typing";

const ChatWrapper = ({
  data,
  loading,
  onSubmit,
}: {
  data: any;
  loading: boolean;
  onSubmit: any;
}) => {
  const domain = process.env.REACT_APP_DOMAIN;
  const dispatch = useDispatch();
  const appState = useSelector((state: any) => state.app);

  let isTyping =
    appState.shape_based_chats.find((chat: any) => chat.is_new) ||
    appState.name_based_chats.find((chat: any) => chat.is_new);

  const [question, setQuestion] = useState("");
  const [typingStatus, setTypingStatus] = useState("Initializing");
  const [isChatStarted, setIsChatStarted] = useState(false);

  useEffect(() => {
    if (typingStatus === "Done") {
      dispatch(setAllChatsToOld());
    }
  }, [typingStatus, dispatch]);

  const regenerateHandler = () => {
    if (appState.component_name !== "") dispatch(setComponentName(""));

    if (appState.component_shape !== "C3=CC=CC=C3O")
      dispatch(setComponentShape("C3=CC=CC=C3O"));

    if (appState.name_based_chats.length > 0) dispatch(clearNameBasedChat());

    if (appState.shape_based_chats.length > 0) dispatch(clearShapeBasedChat());
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1">
        {data.map((item: any) => (
          <div className="mb-8" key={item.question}>
            <Fade triggerOnce>
              <h2 className="mb-2 text-lg border-b-2 en-italic-font">
                {item.question}
              </h2>
            </Fade>
            {item.answer &&
              (item.is_new ? (
                <Typing text={item.answer} setTypingStatus={setTypingStatus} />
              ) : (
                <p
                  className="en-font"
                  style={{ display: "inline-block", fontWeight: 400 }}
                >
                  {typeof item.answer === "string"
                    ? item.answer
                    : "An Error Occurred"}
                </p>
              ))}
          </div>
        ))}
        {loading && <Loading />}
      </div>

      {!isTyping && (
        <Slide triggerOnce direction="up">
          <div
            className={`w-full pr-14 relative ${
              isChatStarted
                ? "-mt-10 select-none h-0 overflow-hidden opacity-0"
                : "mt-16 opacity-1 h-[45px]"
            }`}
          >
            <button
              onClick={regenerateHandler}
              className="btn-primary absolute right-0 -bottom-[1.5px] h-full w-[42px] rounded-md flex items-center justify-center duration-[.3s]"
            >
              <img src={`${domain}assets/images/regenerate.svg`} />
            </button>
            <Input
              placeholder="Ask your question"
              value={question}
              setValue={setQuestion}
              onSubmit={() => {
                onSubmit(question);
                setQuestion("");
              }}
            />
          </div>
        </Slide>
      )}
    </div>
  );
};

export default ChatWrapper;
