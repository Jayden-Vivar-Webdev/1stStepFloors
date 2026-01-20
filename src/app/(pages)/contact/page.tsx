"use client";
import { ContactSection } from "@/components/contact-section";
import { FlooringHero, LeadFormData } from "@/components/hero-section";
import content from "@/content/content.json";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const { pages } = content;
  
  const onSubmit = async (data: LeadFormData): Promise<boolean> => {
  try {
    const formData = new FormData();
    formData.append("access_key", "363210b2-8ac0-437d-a5ee-f71b2f2d6218");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      router.push("/thank-you"); 
      return true;
    }

    return false;
  } catch (error) {
    console.error("Form submission error:", error);
    return false;
  }
};

  return (
    <>
      <ContactSection {...pages.home["contact-section"]}  onLeadSubmit={onSubmit}/>
    </>
  );
}
