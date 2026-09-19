import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Chatbot from "@/components/Chatbot";

const PolitiqueConfidentialite = () => {
  const sections = [
    {
      title: "Introduction",
      content: [
        "This privacy policy describes how ArtisOn collects, uses and protects your personal data when you use our platform.",
        "By using ArtisOn, you accept the practices described in this document."
      ]
    },
    {
      title: "Data we collect",
      content: [
        "Information provided when signing up (name, email address, phone number).",
        "Data related to your use of the service (quote requests, messages, reviews).",
        "Technical data collected automatically (IP address, browser, cookies)."
      ]
    },
    {
      title: "How we use your data",
      content: [
        "To provide and improve our services.",
        "To ensure the security of transactions and of the platform.",
        "To communicate with you about our services and your requests."
      ]
    },
    {
      title: "Data sharing",
      content: [
        "Your data may be shared with partner artisans as part of a quote request.",
        "We never sell or rent your personal data to commercial third parties.",
        "Some information may be disclosed to comply with a legal obligation."
      ]
    },
    {
      title: "Data security",
      content: [
        "We implement technical and organizational measures to protect your data against unauthorized access.",
        "However, no data transmission over the Internet is completely secure."
      ]
    },
    {
      title: "Retention period",
      content: [
        "Your personal data is kept for as long as necessary to provide our services.",
        "You may request its deletion in accordance with applicable regulations."
      ]
    },
    {
      title: "Your rights",
      content: [
        "Access, rectification and deletion of your data.",
        "Objection to or restriction of processing.",
        "Data portability.",
        "To exercise your rights, contact us at contact@artison.fr."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Privacy policy</h1>
            <p className="text-muted-foreground">
              Learn how ArtisOn collects, uses and protects your personal data.
            </p>
          </header>

          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.title} className="bg-muted/30 rounded-xl border border-border/60 p-6">
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <div className="space-y-3 text-muted-foreground">
                  {section.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
      <Chatbot />
    </div>
  );
};

export default PolitiqueConfidentialite;
