# NX protractor-image-compairison demo

Checkout protractor.conf.js for the set of defaults I think are sane of
a generic NX workspace.

Checkout apps/demo/e2e/image-comparison.ts for how the image comparison
utility is exposed to the user. Currently this is done by generating
a class for every app individually. I think this is the right approach but I
could be convinced that this should be done as a single non-generated class
exported by NX itself.

Checkout apps/demo/e2e/app.e2e-spec.ts for an example of how the exported
const, imageComparison, can be used.
