import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import styled, { css } from 'styled-components/macro'; //eslint-disable-line
import emailjs from '@emailjs/browser';
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from 'components/misc/Headings.js';
import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons.js';
import EmailIllustrationSrc from 'images/email-illustration.svg';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto pb-20 md:pb-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const Textarea = styled(Input).attrs({ as: 'textarea' })`
  ${tw`h-24`}
`;

const SubmitButton = tw(PrimaryButtonBase)`flex justify-center mt-8`;

const SVGImage = styled.svg`
  ${tw`animate-spin -ml-1 mr-3 h-5 w-5 text-white`}
  circle {
    ${tw`opacity-25`}
  }
  path {
    ${tw`opacity-75`}
  }
`;

const initialContactData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactUs = ({
  subheading = 'Contact Us',
  heading = (
    <>
      Feel free to <span tw="text-primary-500">get in touch</span>
      <wbr /> with us.
    </>
  ),
  description = 'Get in touch with our team to discuss your requirements and discover how we can help your business thrive in the digital age.',
  submitButtonText = 'Send Message',
  textOnLeft = true,
  preFillEmail,
  handleEmailChange,
}) => {
  const [contactData, setContactData] = useState(initialContactData);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  useEffect(() => {
    setContactData({ ...contactData, email: preFillEmail });
  }, [preFillEmail]);

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    setContactData({ ...contactData, [field]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitting(true);
    emailjs
      .send(
        // process.env.SERVICE_ID,
        'service_lct9g2f',
        // process.env.TEMPLATE_ID,
        'template_95r6a11',
        contactData,
        '4nTKR4DwC0p2mPPvj'
        // process.env.USER_ID
      )
      .then(
        (response) => {
          alert("Message Sent, we'll get back to you shortly");
          setContactData(initialContactData);
          handleEmailChange('');
          setIsFormSubmitting(false);
        },
        (err) => {
          alert('An error occured, Plese try again');
          handleEmailChange('');
          setIsFormSubmitting(false);
        }
      );
  };

  return (
    <Container id="contact">
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form onSubmit={onSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                value={contactData.name}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email Address"
                onChange={handleChange}
                value={contactData.email}
                required
              />
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                onChange={handleChange}
                value={contactData.subject}
              />
              <Textarea
                name="message"
                placeholder="Your Message Here"
                onChange={handleChange}
                value={contactData.message}
                required
              />
              <SubmitButton disabled={isFormSubmitting}>
                {isFormSubmitting && (
                  <SVGImage
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </SVGImage>
                )}
                {!isFormSubmitting ? submitButtonText : 'Sending Message'}
              </SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

export default ContactUs;
