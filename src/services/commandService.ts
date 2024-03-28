import { Command } from "@/models/command";
import UserService from "./userService";

const getAllCommands = async (): Promise<Command[] | null> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}command/getCommands`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${UserService.getToken()}`,
      },
    }
  );
  const commands = await res.json();
  const data = commands.data as Command[];
  console.log(typeof data[0].date);

  return commands.data;
};

const CommandService = { getAllCommands };
export default CommandService;
