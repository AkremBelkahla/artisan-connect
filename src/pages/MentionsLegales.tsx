import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Chatbot from "@/components/Chatbot";

const MentionsLegales = () => {
  const sections = [
    {
      title: "Éditeur du site",
      content: [
        "ArtisOn",
        "InfinityWeb.tn",
        "Adresse : 75 Avenue des Champs-Élysées, 75008 Paris, France",
        "Email : contact@artison.fr",
        "Téléphone : +33 1 23 45 67 89"
      ]
    },
    {
      title: "Hébergement",
      content: [
        "Nom de l'hébergeur : Netlify, Inc.",
        "Adresse : 2325 3rd Street, Suite 215, San Francisco, CA 94107, États-Unis",
        "Site : https://www.netlify.com"
      ]
    },
    {
      title: "Propriété intellectuelle",
      content: [
        "L'ensemble du contenu du site ArtisOn (textes, images, graphismes, logos, icônes, etc.) est protégé par les lois en vigueur sur la propriété intellectuelle.",
        "Toute reproduction, représentation, modification ou adaptation, totale ou partielle, est interdite sans l'autorisation écrite préalable de InfinityWeb.tn."
      ]
    },
    {
      title: "Responsabilité",
      content: [
        "ArtisOn met tout en œuvre pour offrir des informations fiables. Toutefois, des erreurs ou omissions peuvent survenir.",
        "ArtisOn ne pourra être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Mentions légales</h1>
            <p className="text-muted-foreground">
              Informations légales relatives au site ArtisOn.
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
