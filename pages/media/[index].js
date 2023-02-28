import React from 'react'
import Layout from '../../components/Layout'
import MediaArticle from '../../components/MediaArticle/MediaArticle'

const mediaId = () => {
  return (
    <Layout>
      <div className="mediaId">
        <div className="container">
          {/* top */}
          <MediaArticle/>
        </div>
      </div>
    </Layout>
  )
}

export default mediaId