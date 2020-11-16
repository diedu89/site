export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb1c776999739c945505c34',
                  title: 'Sanity Studio',
                  name: 'site-studio',
                  apiId: '00d472a7-7fd3-47eb-87a6-9ce7faf2f41c'
                },
                {
                  buildHookId: '5fb1c776c40d477b505727a7',
                  title: 'Blog Website',
                  name: 'site-web',
                  apiId: 'b3654583-1605-41a8-9c8f-435dd6c5810d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/diedu89/site',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://site-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
