import React from 'react'
import { graphql } from 'gatsby'
import { Box, Flex } from '@rebass/grid'

import { SEO, Shield } from '../components'
import SkillsContainer from '../components/about/skills-container'

const IndexPage = ({ data: { about } }) => (
  <>
    <SEO title="About" />

    <Flex my="30px" flexWrap="wrap">
      {about.shields.map(s => {
        let [label, value] = s.split('|')

        return (
          <Box key={label} mr={[0, 10]} mb={['5px', 0]}>
            <Shield {...{ label, value }} />
          </Box>
        )
      })}
    </Flex>

    <h2>Skills</h2>

    <SkillsContainer />

    <div
      dangerouslySetInnerHTML={{
        __html:
          about.childContentfulAboutContentRichTextNode.childContentfulRichText
            .html,
      }}
    />
  </>
)

export let query = graphql`
  query IndexQuery {
    about: contentfulAbout {
      shields

      childContentfulAboutContentRichTextNode {
        childContentfulRichText {
          html
        }
      }
    }
  }
`

export default IndexPage
