import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

interface ProfileCard {
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
}

const profileCards: ProfileCard[] = [
  {
    name: "John Doe",
    role: "Software Engineer",
    quote:
      "Passionate about creating elegant solutions to complex problems. Always learning and exploring new technologies to stay at the forefront of web development.",
    imageUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(
      "John Doe"
    )}&background=random&color=fff&size=100`,
  },
  {
    name: "Jane Smith",
    role: "UX Designer",
    quote:
      "Dedicated to crafting intuitive and visually appealing user experiences. Combining creativity with user-centric design principles to deliver impactful digital products.",
    imageUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(
      "Jane Smith"
    )}&background=random&color=fff&size=100`,
  },
  {
    name: "Alex Johnson",
    role: "Project Manager",
    quote:
      "Experienced in leading cross-functional teams to deliver successful projects on time and within budget.",
    imageUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(
      "Alex Johnson"
    )}&background=random&color=fff&size=100`,
  },
];

export default function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {profileCards.map((card, index) => (
        <Card
          key={index}
          className="rounded-lg border text-card-foreground flex flex-col h-full bg-white shadow-lg"
        >
          <CardHeader className="flex flex-col space-y-1.5 p-6 relative h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-lg">
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
              <img
                src={card.imageUrl}
                alt={`${card.name}'s profile picture`}
                width={100}
                height={100}
                className="rounded-full border-4 border-white shadow-md"
              />
            </div>
          </CardHeader>
          <CardContent className="p-6 flex-grow pt-16 pb-4 px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {card.name}
            </h2>
            <h3 className="text-sm font-medium text-blue-600 mb-4">
              {card.role}
            </h3>
            <p className="text-sm text-gray-600 italic">
              &quot;{card.quote}&quot;
            </p>
          </CardContent>
          <CardFooter className="justify-center">
            <div className="w-16 h-1 bg-purple-500 rounded"></div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
