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
  return commands.data as Command[];
};

const askForReimbursment = async (
  orderNumber: string
): Promise<Command[] | null> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}command/reimbursement?id=${orderNumber}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${UserService.getToken()}`,
      },
    }
  );
  console.log(res);

  const commands = await res.json();
  console.log(commands);
  return commands.data as Command[];
};

const getFilteredCommands = async (
  name: string,
  value: string
): Promise<Command[] | null> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}command/getCommandByFilter?name=${name}&value=${value}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${UserService.getToken()}`,
      },
    }
  );
  const commands = await res.json();
  return commands.data as Command[];
};

const CommandService = {
  getAllCommands,
  getFilteredCommands,
  askForReimbursment,
};
export default CommandService;
