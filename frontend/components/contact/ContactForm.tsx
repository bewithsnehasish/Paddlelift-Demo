import React, { FormEvent, useState, useRef } from "react"; // Add useRef
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

interface ContactFormProps {
  onSubmit: (formData: any, file: File | null) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  isLoading,
  error,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);

  // Create a ref for the file input
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // Function to trigger the file input dialog
  const handleCustomFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit(formData, file);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-neutral-200">
            First name
          </Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Enter your first name"
            className="bg-neutral-950 border-neutral-800 text-neutral-200 placeholder:text-neutral-500"
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-neutral-200">
            Last name
          </Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Enter your last name"
            className="bg-neutral-950 border-neutral-800 text-neutral-200 placeholder:text-neutral-500"
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-neutral-200">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="you@company.com"
          className="bg-neutral-950 border-neutral-800 text-neutral-200 placeholder:text-neutral-500"
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-neutral-200">
          Phone number
        </Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="+91 91234-XXXXX"
          className="bg-neutral-950 border-neutral-800 text-neutral-200 placeholder:text-neutral-500"
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-neutral-200">
          Message
        </Label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Your message"
          rows={5}
          className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-neutral-200 placeholder:text-neutral-500 resize-none"
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="attachment" className="text-neutral-200">
          Attachment (optional)
        </Label>
        <div
          className="relative group cursor-pointer"
          onClick={handleCustomFileInputClick} // Add onClick handler
        >
          <input
            id="attachment"
            type="file"
            onChange={handleFileChange}
            className="hidden"
            disabled={isLoading}
            ref={fileInputRef} // Add ref to the file input
          />
          <div className="flex items-center justify-center w-full h-32 px-4 transition bg-neutral-950 border-2 border-neutral-800 border-dashed rounded-lg appearance-none hover:border-neutral-600 focus:outline-none">
            <div className="flex flex-col items-center space-y-2">
              <Upload className="w-8 h-8 text-neutral-400" />
              <span className="font-medium text-neutral-400">
                {file ? file.name : "Drop your Documents here"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
};
