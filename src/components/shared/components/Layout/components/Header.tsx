import { Toolbar } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";

import { ClientOnlyPortal } from "../../ClientOnlyPortal";
import { useCommandMenu } from "../../Cmdk";
import { IconSearch, IconZetaDocsLogo } from "../../Icons";
import { MobileMenuButton } from "./MobileMenuButton";

export const Header: React.FC<{
  className?: string;
  isLeftDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  setIsLeftDrawerOpen: (isOpen: boolean) => void;
}> = ({ isLeftDrawerOpen, toggleDrawerOpen, setIsLeftDrawerOpen }) => {
  const { setIsOpen, isOpen } = useCommandMenu();

  return (
    <>
      <ClientOnlyPortal selector=".nextra-search">
        <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-grey-400 dark:text-grey-300" />
      </ClientOnlyPortal>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Search
      </div>

      <Toolbar className="sm:hidden fixed z-[100] flex items-stretch w-full p-0 bg-grey-50 dark:bg-grey-900">
        <div
          className={clsx("flex items-center justify-between flex-grow p-4", {
            "border-b border-grey-200 dark:border-grey-700": !isLeftDrawerOpen,
          })}
        >
          <Link href="/" onClick={() => setIsLeftDrawerOpen(false)}>
            <IconZetaDocsLogo className="text-green-700 dark:text-grey-50" />
          </Link>

          <MobileMenuButton
            className="mt-1.5 text-black dark:text-grey-50"
            isOpen={isLeftDrawerOpen}
            toggle={toggleDrawerOpen}
          />
        </div>
      </Toolbar>
    </>
  );
};
