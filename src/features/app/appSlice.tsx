import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { InitialAppState } from "./interfaces";
const API_KEY = process.env.REACT_APP_API;

const initialState: InitialAppState = {
  component_name: "",
  component_shape: "C3=CC=CC=C3O",
  name_based_chats: [],
  shape_based_chats: [],
  loading: false,
  error: null,
};

const apiClient = axios.create({
  baseURL: "https://api.groq.com/openai/v1/",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  },
});

export const fetchChatResponse = createAsyncThunk<
  any,
  string,
  { rejectValue: any }
>("chat", async (message, thunkAPI) => {
  try {
    const data = {
      messages: [
        {
          role: "user",
          content: `This should be a question about chemistry such as a compound name or a molecular formula, If you don't have enough data to answer it or it isn't about chemistry, please retrun this phrase as answer: "I'm sorry, but I don't have enough information to answer this question." Question: ${message}`,
        },
      ],
      model: "llama3-70b-8192",
    };
    const response = await apiClient.post("chat/completions", data);
    return response.data.choices[0].message.content;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const upsertChatItem = (
  chatList: any,
  question: string,
  answer: any,
  is_new: boolean
) => {
  const existingChat = chatList.find((chat: any) => chat.question === question);
  if (existingChat) {
    existingChat.answer = answer;
    existingChat.is_new = is_new;
  } else {
    chatList.push({ question, answer });
  }
};

export const appSlice = createSlice({
  name: "chatBot",
  initialState,
  reducers: {
    setComponentName: (state, action) => {
      state.component_name = action.payload;
    },
    setComponentShape: (state, action) => {
      state.component_shape = action.payload;
    },
    clearNameBasedChat: (state) => {
      state.name_based_chats = [];
    },
    addNameBasedChatItem: (
      state,
      action: PayloadAction<{
        question: string;
        answer: string | null;
        is_new: boolean;
      }>
    ) => {
      upsertChatItem(
        state.name_based_chats,
        action.payload.question,
        action.payload.answer,
        action.payload.is_new
      );
    },
    clearShapeBasedChat: (state) => {
      state.shape_based_chats = [];
    },
    addShapeBasedChatItem: (
      state,
      action: PayloadAction<{
        question: string;
        answer: string | null;
        is_new: boolean;
      }>
    ) => {
      upsertChatItem(
        state.shape_based_chats,
        action.payload.question,
        action.payload.answer,
        action.payload.is_new
      );
    },
    setAllChatsToOld: (state) => {
      state.name_based_chats.forEach((chat) => (chat.is_new = false));
      state.shape_based_chats.forEach((chat) => (chat.is_new = false));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChatResponse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChatResponse.fulfilled, (state, action) => {
        state.loading = false;
        // state.chats_list = action.payload;
      })
      .addCase(fetchChatResponse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const {
  setComponentName,
  setComponentShape,
  addNameBasedChatItem,
  addShapeBasedChatItem,
  setAllChatsToOld,
  clearNameBasedChat,
  clearShapeBasedChat,
} = appSlice.actions;
export default appSlice.reducer;
