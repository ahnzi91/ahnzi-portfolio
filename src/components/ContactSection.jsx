import ContactForm from "@components/ContactForm";
import ContactInfo from "@components/ContactInfo";

export default function ContactSection() {
  return (
    <section id="contact" className="mb-16">
      <h2 className="mb-6 text-3xl font-bold">연락처</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}
