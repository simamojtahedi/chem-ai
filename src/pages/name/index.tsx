import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";
import toast from "react-hot-toast";
import ChatWrapper from "../../components/chat-wrapper";
import Input from "../../components/input";
import {
  setComponentName,
  addNameBasedChatItem,
  fetchChatResponse,
} from "../../features/app/appSlice";

const Name = () => {
  const dispatch = useDispatch();
  const appState = useSelector((state: any) => state.app);

  const [loading, setLoading] = useState(false);
  const [compound, setCompound] = useState("");

  const onSubmit = (question: string) => {
    if (
      appState.name_based_chats.length + appState.shape_based_chats.length >
      3
    ) {
      toast.error(
        "تعداد پرسش‌های مجاز به اتمام رسید. لطفا دقایقی دیگر مجددا تلاش کنید.",
        {
          style: {
            direction: "rtl",
            fontWeight: 500,
          },
        }
      );
    } else {
      if (appState.name_based_chats.length == 0) {
        setComponentName(question);
        dispatch(
          addNameBasedChatItem({
            question: `Tell me about this chemical compound: ${question}`,
            answer: null,
            is_new: true,
          })
        );
      } else {
        dispatch(
          addNameBasedChatItem({
            question,
            answer: null,
            is_new: true,
          })
        );
      }
    }
  };

  useEffect(() => {
    const nullAnswerChat = appState.name_based_chats.find(
      (chat: any) => chat.answer === null
    );

    if (nullAnswerChat) {
      setLoading(true);
      //@ts-ignore
      dispatch(fetchChatResponse(nullAnswerChat.question)).then((response) => {
        dispatch(
          addNameBasedChatItem({
            question: nullAnswerChat.question,
            answer: response.payload,
            is_new: true,
          })
        );
        setLoading(false);
      });
    }
  }, [appState.name_based_chats, dispatch]);

  return (
    <div className="flex-1 flex flex-col justify-start items-center">
      <div
        className={`transition-all duration-[.5s] ${
          appState.name_based_chats.length > 0
            ? "-mt-4 select-none h-0 overflow-hidden opacity-0"
            : "mt-0 opacity-1 h-[40px]"
        }`}
      >
        <Fade triggerOnce>
          <p className="text-sm text-center mb-2 text-xl font-[400]">
            نام ترکیب موردنظر را به <strong> انگلیسی </strong> وارد کنید
          </p>
        </Fade>
      </div>

      <div
        className={`w-full max-w-sm ${
          appState.name_based_chats.length > 0
            ? "-mt-10 select-none h-0 overflow-hidden opacity-0"
            : "mt-0 opacity-1 h-[45px]"
        }`}
      >
        <Input
          placeholder="Benzene"
          value={compound}
          setValue={setCompound}
          onSubmit={() => onSubmit(compound)}
        />
      </div>

      {appState.name_based_chats.length > 0 && (
        <div className="flex-1 mt-10 w-full flex flex-col justify-center p-5 rounded-lg border-2">
          <ChatWrapper
            data={appState.name_based_chats}
            loading={loading}
            onSubmit={onSubmit}
          />
        </div>
      )}
    </div>
  );
};

export default Name;
