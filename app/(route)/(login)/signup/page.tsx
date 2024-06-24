"use client";
import CustomTextInput from "@/app/_components/custom-text-input";
import { useForm } from "react-hook-form";
import Link from "next/link";
import UserTypeSelect from "./_components/user-type-select";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../_utils/schema";
import { UserType } from "@/app/_constants/user-type";

interface FormValues {
  email: string;
  password: string;
  passwordConfirm: string;
  type: UserType;
}

function SignUP() {
  const resolver = yupResolver(signUpSchema);
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver,
    mode: "onSubmit",
  });

  const handleForm = handleSubmit(async (data: FormValues) => {
    // console.log(data);
  });

  return (
    <>
      <form onSubmit={handleForm} className="mb-4 flex w-full flex-col gap-7">
        <CustomTextInput
          label="이메일"
          placeholder="이메일을 입력하세요"
          register={register("email")}
          errorMessage={errors.email?.message}
        />

        <CustomTextInput
          label="비밀번호"
          placeholder="비밀번호를 입력하세요"
          register={register("password")}
          type="password"
          errorMessage={errors.password?.message}
        />

        <CustomTextInput
          label="비밀번호 확인"
          placeholder="비밀번호 한 번 더 입력하세요"
          register={register("passwordConfirm")}
          type="password"
          errorMessage={errors.passwordConfirm?.message}
        />

        <UserTypeSelect register={register("type")} />

        <button className="flex h-[48px] w-full items-center justify-center rounded-md bg-[#EA3C12] text-white">
          로그인 하기
        </button>
      </form>

      <nav>
        <span className="text-base font-normal leading-5 text-instruction">이미 가입 하셨나요? </span>
        <Link href="/login" className="cursor-pointer text-link underline">
          로그인하기
        </Link>
      </nav>
    </>
  );
}

export default SignUP;
