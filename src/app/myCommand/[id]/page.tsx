"use client";

import Button from "@/components/button";
import Card from "@/components/card";
import Footer from "@/layout/footer";
import NavBar from "@/layout/navbar";
import { Command } from "@/models/command";
import { Status } from "@/models/status";
import CommandService from "@/services/commandService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Index() {
  const params = useParams();
  const [command, setCommand] = useState<Command | null>();

  const getCommand = async () => {
    const command = await CommandService.getFilteredCommands(
      "orderNumber",
      params.id.toString()
    );
    if (command) {
      setCommand(command[0]);
    }
  };

  useEffect(() => {
    getCommand();
  }, []);

  return (
    <>
      <NavBar />
      {command && (
        <div className="h-screen">
          <div className="flex flex-col justify-center items-center my-10">
            <p className="text-xl font-bold">Ma commande</p>
            <p>
              Numéro de commande: <b>{command.orderNumber}</b>
            </p>
            <p>
              Statut: <b>{command.status}</b>
            </p>
            <div>
              {command.status === Status.PAID && (
                <Button
                  title="Demander un remboursement"
                  disabled={false}
                  onClick={() =>
                    CommandService.askForReimbursment(command!.orderNumber)
                  }
                />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <p className="text-xl font-bold">Les produits de cette commande</p>
            <div className="flex flex-wrap justify-center items-center gap-3">
              {command.products.map((product) => {
                return (
                  <Card
                    product={product}
                    key={product.id}
                    isInWishlist={false}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
