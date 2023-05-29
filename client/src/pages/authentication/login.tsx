import React from "react";
import Link from "@/components/common/Link";
import Image from "next/image";
import Button from "@/components/common/Button";
import SeparatorWrapper from "@/components/common/SeparatorWrapper";
import AuthLayout from "@/layouts/AuthLayout";
import LoginForm from "@/components/authentication/LoginForm";

const login = () => {
  return (
    <AuthLayout>
      <div className="text-textColor-primary">
        <LoginForm />
        <SeparatorWrapper title="OR CONNECT WITH" />
        <Button variant="default" fontSize="sm" label="Google">
          <Image
            width={15}
            height={15}
            src="https://cdn.monday.com/images/logo_google_v2.svg"
            alt="asd"
          />
        </Button>
        <p className="text-center text-sm mt-8 mb-2">
          Don't Have Account?{" "}
          <Link label="Sign Up" href="/authentication/register" />
        </p>
        <p className="text-center text-sm">
          Having Trouble Signing in? <Link label="Connect Us" href="/" />
        </p>
      </div>
    </AuthLayout>
  );
};

export default login;
