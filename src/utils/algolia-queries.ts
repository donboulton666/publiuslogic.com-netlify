const indexName = `Posts`
const crypto = require('crypto')

interface postToAlgoliaRecordProps {
  node: {
    data: any
    id: String
    path: String
    frontmatter: String
    fields: String
    item: String
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
          internal {
            contentDigest
            type
            owner
          }
        }
      }
    }
  }`

export default function postToAlgoliaRecord({
  node: { id, data, path, frontmatter, fields, item, ...rest },
}: postToAlgoliaRecordProps) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  }
}

function transformer(data: { internal: any }[]) {
  return data.map((item: { internal: any }) => {
    const hash = crypto.createHash('md5').update(JSON.stringify(item)).digest('hex')

    return {
      ...item,
      internal: {
        ...item.internal,
        contentDigest: hash,
      },
    }
  })
}

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => data.posts.edges.map(postToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
    mergeSettings: false,
  },
]

module.exports = queries
