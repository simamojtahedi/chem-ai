import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Fade } from "react-awesome-reveal";
import ChatWrapper from "../../components/chat-wrapper";
import Input from "../../components/input";
import Viewer from "../../components/viewer";
import {
  setComponentShape,
  addShapeBasedChatItem,
  fetchChatResponse,
} from "../../features/app/appSlice";

const Draw = () => {
  const dispatch = useDispatch();
  const appState = useSelector((state: any) => state.app);

  const [loading, setLoading] = useState(false);
  const [compound, setCompound] = useState("C3=CC=CC=C3O");

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
      if (appState.shape_based_chats.length == 0) {
        dispatch(setComponentShape(compound));
        dispatch(
          addShapeBasedChatItem({
            question: `Give me details about this chemical compound which is created using SMILES structure: ${question}`,
            answer: null,
            is_new: true,
          })
        );
      } else {
        dispatch(
          addShapeBasedChatItem({
            question,
            answer: null,
            is_new: true,
          })
        );
      }
    }
  };

  useEffect(() => {
    const nullAnswerChat = appState.shape_based_chats.find(
      (chat: any) => chat.answer === null
    );

    if (nullAnswerChat) {
      setLoading(true);
      //@ts-ignore
      dispatch(fetchChatResponse(nullAnswerChat.question)).then((response) => {
        dispatch(
          addShapeBasedChatItem({
            question: nullAnswerChat.question,
            answer: response.payload,
            is_new: true,
          })
        );
        setLoading(false);
      });
    }
  }, [appState.shape_based_chats, dispatch]);

  return (
    <div className="flex-1 flex flex-col justify-start items-center">
      <div
        className={`transition-all duration-[.5s] ${
          appState.shape_based_chats.length > 0
            ? "-mt-4 select-none h-0 overflow-hidden opacity-0"
            : "mt-0 opacity-1 h-[40px]"
        }`}
      >
        <Fade triggerOnce>
          <p className="text-sm text-center mb-2 text-xl font-[400]">
            ترکیب موردنظر خود را رسم کنید
          </p>
        </Fade>
      </div>

      <div
        className={`w-full max-w-sm ${
          appState.shape_based_chats.length > 0
            ? "-mt-10 select-none h-0 overflow-hidden opacity-0"
            : "mt-0 opacity-1 h-[45px]"
        }`}
      >
        <Fade triggerOnce>
          <Input
            placeholder={compound}
            value={compound}
            setValue={setCompound}
            onSubmit={() => onSubmit(compound)}
          />
        </Fade>
      </div>

      <div
        className={`w-full flex flex-col ${
          appState.shape_based_chats.length > 0 ? "items-start" : "items-center"
        }`}
      >
        <Fade triggerOnce>
          <Viewer
            compound={
              appState.shape_based_chats.length > 0
                ? appState.component_shape
                : compound
            }
            size={appState.shape_based_chats.length > 0 ? 130 : 220}
          />
        </Fade>
      </div>

      {appState.shape_based_chats.length > 0 && (
        <div className="flex-1 w-full flex flex-col justify-center p-5 rounded-lg border-2">
          <ChatWrapper
            data={appState.shape_based_chats}
            loading={loading}
            onSubmit={onSubmit}
          />
        </div>
      )}
    </div>
  );
};

export default Draw;
