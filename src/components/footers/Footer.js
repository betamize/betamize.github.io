import React from 'react';
import tw from 'twin.macro';
import styled, { css } from 'styled-components/macro'; //eslint-disable-line
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { ReactComponent as FacebookIcon } from 'images/facebook-icon.svg';
// import { ReactComponent as TwitterIcon } from 'images/twitter-icon.svg';
import { ReactComponent as LinkedinIcon } from 'images/linkedin-icon.svg';

const Container = tw.div`relative bg-gray-900 text-gray-100 -mx-8 -mb-8 px-8`;
const Content = tw.div`max-w-screen-xl mx-auto pt-16 pb-8`;
const FiveColumns = tw.div`flex flex-wrap justify-between`;

const Column = tw.div`w-1/2 md:w-1/5 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left`;
const CompanyColumn = tw.div`text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/5`;

const ColumnHeading = tw.h5`font-bold uppercase`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300`;
const LinkSmooth = tw(
  AnchorLink
)`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center lg:justify-start`;
const LogoText = tw.h5`ml-2 text-xl font-black`;

const SocialLinksContainer = tw.div`text-center lg:text-left flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-500 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const CopyrightAndCompanyInfoRow = tw.div`flex flex-col md:flex-row items-center justify-between`;
const CopyrightNotice = tw.div``;

const Divider = tw.div`my-8 border-b-2 border-gray-800`;
const Footer = () => {
  return (
    <Container>
      <Content>
        <FiveColumns>
          <CompanyColumn>
            <LogoContainer>
              {/* <LogoImg src={LogoImage} /> */}
              <LogoText>BetaMize</LogoText>
            </LogoContainer>
          </CompanyColumn>
          <Column>
            <LinkList>
              <LinkListItem>
                <LinkSmooth href="#root">Home</LinkSmooth>
              </LinkListItem>
              <LinkListItem>
                <LinkSmooth href="#about">About Us</LinkSmooth>
              </LinkListItem>
              <LinkListItem>
                <LinkSmooth href="#process">Our Process</LinkSmooth>
              </LinkListItem>
              <LinkListItem>
                <LinkSmooth href="#contact">Contact Us</LinkSmooth>
              </LinkListItem>
            </LinkList>
          </Column>

          <Column>
            <ColumnHeading>Contact</ColumnHeading>
            <LinkList>
              <LinkListItem>(+91) 997 712 7384</LinkListItem>
              <LinkListItem>
                <Link href="mailto:contact@betamize.com">
                  contact@betamize.com
                </Link>
              </LinkListItem>
            </LinkList>
          </Column>
        </FiveColumns>
        <Divider />
        <CopyrightAndCompanyInfoRow>
          <CopyrightNotice>&copy; Copyright 2023, BetaMize</CopyrightNotice>
          <SocialLinksContainer>
            <SocialLink
              href="https://linkedin.com/company/betamize"
              aria-label="Linkedin"
              target="_blank"
            >
              <LinkedinIcon />
            </SocialLink>
            <SocialLink
              href="https://www.facebook.com/betamize"
              aria-label="Facebook"
              target="_blank"
            >
              <FacebookIcon />
            </SocialLink>
            {/* <SocialLink
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
            >
              <TwitterIcon />
            </SocialLink> */}
          </SocialLinksContainer>
        </CopyrightAndCompanyInfoRow>
      </Content>
    </Container>
  );
};

export default Footer;
