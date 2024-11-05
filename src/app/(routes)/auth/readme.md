Auth redirects configured at **src/next.config.ts**

Read more:
(https://nextjs.org/docs/pages/api-reference/next-config-js/redirects)

### password-login/route.ts
Sign in on the back-end, even with disabled JavaScript in the browser.

### logout/route.ts
Sign out on the back-end, even with disabled JavaScript in the browser.

### magic-link/route.ts
Generate magic link via admin client, then construct custom email and send it to the user.

### verify/route.ts
Verify aforementioned magic link to sign in user.