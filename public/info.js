/*
 * vimcheat — detailed explanations for the more complex commands.
 *
 * Keyed by the item's first key string in data.js (exact match). Every item
 * whose first key matches gets an (i) button that opens these details.
 *
 *   title  { fr, en }
 *   fr/en  paragraphs (`backticks` = inline code)
 *   ex     examples: [keys, descFR, descEN]  (keys use the data.js notation)
 *   help   topic for :help
 */
window.VIM_INFO = {
  "d{motion}": {
    title: { fr: "La grammaire de Vim : opérateur + mouvement", en: "Vim grammar: operator + motion" },
    fr: [
      "La plupart des modifications suivent la forme `[compte] opérateur [compte] mouvement`. L'opérateur dit quoi faire, le mouvement (ou l'objet texte) dit sur quoi.",
      "Opérateurs principaux : `d` supprimer, `c` changer (supprime puis passe en insertion), `y` copier, `>` / `<` indenter, `=` réindenter, `gu` / `gU` / `g~` casse, `gq` reformater, `!` filtrer par une commande.",
      "Doubler l'opérateur agit sur la ligne entière : `dd`, `cc`, `yy`, `>>`, `gUU`. Une fois la grammaire acquise, chaque nouveau mouvement appris fonctionne avec tous les opérateurs.",
    ],
    en: [
      "Most edits follow the shape `[count] operator [count] motion`. The operator says what to do, the motion (or text object) says what to act on.",
      "Main operators: `d` delete, `c` change (delete then enter insert mode), `y` yank, `>` / `<` indent, `=` re-indent, `gu` / `gU` / `g~` case, `gq` reformat, `!` filter through a command.",
      "Doubling the operator acts on the whole line: `dd`, `cc`, `yy`, `>>`, `gUU`. Once the grammar clicks, every new motion you learn works with every operator.",
    ],
    ex: [
      ["d3w", "Supprimer 3 mots", "Delete 3 words"],
      ["2dd", "Supprimer 2 lignes", "Delete 2 lines"],
      ["dG", "Supprimer jusqu'à la fin du fichier", "Delete to end of file"],
      ["dt,", "Supprimer jusqu'à la virgule (exclue)", "Delete up to the comma (excluded)"],
      ["ci\"", "Changer le texte entre guillemets", "Change text inside quotes"],
      ["gUiw", "Mettre le mot en majuscules", "Uppercase the word"],
      [">ap", "Indenter le paragraphe", "Indent the paragraph"],
      ["y$", "Copier jusqu'à la fin de la ligne", "Yank to end of line"],
    ],
    help: "operator",
  },

  ".": {
    title: { fr: "Répéter avec le point", en: "Repeat with dot" },
    fr: [
      "`.` rejoue la dernière modification. Tout ce qui est tapé entre l'entrée en insertion et `Esc` compte comme une seule modification : `ciwbonjour<Esc>` est rejoué d'un coup.",
      "Les déplacements ne sont pas répétés, seulement les changements. L'idée : faire une modification répétable, puis enchaîner « se déplacer, `.` ».",
      "Associé à la recherche, `cgn` remplace la prochaine occurrence du motif ; chaque `.` passe à la suivante et la remplace. Un compte devant le point le répète : `3.`.",
    ],
    en: [
      "`.` replays the last change. Everything typed between entering insert mode and `Esc` counts as one change: `ciwhello<Esc>` is replayed in one go.",
      "Motions are not repeated, only changes. The idea: make one repeatable edit, then chain “move, `.`”.",
      "Combined with search, `cgn` changes the next match of the pattern; each `.` jumps to the next one and changes it too. A count repeats it: `3.`.",
    ],
    ex: [
      ["A;<Esc>j.", "Ajouter « ; » en fin de ligne, puis sur la suivante", "Append “;” to this line, then to the next"],
      ["*cgn{text}<Esc>", "Remplacer le mot sous le curseur…", "Replace the word under the cursor…"],
      [".", "… puis l'occurrence suivante, et ainsi de suite", "… then the next match, and so on"],
      ["3.", "Répéter 3 fois", "Repeat 3 times"],
    ],
    help: "single-repeat",
  },

  iw: {
    title: { fr: "Objets texte", en: "Text objects" },
    fr: [
      "Un objet texte s'utilise après un opérateur (`d`, `c`, `y`…) ou en mode visuel. Le curseur peut être n'importe où dans l'objet : pas besoin d'aller au début du mot ou de la parenthèse.",
      "`i` = intérieur (inner) : seulement le contenu. `a` = autour (around) : inclut les délimiteurs ou l'espace qui suit.",
      "Objets disponibles : `w` mot, `W` MOT, `s` phrase, `p` paragraphe, `\"` `'` et l'accent grave : chaînes, `(` ou `b` parenthèses, `[` crochets, `{` ou `B` accolades, `<` chevrons, `t` balise XML/HTML. Pour les guillemets, Vim cherche aussi vers l'avant sur la ligne.",
    ],
    en: [
      "A text object is used after an operator (`d`, `c`, `y`…) or in visual mode. The cursor can be anywhere inside the object: no need to go to the start of the word or bracket.",
      "`i` = inner: only the contents. `a` = around: includes the delimiters or the trailing space.",
      "Available objects: `w` word, `W` WORD, `s` sentence, `p` paragraph, `\"` `'` and backtick: strings, `(` or `b` parentheses, `[` brackets, `{` or `B` braces, `<` angle brackets, `t` XML/HTML tag. For quotes, Vim also searches forward on the line.",
    ],
    ex: [
      ["ciw", "Remplacer le mot", "Change the word"],
      ["daw", "Supprimer le mot et l'espace", "Delete the word and its space"],
      ["ci\"", "Remplacer le contenu de la chaîne", "Change the string contents"],
      ["da(", "Supprimer les parenthèses et leur contenu", "Delete parentheses and contents"],
      ["yit", "Copier le contenu de la balise", "Yank tag contents"],
      ["vap", "Sélectionner le paragraphe", "Select the paragraph"],
      ["=i{", "Réindenter le bloc entre accolades", "Re-indent the brace block"],
    ],
    help: "text-objects",
  },

  ":%s/{old}/{new}/g": {
    title: { fr: "Rechercher et remplacer avec :s", en: "Search and replace with :s" },
    fr: [
      "Forme complète : `:[plage]s/motif/remplacement/[drapeaux]`. Plages : `%` tout le fichier, `.` ligne courante, `5,10` lignes 5 à 10, `.,$` jusqu'à la fin, `'<,'>` sélection visuelle.",
      "Drapeaux : `g` toutes les occurrences de chaque ligne, `c` confirmer chaque remplacement (y/n/a/q), `i` / `I` ignorer / respecter la casse, `n` compter sans remplacer, `e` pas d'erreur si rien n'est trouvé.",
      "Dans le remplacement : `&` le texte trouvé, `\\1`…`\\9` les groupes capturés, `\\r` un saut de ligne, `\\u` / `\\U` majuscule, `\\=` une expression. Le séparateur peut changer pour éviter d'échapper les `/` : `:s#/usr#/opt#g`.",
    ],
    en: [
      "Full form: `:[range]s/pattern/replacement/[flags]`. Ranges: `%` whole file, `.` current line, `5,10` lines 5 to 10, `.,$` to the end, `'<,'>` visual selection.",
      "Flags: `g` every match on each line, `c` confirm each one (y/n/a/q), `i` / `I` ignore / match case, `n` count without replacing, `e` no error when nothing matches.",
      "In the replacement: `&` the matched text, `\\1`…`\\9` captured groups, `\\r` a line break, `\\u` / `\\U` uppercase, `\\=` an expression. The delimiter can change to avoid escaping `/`: `:s#/usr#/opt#g`.",
    ],
    ex: [
      [":%s/\\s\\+$//e", "Supprimer les espaces en fin de ligne", "Strip trailing whitespace"],
      [":%s/\\v(\\w+) (\\w+)/\\2 \\1/", "Échanger deux mots", "Swap two words"],
      [":%s/todo/\\U&/g", "Mettre « todo » en majuscules", "Uppercase “todo”"],
      [":%s/, /\\r/g", "Une ligne par élément", "One item per line"],
      [":%s/foo//gn", "Compter les occurrences", "Count matches"],
    ],
    help: ":s",
  },

  ":g/{pattern}/d": {
    title: { fr: "La commande globale :g", en: "The :g global command" },
    fr: [
      "`:[plage]g/motif/commande` exécute une commande Ex sur chaque ligne qui contient le motif. `:v` (ou `:g!`) fait l'inverse : les lignes qui ne le contiennent pas.",
      "Vim marque d'abord toutes les lignes concernées, puis exécute la commande : on peut donc supprimer ou déplacer des lignes sans se perdre. Sans commande, `:g` affiche simplement les lignes trouvées.",
      "Avec `normal`, n'importe quelle séquence du mode normal peut être appliquée à chaque ligne.",
    ],
    en: [
      "`:[range]g/pattern/command` runs an Ex command on every line matching the pattern. `:v` (or `:g!`) does the opposite: lines that don't match.",
      "Vim first marks all matching lines, then runs the command, so deleting or moving lines is safe. Without a command, `:g` just prints the matching lines.",
      "With `normal`, any normal-mode sequence can be applied to every line.",
    ],
    ex: [
      [":g/TODO", "Lister les lignes contenant TODO", "List lines containing TODO"],
      [":g/^$/d", "Supprimer les lignes vides", "Delete empty lines"],
      [":v/\\S/d", "Supprimer les lignes vides ou blanches", "Delete empty or blank lines"],
      [":g/^/m0", "Inverser l'ordre des lignes", "Reverse line order"],
      [":g/error/t$", "Copier les lignes « error » à la fin", "Copy “error” lines to the end"],
      [":g/console.log/normal I// ", "Commenter chaque console.log", "Comment out every console.log"],
    ],
    help: ":g",
  },

  "q{reg}": {
    title: { fr: "Enregistrer et rejouer des macros", en: "Recording and replaying macros" },
    fr: [
      "`qa` enregistre tout ce qui est tapé dans le registre `a`, jusqu'au prochain `q`. `@a` rejoue la macro, `@@` rejoue la dernière.",
      "Pour une macro fiable : commencer par un positionnement reproductible (`0`, `^`, une recherche), et finir en se plaçant sur la ligne suivante (`j`) pour pouvoir enchaîner `20@a`. Une macro s'arrête dès qu'une commande échoue, ce qui évite de déborder.",
      "Une macro n'est que du texte dans un registre : `\"ap` la colle pour la corriger, puis `\"ay$` la remet en place. `qA` ajoute à la fin de la macro `a`.",
    ],
    en: [
      "`qa` records everything you type into register `a`, until the next `q`. `@a` replays it, `@@` replays the last one.",
      "For a reliable macro: start with a repeatable position (`0`, `^`, a search) and end by moving to the next line (`j`) so you can chain `20@a`. A macro stops as soon as a command fails, which keeps it from running wild.",
      "A macro is just text in a register: `\"ap` pastes it so you can fix it, then `\"ay$` stores it back. `qA` appends to macro `a`.",
    ],
    ex: [
      ["qa", "Commencer l'enregistrement dans a", "Start recording into a"],
      ["0f:r=j", "(exemple) remplacer le premier « : » puis descendre", "(example) replace the first “:” then go down"],
      ["q", "Arrêter l'enregistrement", "Stop recording"],
      ["20@a", "Rejouer 20 fois", "Replay 20 times"],
      [":%normal @a", "Rejouer sur chaque ligne du fichier", "Replay on every line of the file"],
    ],
    help: "recording",
  },

  "\"{reg}": {
    title: { fr: "Les registres", en: "Registers" },
    fr: [
      "Chaque copie, suppression ou changement passe par un registre. Préfixer une commande par `\"x` choisit le registre `x` ; `:reg` affiche leur contenu.",
      "`\"+` n'est disponible que si Vim est compilé avec le presse-papiers (`vim --version` doit indiquer `+clipboard`). Avec `:set clipboard=unnamedplus`, le presse-papiers système devient le registre par défaut.",
    ],
    en: [
      "Every yank, delete or change goes through a register. Prefixing a command with `\"x` picks register `x`; `:reg` shows their contents.",
      "`\"+` only works if Vim is built with clipboard support (`vim --version` must show `+clipboard`). With `:set clipboard=unnamedplus`, the system clipboard becomes the default register.",
    ],
    ex: [
      ["\"\"", "Registre sans nom : dernière copie ou suppression", "Unnamed: last yank or delete"],
      ["\"0", "Dernière copie (yank) uniquement", "Last yank only"],
      ["\"1", "Dernière suppression de ligne(s), décalée vers 2…9", "Last line delete, shifted into 2…9"],
      ["\"-", "Dernière petite suppression (dans une ligne)", "Last small (in-line) delete"],
      ["\"a", "Registres nommés a–z (A–Z ajoute)", "Named registers a–z (A–Z appends)"],
      ["\"+", "Presse-papiers système (\"* : sélection X11)", "System clipboard (\"*: X11 selection)"],
      ["\"_", "Trou noir : rien n'est conservé", "Black hole: nothing is kept"],
      ["\"/", "Dernier motif recherché", "Last search pattern"],
      ["\":", "Dernière ligne de commande", "Last command line"],
      ["\".", "Dernier texte inséré", "Last inserted text"],
      ["\"%", "Nom du fichier courant", "Current file name"],
    ],
    help: "registers",
  },

  "m{mark}": {
    title: { fr: "Les marques", en: "Marks" },
    fr: [
      "Une marque retient une position. Minuscules (a–z) : propres au fichier. Majuscules (A–Z) : globales, elles rouvrent le bon fichier.",
      "L'apostrophe saute au début de la ligne marquée, l'accent grave à la position exacte. Les marques sont aussi des mouvements : elles se combinent avec les opérateurs et servent de plages dans les commandes Ex.",
      "Vim pose aussi des marques automatiques (dernière modification, dernière insertion, sélection visuelle…), listées ci-dessous.",
    ],
    en: [
      "A mark remembers a position. Lowercase (a–z): local to the file. Uppercase (A–Z): global, they reopen the right file.",
      "The apostrophe jumps to the start of the marked line, the backtick to the exact position. Marks are motions too: they combine with operators and work as ranges in Ex commands.",
      "Vim also sets automatic marks (last change, last insert, visual selection…), listed below.",
    ],
    ex: [
      ["ma", "Poser la marque a", "Set mark a"],
      ["`a", "Revenir à la position exacte", "Jump to exact position"],
      ["d'a", "Supprimer jusqu'à la ligne de la marque a", "Delete up to mark a's line"],
      [":'a,'bd", "Supprimer les lignes entre les marques a et b", "Delete lines between marks a and b"],
      ["`.", "Dernière modification", "Last change"],
      ["`^", "Dernière sortie du mode insertion", "Where insert mode was last left"],
      ["`[", "Début du dernier texte copié ou modifié (`] la fin)", "Start of last yanked or changed text (`] the end)"],
      ["`<", "Début de la dernière sélection visuelle", "Start of last visual selection"],
      ["''", "Avant le dernier saut", "Before the latest jump"],
    ],
    help: "mark-motions",
  },

  "<C-v>I{text}<Esc>": {
    title: { fr: "Éditer plusieurs lignes en mode bloc", en: "Editing many lines in block mode" },
    fr: [
      "1. `Ctrl+v` puis `j` / `k` pour sélectionner une colonne sur plusieurs lignes.",
      "2. `I` insère avant le bloc, `A` après. Le texte tapé n'apparaît que sur la première ligne…",
      "3. … et il est recopié sur toutes les lignes au moment où l'on appuie sur `Esc`.",
      "Avec `$`, le bloc s'étend jusqu'à la fin de chaque ligne, même si elles n'ont pas la même longueur : `$A` ajoute donc du texte en fin de chaque ligne.",
    ],
    en: [
      "1. `Ctrl+v` then `j` / `k` to select a column across several lines.",
      "2. `I` inserts before the block, `A` after it. What you type only shows on the first line…",
      "3. … and is copied to every line when you press `Esc`.",
      "With `$`, the block extends to the end of each line even when lengths differ, so `$A` appends text at the end of every line.",
    ],
    ex: [
      ["<C-v>3jI// <Esc>", "Commenter 4 lignes", "Comment out 4 lines"],
      ["<C-v>3j$A;<Esc>", "Ajouter « ; » à la fin de 4 lignes", "Append “;” to 4 lines"],
      ["<C-v>3jx", "Supprimer une colonne", "Delete a column"],
      ["<C-v>3jr-", "Remplir le bloc de tirets", "Fill the block with dashes"],
      ["<C-v>3jc{text}<Esc>", "Remplacer le bloc sur chaque ligne", "Replace the block on each line"],
    ],
    help: "v_b_I",
  },

  ":vimgrep /{pattern}/ **/*": {
    title: { fr: "Rechercher dans un projet (quickfix)", en: "Project-wide search (quickfix)" },
    fr: [
      "`:vimgrep` cherche avec les expressions régulières de Vim dans les fichiers indiqués (`**` = récursif). `:grep` fait la même chose avec un outil externe, plus rapide sur un gros projet : `:set grepprg=rg\\ --vimgrep` pour utiliser ripgrep.",
      "Les résultats vont dans la liste quickfix : `:copen` l'ouvre, `Entrée` saute au résultat, `:cn` / `:cp` passent au suivant / précédent.",
      "`:cdo` exécute une commande sur chaque résultat, `:cfdo` sur chaque fichier. Ajouter `| update` pour enregistrer au passage. Le drapeau `j` (`/motif/j`) évite de sauter au premier résultat.",
    ],
    en: [
      "`:vimgrep` searches with Vim regexes in the given files (`**` = recursive). `:grep` does the same through an external tool, faster on big projects: `:set grepprg=rg\\ --vimgrep` to use ripgrep.",
      "Results go into the quickfix list: `:copen` opens it, `Enter` jumps to a result, `:cn` / `:cp` go to next / previous.",
      "`:cdo` runs a command on every result, `:cfdo` on every file. Add `| update` to save along the way. The `j` flag (`/pattern/j`) avoids jumping to the first match.",
    ],
    ex: [
      [":vimgrep /TODO/j **/*.js", "Chercher TODO dans les fichiers .js", "Find TODO in .js files"],
      [":copen", "Ouvrir la liste des résultats", "Open the results list"],
      [":cdo s/foo/bar/g | update", "Remplacer sur chaque ligne trouvée", "Replace on every matching line"],
      [":cfdo %s/foo/bar/g | update", "Remplacer dans chaque fichier trouvé", "Replace in every matching file"],
      [":colder", "Revenir à la liste de résultats précédente", "Go back to the previous results list"],
    ],
    help: "quickfix",
  },

  ":bufdo {cmd}": {
    title: { fr: "Appliquer une commande partout", en: "Running a command everywhere" },
    fr: [
      "`:bufdo` exécute une commande Ex dans chaque buffer ouvert. La même famille existe pour d'autres listes : `:windo` (fenêtres visibles), `:tabdo` (onglets), `:argdo` (liste d'arguments), `:cdo` / `:cfdo` (résultats quickfix).",
      "Vim refuse de quitter un buffer modifié non enregistré : ajouter `| update` à la commande, ou activer `:set hidden`.",
      "`:args` permet de choisir précisément les fichiers à traiter avant un `:argdo`.",
    ],
    en: [
      "`:bufdo` runs an Ex command in every open buffer. The same family exists for other lists: `:windo` (visible windows), `:tabdo` (tabs), `:argdo` (argument list), `:cdo` / `:cfdo` (quickfix results).",
      "Vim won't leave a modified, unsaved buffer: append `| update` to the command, or enable `:set hidden`.",
      "`:args` lets you pick exactly which files to process before an `:argdo`.",
    ],
    ex: [
      [":bufdo %s/foo/bar/ge | update", "Remplacer dans tous les buffers", "Replace in all buffers"],
      [":windo set wrap", "Activer le retour à la ligne dans chaque fenêtre", "Turn on wrapping in every window"],
      [":args **/*.md", "Charger tous les fichiers Markdown", "Load every Markdown file"],
      [":argdo normal @a | update", "Rejouer la macro a sur chacun", "Replay macro a on each of them"],
    ],
    help: ":bufdo",
  },

  "/{pattern}<CR>": {
    title: { fr: "Bien chercher", en: "Searching well" },
    fr: [
      "`n` / `N` passent à l'occurrence suivante / précédente dans le sens de la recherche. `*` et `#` cherchent directement le mot sous le curseur.",
      "Casse : `\\c` dans le motif ignore la casse, `\\C` la respecte. Le réglage `:set ignorecase smartcase` ignore la casse sauf si le motif contient une majuscule. `:set hlsearch incsearch` surligne les résultats pendant la frappe.",
      "Par défaut, `+ ? ( ) { } |` doivent être échappés. Avec `\\v` (very magic) au début du motif, ils fonctionnent comme dans les regex habituelles.",
      "Un décalage après le motif place le curseur : `/foo/e` à la fin du résultat, `/foo/+1` une ligne plus bas. `q/` ouvre l'historique des recherches.",
    ],
    en: [
      "`n` / `N` go to the next / previous match in the search direction. `*` and `#` search for the word under the cursor right away.",
      "Case: `\\c` in the pattern ignores case, `\\C` matches it. The `:set ignorecase smartcase` setting ignores case unless the pattern has an uppercase letter. `:set hlsearch incsearch` highlights matches as you type.",
      "By default `+ ? ( ) { } |` must be escaped. With `\\v` (very magic) at the start of the pattern they behave like in usual regexes.",
      "An offset after the pattern places the cursor: `/foo/e` at the end of the match, `/foo/+1` one line below. `q/` opens the search history.",
    ],
    ex: [
      ["/\\<word\\>", "Mot entier uniquement", "Whole word only", { code: true }],
      ["/error\\c", "Sans tenir compte de la casse", "Case-insensitive", { code: true }],
      ["/\\v(foo|bar)+", "Regex « very magic »", "“Very magic” regex", { code: true }],
      ["/foo/e", "Curseur à la fin du résultat", "Cursor at the end of the match", { code: true }],
      ["cgn", "Changer la prochaine occurrence (puis . pour la suivante)", "Change the next match (then . for the next one)"],
    ],
    help: "pattern",
  },

  "<C-r>{reg}": {
    title: { fr: "Coller un registre en tapant", en: "Pasting a register while typing" },
    fr: [
      "En mode insertion et sur la ligne de commande, `Ctrl+r` suivi d'un nom de registre insère son contenu sans quitter le mode en cours.",
      "Le registre `=` évalue une expression : pratique pour un calcul rapide. Sur la ligne de commande, `Ctrl+r Ctrl+w` insère le mot sous le curseur, idéal pour un `:s`.",
      "`Ctrl+r Ctrl+r` suivi d'un registre insère le texte littéralement, sans que l'indentation automatique ou les touches spéciales ne s'en mêlent.",
    ],
    en: [
      "In insert mode and on the command line, `Ctrl+r` followed by a register name inserts its contents without leaving the current mode.",
      "The `=` register evaluates an expression: handy for quick maths. On the command line, `Ctrl+r Ctrl+w` inserts the word under the cursor, perfect for a `:s`.",
      "`Ctrl+r Ctrl+r` followed by a register inserts the text literally, without auto-indent or special keys getting in the way.",
    ],
    ex: [
      ["<C-r>\"", "Coller la dernière copie ou suppression", "Paste the last yank or delete"],
      ["<C-r>0", "Coller la dernière copie", "Paste the last yank"],
      ["<C-r>+", "Coller le presse-papiers système", "Paste the system clipboard"],
      ["<C-r>=6*7<CR>", "Insérer le résultat : 42", "Insert the result: 42"],
      ["<C-r><C-w>", "Ligne de commande : insérer le mot sous le curseur", "Command line: insert the word under the cursor"],
    ],
    help: "i_CTRL-R",
  },

  ":%!{cmd}": {
    title: { fr: "Filtrer du texte par une commande shell", en: "Filtering text through a shell command" },
    fr: [
      "`:{plage}!commande` envoie les lignes à une commande shell et les remplace par sa sortie. Toute la puissance du shell (`sort`, `jq`, `column`…) devient un outil d'édition.",
      "En mode normal, `!` est un opérateur : `!ip` suivi de la commande filtre le paragraphe. En mode visuel, `!` filtre la sélection.",
      "Pour ne rien remplacer : `:r !commande` insère la sortie sous le curseur, `:w !commande` envoie le buffer à la commande sans le modifier.",
    ],
    en: [
      "`:{range}!command` sends lines to a shell command and replaces them with its output. The whole shell toolbox (`sort`, `jq`, `column`…) becomes an editing tool.",
      "In normal mode `!` is an operator: `!ip` followed by the command filters the paragraph. In visual mode, `!` filters the selection.",
      "To replace nothing: `:r !command` inserts the output below the cursor, `:w !command` feeds the buffer to the command without changing it.",
    ],
    ex: [
      [":%!sort -u", "Trier et dédoublonner le fichier", "Sort and dedupe the file"],
      [":%!jq .", "Formater du JSON", "Pretty-print JSON"],
      [":'<,'>!column -t", "Aligner la sélection en colonnes", "Align the selection into columns"],
      ["!ipsort<CR>", "Trier le paragraphe", "Sort the paragraph"],
      [":r !date", "Insérer la date", "Insert the date"],
      [":w !wc -w", "Compter les mots sans modifier le fichier", "Count words without changing the file"],
    ],
    help: "filter",
  },

  ":earlier {time}": {
    title: { fr: "L'arbre d'annulation", en: "The undo tree" },
    fr: [
      "Vim ne perd jamais une modification annulée : si l'on annule puis que l'on modifie autre chose, l'ancienne version reste dans une autre branche de l'arbre d'annulation.",
      "`u` et `Ctrl+r` suivent la branche courante ; `g-` et `g+` parcourent tous les états dans l'ordre chronologique, toutes branches confondues.",
      "`:earlier` / `:later` voyagent dans le temps (`s`, `m`, `h`, `d`) ou par enregistrements (`f`). Avec `:set undofile`, l'historique survit à la fermeture du fichier.",
    ],
    en: [
      "Vim never loses an undone change: if you undo and then edit something else, the old version lives on in another branch of the undo tree.",
      "`u` and `Ctrl+r` follow the current branch; `g-` and `g+` walk through every state in chronological order, across branches.",
      "`:earlier` / `:later` travel in time (`s`, `m`, `h`, `d`) or by file writes (`f`). With `:set undofile`, history survives closing the file.",
    ],
    ex: [
      [["g-", "g+"], "État précédent / suivant dans le temps", "Previous / next state in time", { list: true }],
      [":earlier 10m", "Revenir 10 minutes en arrière", "Go back 10 minutes"],
      [":earlier 1f", "Revenir au dernier enregistrement", "Go back to the last write"],
      [":later 30s", "Avancer de 30 secondes", "Go forward 30 seconds"],
      [":undolist", "Lister les branches", "List the branches"],
    ],
    help: "undo-tree",
  },

  "f{char}": {
    title: { fr: "Sauter dans la ligne avec f et t", en: "Jumping within the line with f and t" },
    fr: [
      "`f` saute sur le prochain caractère donné, `t` juste avant. `F` et `T` font de même vers la gauche. Ils restent sur la ligne courante.",
      "`;` répète le dernier saut dans le même sens, `,` dans le sens inverse. Un compte vise la n-ième occurrence : `3f,`.",
      "Leur vraie force est avec les opérateurs : `t` s'arrête avant le caractère (exclu), `f` l'inclut.",
    ],
    en: [
      "`f` jumps onto the next given character, `t` just before it. `F` and `T` do the same to the left. They stay on the current line.",
      "`;` repeats the last jump in the same direction, `,` in the opposite one. A count targets the n-th occurrence: `3f,`.",
      "They shine with operators: `t` stops before the character (excluded), `f` includes it.",
    ],
    ex: [
      ["dt)", "Supprimer jusqu'à la parenthèse (exclue)", "Delete up to the parenthesis (excluded)"],
      ["df,", "Supprimer jusqu'à la virgule (incluse)", "Delete through the comma (included)"],
      ["ct\"", "Changer jusqu'au guillemet", "Change up to the quote"],
      ["2f.", "Aller au deuxième point", "Go to the second period"],
      ["yT ", "Copier jusqu'à l'espace précédent", "Yank back to the previous space"],
    ],
    help: "f",
  },
  "<C-x><C-n>": {
    title: { fr: "Complétion en mode insertion (Ctrl+x)", en: "Insert-mode completion (Ctrl+x)" },
    fr: [
      "En mode insertion, `Ctrl+n` / `Ctrl+p` complètent directement avec les mots du fichier et des autres buffers. `Ctrl+x` ouvre un sous-mode de complétion : la touche suivante choisit la source (lignes, fichiers, dictionnaire, registres…).",
      "Dans le menu : `Ctrl+n` / `Ctrl+p` pour se déplacer, `Ctrl+y` pour valider, `Ctrl+e` pour annuler et retrouver le texte tapé.",
      "Certaines sources demandent un réglage : `Ctrl+x Ctrl+o` dépend du type de fichier (ou d'un plugin LSP), `Ctrl+x Ctrl+k` de l'option `dictionary`, `Ctrl+x s` de `:set spell`, `Ctrl+x Ctrl+]` d'un fichier `tags`.",
      "Nouveau dans Vim 9.2 : `Ctrl+x Ctrl+r` propose les mots contenus dans les registres, par exemple un identifiant copié depuis un autre fichier. À ne pas confondre avec `Ctrl+r` suivi d'un registre, qui colle le registre entier. Vim 9.2 ajoute aussi les drapeaux `nosort` et `nearest` à l'option `completeopt`.",
    ],
    en: [
      "In insert mode, `Ctrl+n` / `Ctrl+p` complete straight from words in the file and other buffers. `Ctrl+x` enters a completion sub-mode: the next key picks the source (lines, files, dictionary, registers…).",
      "In the menu: `Ctrl+n` / `Ctrl+p` to move, `Ctrl+y` to accept, `Ctrl+e` to cancel and get back what you typed.",
      "Some sources need setup: `Ctrl+x Ctrl+o` depends on the file type (or an LSP plugin), `Ctrl+x Ctrl+k` on the `dictionary` option, `Ctrl+x s` on `:set spell`, `Ctrl+x Ctrl+]` on a `tags` file.",
      "New in Vim 9.2: `Ctrl+x Ctrl+r` offers words found in registers, for example an identifier yanked from another file. Not to be confused with `Ctrl+r` followed by a register, which pastes the whole register. Vim 9.2 also adds the `nosort` and `nearest` flags to the `completeopt` option.",
    ],
    ex: [
      ["<C-x><C-l>", "Compléter une ligne déjà écrite ailleurs", "Complete a line written elsewhere"],
      ["<C-x><C-f>", "Compléter un chemin (ex. après `./src/`)", "Complete a path (e.g. after `./src/`)"],
      ["<C-x><C-o>", "Suggestions du langage (méthodes, attributs…)", "Language suggestions (methods, attributes…)"],
      ["<C-x><C-r>", "Mots des registres (Vim 9.2+)", "Words from registers (Vim 9.2+)"],
      [["<C-n>", "<C-p>"], "Choisir dans le menu", "Move in the menu", { list: true }],
      [["<C-y>", "<C-e>"], "Valider / annuler", "Accept / cancel", { list: true }],
      [":set completeopt=menuone,noselect", "Toujours afficher le menu, sans présélection", "Always show the menu, nothing preselected"],
    ],
    help: "ins-completion",
  },
};

// The same explanation is reachable from the new register completion row.
window.VIM_INFO["<C-x><C-r>"] = window.VIM_INFO["<C-x><C-n>"];
