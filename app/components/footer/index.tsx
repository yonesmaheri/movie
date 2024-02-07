import GithubIcon from "@/app/icons/GithubIcon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 h-fit py-4 flex-col items-center justify-center">
      <div className="w-[90%] mx-auto rounded bg-gray-800 py-2 px-4">
        <div className="text-center">
          Developed by NextJs <br />
          Developer :{" "}
          <Link
            className="text-blue-500"
            href={"mailto:yonesmaheri80@gmail.com"}
          >
            Yones Maheri
          </Link>
        </div>
        <nav className="text-center flex items-center justify-center">
          <Link href={"https://github.com/yonesmaheri"}>
            <GithubIcon />
          </Link>
        </nav>
      </div>
    </footer>
  );
}
