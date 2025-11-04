# 📊 Configuration Google Analytics - Hygiène Protect 3D

## Étapes pour activer Google Analytics

### 1. Créer un compte Google Analytics

1. Rendez-vous sur [Google Analytics](https://analytics.google.com/)
2. Cliquez sur "Commencer à mesurer"
3. Renseignez les informations :
   - **Nom du compte** : Hygiène Protect 3D
   - **Nom de la propriété** : Site Web Dératisation
   - **URL du site** : https://hygiene-protect-3d.fr
   - **Secteur** : Services professionnels
   - **Fuseau horaire** : Paris

### 2. Récupérer votre ID de mesure

1. Dans Google Analytics, allez dans **Administration** (roue dentée en bas à gauche)
2. Dans la colonne **Propriété**, cliquez sur **Flux de données**
3. Sélectionnez votre flux de données Web
4. Copiez votre **ID de mesure** (format : `G-XXXXXXXXXX`)

### 3. Remplacer l'ID dans index.html

Dans le fichier `index.html`, remplacez **TOUTES les occurrences** de `G-XXXXXXXXXX` par votre vrai ID :

```html
<!-- Ligne 11 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VOTRE-VRAI-ID"></script>

<!-- Ligne 16 -->
gtag('config', 'G-VOTRE-VRAI-ID');
```

### 4. Déployer sur Vercel

```bash
git add .
git commit -m "feat: Configuration Google Analytics"
git push
```

### 5. Vérifier l'installation

1. Allez sur votre site : https://hygiene-protect-3d.fr
2. Dans Google Analytics, allez dans **Rapports** > **Temps réel**
3. Vous devriez voir votre visite en direct ! 🎉

## 📈 Événements à suivre

Une fois configuré, vous pourrez suivre :
- ✅ Nombre de visiteurs
- ✅ Pages les plus consultées
- ✅ Sources de trafic (Google, réseaux sociaux, etc.)
- ✅ Taux de rebond
- ✅ Conversions (formulaire de contact)

## 🎯 Événements personnalisés (optionnel)

Pour suivre les clics sur le bouton "Appeler" :
```javascript
gtag('event', 'click_phone', {
  'event_category': 'contact',
  'event_label': 'Bouton téléphone'
});
```

---

**Support** : Si vous avez besoin d'aide, consultez la [documentation officielle](https://support.google.com/analytics)
