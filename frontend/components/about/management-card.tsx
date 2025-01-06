"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

interface ManagementCardProps {
  name: string;
  title: string;
  position: string;
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
  position,
  photo,
  description,
  socials,
}: ManagementCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="relative overflow-hidden group cursor-pointer bg-[#09090B] w-[280px] shadow-lg transition-transform duration-300 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative w-full h-[320px]">
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 280px) 100vw"
            quality={90}
            priority
          />
        </div>
        <div className="p-4 space-y-1">
          <h3 className="text-lg font-semibold text-white tracking-wide">
            {name}
          </h3>
          <p className="text-sm text-gray-300 font-medium">{title}</p>
          <p className="text-sm text-gray-300 font-medium">{position}</p>
          <div className="flex justify-end gap-4 mt-2">
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            )}
            {socials.twitter && (
              <a
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            )}
            {socials.github && (
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            )}
          </div>
        </div>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/80 flex flex-col justify-between"
            >
              <div className="p-6">
                <p className="text-sm text-gray-100 leading-relaxed">
                  {description}
                </p>
              </div>
              <div className="p-4 bg-black/40">
                <div className="flex justify-end gap-4">
                  {socials.linkedin && (
                    <a
                      href={socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {socials.twitter && (
                    <a
                      href={socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {socials.github && (
                    <a
                      href={socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 text-white" />
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
