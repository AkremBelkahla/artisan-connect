import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Chatbot from "@/components/Chatbot";

const ConditionsGeneralesUtilisation = () => {
  const sections = [
    {
      title: "Purpose",
      content: [
        "These Terms of Service govern the use of the ArtisOn website and the services offered to users.",
        "By accessing the site, you accept these Terms of Service without reservation."
      ]
    },
    {
      title: "Definitions",
      content: [
        "User: any person browsing the ArtisOn website.",
        "Customer: a user submitting a quote request or a booking.",
        "Artisan: a professional registered on the platform offering their services."
      ]
    },
    {
      title: "Registration and account",
      content: [
        "Registration gives access to a personal space to manage requests and services.",
        "The information provided must be accurate and kept up to date.",
        "ArtisOn reserves the right to suspend an account in the event of a breach of these Terms."
      ]
    },
    {
      title: "Services offered",
      content: [
        "Connecting customers with qualified artisans.",
        "Management of quotes, bookings and customer reviews.",
        "Customer support and assistance through the platform."
      ]
    },
    {
      title: "User commitments",
      content: [
        "Provide accurate information and respect artisans and other users.",
        "Not use the site for fraudulent or unlawful purposes.",
        "Respect the intellectual property rights related to the platform."
      ]
    },
    {
      title: "Liability",
      content: [
        "ArtisOn acts as an intermediary and cannot be held responsible for the performance of services carried out by artisans.",
        "Any claim must be addressed directly to the artisan concerned.",
        "ArtisOn may suspend access to the site for maintenance or security reasons."
      ]
    },
    {
      title: "Changes to the Terms",
      content: [
        "ArtisOn reserves the right to modify these Terms at any time.",
        "In the event of a change, users will be informed through the site.",
        "Continued use of the site after a modification constitutes acceptance of the new Terms."
      ]
    },
    {
      title: "Contact",
      content: [
        "For any question relating to these Terms, contact us at contact@artison.fr."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">
              Please read our terms of service carefully before using ArtisOn.
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

export default ConditionsGeneralesUtilisation;
