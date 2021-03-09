export default {
  widgets: [
    // ...
    {
      name: 'vercel',
      options: {
        deployLimit: 5,
        deployHook: '%YOUR_DEPLOY_HOOK%', // optional
        forceSmallLayout: false, // optional
        projectId: '%YOUR_PROJECT_ID%',
        teamId: '%YOUR_PROJECT_ID%', // optional
        token: '%VERCEL_TOKEN%',
      },
      layout: {
        width: 'large',
      },
    },
  ],
}
