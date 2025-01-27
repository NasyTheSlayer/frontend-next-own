import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Socials = () => {
  const router = useRouter();

  const handleGoogleLogin = (platform: string) => {
    const platformUrls: Record<string, string> = {
      google: "http://localhost:3000/auth/google/sign-in",
      github: "http://localhost:3000/auth/github/sign-in",
      discord: "http://localhost:3000/auth/discord/sign-in",
    };

    const url = platformUrls[platform];
    router.push(url);
  };

  return (
    <div className="flex items-center gap-4">
      {["google", "github", "discord"].map((platform, index) => (
        <Button
          key={index}
          isIconOnly
          aria-label={platform}
          className="w-[156px] h-12"
          onClick={() => handleGoogleLogin(platform)}
        >
          <Image
            width={25}
            height={25}
            src={`/assets/icons/auth/${platform}.svg`}
            style={{ width: "auto", height: "auto" }}
            alt={platform}
            priority
          />
        </Button>
      ))}
    </div>
  );
};
