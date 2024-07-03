import { ADDRESS, AddressType } from "@/app/_constants/address";
import { CATEGORY, CategoryType } from "@/app/_constants/category";
import * as yup from "yup";
const errorMessage = "필수로 입력해야 하는 사항입니다.";
export const storeRegisterSchema = yup.object().shape({
  name: yup.string().required(errorMessage),
  category: yup
    .mixed<CategoryType>()
    .oneOf(CATEGORY, errorMessage)
    .required(errorMessage),
  address1: yup
    .mixed<AddressType>()
    .oneOf(ADDRESS, errorMessage)
    .required(errorMessage),
  address2: yup.string().required(errorMessage),
  description: yup.string(),
  imageUrl: yup
    .mixed<FileList>()
    .required(errorMessage)
    .test({
      name: "file-length",
      message: "이미지 하나를 넣어주세요.",
      test: (value) => {
        return value && value.length === 1;
      },
    }),
  originalHourlyPay: yup.string().required(errorMessage),
});
