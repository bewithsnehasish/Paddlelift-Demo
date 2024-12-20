import Image from "next/image";
import { Button } from "../ui/button";

{
  /* Hero Section */
}
<section className="h-screen snap-start flex items-center relative">
  <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-6"
      >
        About <span className="text-red-600">PaddleLift</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-gray-600 mb-8"
      >
        Text about what we do and our mission to help businesses grow.
      </motion.p>
      <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
        Connect With Us
      </Button>
    </div>

    <Image
      src="/about/about.png"
      alt="About Section"
      width={1000}
      height={500}
      className="rounded-lg object-cover"
    />
  </div>
</section>;
