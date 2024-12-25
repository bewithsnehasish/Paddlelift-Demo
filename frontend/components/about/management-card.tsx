"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

interface ManagementCardProps {
  name: string;
  title: string;
  photo: string;
  description: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export function ManagementCard({
  name,
  title,
  photo,
  description,
  socials,
}: ManagementCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="relative overflow-hidden group cursor-pointer bg-[#09090B]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <Image
          src={photo}
          alt={name}
          width={300}
          height={400}
          className="w-full aspect-[3/4] object-cover"
        />
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute inset-0 bg-black/70 p-6 flex flex-col justify-between"
            >
              <p className="text-sm text-white">{description}</p>
              <div className="mt-auto">
                <h3 className="text-xl font-bold text-white">{name}</h3>
                <p className="text-gray-300 mb-4">{title}</p>
                <div className="flex gap-4">
                  {socials.linkedin && (
                    <a
                      href={socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 text-white hover:text-blue-400" />
                    </a>
                  )}
                  {socials.twitter && (
                    <a
                      href={socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-5 h-5 text-white hover:text-blue-400" />
                    </a>
                  )}
                  {socials.github && (
                    <a
                      href={socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 text-white hover:text-blue-400" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
