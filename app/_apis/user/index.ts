import instance from "@/app/_lib/axios";
import { API_ERROR_MESSAGE } from "../../_constants/error-message";
import { UserType } from "../../_constants/user-type";
import axiosInstance from "../instances";
import { isAxiosError } from "axios";
import { GetUsersUserId, UserProfileData } from "../type";

// 회원가입
interface Params {
  email: string;
  password: string;
  type: string;
}

interface Response {
  item: {
    id: string;
    email: string;
    type: UserType;
  };
  links: string[];
}
type PostSignUp = (params: Params) => Promise<boolean>;

export const postSignUp: PostSignUp = async ({ email, password, type }) => {
  try {
    const response = await axiosInstance.post<Response>(
      "/users",
      {
        email,
        password,
        type,
      },
      {
        authorization: false,
      },
    );
    return response.status === 201;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 409) {
        throw new Error(error.response.data.message);
      }
    }
    console.log(error);
    throw new Error(API_ERROR_MESSAGE);
  }
};

// 내 정보 조회
export async function getUser(user_id: string): Promise<GetUsersUserId> {
  try {
    const res = await axiosInstance.get<GetUsersUserId>(`/users/${user_id}`);
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error(error.response.data.message);
      }
    }
    console.error("getUser 함수에서 오류 발생:", error);
    throw new Error(API_ERROR_MESSAGE);
  }
}
