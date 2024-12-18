import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  name: string;
  position: string;
  imageUrl: string;
  description?: string;
  about?: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  animate?: boolean;
  href?: string;
}

const PinContainer = ({
  children,
  title,
  about,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  about?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)",
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={cn(
        "relative group/pin z-40 cursor-pointer w-full",
        containerClassName,
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
        >
          <div className={cn("relative z-40", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} about={about} />
    </div>
  );
};

const PinPerspective = ({
  title,
  about,
}: {
  title?: string;
  about?: string;
}) => {
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500 max-w-full">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        {about && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-xs">
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-full max-w-xs">
              <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-2xl p-6 border border-neutral-200 dark:border-neutral-800">
                <div className="absolute top-4 left-4 flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
                  <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
                    {title}
                  </span>
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm mt-8">
                  {about}
                </p>
              </div>
            </div>
          </div>
        )}

        {!about && (
          <div className="absolute top-0 inset-x-0 flex justify-center">
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
              <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
                {title}
              </span>

              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
            </div>
          </div>
        )}

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            {[0, 2, 4].map((delay) => (
              <motion.div
                key={delay}
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: "-50%",
                  y: "-50%",
                }}
                animate={{
                  opacity: [0, 1, 0.5, 0],
                  scale: 1,
                  z: 0,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: delay,
                }}
                className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
              ></motion.div>
            ))}
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
        </>
      </div>
    </motion.div>
  );
};

// The rest of the code remains the same, just update the export to include the `about` prop
const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]",
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]",
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  position,
  imageUrl,
  description,
  about,
  socials,
  animate = true,
  href,
}) => {
  return (
    <PinContainer title={name} about={about} href={href}>
      <BackgroundGradient
        containerClassName="w-full max-w-sm mx-auto"
        animate={animate}
        className="p-0"
      >
        <div className="relative p-6 sm:p-8 bg-white dark:bg-black rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105 perspective-1000">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mb-4 rounded-full overflow-hidden border-4 border-white/50 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
              <Image
                src={imageUrl}
                alt={name}
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-1 text-center">
              {name}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-3 text-center">
              {position}
            </p>

            {description && (
              <p className="text-xs text-neutral-500 dark:text-neutral-300 text-center mb-4">
                {description}
              </p>
            )}

            {socials && (
              <div className="flex space-x-3 mt-2">
                {socials.linkedin && (
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors text-xs sm:text-sm"
                  >
                    LinkedIn
                  </a>
                )}
                {socials.twitter && (
                  <a
                    href={socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 transition-colors text-xs sm:text-sm"
                  >
                    Twitter
                  </a>
                )}
                {socials.github && (
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 dark:text-white hover:text-gray-600 transition-colors text-xs sm:text-sm"
                  >
                    GitHub
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </BackgroundGradient>
    </PinContainer>
  );
};
