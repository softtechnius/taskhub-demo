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

/** Numéro congolais : +243 suivi de 9 chiffres (ou 0 suivi de 9 chiffres). */
export function telephoneValide(numero) {
  return /^(\+243|0)\d{9}$/.test(numero);
}

/** Vérifie le formulaire ; renvoie la liste des messages d'erreur. */
export function verifier({ nom, email, telephone }) {
  const erreurs = [];
  if (nom.length < 2) erreurs.push("Indiquez votre nom.");
  if (!EMAIL.test(email)) erreurs.push("Adresse email invalide.");
  if (!telephoneValide(telephone)) erreurs.push("Numéro invalide : +243 suivi de 9 chiffres.");
  return erreurs;
}

