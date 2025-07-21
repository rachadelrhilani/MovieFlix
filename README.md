# 🎬 MovieFlix

MovieFlix est une application web React qui permet aux utilisateurs de :
- explorer les films les plus populaires via l'API TMDB,
- effectuer une recherche dynamique,
- consulter les détails d’un film,
- enregistrer leurs films favoris (localStorage),
- visionner les vidéos liées aux films.

---

## 🚀 Fonctionnalités

- 🔎 **Recherche de films** par mots-clés (via l’API TMDB)
- 📂 **Filtrage par catégories** : Top Rated, Upcoming, Trending...
- ⭐ **Ajout et suppression de films favoris** (enregistrés dans le navigateur avec `localStorage`)
- 📄 **Détails du film** (titre, date de sortie, note, description, image...)
- 📺 **Lecture de vidéos** (bande-annonce si disponible)
- 🌙 **Mode sombre/clair** (optionnel selon ton implémentation)
- 🧭 **Navigation dynamique** avec `React Router`

---

## 🛠️ Technologies utilisées

- **React.js** (Hooks, Components)
- **React Router DOM**
- **Axios** (pour les requêtes API)
- **Bootstrap 5** (pour le style et la mise en page)
- **TMDB API** (https://www.themoviedb.org/documentation/api)

---

## 📦 Installation

```bash
git clone https://github.com/rachadelrhilani/MovieFlix.git
cd MovieFlix
npm install