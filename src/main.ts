import { initFederation } from '@angular-architects/module-federation';

// initFederation('/assets/mf.manifest.json')
//   .catch((err) => console.error(err))
//   .then((_) => import('./bootstrap'))
//   .catch((err) => console.error(err));

initFederation('/assets/mf.manifest.json')
  .catch((err) => {
    console.error('Federation initialization failed:', err);
  })
  .then(() => {
    console.log('Federation initialized successfully');
    return import('./bootstrap');
  })
  .catch((err) => {
    console.error('Bootstrap failed:', err);
  });
