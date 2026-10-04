# PhillipSperry.com

Phillip Sperry’s personal website: accounting, AI, technology, and practical curiosity.

## Initial design preview

A dependency-free static site with Home, Projects, Notebook, About, three project journals, and two notebook drafts. Styling, concept illustrations, draft content, and hash-based navigation live in index.html. No stock imagery, generated photographs, client data, or family photographs are included. Clearly labeled spaces reserve room for Phillip’s originals.

## Local preview

Run python3 -m http.server 4173 in the repository and open http://localhost:4173.

## Netlify

Import psperry/phillipsperry.com. Production branch: main. Build command: empty. Publish directory: . (also specified in netlify.toml). Start on Free; do not add paid features.

Keep Deploy Previews enabled for pull requests. Future changes belong on a branch: open a pull request, review the Netlify preview, and merge only after Phillip approves. See https://docs.netlify.com/deploy/deploy-types/deploy-previews/.

The first commit establishes source control, not a production launch. Connecting main to Netlify publishes that branch. Review this initial design before deploying it.

After reviewing the netlify.app site, add PhillipSperry.com and www.PhillipSperry.com to Netlify. Keep registration at Hover. Use the exact DNS records Netlify supplies for this project; inspect existing Hover records before any changes, especially email records. Then verify both domain variants and HTTPS. No DNS changes are part of the initial source setup.

## Content and photographs

All copy is draft copy based on the project brief. Edit the projects and notes arrays in index.html. Entry bodies contain trusted HTML authored in the repository; never insert untrusted content. The illustrations show concepts, not completed hardware.

Chosen homepage photograph: Phillip’s sunset over the yard with Fergus in the foreground. Alternative: the mountain panorama. About and Notebook can use the trail photographs with Fergus. Preserve subjects and source fidelity when optimizing supplied photographs. Publishing family photographs requires explicit approval.

Before production, review copy, add approved originals and accurate alt text, and remove preview and draft labels. Consider separate generated HTML pages as content grows: this first preview’s hash navigation does not provide server-rendered entry URLs or per-entry social previews.

## Checks

Initial local checks covered desktop and mobile layouts, the primary navigation, all five detail views, an unknown route, and browser console errors. No package installation or build is needed.
