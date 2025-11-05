import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Chatbot from "@/components/Chatbot";

const ConditionsGeneralesUtilisation = () => {
  const sections = [
    {
      title: "Objet",
      content: [
        "Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation du site ArtisOn et des services proposés aux utilisateurs.",
        "En accédant au site, vous acceptez sans réserve ces CGU."
      ]
    },
    {
      title: "Définitions",
      content: [
        "Utilisateur : toute personne naviguant sur le site ArtisOn.",
        "Client : utilisateur effectuant une demande de devis ou une réservation.",
        "Artisan : professionnel inscrit sur la plateforme et proposant ses services."
      ]
    },
    {
      title: "Inscription et compte",
      content: [
        "L'inscription permet d'accéder à un espace personnel pour gérer ses demandes et ses prestations.",
        "Les informations fournies doivent être exactes et mises à jour.",
        "ArtisOn se réserve le droit de suspendre un compte en cas de non-respect des présentes CGU."
      ]
    },
    {
      title: "Services proposés",
      content: [
        "Mise en relation entre clients et artisans qualifiés.",
        "Gestion des devis, réservations et avis clients.",
        "Support et assistance client via la plateforme."
      ]
    },
    {
      title: "Engagements des utilisateurs",
      content: [
        "Fournir des informations exactes et respecter les artisans et autres utilisateurs.",
        "Ne pas utiliser le site à des fins frauduleuses ou illicites.",
        "Respecter les droits de propriété intellectuelle liés à la plateforme."
      ]
    },
    {
      title: "Responsabilité",
      content: [
        "ArtisOn agit en tant qu'intermédiaire et ne peut être tenu responsable de l'exécution des prestations réalisées par les artisans.",
        "Toute réclamation doit être adressée directement à l'artisan concerné.",
        "ArtisOn peut suspendre l'accès au site pour des raisons de maintenance ou de sécurité."
      ]
    },
    {
      title: "Modification des CGU",
      content: [
        "ArtisOn se réserve le droit de modifier les présentes conditions à tout moment.",
        "En cas de modification, les utilisateurs seront informés par le biais du site.",
        "L'utilisation continue du site après modification vaut acceptation des nouvelles CGU."
      ]
    },
    {
      title: "Contact",
      content: [
        "Pour toute question relative aux CGU, contactez-nous à contact@artison.fr."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Conditions Générales d'Utilisation</h1>
            <p className="text-muted-foreground">
              Merci de lire attentivement nos conditions d'utilisation avant d'utiliser ArtisOn.
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
