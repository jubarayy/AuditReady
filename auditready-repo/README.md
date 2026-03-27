# AuditReady

Starter SaaS Next.js prêt pour GitHub + Vercel.

## Ce repo contient
- une landing page marketing
- une zone app `/app`
- une zone admin `/admin`
- des API routes mockées
- une structure claire pour brancher Supabase, Stripe et l'IA ensuite

## Lancer en local
```bash
npm install
npm run dev
```

## Déployer sur Vercel
1. Crée un repo GitHub
2. Push ce dossier dans le repo
3. Connecte le repo à Vercel
4. Ajoute les variables d'environnement de `.env.example`
5. Déploie

## Pages principales
- `/`
- `/pricing`
- `/demo`
- `/faq`
- `/login`
- `/signup`
- `/app/dashboard`
- `/app/questionnaires`
- `/app/documents`
- `/app/referentiels`
- `/app/plan-action`
- `/app/rapports`
- `/app/billing`
- `/app/settings`
- `/admin`

## Étapes suivantes
- brancher Supabase Auth
- stocker les questionnaires en base
- brancher l'upload de documents
- brancher le moteur IA
- brancher Stripe Checkout
test
