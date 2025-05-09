import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  buttonText = "Más información",
  buttonLink = "#",
  className = "",
}) => {
  return (
    <Card className={`hover:shadow-lg transition-shadow ${className}`}>
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="bg-mediacion-blue/10 p-3 rounded-full text-mediacion-blue">
          {icon}
        </div>
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-gray-700">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          variant="outline"
          className="mt-2 border-mediacion-blue text-mediacion-blue hover:bg-mediacion-blue hover:text-white"
        >
          <a href={buttonLink}>{buttonText}</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
