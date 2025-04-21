document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('connexionForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = form.email.value.trim();
        const motDePasse = form.mot_de_passe.value;

        // Validation de base
        if (!email || !motDePasse) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Adresse email invalide.");
            return;
        }

        // Exemple de vérification simple (à remplacer par vérification réelle)
        const emailCorrect = "utilisateur@example.com";
        const motDePasseCorrect = "123456";

        if (email === emailCorrect && motDePasse === motDePasseCorrect) {
            alert("Connexion réussie !");
            // Redirection vers une autre page si besoin :
            // window.location.href = "accueil.html";
        } else {
            alert("Email ou mot de passe incorrect.");
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
