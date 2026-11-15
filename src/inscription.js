// Projet fictif « Site Kinshasa Mall » : écran d'inscription (exemple de démonstration).
// Tâche TaskHub : KMALL-6.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Formulaire d'inscription : nom, email et téléphone. */
export function lireFormulaire(form) {
  return {
    nom: String(form.nom || "").trim(),
    email: String(form.email || "").trim().toLowerCase(),
    telephone: String(form.telephone || "").replace(/[\s.-]/g, ""),
  };
}
