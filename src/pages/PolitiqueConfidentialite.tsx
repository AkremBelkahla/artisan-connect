import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Chatbot from "@/components/Chatbot";

const PolitiqueConfidentialite = () => {
  const sections = [
    {
      title: "Introduction",
      content: [
        "La présente politique de confidentialité décrit comment ArtisOn collecte, utilise et protège vos données personnelles lorsque vous utilisez notre plateforme.",
        "En utilisant ArtisOn, vous acceptez les pratiques décrites dans ce document."
      ]
    },
    {
      title: "Données collectées",
      content: [
        "Informations fournies lors de l'inscription (nom, prénom, adresse email, téléphone).",
        "Données liées à l'utilisation du service (demandes de devis, messages échangés, évaluations).",
        "Données techniques collectées automatiquement (adresse IP, navigateur, cookies)."
      ]
    },
    {
      title: "Utilisation des données",
      content: [
        "Fournir et améliorer nos services.",
        "Assurer la sécurité des transactions et de la plateforme.",
        "Communiquer avec vous concernant les services proposés et vos demandes."
      ]
    },
    {
      title: "Partage des données",
      content: [
        "Vos données peuvent être partagées avec des artisans partenaires dans le cadre d'une demande de devis.",
        "Nous ne vendons ni ne louons vos données personnelles à des tiers commerciaux.",
        "Certaines informations peuvent être communiquées pour respecter une obligation légale."
      ]
    },
    {
      title: "Sécurité des données",
      content: [
        "Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données contre tout accès non autorisé.",
        "Cependant, aucune transmission de données sur Internet n'est totalement sécurisée."
      ]
    },
    {
      title: "Durée de conservation",
      content: [
        "Vos données personnelles sont conservées aussi longtemps que nécessaire pour vous fournir nos services.",
        "Vous pouvez demander leur suppression conformément à la réglementation en vigueur."
      ]
    },
    {
      title: "Vos droits",
      content: [
        "Accès, rectification, suppression de vos données.",
        "Opposition ou limitation du traitement.",
        "Portabilité des données.",
        "Pour exercer vos droits, contactez-nous à contact@artison.fr."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Politique de confidentialité</h1>
            <p className="text-muted-foreground">
              Découvrez comment ArtisOn collecte, utilise et protège vos données personnelles.
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
