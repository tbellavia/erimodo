# ✨Les règles de développement✨


❤ Je remercie grandement tous ceux qui contribuent d'une manière ou d'une autre à ce projet. ❤

Les contributeurs doivent tous faire partie du Discord Eridiane depuis au moins 1 mois et doivent participer activement
à la vie du Discord.

___

Nous utilisons le système "GitHubFlow", c'est-à-dire :

une branche principale "production" qui contient les versions déployables ;
des branches de fonctionnalités sur laquelle les développeurs travaillent.

Lorsqu'une fonctionnalité est prête, elle est "mergée" sur la branche de production. Le code de cette
fonctionnalité doit être testé et passé dans un "linter" qui est encore à déterminer.
Le but est à terme d'utiliser un CI/CD complet.
Nous suivons le principe du semantic versioning.
Pour cela :
déterminer si l'ensemble des modifications depuis la version précédente est rétrocompatible ou non ("cassant") ;
mettre à jour le numéro de version en conséquence (majeur, mineur ou patch).
Lorsqu'une feature est prête, pusher 2 fois : git push origin production et git push --tags.

___

Commits

Entête des messages de commits :
- add: -> ajouter du code ;
- update: -> modifier du code qui n'est pas une re-factorisation ;
- delete: -> pour supprimer du code ;
- docs: -> Changement de la documentation ;
- feat: -> Une nouvelle fonctionnalité (cela correspond à MINOR dans le "semantic versioning") ;
- fix: -> Correction de bogues ;
- refactor: -> Changement de code qui n'est ni un "feat" ni un "fix" ;
- test: -> Ajout d'un test ou correction d'un test.
- BREAKING CHANGE: -> Changement d'API de rupture (Corrélé avec un MAJOR dans le "semantic versioning").

---

Installation
Il n'y a pour le moment pas d'installation possible car il n'y a pas encore de version 0.1.0.

--- 
