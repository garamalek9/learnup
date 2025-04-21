document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inscriptionForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Empêche l'envoi du formulaire classique

        const nom = form.nom.value.trim();
        const prenom = form.prenom.value.trim();
        const email = form.email.value.trim();
        const motDePasse = form.mot_de_passe.value;

        // Validation simple
        if (!nom || !prenom || !email || !motDePasse) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Veuillez saisir une adresse email valide.");
            return;
        }

        if (motDePasse.length < 6) {
            alert("Le mot de passe doit contenir au moins 6 caractères.");
            return;
        }

        // Affichage des données (ou à remplacer par un enregistrement en localStorage ou base de données)
        console.log("Nom:", nom);
        console.log("Prénom:", prenom);
        console.log("Email:", email);
        console.log("Mot de passe:", motDePasse);

        alert("Inscription réussie !");
        form.reset(); // Réinitialiser le formulaire
    });

    function validateEmail(email) {
        // Expression régulière simple pour vérifier un email
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});



