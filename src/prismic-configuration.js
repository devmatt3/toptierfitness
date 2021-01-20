
// -- Prismic API endpoint
// Determines which repository to query and fetch data from
export const repoName = 'toptierfitness';
export const apiEndpoint = `https://${repoName}.prismic.io/graphql`

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'page') {
      return `/page/${doc.uid}`;
  }
  return '/';
}
