import { graphql } from "gatsby";
import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import ArrowButton from "../components/ArrowButton";
import { Preview } from "../components/CMS/Preview";
import Image from "../components/Image";
import Header from "../components/Layout/Header";
import Page from "../components/Layout/Page";
import Logo from "../components/Logo";
import CaseStudies from "../components/Sections/CaseStudies";
import Clients from "../components/Sections/Clients";
import References from "../components/Sections/References";
import WhatWeDo from "../components/Sections/WhatWeDo";

import { File, Maybe, Query } from "../graphql/types";

// icons and logos

import awsLogo from "../img/aws-logo.svg";
import blogImgOne from "../img/blog-1.png";
import dockerLogo from "../img/docker-logo.svg";
import javaLogo from "../img/java-logo.svg";
import polymerLogo from "../img/polymer-logo.svg";
import reactLogo from "../img/react-logo.svg";

import swiftLogo from "../img/swift-logo.svg";

// sections
import Contact from "../components/Sections/Contact";
import Instagram from "../components/Sections/Intagram";

import styled from "../styles/theme";

interface IndexPageProps {
  hero: string | File;
  title: string;
  subheading: Maybe<string>;
  className?: string;
}

export const IndexPageTemplate: React.SFC<IndexPageProps> = ({
  hero,
  title,
  subheading,
  className
}) => (
  <div className={className}>
    <Header title={title} subheading={subheading} hero={hero} />
    {/* Our clients */}
    <Clients />
    <CaseStudies />
    {/* What we do */}
    <WhatWeDo />
    {/* References */}
    <References />
    {/* Technologies */}
    <section className="technologies">
      <Grid className="container">
        <h1>Technologies</h1>
        <Row>
          <Col xs={12} sm={6}>
            <p>
              Skip it dawg pulp fiction chia pet. Napster khaki dolly the sheep
              beanie babies david duchovny lisa frank. Nerf guns hoop earrings.
            </p>
            <p>
              Prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
              nest nipperkin.
            </p>
          </Col>
          <Col xs={12} smOffset={1} sm={4}>
            <Row className="logoRow">
              <Col xs={4}>
                <Logo source={javaLogo} altText="A Java Logo" />
              </Col>
              <Col xs={4}>
                <Logo source={reactLogo} altText="A React Logo" />
              </Col>
              <Col xs={4}>
                <Logo source={awsLogo} altText="An Aws Logo" />
              </Col>
            </Row>
            <Row className="logoRow">
              <Col xs={4}>
                <Logo source={polymerLogo} altText="A Polymer Logo" />
              </Col>
              <Col xs={4}>
                <Logo source={swiftLogo} altText="A Swift Logo" />
              </Col>
              <Col xs={4}>
                <Logo source={dockerLogo} altText="A Docker Logo" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </section>
    {/* Blog */}
    <section id="blog" className="blog">
      <Grid className="container">
        <h1>Blog</h1>
        <Row className="blog-wrap">
          <Col className="blog-item" xs={12} sm={4}>
            <Image source={blogImgOne} altText="A Blog Placeholder" />
            <h2>Skysail gun swing the lead pink Cat o'nine</h2>
            <p>
              Rigging Plate Fleet quarterdeck scallywag jolly boat Buccaneer
              Brethren of the Coast ahoy keelhaul six pounders. Walk the plank
              matey Letter of Marque brig aft bring a spring upon her cable grog
              blossom hang the jib Barbary Coast yard. Barkadeer doubloon
              measured fer yer chains splice.
            </p>
          </Col>
          <Col className="blog-item" xs={12} sm={4}>
            <Image source={blogImgOne} altText="A Blog Placeholder" />
            <h2>Skysail gun swing the lead pink Cat o'nine</h2>
            <p>
              Rigging Plate Fleet quarterdeck scallywag jolly boat Buccaneer
              Brethren of the Coast ahoy keelhaul six pounders. Walk the plank
              matey Letter of Marque brig aft bring a spring upon her cable grog
              blossom hang the jib Barbary Coast yard. Barkadeer doubloon
              measured fer yer chains splice.
            </p>
          </Col>
          <Col className="blog-item" xs={12} sm={4}>
            <Image source={blogImgOne} altText="A Blog Placeholder" />
            <h2>Skysail gun swing the lead pink Cat o'nine</h2>
            <p>
              Rigging Plate Fleet quarterdeck scallywag jolly boat Buccaneer
              Brethren of the Coast ahoy keelhaul six pounders. Walk the plank
              matey Letter of Marque brig aft bring a spring upon her cable grog
              blossom hang the jib Barbary Coast yard. Barkadeer doubloon
              measured fer yer chains splice.
            </p>
          </Col>
        </Row>
        <Row className="arrow-icons-wrap">
          <ArrowButton dark={false} leftArrow={true} altText="An arrow icon" />
          <ArrowButton dark={false} leftArrow={false} altText="An arrow icon" />
        </Row>
      </Grid>
      {/* <BlogRoll /> */}
    </section>
    {/* Contact Us */}
    <Contact />
    {/* Instagram */}
    <Instagram />
  </div>
);

const StyledIndexPageTemplate = styled(IndexPageTemplate)`
  .container {
    @media ${props => props.theme.screen.laptop} {
      width: 1410px !important;
    }
  }

  /*All Main Sections*/
  .technologies {
    padding: 2rem 0;

    @media ${props => props.theme.screen.laptop} {
      padding: 7.5rem 0;
    }

    .row {
      @media ${props => props.theme.screen.laptop} {
        margin-top: 95px;
      }
    }

    p {
      font-family: "Open Sans", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 176.18%;
      color: ${props => props.theme.colors.paragraphGrey};
    }

    .logoRow {
      display: flex;
      justify-content: center;
      align-items: center;

      @media ${props => props.theme.screen.laptop} {
        &:nth-child(1) {
          margin-bottom: 70px;
        }
      }
    }
  }

  .blog {
    background-color: ${props => props.theme.colors.blogSectionBg};
    color: ${props => props.theme.colors.white};
    padding: 2rem 0;

    @media ${props => props.theme.screen.laptop} {
      padding: 7.5rem 0;
    }

    .row {
      @media ${props => props.theme.screen.laptop} {
        margin-top: 95px;
      }
    }

    .blog-wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      @media ${props => props.theme.screen.laptop} {
        margin-top: 100px;

        .blog-item {
          max-width: 420px;

          h2 {
            margin-top: 70px;
          }
        }
      }
    }

    .arrow-icons-wrap {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

interface IndexPageTemplateProps {
  data: Query;
}

const IndexPage = ({ data }: IndexPageTemplateProps) => {
  const { markdownRemark: page } = data;

  if (!page || !page.frontmatter) {
    throw new Error("Data loading error");
  }

  return (
    <Page>
      <StyledIndexPageTemplate
        hero={page.frontmatter.hero!}
        title={page.frontmatter.title!}
        subheading={page.frontmatter.subheading}
      />
    </Page>
  );
};

export const IndexPagePreview = ({ entry }: any) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <Preview>
        <StyledIndexPageTemplate
          hero={data.hero}
          title={data.title}
          subheading={data.subheading}
        />
      </Preview>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
        hero {
          ...FileInfo
        }
      }
    }
  }
`;

export default IndexPage;
