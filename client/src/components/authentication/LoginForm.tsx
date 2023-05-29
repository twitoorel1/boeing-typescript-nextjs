import React from "react";
import Input from "@/components/common/Input";
import Link from "@/components/common/Link";
import Button from "@/components/common/Button";
import { FormLoginInputs } from "@/types/global";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// Validation
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useDispatch } from "react-redux";
import { loginByPayload } from "@/redux/slices/authenticationSlice";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginInputs>({
    // resolver: yupResolver(loginValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();

  const onSubmitLogin = (data: FormLoginInputs) => {
    dispatch(loginByPayload(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmitLogin)}>
      <h2 className="text-2xl lg:text-3xl text-center my-10">
        <span className="font-bold">Sign</span> In
      </h2>
      <Input
        id="loginEmailInput"
        type="email"
        placeholder="Email"
        register={{ ...register("email") }}
      />
      {errors.email && <span className="mx-5">{errors.email.message}</span>}

      <Input
        id="loginPasswordInput"
        type="password"
        placeholder="Password"
        register={{ ...register("password") }}
      />
      {errors.password && (
        <span className="mx-5">{errors.password.message}</span>
      )}

      <div className="my-5">
        <Link href={"/"} className="my-5" label="Forgot Password?" />
      </div>
      <Button label="Sign In" />
    </form>
  );
};

export default LoginForm;
