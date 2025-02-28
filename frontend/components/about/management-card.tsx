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
      className="relative overflow-hidden group cursor-pointer bg-[#09090B] max-w-[280px] w-full shadow-lg transition-transform duration-300 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative w-full h-72 sm:h-80">
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={90}
            priority
          />
        </div>

        {/* Card Content */}
        <div className="p-4 space-y-3 sm:text-left">
          <h3 className="text-base font-semibold text-white tracking-wide">
            {name}
          </h3>
          <p className="text-xs text-gray-300 font-medium">{title}</p>
          <p className="text-xs text-gray-300 font-medium">{position}</p>
          <div className="flex justify-end sm:justify-end gap-2 mt-3">
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            )}
            {socials.twitter && (
              <a
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
            )}
            {socials.github && (
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 text-white" />
              </a>
            )}
          </div>
        </div>

        {/* Hover Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/80 flex flex-col justify-between"
            >
              {/* Description */}
              <div className="p-4">
                <p className="text-xs text-gray-100 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Social Icons */}
              <div className="p-4 bg-black/40">
                <div className="flex justify-end sm:justify-end gap-5">
                  {socials.linkedin && (
                    <a
                      href={socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                  )}
                  {socials.twitter && (
                    <a
                      href={socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-4 h-4 text-white" />
                    </a>
                  )}
                  {socials.github && (
                    <a
                      href={socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 text-white" />
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
