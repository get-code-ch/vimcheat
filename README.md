# vimcheat

Aide-mémoire Vim statique, lisible et bilingue (FR/EN) — *a readable, bilingual Vim cheat sheet.*

- Onglets par type d'opération : essentiels, déplacements, édition, mode visuel, recherche & remplacement, buffers & fenêtres, fichiers, registres & macros.
- Touches spéciales colorées avec icônes (Esc, Ctrl, Shift, Alt, Entrée, Leader…), combinaisons (`Ctrl+w`) distinguées des séquences (`g g`).
- Recherche instantanée (`/` pour y aller, `Esc` pour sortir), insensible aux accents.
- Thème clair / sombre, version imprimable (`Ctrl+P` : tous les onglets sur A4).
- Aucun build, aucune dépendance : HTML + CSS + JS dans [`public/`](public/).

## Développement local

Ouvrir `public/index.html` directement, ou servir le dossier :

```bash
python3 -m http.server -d public 8000
```

## Ajouter ou modifier une commande

Tout le contenu est dans [`public/data.js`](public/data.js). Chaque commande est une ligne :

```js
["<C-w>v", "Découper verticalement", "Split vertically"],
[["n", "N"], "Occurrence suivante / précédente", "Next / previous match", { list: true }],
```

| Notation | Rendu |
|---|---|
| `dd`, `gg` | séquence de touches |
| `<C-x>` `<S-x>` `<A-x>` | combinaison Ctrl / Shift / Alt |
| `<Esc>` `<CR>` `<Tab>` `<Space>` `<BS>` `<leader>` `<Up>`… | touche spéciale colorée |
| `[hjkl]`, `<C-[du]>` | une touche au choix dans le groupe |
| `{motion}` `{char}` `{n}` `{file}`… | à remplacer (libellé traduit via `ui.*.ph`) |
| `:cmd …` | commande Ex |
| `` `code` `` dans une description | code en ligne |

Options : `{ list: true }` affiche les alternatives côte à côte (sans « ou »), `{ code: true }` affiche le texte tel quel (motifs regex).

## Version

Le numéro affiché en haut à droite vient de `version` dans [`public/data.js`](public/data.js) : l'incrémenter à chaque évolution.

## Déploiement (Cloudflare Workers)

Le site est un Worker « static assets » ([`wrangler.jsonc`](wrangler.jsonc)) déployé par GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) à chaque push sur `main`.

Secrets à définir dans le repo GitHub (*Settings → Secrets and variables → Actions*) :

- `CLOUDFLARE_API_TOKEN` — token API créé avec le modèle **Edit Cloudflare Workers**
- `CLOUDFLARE_ACCOUNT_ID` — identifiant du compte Cloudflare

## Licence

[MIT](LICENSE)
