"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Suas ideias & planos organizados da melhor maneira. Bem vindo ao{" "}
                <span className="underline">Todoapp!</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2-xl font-medium">
                Todoapp é um ambiente conectado de para você trabalhar
                <br /> melhor, mais rapido e feliz!
            </h3>
            <Button>
               Clique aqui
                <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
        </div>
    );
}
