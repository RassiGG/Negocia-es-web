# TODO: Fix table in negociacoes-view.ts not appearing

## Approved Plan Steps:
1. [x] Clean up template in `app/views/negociacoes-view.ts`: Fixed indentation/whitespace, added 'pt-BR' locale to DateTimeFormat, cleaned HTML structure (lines 12-18+).
2. [x] Verify/add HTML container `<div id=\"negociacoesView\"></div>` - Created `index.html` with full form + Bootstrap + container.
3. [x] Confirm app bootstrap in `app/app.ts` (already instantiates controller).
4. [ ] Test: Compile TS (`npx tsc`), serve app (suggest `npx live-server .`), check browser console for template log/errors, verify 3 sample rows render.
5. [ ] [Complete] Test form adiciona(), inspect final table.

Progress will be updated here.
