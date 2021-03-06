import classNames from 'classnames';
import { Link } from "gatsby";
import GatsbyLink from "gatsby-link";
import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import { isString } from "util";
import { File, Maybe } from "../../graphql/types";
import logo from "../../img/starkys-logo-proper.svg";
import { css, default as styled, SCP } from "../../styles/theme";
import Button from "../Button";
import PreviewCompatibleImage from "../CMS/PreviewCompatibleImage";

type BtnText = 'four0four' | 'successMessage' | 'main';

interface P extends SCP {
  title: Maybe<string>;
  subheading?: Maybe<string>;
  hero?: string | File;
  compact?: boolean;
  locale: Maybe<string>;
  four0four: boolean;
  btnText: BtnText;
}

const HeaderTemplate: React.SFC<P> = ({
  hero,
  title,
  subheading,
  className,
  compact,
  locale,
  four0four,
  btnText
}) => {
  const file = hero ? (isString(hero) ? hero : hero.base!) : "";
  const Logo = (
    <PreviewCompatibleImage
      className="starkyslogo"
      image={logo}
      alt="Starkys Logo"
    />
  );

  const four0fourBtn = () => {
    if (locale === "cs") {
      return "Zpět";
    } else {
      return "Go back";
    }
  };

  const successMessageBtn = () => {
    if (locale === "cs") {
      return "Zpět";
    } else {
      return "Go back";
    }
  };

  const mainHeroBtn = () => {
    if (locale === "cs") {
      return "Pracujte s námi";
    } else {
      return "Work with us";
    }
  };

  const ENUM_STATES = {
    four0four: four0fourBtn(),
    successMessage: successMessageBtn(),
    main: mainHeroBtn()
  };

  return (
    <header id="header" className={className}>
      <div>
        {!compact && file.match(/.(mp4|ogg|wmv|ftv|mov)$/i) && (
          <video
            src={hero ? (isString(hero) ? hero : hero.publicURL!) : ""}
            playsInline={true}
            autoPlay={true}
            muted={true}
            loop={true}
          />
        )}
        {!compact && (
          <>
            <div className="circle" />
            <div className="overlay" />
          </>
        )}
        <div className="text-wrap">
          <Grid className="grid">
            <Row>
              <Col className="logo-section" xs={12} xl={6}>
                {compact ? (
                  <GatsbyLink to="/" replace={false}>
                    {Logo}
                  </GatsbyLink>
                ) : (
                    Logo
                  )}
                <h1 className={four0four ? "header__h1--404" : ""}>{title}</h1>
                {!compact && (
                  <Link to="/#what-we-do" className="navbar-item">
                    <Button
                      className={classNames("header__cta", { capital: locale === 'en' })}
                      background="#ffc700"
                      height="57px"
                      type=""
                    >
                      {ENUM_STATES[btnText]}
                    </Button>
                  </Link>
                )}
              </Col>
              {!compact && (
                <Col className="text-section" xs={12} xl={6}>
                  <p>{subheading}</p>
                </Col>
              )}
            </Row>
          </Grid>
        </div>
      </div>
    </header>
  );
};

const Header = styled(HeaderTemplate)`
  position: ${({ compact }) => (compact ? "fixed" : "relative")};
  height: ${({ compact }) => (compact ? "120px" : "100vh")};
  width: 100%;
  overflow: hidden;
  z-index: 2;
  color: white;

  ${({ hero, compact }) => {
    const file = hero ? (isString(hero) ? hero : hero.publicURL!) : "";
    if (!compact && file.match(/.(jpg|jpeg|png|gif)$/i)) {
      return css`
        background: url(${file}) no-repeat center center scroll;
        background-size: cover;
      `;
    }
  }}

  ${({ compact }) =>
    compact &&
    css`
      background-color: #202d3b;
    `}

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 0;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }

  ${({ hero, compact }) => {
    const file = hero ? (isString(hero) ? hero : hero.publicURL!) : "";
    if (!compact && !file.match(/.(jpg|jpeg|png|gif)$/i)) {
      return css`
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: ${props => props.theme.colors.black};
          opacity: 0.5;
          z-index: 1;
        }
      `;
    }
  }}

  .circle {
    position: absolute;
    left: 33%;
    top: -30%;
    border-radius: 50%;
    border: 1px solid gray;
    height: 50rem;
    width: 50rem;
    z-index: 2;
  }
  .text-wrap {
    position: absolute;
    z-index: 2;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    font-family: "Muli";
  }

  h1 {
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 128%;
    letter-spacing: 0.03em;
    margin: 40px 0;

    @media ${props => props.theme.screen.laptopL} {
      font-size: 60px;
      flex-basis: 100%;
      /* flex:1; */

      &.header__h1--404 {
        font-size: 100px;
      }
    }
  }

  button {
    width: 197px;
    height: 57px;
    background: linear-gradient(256.03deg, #ffc700 -2.02%, #fed500 103.08%);
    border: none;
    color: ${props => props.theme.colors.white};
    font-size: 18px;
    cursor: pointer;
    outline: none;

    &:hover {
      background: ${props => props.theme.colors.mustard};
    }
  }

  .logo-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;

    .starkyslogo {
      width: 130px;
      height: 130px;
    }

    @media ${props => props.theme.screen.tablet} {
      ${({ compact }) =>
    !compact &&
    css`
          .starkyslogo {
            width: 178px !important;
            height: 185px !important;
          }
        `}
    }

    @media ${props => props.theme.screen.laptopL} {
      justify-content: initial;
      text-align: left;
      flex-direction: row;

      ${({ compact }) =>
    compact &&
    css`
          h1 {
            font-size: 2.2rem;
            margin-left: 2rem;
            padding-left: 2rem;
            border-left: 1px solid;
            margin-top: 0;
            margin-bottom: 0;
          }
        `}
    }
  }

  .text-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    @media ${props => props.theme.screen.laptop} {
      p {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: normal;
        font-size: 28px;
        line-height: 38px;
        margin-top: 7rem;
      }
    }
  }
`;

export default Header;
