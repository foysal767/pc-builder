import RootLayout from "@/components/Layout/RootLayout";
import React from "react";
import Head from "next/head";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <div className="w-8/12 mx-auto text-center my-12">
        <h3 className="text-2xl font-bold mb-8">LOGIN WITH SOCIAL</h3>
        <div className="">
          <form method="post" action="/api/auth/signin/google">
            <button
              className="btn bg-sky-500 font-semibold text-white border-2 border-black hover:border-black hover:text-black mb-4"
              onClick={() =>
                signIn("google", {
                  callbackUrl: "https://pc-builder-web-app-roan.vercel.app/",
                })
              }
            >
              SignIn With Google
            </button>
          </form>

          <form method="post" action="/api/auth/signin/github">
            <button
              className="btn bg-sky-500 font-semibold text-white border-2 border-black hover:border-black hover:text-black mb-4"
              onClick={() =>
                signIn("github", {
                  callbackUrl: "https://pc-builder-web-app-roan.vercel.app/",
                })
              }
            >
              SignIn With GitHub
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
