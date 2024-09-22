"use client";

import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

export default function Home() {
  return (
    <main className="flex bg-[#222] min-h-screen flex-col items-center justify-center">
      <div className="p-10 text-white flex flex-col gap-5 items-center rounded-md">
        <h1 className="text-5xl font-bold">Auth</h1>
        <p>Un servizio di autenticazione</p>
        <div>
          <LoginButton mode="redirect">
            <Button size={"lg"} variant={"secondary"}>
              Registrati
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
