import Layout from "@/layouts/Layout";
import Link from "next/link";
import Button from "@/components/common/Button";
import Image from "next/image";
import useLoader from "@/hooks/useLoader";
import { RootState } from "@/redux/reducers";
import { useSelector } from "react-redux";

export default function Home(): JSX.Element {
  const { user } = useSelector((state: RootState) => state.auth);
  // console.log(user);

  return (
    <Layout>
      <section id="Home">
        {/* <h1 className="text-2xl text-center my-10">
          <span className="font-normal">Welcome Back</span>{" "}
          <span className="underline">
            {user && `${user.firstName} ${user.lastName}`}
          </span>
        </h1> */}
        <h2>Welcome Back</h2>
        <Button
          fontSize="sm"
          label="Create new Team"
          variant="default"
        ></Button>
      </section>
    </Layout>
  );
}
