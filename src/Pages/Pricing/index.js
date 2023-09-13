import React from 'react';
import './index.scss';

const PRICING = [
  {
    name: 'Basic',
    price: '$4.99',
    benefits: [
      'Recording incoming items',
      'Recording outgoing items',
      'Recording profit outcomes',
    ],
    button: 'Try It',
  },
  {
    name: 'Business',
    price: '$14.99',
    benefits: [
      'Recording incoming and outgoing items',
      'Recording Profits',
      'Analyzing sales results with CHART',
      '24/7 Support',
    ],
    button: 'Start Now',
  },
  {
    name: 'Enterpreneur',
    price: '$29.99',
    benefits: [
      'Recording incoming and outgoing items',
      'Recording Profits',
      'Analyzing sales results with CHART',
      '24/7 Support',
      'Exporting data to Excel',
      'AI Income Prediction',
    ],
    button: 'Grow With Us',
  },
];

export default function Pricing() {
  return (
    <div className='page-wrapper'>
      <div className='top-wrapper'>
        <div className="blob-deco-1"></div>
        <div className="pricing-wrapper">
          <h1>Choose the Plan That Fits Your Needs</h1>
          <h2>Explore Our Flexible Pricing Options and Get Started Today</h2>
          <div className="card-wrapper">
            {
              PRICING.map((pricing) => 
                <div className="card">
                  <p className="plan-name">{pricing.name}</p>
                  <p className="plan-price">{pricing.price}</p>
                  <ul className="benefits">
                    {
                      pricing.benefits.map((benefit) =>
                        <li>{benefit}</li>
                      )
                    }
                  </ul>
                  <button className="subs-button">
                    {pricing.button}
                  </button>
                </div>
              )
            }
          </div>
        </div>
        <div className="blob-deco-2"></div>
        <div className="blob-deco-3"></div>
      </div>
    </div>
  );
}