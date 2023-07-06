import blog, { redirects } from "https://deno.land/x/blog@0.5.0/blog.tsx";
import { UNOCSS_OPTS } from "./unocss.js";

blog({
  title: "Aditya Yadav",
  author: "Aditya Yadav",
  avatar: "https://avatars.githubusercontent.com/u/84765888",
  favicon: "favicon.ico",
  avatarClass: "rounded-full",
  theme: "auto",
  lang: "en",
  unocss: UNOCSS_OPTS,
  readtime: true,
  dateFormat: (date) => new Intl.DateTimeFormat("en-IN", { dateStyle: "full" }).format(date),
  links: [
    { title: "Email", url: "mailto:adityayadav@tutanota.com", target: "_blank" },
    { title: "GitHub", url: "https://github.com/dedomil", target: "_blank" },
    { title: "Twitter", url: "https://twitter.com/aadixl", target: "_blank" },
  ],
  background: "#1d1f21",
  middlewares: [
    redirects({}),
  ],
});