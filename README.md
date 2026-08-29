<a name="readme-top"></a>

# Modern Portfolio using Next.js and Framer Motion

![Modern Portfolio using Next.js and Framer Motion](/.github/images/img_main.png "Modern Portfolio using Next.js and Framer Motion")

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/github/license/sanidhyy/modern-portfolio?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/modern-portfolio/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/modern-portfolio/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/sanidhyy/modern-portfolio?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/modern-portfolio/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/sanidhyy/modern-portfolio?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/modern-portfolio/commits "Github commits")
[![Netlify Status](https://api.netlify.com/api/v1/badges/721491f5-0b0d-4120-96bd-6bd0480ef1e5/deploy-status)](https://awersome-portfolio.netlify.app/ "Netlify Status")
[![GitHub issues](https://flat.badgen.net/github/issues/sanidhyy/modern-portfolio?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/modern-portfolio/issues "GitHub issues")
[![GitHub pull requests](https://flat.badgen.net/github/prs/sanidhyy/modern-portfolio?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/modern-portfolio/pulls "GitHub pull requests")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Stats](#wrench-stats)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Buy Me a Coffee](#coffee-buy-me-a-coffee)
- [Follow Me](#rocket-follow-me)
- [Learn More](#books-learn-more)
- [Deploy on Vercel](#page_with_curl-deploy-on-vercel)
- [Give A Star](#star-give-a-star)
- [Star History](#star2-star-history)
- [Give A Star](#star-give-a-star)

</details>

## :bangbang: Folder Structure

Here is the folder structure of this app.

<!--- FOLDER_STRUCTURE_START --->
```bash
modern-portfolio/
  |- app/
    |-- about/
    |-- api/
    |-- contact/
    |-- services/
    |-- testimonials/
    |-- work/
    |-- globals.css
    |-- layout.tsx
    |-- page.tsx
    |-- template.tsx
  |- components/
    |-- Avatar.tsx
    |-- Bulb.tsx
    |-- Circles.tsx
    |-- Header.tsx
    |-- Nav.tsx
    |-- ParticlesContainer.tsx
    |-- ProjectsBtn.tsx
    |-- ServiceSlider.tsx
    |-- Socials.tsx
    |-- TestimonialSlider.tsx
    |-- TopLeftImg.tsx
    |-- Transition.tsx
    |-- WorkSlider.tsx
  |- lib/
    |-- contact.ts
  |- public/
  |- .env.example
  |- .env/.env.local
  |- .gitignore
  |- environment.d.ts
  |- eslint.config.mjs
  |- netlify.toml
  |- next.config.ts
  |- package.json
  |- pnpm-lock.yaml
  |- pnpm-workspace.yaml
  |- postcss.config.mjs
  |- tsconfig.json
  |- variants.ts
```
<!--- FOLDER_STRUCTURE_END --->

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.

2. Clone this repository to your local computer.

3. Create `.env.local` file in root folder.

4. Contents of `.env.local`:

```env
# disabled next.js telemetry
NEXT_TELEMETRY_DISABLED="1"

# resend
RESEND_API_KEY="re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
RESEND_FROM_EMAIL="Your Name <me@example.com>"
CONTACT_TO_EMAIL="contact@example.com"
CONTACT_SITE_URL="https://awersome-portfolio.netlify.app"
RESEND_TEMPLATE_CONTACT_USER="contact-thank-you"
RESEND_TEMPLATE_CONTACT_ADMIN="contact-admin"

# google recaptcha v3
NEXT_PUBLIC_RECAPTCHA_SITE_KEY="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
RECAPTCHA_SECRET_KEY="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
RECAPTCHA_MIN_SCORE="0.5"
```

5. Create an account at [Resend](https://resend.com "Resend") and [add + verify a sending domain](https://resend.com/domains "Resend domains").

6. Create an API key at [Resend API Keys](https://resend.com/api-keys "Resend API keys") with **Sending access**. Copy it to `RESEND_API_KEY`.

7. Set `RESEND_FROM_EMAIL` to an address on that verified domain. Set `CONTACT_TO_EMAIL` to the inbox that should receive new contact notifications (required). Set `CONTACT_SITE_URL` to your site's public URL (no trailing slash).

8. In [Resend Templates](https://resend.com/templates "Resend templates"), create **two** templates and **Publish** each.

   **Template 1 — thank you to the user**
   - Name: `contact-thank-you`
   - Variables: `USER_NAME`, `USER_MESSAGE`, `SITE_URL`

   **Template 2 — new message to admin**
   - Name: `contact-admin`
   - Variables: `USER_NAME`, `USER_EMAIL`, `USER_MESSAGE`, `SITE_URL`

   Copy each template's alias into `RESEND_TEMPLATE_CONTACT_USER` and `RESEND_TEMPLATE_CONTACT_ADMIN`.

9. Create a [Google reCAPTCHA v3](https://www.google.com/recaptcha/admin/create "Google reCAPTCHA") project. Choose **Score based (v3)**, add your production domain(s) **and** `localhost`, then copy the **Site key** to `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` and the **Secret key** to `RECAPTCHA_SECRET_KEY`.

10. Open terminal in root directory. Run `npm install --legacy-peer-deps` or `pnpm install --legacy-peer-deps`.

11. Now the app is fully configured 👍 and you can start it with `npm run dev` or `pnpm dev`.

**NOTE:** Ensure you don't share these keys publicly.

### :raising_hand: Need Help?

If you run into issues during installation or setup:

- **GitHub Discussions** — [Open a Q&A discussion](https://github.com/sanidhyy/modern-portfolio/discussions/new?category=q-a) for setup and troubleshooting help.
- **Email** — [sanidhyyy@gmail.com](mailto:sanidhyyy@gmail.com)
- **Discord** — `@sanidhyy`

## :camera: Screenshots:

![Modern UI/UX](/.github/images/img1.png "Modern UI/UX")

![Services](/.github/images/img2.png "Services")

![Showcase Projects](/.github/images/img3.png "Showcase Projects")

![Contact Form](/.github/images/img4.png "Contact Form")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![JavaScript](https://skillicons.dev/icons?i=js "JavaScript")](https://developer.mozilla.org/en-US/docs/Web/JavaScript "JavaScript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Netlify](https://skillicons.dev/icons?i=netlify "Netlify")](https://netlify.app/ "Netlify")

## :wrench: Stats

[![Stats for Modern Portfolio](/.github/images/stats.svg "Stats for Modern Portfolio")](https://pagespeed.web.dev/analysis?url=https://awersome-portfolio.netlify.app/ "Stats for Modern Portfolio")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and dependencies that are used in Modern Portfolio.

<!--- DEPENDENCIES_START --->
- [@tailwindcss/postcss](https://www.npmjs.com/package/@tailwindcss/postcss): ^4.3.3
- [@tsparticles/engine](https://www.npmjs.com/package/@tsparticles/engine): ^4.3.2
- [@tsparticles/react](https://www.npmjs.com/package/@tsparticles/react): ^4.3.2
- [@types/node](https://www.npmjs.com/package/@types/node): ^26.3.0
- [@types/react](https://www.npmjs.com/package/@types/react): ^19.2.18
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): ^19.2.5
- [eslint](https://www.npmjs.com/package/eslint): ^9.39.5
- [eslint-config-next](https://www.npmjs.com/package/eslint-config-next): 16.3.3
- [framer-motion](https://www.npmjs.com/package/framer-motion): ^13.1.1
- [next](https://www.npmjs.com/package/next): 16.3.3
- [postcss](https://www.npmjs.com/package/postcss): ^8.5.26
- [react](https://www.npmjs.com/package/react): 19.2.8
- [react-countup](https://www.npmjs.com/package/react-countup): ^6.4.2
- [react-dom](https://www.npmjs.com/package/react-dom): 19.2.8
- [react-google-recaptcha-v3](https://www.npmjs.com/package/react-google-recaptcha-v3): ^1.11.0
- [react-hot-toast](https://www.npmjs.com/package/react-hot-toast): ^2.6.0
- [react-icons](https://www.npmjs.com/package/react-icons): ^5.7.0
- [resend](https://www.npmjs.com/package/resend): ^6.22.1
- [swiper](https://www.npmjs.com/package/swiper): ^14.1.0
- [tailwindcss](https://www.npmjs.com/package/tailwindcss): ^4.3.3
- [tsparticles](https://www.npmjs.com/package/tsparticles): ^4.3.2
- [typescript](https://www.npmjs.com/package/typescript): ^6.0.3

<!--- DEPENDENCIES_END --->

## :coffee: Buy Me a Coffee

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![GitHub followers](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me")
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fx.com%2F_sanidhyy)](https://x.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%2Fmodern-portfolio "Tweet")

## :books: Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## :page_with_curl: Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :star2: Star History

<a href="https://star-history.com/#sanidhyy/modern-portfolio&Timeline">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=sanidhyy/modern-portfolio&type=Timeline&theme=dark" />
  <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=sanidhyy/modern-portfolio&type=Timeline" />
  <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=sanidhyy/modern-portfolio&type=Timeline" />
</picture>
</a>

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
