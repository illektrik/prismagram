import nodemailer from 'nodemailer';

import {adjectives, nouns} from "./words";
const SibApiV3Sdk = require('sib-api-v3-sdk');

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`
};

export const sendMail = (email) => {
  return null
};

export const sendSecretMail = (adress, secret) => {
  const email = {
    from: "fucker@prismagram.com",
    to: adress,
    subject: 'Login secret for prismagram',
    html: `Hello, your login secret is ${secret}.<br/> Copy paste to log in!`
  }
};