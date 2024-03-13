"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-6xl font-bold"> 
                Suas ideias, pensamentos e anotaçoes em um unico lugar, conheça o <span className="underline">YouList! </span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Youlist é um app para você anotar suas ideias<br/>de forma organizada e rapida!
            </h3>
            <Button>
                Acesse aqui
                <ArrowRight className= "h-4 w-4 ml-2"/>
            </Button>
           

        </div>
    )
}