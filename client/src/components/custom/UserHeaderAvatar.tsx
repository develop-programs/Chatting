import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { closeToggle } from "@/services/Redux/reducers/GroupToggle";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/services/Redux/store";
import Setting from "../Setting";

export default function UserHeaderAvatar() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Popover>
      <PopoverTrigger onClick={() => dispatch(closeToggle())}>
        <Avatar className="border shadow-md">
          <AvatarImage src="" />
          <AvatarFallback>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent align="start" side="bottom" className="w-[30rem]">
        <Setting />
      </PopoverContent>
    </Popover>
  );
}
