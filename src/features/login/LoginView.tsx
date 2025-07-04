import Image from "next/image";
import LoginForm from "@/components/Login/LoginForm";

export default function LoginView() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/AuthPagesBackground.jpg"
          alt="Login Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 flex min-h-screen w-full">
        <div className="hidden md:flex md:w-1/2 items-center justify-center p-8"></div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
