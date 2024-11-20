"use server";

import { createAdminClient } from "./appwrtie";
import { redirect } from "next/navigation";
import { OAuthProvider } from "node-appwrite";

export async function signUpWithGithub() {
  const { account } = await createAdminClient();

  const redirectUrl = await account.createOAuth2Token(
    OAuthProvider.Github,
    `${process.env.NEXT_PUBLIC_APP}/oauth`,
    `${process.env.NEXT_PUBLIC_APP}/sign-up`
  );

  return redirect(redirectUrl);
}

export async function signUpWithGoogle() {
  const { account } = await createAdminClient();

  const redirectUrl = await account.createOAuth2Token(
    OAuthProvider.Google,
    `${process.env.NEXT_PUBLIC_APP}/oauth`,
    `${process.env.NEXT_PUBLIC_APP}/sign-up`
  );

  return redirect(redirectUrl);
}
