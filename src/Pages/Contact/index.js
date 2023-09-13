import React from 'react';
import './index.scss';

const FAQS = [
  {
    question: "How do I subscribe to a plan?",
    answer: "Select a subscription plan on pricing page and click on the respective call-to-action button to proceed.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely! you can cancel your subscription anytime without any hidden charges."
  },
  {
    question: "Do I get a refund if I cancel?",
    answer: "Yes, we follow a prorated refund policy after cancellation.",
  },
  {
    question: "How long does it take to set up?",
    answer: "Once you've signed up, it takes just a few moments to complete the setup.",
  },
];

export default function Contact() {
  return (
    <div className='page-wrapper'>
      <div className='top-wrapper'>
        <div className="blob-deco-1"></div>
        <img className='illustration' src="/illustrations/contact.png" alt="management" />
        <div className='contact-form'>
          <h1>Drop us a line</h1>
          <form action="">
            <label htmlFor="name">Full Name</label>
            <input type="text" name='name' id='name' />
            <label htmlFor="email">Email Address</label>
            <input type="email" name='email' id='email' />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
            <input className='submit' type="submit" value='Submit' />
          </form>
        </div>
        <div className="blob-deco-2"></div>
        <div className="blob-deco-3"></div>
      </div>
      <div className="mid-wrapper">
        <h2>FAQs</h2>
        <div className="informations-wrapper">
          {
            FAQS.map((faq) => 
              <>
                <div className="info">
                  <p className="question">{faq.question}</p>
                  <p className="answer">{faq.answer}</p>
                </div>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
}