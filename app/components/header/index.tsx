import SearchIcon from "@/app/icons/SearchIcon";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";

export default function Header() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <header className="absolute top-4 left-10 right-10 h-12 z-10 flex items-center justify-between">
      <div>
        <img
          className="w-36"
          src="https://files.readme.io/29c6fee-blue_short.svg"
        />
      </div>
      <nav>
        <ul className="flex list-none">
          <li className="mx-5">
            <Link href={"/"}> Home </Link>
          </li>
          <li className="mx-5">
            <Link href={"/"}> TV Series </Link>
          </li>
          <li className="mx-5">
            <Link href={"/"}> Movies </Link>
          </li>
          <li className="mx-5">
            <Link href={"/"}> About Me </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Button isIconOnly color="primary" onClick={onOpen}>
          <SearchIcon />
        </Button>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </header>
  );
}
