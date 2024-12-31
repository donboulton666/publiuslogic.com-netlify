const indexName = `Posts`

interface postToAlgoliaRecordProps {
    node:{
      id: String
      path: String 
      frontmatter: String 
      fields: String
    }
}

const postQuery = `{
    posts: allMdx(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "MMM D, YYYY")
            tags
          }
          slug
          excerpt(pruneLength: 5000)
        }
      }
    }
  }`
export default function postToAlgoliaRecord({ node: { id, path, frontmatter, fields, ...rest } }: postToAlgoliaRecordProps) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  }
}

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => data.posts.edges.map(postToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries