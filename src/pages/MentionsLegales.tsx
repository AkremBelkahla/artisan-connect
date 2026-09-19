import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Chatbot from "@/components/Chatbot";

const MentionsLegales = () => {
  const sections = [
    {
      title: "Site publisher",
      content: [
        "ArtisOn",
        "InfinityWeb.tn",
        "Address: 75 Avenue des Champs-Élysées, 75008 Paris, France",
        "Email: contact@artison.fr",
        "Phone: +33 1 23 45 67 89"
      ]
    },
    {
      title: "Hosting",
      content: [
        "Hosting provider: Netlify, Inc.",
        "Address: 2325 3rd Street, Suite 215, San Francisco, CA 94107, United States",
        "Website: https://www.netlify.com"
      ]
    },
    {
      title: "Intellectual property",
      content: [
        "All content on the ArtisOn website (text, images, graphics, logos, icons, etc.) is protected by applicable intellectual property laws.",
        "Any reproduction, representation, modification or adaptation, in whole or in part, is prohibited without the prior written consent of InfinityWeb.tn."
      ]
    },
    {
      title: "Liability",
      content: [
        "ArtisOn makes every effort to provide reliable information. However, errors or omissions may occur.",
        "ArtisOn cannot be held liable for direct or indirect damages resulting from the use of the site."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Legal notice</h1>
            <p className="text-muted-foreground">
              Legal information relating to the ArtisOn website.
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

export default MentionsLegales;
