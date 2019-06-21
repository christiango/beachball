import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import CtaButton from '../components/CtaButton'
import Navigation from '../components/Layout/Navigation'

import beachBallSvg from '../assets/beach-ball.svg'

class Index extends React.Component {
  render() {
    const allSEOMarkdown = this.props.data.allMarkdown.edges

    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={allSEOMarkdown} />
        <main>
          <IndexHeadContainer>
            <Navigation />
            <Hero>
              <LogoRow>
                <BeachBallLogo src={beachBallSvg} />
                <h1>{config.siteTitle}</h1>
              </LogoRow>
              <h4>{config.siteDescription}</h4>
            </Hero>
          </IndexHeadContainer>
          <BodyContainer>
            <h2>A Gatsby Template for Content</h2>
            <p>
              Made for modern documentation sites. Table of Contents
              automatically generated from markdown files.{' '}
            </p>
            <CtaButton to={'/lesson-one'}>See Your First Post</CtaButton>

            <div className="contributors">
              <div>
                Icons made by{' '}
                <a href="https://www.freepik.com/" title="Freepik">
                  Freepik
                </a>{' '}
                from{' '}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>{' '}
                is licensed by{' '}
                <a
                  href="http://creativecommons.org/licenses/by/3.0/"
                  title="Creative Commons BY 3.0"
                  target="_blank"
                >
                  CC 3.0 BY
                </a>
              </div>
            </div>
          </BodyContainer>
        </main>
      </div>
    )
  }
}

export default Index

const LogoRow = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`

const BeachBallLogo = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 5px;
`

const IndexHeadContainer = styled.div`
  background: ${props => props.theme.brand};
  padding: ${props => props.theme.sitePadding};
  text-align: center;
`

const Hero = styled.div`
  padding: 50px 0;
  & h1 {
    font-weight: 600;
    margin: 0;
    padding: 0;
    line-height: 60px;
  }
`

const BodyContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
  max-width: ${props => props.theme.contentWidthLaptop};
  margin: 0 auto;

  .contributors {
    margin: 100px auto 0;
  }
  .contributors a {
    font-size: 1rem;
  }
`

/* eslint no-undef: "off" */
export const query = graphql`
  query IndexQuery {
    allMarkdown: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
    posts: allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`
