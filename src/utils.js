import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.resolve(__dirname, ".env")});

import {adjectives, nouns} from "./words";
const SibApiV3Sdk = require('sib-api-v3-sdk');

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`
};

export const sendMail = (email) => {
  const client = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD
    }
  });
  return client.sendMail(email)
};

export const sendSecretMail = (adress, secret) => {
  const email = {
    from: "info@prismagram.com",
    to: adress,
    subject: 'Login secret for prismagram',
    html: `Hello, your login secret is <strong>${secret}</strong>.<br/> Copy paste to log in!`
  };
   try {
     sendMail(email);
   } catch (err) {
     console.log(err)
  }
};

export const generateToken = (id) => jwt.sign({id}, process.env.JWT_SECRET);