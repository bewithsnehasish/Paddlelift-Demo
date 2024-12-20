import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ManagementSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true });

  const wordPullAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    }),
  };

  const MainHeading = ({
    words,
    highlight = -1,
  }: {
    words: string[];
    highlight?: number;
  }) => (
    <div className="space-y-2 py-8">
      <h1 className="text-5xl md:text-6xl font-bold text-white flex flex-wrap justify-center gap-4">
        {words.map((word, index) => (
          <motion.span
            key={index}
            className={`relative ${index === highlight ? "text-emerald-400" : "text-white"}`}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={wordPullAnimation}
            custom={index}
          >
            {word}
            {index === highlight && (
              <span className="absolute inset-0 blur-md bg-emerald-400/30 z-10"></span>
            )}
          </motion.span>
        ))}
      </h1>
    </div>
  );

  const SubHeading = ({ children }: { children: React.ReactNode }) => (
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-3xl md:text-4xl font-bold mb-6 text-emerald-400 relative"
    >
      {children}
      <span className="absolute inset-0 blur-lg bg-emerald-500/20 -z-10"></span>
    </motion.h3>
  );

  const AnimatedCard = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Card className="h-full bg-gray-900/50 backdrop-blur-sm border-gray-800">
        <CardContent className="p-8">{children}</CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section className="py-32 bg-[#09090B]" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <MainHeading
          words={["Our", "Mission,", "Vision", "&", "Values"]}
          highlight={1} // Highlights "Mission" with emerald color
        />

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-16 mb-24 mt-16">
          <AnimatedCard>
            <SubHeading>Mission</SubHeading>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our mission is to be the guiding light for start-ups, offering
              them not just advice, but tangible, hands-on support to propel
              their businesses to new heights. We strive to empower
              entrepreneurs with the resources, knowledge, and connections they
              need to overcome challenges and achieve sustainable growth.
            </p>
          </AnimatedCard>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <Image
              src="/mission-graphic.gif"
              alt="Mission Graphic"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-full"
            />
            <div className="absolute inset-0 blur-2xl bg-emerald-500/10 -z-10"></div>
          </motion.div>
        </div>

        {/* Vision Section */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative md:order-2"
          >
            <Image
              src="/vision-graphic.gif"
              alt="Vision Graphic"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-full"
            />
            <div className="absolute inset-0 blur-2xl bg-emerald-500/10 -z-10"></div>
          </motion.div>
          <AnimatedCard>
            <SubHeading>Vision</SubHeading>
            <p className="text-gray-300 text-lg leading-relaxed">
              To establish our presence in the market as unrivaled leaders,
              offering the ultimate solution to overcome the hiring bottlenecks
              faced by start-ups. We envision a future where every innovative
              idea has the opportunity to flourish, supported by a robust
              ecosystem of talent and resources that we facilitate.
            </p>
          </AnimatedCard>
        </div>

        {/* Core Values Section */}
        <div className="mt-32">
          <MainHeading words={["Core", "Values"]} highlight={1} />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative mt-12"
          >
            <Image
              src="/about/order.gif"
              alt="Core Values"
              width={1920}
              height={1080}
              className="rounded-xl object-cover mx-auto"
            />
            <div className="absolute inset-0 blur-3xl bg-emerald-500/5 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
