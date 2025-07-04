import Image from "next/image";
import RegisterForm from "@/components/Registration/RegisterForm";

export default function RegisterView() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/AuthPagesBackground.jpg"
          alt="Register Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 flex min-h-screen w-full">
        <div className="hidden md:flex md:w-1/2 items-center justify-center p-8"></div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
