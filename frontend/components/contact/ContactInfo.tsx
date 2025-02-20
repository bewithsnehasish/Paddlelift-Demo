import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export const ContactInfo = () => {
  return (
    <Card className="bg-black/40 border-neutral-800 backdrop-blur-sm h-full">
      <CardHeader>
        <CardTitle className="text-neutral-200">Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center">
          <Phone className="w-5 h-5 mr-2 text-neutral-400" />
          <p className="text-neutral-400">Call or WhatsApp: +91-99710 23294</p>
        </div>
        <div className="flex items-center">
          <Mail className="w-5 h-5 mr-2 text-neutral-400" />
          <p className="text-neutral-400">Email Us: info@paddlelift.com</p>
        </div>
        <div className="flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-neutral-400" />
          <p className="text-neutral-400">
            Visit Us: B-4, First Floor, Workspaces By Innova, B Block, Sector
            63, Noida, Uttar Pradesh 201301
          </p>
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle className="text-neutral-200">Our Location</CardTitle>
      </CardHeader>
      <CardContent className="h-[460px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4725137946443!2d77.36948895194043!3d28.61559722233175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce59d969ba857%3A0x9a234478868502b9!2sPaddleLift%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1734004896279!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{
            border: 0,
            borderRadius: "0.5rem",
            filter: "invert(90%) hue-rotate(180deg)",
          }}
          allowFullScreen
          loading="lazy"
        />
      </CardContent>
    </Card>
  );
};
