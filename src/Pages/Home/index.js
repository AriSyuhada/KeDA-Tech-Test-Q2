import React from 'react';
import './index.scss';

const INFO = [
  {
    question: "What inspired the creation of Start-App?",
    answer: "Start-App was born out of a desire to bring efficiency and clarity to the world of business management. The founders were inspired by the challenges faced by businesses in keeping track of their inventory and profits. They envisioned a tool that would simplify these tasks and empower businesses to thrive.",
  },
  {
    question: "How does Start-App simplify inventory management?",
    answer: "Start-App simplifies inventory management by allowing businesses to effortlessly record every item that enters and exits their doors. It provides a user-friendly interface for tracking inventory in real time, eliminating the need for manual record-keeping and reducing the risk of errors."
  },
  {
    question: "What sets Start-App apart from other business management tools?",
    answer: "What sets Start-App apart is its dual functionality. Not only does it streamline inventory management, but it also calculates profits in real time. This unique combination empowers businesses to make informed decisions based on accurate data, ultimately maximizing their profitability.",
  },
  {
    question: "How does Start-App support businesses on their journey to success?",
    answer: "Start-App supports businesses by providing a reliable partner in their pursuit of success. Our dedicated team is committed to listening to our users' needs and continually improving the app. We aim to be more than just software; we want to be a valuable asset in every business owner's toolkit, helping them thrive, grow, and prosper in today's competitive market.",
  },
];

export default function Home() {
  return (
    <div className='page-wrapper'>
      <div className='top-wrapper'>
        <div className="blob-deco-1"></div>
        <img className='illustration' src="/illustrations/home.png" alt="management" />
        <h1 className='tagline'>Streamline Your Business Operations with Our App: Record, Track, and Maximize Profits Effortlessly!</h1>
        <div className="blob-deco-2"></div>
        <div className="blob-deco-3"></div>
      </div>
      <div className="mid-wrapper">
        <h2>GET TO KNOW</h2>
        <div className="informations-wrapper">
          {
            INFO.map((info) => 
              <>
                <div className="info">
                  <p className="question">{info.question}</p>
                  <p className="answer">{info.answer}</p>
                </div>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
}