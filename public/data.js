/*
 * vimcheat — command data.
 *
 * Item format: [keys, descFR, descEN, options?]
 *   keys     string, or array of alternatives (shown with "or")
 *   options  { list: true }  -> alternatives shown side by side, without "or"
 *            { since: "9.2" } -> "Vim 9.2+" badge for recent commands
 *            { code: true }  -> keys shown verbatim as code (regex, patterns)
 *
 * Key notation (vim style):
 *   <Esc> <CR> <Tab> <Space> <BS> <leader> <Up> <Down> <Left> <Right> <PageUp> <PageDown>
 *   <C-x> Ctrl+x · <S-x> Shift+x · <A-x> Alt+x
 *   [abc]   one of these keys (also inside a chord: <C-[du]>)
 *   options.eq  equivalent command(s), shown as a tooltip (e.g. the Ex form of a Ctrl shortcut)
 *   {name}  placeholder (translated via ui.*.ph)
 *   ":..."  Ex command (rendered as a command line)
 * Use `backticks` in descriptions for inline code.
 */
window.VIM_DATA = {
  version: "1.9.0",
  site: {
    // Cloudflare Web Analytics site token (public, cookieless). Empty = disabled.
    analyticsToken: "a9429d0dc2a247248e76683cb481430f",
    // Donation page (Ko-fi, GitHub Sponsors, Buy Me a Coffee…). Empty = hidden.
    supportUrl: "https://github.com/sponsors/get-code-ch",
  },
  ui: {
    fr: {
      title: "Aide-mémoire Vim",
      h1: "Aide-mémoire Vim : toutes les commandes essentielles",
      docTitle: "vimcheat — Aide-mémoire Vim (cheat sheet FR/EN)",
      metaDesc: "Aide-mémoire Vim clair et bilingue (FR/EN) : modes, déplacements, édition, objets texte, mode visuel, recherche et remplacement, buffers et fenêtres, fichiers, registres et macros. Recherche instantanée et version imprimable.",
      search: "Rechercher une commande…",
      searchHint: "Tapez / pour rechercher",
      or: "ou",
      eq: "Équivalent",
      info: "Détails",
      close: "Fermer",
      examples: "Exemples",
      demo: "Texte de départ (█ = curseur)",
      demoResult: "Résultat",
      helpLabel: "Aide Vim",
      support: "Soutenir vimcheat",
      supportTitle: "Offrir un café pour soutenir le projet",
      since: (v) => "Nécessite Vim " + v + " ou plus récent",
      results: (n) => (n === 0 ? "Aucun résultat" : n === 1 ? "1 résultat" : n + " résultats"),
      noResults: "Aucune commande ne correspond. Essayez « ctrl », « fenêtre » ou « :s ».",
      legend: "Légende",
      legendItems: [
        ["<Esc>", "Échap : revenir au mode normal"],
        ["<C-w>", "Combinaison : maintenir Ctrl et appuyer sur w"],
        ["gg", "Fond vert : touches à taper directement, l'une après l'autre (sans : ni Entrée)", true],
        ["<C-w>v", "Combinaison suivie d'une touche"],
        ["<C-w>[hjkl]", "Au choix : une des touches du groupe"],
        ["<C-x><C-n>", "Ctrl maintenu : x puis n (Ctrl+x Ctrl+n)"],
        [":w", "Fond bleu : commande Ex, taper : puis la commande, valider avec Entrée", true],
        ["{motion}", "À remplacer : mouvement, caractère, nombre…"],
        ["<leader>", "Touche leader (\\ par défaut) : pour vos raccourcis perso"],
        [["<S-Tab>", "<A-j>", "<CR>"], "Shift, Alt, Entrée"],
      ],
      legendNote: "Les majuscules (G, A, O…) se tapent avec Shift.",
      theme: "Changer de thème",
      lang: "Langue",
      footer: "Fait pour garder Vim sous la main.",
      source: "Code source",
      skip: "Aller au contenu",
      ph: {
        motion: "mouvement", keys: "touches", op: "opérateur", obj: "objet", char: "car", n: "n", pattern: "motif", old: "ancien", new: "nouveau",
        file: "fichier", reg: "reg", mark: "marque", text: "texte", cmd: "cmd", topic: "sujet",
        dir: "dossier", type: "type", name: "nom", time: "durée", range: "plage",
      },
    },
    en: {
      title: "Vim cheat sheet",
      h1: "Vim cheat sheet: all the essential commands",
      docTitle: "vimcheat — Vim cheat sheet (EN/FR)",
      metaDesc: "A clear, bilingual (EN/FR) Vim cheat sheet: modes, motions, editing, text objects, visual mode, search and replace, buffers and windows, files, registers and macros. Instant search and printable.",
      search: "Search a command…",
      searchHint: "Press / to search",
      or: "or",
      eq: "Equivalent",
      info: "Details",
      close: "Close",
      examples: "Examples",
      demo: "Starting text (█ = cursor)",
      demoResult: "Result",
      helpLabel: "Vim help",
      support: "Support vimcheat",
      supportTitle: "Buy a coffee to support the project",
      since: (v) => "Requires Vim " + v + " or later",
      results: (n) => (n === 0 ? "No results" : n === 1 ? "1 result" : n + " results"),
      noResults: "No command matches. Try “ctrl”, “window” or “:s”.",
      legend: "Legend",
      legendItems: [
        ["<Esc>", "Escape: back to normal mode"],
        ["<C-w>", "Chord: hold Ctrl and press w"],
        ["gg", "Green background: keys typed directly, one after another (no : or Enter)", true],
        ["<C-w>v", "Chord followed by a key"],
        ["<C-w>[hjkl]", "Pick one: any key of the group"],
        ["<C-x><C-n>", "Hold Ctrl: x then n (Ctrl+x Ctrl+n)"],
        [":w", "Blue background: Ex command, type : then the command, confirm with Enter", true],
        ["{motion}", "Replace with a motion, character, count…"],
        ["<leader>", "Leader key (\\ by default): for your own mappings"],
        [["<S-Tab>", "<A-j>", "<CR>"], "Shift, Alt, Enter"],
      ],
      legendNote: "Uppercase letters (G, A, O…) are typed with Shift.",
      theme: "Toggle theme",
      lang: "Language",
      footer: "Made to keep Vim at your fingertips.",
      source: "Source code",
      skip: "Skip to content",
      ph: {
        motion: "motion", keys: "keys", op: "operator", obj: "object", char: "char", n: "n", pattern: "pattern", old: "old", new: "new",
        file: "file", reg: "reg", mark: "mark", text: "text", cmd: "cmd", topic: "topic",
        dir: "dir", type: "type", name: "name", time: "time", range: "range",
      },
    },
  },

  tabs: [
    /* ───────────────────────────── Essentials ───────────────────────────── */
    {
      id: "essentials", icon: "star", color: "accent",
      label: { fr: "Essentiels", en: "Essentials" },
      groups: [
        {
          title: { fr: "Modes", en: "Modes" },
          items: [
            ["i", "Passer en mode insertion", "Enter insert mode"],
            ["<Esc>", "Revenir au mode normal", "Back to normal mode"],
            ["v", "Mode visuel (sélection)", "Visual mode (selection)"],
            [":", "Ligne de commande", "Command-line mode"],
            ["R", "Mode remplacement", "Replace mode"],
          ],
        },
        {
          title: { fr: "Enregistrer & quitter", en: "Save & quit" },
          items: [
            [":w", "Enregistrer", "Save"],
            [":q", "Quitter", "Quit"],
            [[":wq", ":x", "ZZ"], "Enregistrer et quitter", "Save and quit"],
            [[":q!", "ZQ"], "Quitter sans enregistrer", "Quit without saving"],
            [":qa!", "Tout quitter sans enregistrer", "Quit everything without saving"],
          ],
        },
        {
          title: { fr: "Annuler & répéter", en: "Undo & repeat" },
          items: [
            ["u", "Annuler", "Undo"],
            ["<C-r>", "Rétablir", "Redo", { eq: ":redo" }],
            [".", "Répéter la dernière modification", "Repeat last change"],
          ],
        },
        {
          title: { fr: "Copier, couper, coller", en: "Copy, cut, paste" },
          items: [
            ["yy", "Copier la ligne", "Yank (copy) line"],
            ["dd", "Couper la ligne", "Cut line"],
            ["x", "Supprimer le caractère", "Delete character"],
            ["p", "Coller après le curseur", "Paste after cursor"],
            ["P", "Coller avant le curseur", "Paste before cursor"],
          ],
        },
        {
          title: { fr: "Se déplacer", en: "Move around" },
          items: [
            [["h", "j", "k", "l"], "Gauche, bas, haut, droite", "Left, down, up, right", { list: true }],
            [["w", "b"], "Mot suivant / précédent", "Next / previous word", { list: true }],
            [["0", "$"], "Début / fin de ligne", "Start / end of line", { list: true }],
            ["gg", "Début du fichier", "Top of file"],
            ["G", "Fin du fichier", "End of file"],
          ],
        },
        {
          title: { fr: "Rechercher & aide", en: "Search & help" },
          items: [
            ["/{pattern}<CR>", "Rechercher vers le bas", "Search forward"],
            [["n", "N"], "Occurrence suivante / précédente", "Next / previous match", { list: true }],
            [":%s/{old}/{new}/g", "Remplacer dans tout le fichier", "Replace in whole file"],
            [":help {topic}", "Ouvrir l'aide (`:h` en abrégé)", "Open help (`:h` for short)"],
          ],
        },
      ],
    },

    /* ───────────────────────────── Motions ───────────────────────────── */
    {
      id: "motion", icon: "move", color: "ctrl",
      label: { fr: "Déplacements", en: "Motions" },
      groups: [
        {
          title: { fr: "Caractères & lignes", en: "Characters & lines" },
          items: [
            [["h", "l"], "Caractère à gauche / à droite", "Character left / right", { list: true }],
            [["j", "k"], "Ligne en dessous / au-dessus", "Line down / up", { list: true }],
            ["{n}j", "Descendre de n lignes (ex. `5j`)", "Move down n lines (e.g. `5j`)"],
            ["0", "Début de la ligne", "Start of line"],
            ["^", "Premier caractère non blanc", "First non-blank character"],
            ["$", "Fin de la ligne", "End of line"],
            ["g_", "Dernier caractère non blanc", "Last non-blank character"],
          ],
        },
        {
          title: { fr: "Mots", en: "Words" },
          items: [
            ["w", "Début du mot suivant", "Start of next word"],
            ["W", "Début du MOT suivant (séparé par des espaces)", "Start of next WORD (space-separated)"],
            [["b", "B"], "Début du mot / MOT précédent", "Start of previous word / WORD", { list: true }],
            [["e", "E"], "Fin du mot / MOT", "End of word / WORD", { list: true }],
            ["ge", "Fin du mot précédent", "End of previous word"],
          ],
        },
        {
          title: { fr: "Dans la ligne", en: "Within the line" },
          items: [
            ["f{char}", "Aller sur le prochain caractère", "Jump onto next character"],
            ["F{char}", "Aller sur le caractère précédent", "Jump onto previous character"],
            ["t{char}", "Aller juste avant le prochain caractère", "Jump just before next character"],
            ["T{char}", "Aller juste après le caractère précédent", "Jump just after previous character"],
            [";", "Répéter le dernier f / t", "Repeat last f / t"],
            [",", "Répéter f / t en sens inverse", "Repeat f / t backwards"],
          ],
        },
        {
          title: { fr: "Dans le fichier", en: "Within the file" },
          items: [
            ["gg", "Première ligne", "First line"],
            ["G", "Dernière ligne", "Last line"],
            [["{n}G", ":{n}"], "Aller à la ligne n", "Go to line n"],
            ["%", "Parenthèse / accolade correspondante", "Matching bracket"],
            [["}", "{"], "Paragraphe suivant / précédent", "Next / previous paragraph", { list: true }],
            [[")", "("], "Phrase suivante / précédente", "Next / previous sentence", { list: true }],
            ["gd", "Aller à la définition locale", "Go to local definition"],
          ],
        },
        {
          title: { fr: "Écran & défilement", en: "Screen & scrolling" },
          items: [
            [["H", "M", "L"], "Haut, milieu, bas de l'écran", "Top, middle, bottom of screen", { list: true }],
            ["<C-[du]>", "Demi-page vers le bas / haut", "Half page down / up"],
            ["<C-[fb]>", "Page suivante / précédente", "Page down / up", { eq: ["<PageDown>", "<PageUp>"] }],
            ["<C-[ey]>", "Défiler d'une ligne", "Scroll one line"],
            ["zz", "Centrer l'écran sur le curseur", "Center screen on cursor"],
            [["zt", "zb"], "Ligne du curseur en haut / en bas", "Cursor line to top / bottom", { list: true }],
          ],
        },
        {
          title: { fr: "Sauts", en: "Jumps" },
          items: [
            ["<C-o>", "Revenir à la position précédente", "Jump back to previous position"],
            [["<C-i>", "<Tab>"], "Position suivante", "Jump forward"],
            ["''", "Retour à la ligne avant le dernier saut", "Back to line before last jump"],
            [["g;", "g,"], "Modification précédente / suivante", "Previous / next change", { list: true }],
          ],
        },
      ],
    },

    /* ───────────────────────────── Editing ───────────────────────────── */
    {
      id: "edit", icon: "pencil", color: "alt",
      label: { fr: "Édition", en: "Editing" },
      groups: [
        {
          title: { fr: "Entrer en insertion", en: "Enter insert mode" },
          items: [
            [["i", "a"], "Insérer avant / après le curseur", "Insert before / after cursor", { list: true }],
            [["I", "A"], "Insérer en début / fin de ligne", "Insert at start / end of line", { list: true }],
            [["o", "O"], "Nouvelle ligne en dessous / au-dessus", "New line below / above", { list: true }],
            ["gi", "Reprendre l'insertion au dernier endroit", "Resume insert where you left off"],
            ["s", "Remplacer le caractère et insérer", "Substitute character and insert"],
            [["S", "cc"], "Remplacer toute la ligne", "Substitute whole line"],
          ],
        },
        {
          title: { fr: "En mode insertion", en: "While in insert mode" },
          items: [
            ["<C-w>", "Effacer le mot précédent", "Delete previous word"],
            ["<C-u>", "Effacer jusqu'au début de la ligne", "Delete to start of line"],
            [["<C-h>", "<BS>"], "Effacer le caractère précédent", "Delete previous character"],
            ["<C-[np]>", "Complétion : suivant / précédent", "Completion: next / previous"],
            ["<C-r>{reg}", "Insérer le contenu d'un registre", "Insert register contents"],
            ["<C-o>{cmd}", "Exécuter une commande normale", "Run one normal-mode command"],
            ["<C-[td]>", "Indenter / désindenter la ligne", "Indent / unindent line"],
          ],
        },
        {
          title: { fr: "Supprimer & changer", en: "Delete & change" },
          items: [
            [["x", "X"], "Supprimer sous / avant le curseur", "Delete under / before cursor", { list: true }],
            ["dw", "Supprimer jusqu'au mot suivant", "Delete to next word"],
            [["D", "d$"], "Supprimer jusqu'à la fin de la ligne", "Delete to end of line"],
            ["dd", "Supprimer la ligne", "Delete line"],
            ["cw", "Changer jusqu'à la fin du mot", "Change to end of word"],
            [["C", "c$"], "Changer jusqu'à la fin de la ligne", "Change to end of line"],
            ["r{char}", "Remplacer un caractère", "Replace one character"],
            ["J", "Joindre la ligne suivante", "Join next line"],
            ["~", "Inverser la casse", "Toggle case"],
            [["gu{motion}", "gU{motion}"], "Mettre en minuscules / majuscules", "Lowercase / uppercase", { list: true }],
          ],
        },
        {
          title: { fr: "Copier & coller", en: "Yank & paste" },
          items: [
            [["yy", "Y"], "Copier la ligne", "Yank line"],
            ["yw", "Copier jusqu'au mot suivant", "Yank to next word"],
            [["p", "P"], "Coller après / avant", "Paste after / before", { list: true }],
            [["gp", "gP"], "Coller et placer le curseur après", "Paste and move cursor after", { list: true }],
            ["]p", "Coller en ajustant l'indentation", "Paste with adjusted indent"],
          ],
        },
      ],
    },

    /* ───────────────────────────── Advanced editing ───────────────────────────── */
    {
      id: "advanced", icon: "wand", color: "alt",
      label: { fr: "Édition avancée", en: "Advanced editing" },
      groups: [
        {
          title: { fr: "Opérateurs + mouvements", en: "Operators + motions" },
          items: [
            ["d{motion}", "Supprimer (ex. `d3w`, `dG`)", "Delete (e.g. `d3w`, `dG`)"],
            ["c{motion}", "Changer (ex. `ct)`)", "Change (e.g. `ct)`)"],
            ["y{motion}", "Copier (ex. `y$`)", "Yank (e.g. `y$`)"],
            [[">{motion}", "<{motion}"], "Indenter / désindenter", "Indent / unindent", { list: true }],
            ["={motion}", "Réindenter automatiquement", "Auto-indent"],
            [[">>", "<<"], "Indenter / désindenter la ligne", "Indent / unindent line", { list: true }],
            ["==", "Réindenter la ligne", "Re-indent line"],
          ],
        },
        {
          title: { fr: "Objets texte", en: "Text objects" },
          items: [
            ["{op}{obj}", "Toujours après un opérateur (`d` `c` `y` `v`…) : `ciw` = changer le mot", "Always after an operator (`d` `c` `y` `v`…): `ciw` = change word"],
            [["iw", "aw"], "Mot (`i` = intérieur, `a` = avec l'espace)", "Word (`i` = inner, `a` = with the space)"],
            [["i\"", "a\""], "Entre guillemets", "Inside quotes"],
            [["i(", "a("], "Entre parenthèses (aussi `ib`)", "Inside parentheses (also `ib`)"],
            [["i{", "a{"], "Entre accolades (aussi `iB`)", "Inside braces (also `iB`)"],
            [["it", "at"], "Entre balises HTML/XML", "Inside HTML/XML tags"],
            [["ip", "ap"], "Paragraphe", "Paragraph"],
          ],
        },
        {
          title: { fr: "Complétion (Ctrl+x)", en: "Completion (Ctrl+x)" },
          items: [
            ["<C-x><C-n>", "Mots du fichier courant", "Words from the current file"],
            ["<C-x><C-l>", "Ligne entière", "Whole line"],
            ["<C-x><C-f>", "Nom de fichier", "File name"],
            ["<C-x><C-o>", "Omni-complétion (selon le langage)", "Omni completion (language-aware)"],
            ["<C-x><C-k>", "Dictionnaire (option `dictionary`)", "Dictionary (`dictionary` option)"],
            ["<C-x><C-]>", "Tags (fichier `tags`)", "Tags (`tags` file)"],
            ["<C-x>s", "Suggestions d'orthographe (`:set spell`)", "Spelling suggestions (`:set spell`)"],
            ["<C-x><C-r>", "Mots contenus dans les registres", "Words from registers", { since: "9.2" }],
            ["<C-[ye]>", "Valider / annuler la complétion", "Accept / cancel completion"],
          ],
        },
        {
          title: { fr: "Nombres & casse (mode normal)", en: "Numbers & case (normal mode)" },
          items: [
            ["<C-[ax]>", "Incrémenter / décrémenter le nombre sous le curseur", "Increment / decrement number under cursor"],
            ["{n}<C-a>", "Ajouter n au nombre (ex. `10<C-a>`)", "Add n to the number (e.g. `10<C-a>`)"],
            ["g<C-a>", "En visuel : numéroter une suite (1, 2, 3…)", "In visual: make a sequence (1, 2, 3…)"],
            ["g~{motion}", "Inverser la casse (ex. `g~iw`)", "Toggle case (e.g. `g~iw`)"],
            [["gUU", "guu"], "Ligne en majuscules / minuscules", "Line to upper / lower case", { list: true }],
            ["g?{motion}", "Chiffrer en ROT13", "ROT13 encode"],
          ],
        },
        {
          title: { fr: "Formatage", en: "Formatting" },
          items: [
            ["gq{motion}", "Reformater selon `textwidth` (ex. `gqip`)", "Reflow to `textwidth` (e.g. `gqip`)"],
            ["gJ", "Joindre les lignes sans ajouter d'espace", "Join lines without adding a space"],
            [":sort", "Trier les lignes (`u` sans doublons, `n` numérique)", "Sort lines (`u` unique, `n` numeric)"],
            [":retab", "Convertir tabulations / espaces selon `expandtab`", "Convert tabs / spaces per `expandtab`"],
            ["gg=G", "Réindenter tout le fichier", "Re-indent the whole file"],
            [":%norm A;", "Exécuter une commande normale sur chaque ligne", "Run a normal command on every line"],
          ],
        },
        {
          title: { fr: "Historique", en: "History" },
          items: [
            ["u", "Annuler", "Undo"],
            ["<C-r>", "Rétablir", "Redo", { eq: ":redo" }],
            ["U", "Annuler tous les changements de la ligne", "Undo all changes on line"],
            [":earlier {time}", "Revenir dans le temps (ex. `:earlier 10m`)", "Go back in time (e.g. `:earlier 10m`)"],
            [":later {time}", "Avancer dans le temps", "Go forward in time"],
          ],
        },
        {
          title: { fr: "Raccourcis perso", en: "Custom mappings" },
          items: [
            [":let mapleader = \" \"", "Utiliser Espace comme touche leader (à définir avant les raccourcis)", "Use Space as the leader key (set it before the mappings)"],
            [":nnoremap {keys} {cmd}", "Créer un raccourci en mode normal (`inoremap` insertion, `vnoremap` visuel)", "Map keys in normal mode (`inoremap` insert, `vnoremap` visual)"],
            ["<leader>w", "Exemple de raccourci perso : leader puis w pour enregistrer (voir ⓘ ci-dessus)", "Custom mapping example: leader then w to save (see ⓘ above)"],
            [[":map", ":nmap"], "Lister les raccourcis (tous / mode normal)", "List mappings (all / normal mode)", { list: true }],
            [":verbose map {keys}", "Voir un raccourci et le fichier qui le définit", "Show a mapping and the file that defines it"],
            [":nunmap {keys}", "Supprimer un raccourci du mode normal", "Remove a normal-mode mapping"],
          ],
        },
      ],
    },

    /* ───────────────────────────── Visual ───────────────────────────── */
    {
      id: "visual", icon: "select", color: "shift",
      label: { fr: "Mode visuel", en: "Visual mode" },
      groups: [
        {
          title: { fr: "Entrer & ajuster", en: "Enter & adjust" },
          items: [
            ["v", "Sélection par caractères", "Character-wise selection"],
            ["V", "Sélection par lignes", "Line-wise selection"],
            ["<C-v>", "Sélection en bloc (colonnes)", "Block (column) selection", { eq: "<C-q>" }],
            ["gv", "Resélectionner la dernière sélection", "Reselect last selection"],
            ["o", "Aller à l'autre extrémité", "Go to other end"],
            ["O", "Coin opposé du bloc", "Other corner of block"],
            ["<Esc>", "Quitter le mode visuel", "Exit visual mode"],
          ],
        },
        {
          title: { fr: "Sélections rapides", en: "Quick selections" },
          items: [
            ["viw", "Sélectionner le mot", "Select word"],
            ["vip", "Sélectionner le paragraphe", "Select paragraph"],
            ["vi\"", "Sélectionner entre guillemets", "Select inside quotes"],
            ["vat", "Sélectionner la balise entière", "Select whole tag"],
            ["ggVG", "Tout sélectionner", "Select all"],
          ],
        },
        {
          title: { fr: "Agir sur la sélection", en: "Act on selection" },
          items: [
            [["d", "x"], "Supprimer", "Delete"],
            ["y", "Copier", "Yank"],
            ["c", "Changer", "Change"],
            ["p", "Remplacer par le registre", "Replace with register"],
            [[">", "<"], "Indenter / désindenter", "Indent / unindent", { list: true }],
            ["=", "Réindenter", "Re-indent"],
            [["u", "U", "~"], "Minuscules, majuscules, inverser", "Lower, upper, toggle case", { list: true }],
            ["J", "Joindre les lignes", "Join lines"],
            [":", "Commande sur la sélection (`:'<,'>`)", "Command on selection (`:'<,'>`)"],
          ],
        },
        {
          title: { fr: "Mode bloc", en: "Block mode" },
          items: [
            ["<C-v>I{text}<Esc>", "Insérer au début de chaque ligne", "Insert at start of each line"],
            ["<C-v>A{text}<Esc>", "Ajouter après le bloc", "Append after block"],
            ["<C-v>$A{text}<Esc>", "Ajouter en fin de chaque ligne", "Append at end of each line"],
            ["c", "Remplacer le bloc", "Change block"],
            ["r{char}", "Remplir le bloc avec un caractère", "Fill block with a character"],
          ],
        },
      ],
    },

    /* ───────────────────────────── Search & replace ───────────────────────────── */
    {
      id: "search", icon: "search", color: "white",
      label: { fr: "Recherche & remplacement", en: "Search & replace" },
      groups: [
        {
          title: { fr: "Rechercher", en: "Search" },
          items: [
            ["/{pattern}<CR>", "Rechercher vers le bas", "Search forward"],
            ["?{pattern}<CR>", "Rechercher vers le haut", "Search backward"],
            [["n", "N"], "Occurrence suivante / précédente", "Next / previous match", { list: true }],
            [["*", "#"], "Mot sous le curseur, suivant / précédent", "Word under cursor, next / previous", { list: true }],
            [":noh", "Effacer la surbrillance", "Clear highlighting"],
          ],
        },
        {
          title: { fr: "Remplacer", en: "Substitute" },
          items: [
            [":s/{old}/{new}/", "Première occurrence de la ligne", "First match on line"],
            [":s/{old}/{new}/g", "Toute la ligne", "Whole line"],
            [":%s/{old}/{new}/g", "Tout le fichier", "Whole file"],
            [":%s/{old}/{new}/gc", "Tout le fichier, avec confirmation", "Whole file, with confirmation"],
            [":'<,'>s/{old}/{new}/g", "Dans la sélection visuelle", "Within visual selection"],
            [":5,12s/{old}/{new}/g", "Des lignes 5 à 12", "Lines 5 to 12"],
            [":%s//{new}/g", "Réutiliser le dernier motif recherché", "Reuse last search pattern"],
            ["&", "Répéter le dernier `:s`", "Repeat last `:s`"],
          ],
        },
        {
          title: { fr: "Commandes globales", en: "Global commands" },
          items: [
            [":g/{pattern}/d", "Supprimer les lignes qui contiennent le motif", "Delete lines matching pattern"],
            [":v/{pattern}/d", "Supprimer les lignes qui ne le contiennent pas", "Delete lines not matching"],
            [":g/{pattern}/normal {cmd}", "Exécuter une commande normale sur chaque ligne", "Run normal command on each line"],
          ],
        },
        {
          title: { fr: "Motifs utiles", en: "Useful patterns" },
          items: [
            ["\\<mot\\>", "Mot entier uniquement", "Whole word only", { code: true }],
            ["\\c", "Ignorer la casse (n'importe où dans le motif)", "Ignore case (anywhere in pattern)", { code: true }],
            ["\\v", "« Very magic » : regex sans échappements", "“Very magic”: regex without escaping", { code: true }],
            [".*", "N'importe quelle suite de caractères", "Any run of characters", { code: true }],
            ["\\(…\\)  \\1", "Groupe capturant et référence", "Capture group and back-reference", { code: true }],
            ["\\n  \\r", "Saut de ligne (recherche / remplacement)", "Newline (search / replace)", { code: true }],
          ],
        },
        {
          title: { fr: "Plusieurs fichiers", en: "Across files" },
          items: [
            [":vimgrep /{pattern}/ **/*", "Rechercher dans le projet", "Search the project"],
            [":copen", "Ouvrir la liste des résultats", "Open results list"],
            [[":cn", ":cp"], "Résultat suivant / précédent", "Next / previous result", { list: true }],
            [":cdo s/{old}/{new}/g | update", "Remplacer dans tous les résultats", "Replace in all results"],
          ],
        },
      ],
    },

    /* ───────────────────────────── Buffers, windows, tabs ───────────────────────────── */
    {
      id: "windows", icon: "windows", color: "leader",
      label: { fr: "Buffers & fenêtres", en: "Buffers & windows" },
      groups: [
        {
          title: { fr: "Buffers", en: "Buffers" },
          items: [
            [":ls", "Lister les buffers", "List buffers"],
            [[":bn", ":bp"], "Buffer suivant / précédent", "Next / previous buffer", { list: true }],
            [":b {n}", "Aller au buffer n", "Go to buffer n"],
            [":b {name}", "Aller au buffer par nom (Tab complète)", "Go to buffer by name (Tab completes)"],
            ["<C-^>", "Basculer vers le buffer alterné", "Switch to alternate buffer", { eq: ":b#" }],
            [":bd", "Fermer le buffer", "Delete (close) buffer"],
            [":bufdo {cmd}", "Exécuter sur tous les buffers", "Run on all buffers"],
          ],
        },
        {
          title: { fr: "Fenêtres : ouvrir & naviguer", en: "Windows: open & navigate" },
          items: [
            ["<C-w>s", "Découper horizontalement", "Split horizontally", { eq: ":sp" }],
            ["<C-w>v", "Découper verticalement", "Split vertically", { eq: ":vs" }],
            ["<C-w>w", "Fenêtre suivante", "Next window", { eq: ":wincmd w" }],
            ["<C-w>[hjkl]", "Aller à gauche, bas, haut, droite", "Go left, down, up, right", { eq: ":wincmd [hjkl]" }],
            ["<C-w>q", "Fermer la fenêtre", "Close window", { eq: ":q" }],
            ["<C-w>o", "Garder seulement celle-ci", "Keep only this one", { eq: ":only" }],
          ],
        },
        {
          title: { fr: "Fenêtres : taille & position", en: "Windows: size & layout" },
          items: [
            ["<C-w>=", "Égaliser les tailles", "Equalize sizes", { eq: ":wincmd =" }],
            ["<C-w>[_|]", "Maximiser en hauteur / largeur", "Maximize height / width", { eq: [":resize", ":vertical resize"] }],
            ["<C-w>[+-]", "Plus haute / moins haute", "Taller / shorter", { eq: [":resize +1", ":resize -1"] }],
            ["<C-w>[><]", "Plus large / moins large", "Wider / narrower", { eq: [":vertical resize +1", ":vertical resize -1"] }],
            ["<C-w>[HJKL]", "Déplacer la fenêtre à gauche, en bas…", "Move window left, down…", { eq: ":wincmd [HJKL]" }],
            ["<C-w>T", "Déplacer dans un nouvel onglet", "Move to a new tab", { eq: ":wincmd T" }],
          ],
        },
        {
          title: { fr: "Onglets", en: "Tabs" },
          items: [
            [":tabnew", "Nouvel onglet", "New tab"],
            [":tabe {file}", "Ouvrir un fichier dans un onglet", "Open file in tab"],
            ["g[tT]", "Onglet suivant / précédent", "Next / previous tab"],
            ["{n}gt", "Aller à l'onglet n", "Go to tab n"],
            [":tabc", "Fermer l'onglet", "Close tab"],
            [":tabo", "Fermer les autres onglets", "Close other tabs"],
            [":tabm {n}", "Déplacer l'onglet en position n", "Move tab to position n"],
          ],
        },
      ],
    },

    /* ───────────────────────────── Files ───────────────────────────── */
    {
      id: "files", icon: "folder", color: "ex",
      label: { fr: "Fichiers", en: "Files" },
      groups: [
        {
          title: { fr: "Ouvrir", en: "Open" },
          items: [
            [":e {file}", "Ouvrir un fichier", "Edit a file"],
            [":e!", "Recharger en abandonnant les changements", "Reload, discarding changes"],
            [":enew", "Nouveau fichier vide", "New empty buffer"],
            [":find {file}", "Chercher et ouvrir (selon `path`)", "Find and open (uses `path`)"],
            ["gf", "Ouvrir le fichier sous le curseur", "Open file under cursor"],
            [[":Ex", ":Vex"], "Explorateur de fichiers (netrw)", "File explorer (netrw)"],
          ],
        },
        {
          title: { fr: "Enregistrer", en: "Save" },
          items: [
            [":w", "Enregistrer", "Write"],
            [":w {file}", "Enregistrer une copie sous…", "Write a copy to…"],
            [":sav {file}", "Enregistrer sous et continuer dessus", "Save as and switch to it"],
            [":up", "Enregistrer seulement si modifié", "Write only if modified"],
            [":wa", "Enregistrer tous les buffers", "Write all buffers"],
            [":w !sudo tee %", "Enregistrer avec sudo", "Write with sudo"],
          ],
        },
        {
          title: { fr: "Lire & shell", en: "Read & shell" },
          items: [
            [":r {file}", "Insérer le contenu d'un fichier", "Insert file contents"],
            [":r !{cmd}", "Insérer la sortie d'une commande", "Insert command output"],
            [":5,10w {file}", "Écrire les lignes 5 à 10 dans un fichier", "Write lines 5 to 10 to a file"],
            [":!{cmd}", "Lancer une commande shell", "Run a shell command"],
            [":%!{cmd}", "Filtrer le fichier par une commande (ex. `:%!sort`)", "Filter file through command (e.g. `:%!sort`)"],
          ],
        },
        {
          title: { fr: "Infos & format", en: "Info & format" },
          items: [
            ["<C-g>", "Nom du fichier et position", "File name and position", { eq: ":file" }],
            [[":pwd", ":cd {dir}"], "Dossier courant / changer de dossier", "Current dir / change dir", { list: true }],
            [":set ff=unix", "Fins de ligne Unix (LF)", "Unix line endings (LF)"],
            [":set fenc=utf-8", "Encodage du fichier", "File encoding"],
            [":set ft={type}", "Type de fichier (coloration)", "File type (syntax)"],
          ],
        },
        {
          title: { fr: "Quitter", en: "Quit" },
          items: [
            [":q", "Quitter", "Quit"],
            [[":q!", "ZQ"], "Quitter sans enregistrer", "Quit without saving"],
            [[":wq", ":x", "ZZ"], "Enregistrer et quitter", "Save and quit"],
            [":qa", "Quitter toutes les fenêtres", "Quit all windows"],
            [[":wqa", ":xa"], "Tout enregistrer et quitter", "Save all and quit"],
          ],
        },
      ],
    },

    /* ───────────────────────────── Registers, macros, marks ───────────────────────────── */
    {
      id: "registers", icon: "clipboard", color: "esc",
      label: { fr: "Registres & macros", en: "Registers & macros" },
      groups: [
        {
          title: { fr: "Registres", en: "Registers" },
          items: [
            ["\"{reg}", "Utiliser un registre pour la commande suivante", "Use a register for next command"],
            ["\"ayy", "Copier la ligne dans le registre a", "Yank line into register a"],
            ["\"Ayy", "Ajouter au registre a", "Append to register a"],
            ["\"ap", "Coller le registre a", "Paste register a"],
            [["\"+y", "\"+p"], "Presse-papiers système : copier / coller", "System clipboard: yank / paste", { list: true }],
            ["\"_d", "Supprimer sans toucher aux registres", "Delete without touching registers"],
            ["\"0p", "Coller la dernière copie (pas la suppression)", "Paste last yank (not delete)"],
            [":reg", "Afficher les registres", "Show registers"],
          ],
        },
        {
          title: { fr: "Macros", en: "Macros" },
          items: [
            ["q{reg}", "Commencer l'enregistrement", "Start recording"],
            ["q", "Arrêter l'enregistrement", "Stop recording"],
            ["@{reg}", "Exécuter la macro", "Run macro"],
            ["@@", "Rejouer la dernière macro", "Replay last macro"],
            ["{n}@{reg}", "Exécuter n fois", "Run n times"],
            [":'<,'>normal @{reg}", "Exécuter sur chaque ligne sélectionnée", "Run on each selected line"],
          ],
        },
        {
          title: { fr: "Marques", en: "Marks" },
          items: [
            ["m{mark}", "Poser une marque (a–z locale, A–Z globale)", "Set a mark (a–z local, A–Z global)"],
            ["'{mark}", "Aller à la ligne de la marque", "Jump to mark's line"],
            ["`{mark}", "Aller à la position exacte", "Jump to exact position"],
            ["`.", "Dernière modification", "Last change"],
            ["`\"", "Position à la dernière fermeture", "Position when last exited"],
            [":marks", "Lister les marques", "List marks"],
          ],
        },
        {
          title: { fr: "Listes de sauts", en: "Jump lists" },
          items: [
            ["<C-[oi]>", "Saut précédent / suivant", "Previous / next jump"],
            [["g;", "g,"], "Modification précédente / suivante", "Previous / next change", { list: true }],
            [":jumps", "Afficher la liste des sauts", "Show jump list"],
            [":changes", "Afficher la liste des modifications", "Show change list"],
          ],
        },
      ],
    },
  ],
};
