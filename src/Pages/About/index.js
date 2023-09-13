import React from 'react';
import './index.scss';

export default function About() {
  return (
    <div className='page-wrapper'>
      <div className='top-wrapper'>
        <div className="blob-deco-1"></div>
        <div className='about-wrapper'>
          <h1 className='tagline'>Effortless Inventory Management & Profit Optimization</h1>
          <p>Our app simplifies the task of tracking items coming in and going out of your business while providing real-time profit calculations. Stay in control, make informed decisions, and boost your bottom line effortlessly with Start-App.</p>
        </div>
        <img className='illustration' src="/illustrations/about.png" alt="management" />
        <div className="blob-deco-2"></div>
        <div className="blob-deco-3"></div>
      </div>
      <div className="mid-wrapper">
        <h2>Our Story: Revolutionizing Business Management</h2>
        <p>
          In the bustling heart of our city, nestled among the thriving businesses, a simple yet transformative idea was born: an application that would change the way businesses manage their inventory and profits. This idea sprang from the need to bring efficiency and clarity to the often complex world of commerce.
          Meet Start-App, a brainchild born out of a desire to simplify and empower businesses of all sizes. Our journey began with a shared passion for innovation and a vision to make business operations smoother, more intuitive, and ultimately, more profitable.
          We understand the challenges that businesses face every day, from tracking every item that enters and exits their doors to ensuring that every transaction contributes to a healthy bottom line. It's a task that can be daunting, time-consuming, and prone to human error.
          That's where Start-App comes in.
          Our app is not just a tool; it's a partner in your business success story. It allows you to effortlessly record every item that comes in and goes out, providing you with a real-time snapshot of your inventory. But it doesn't stop there. Start-App is your trusty calculator too, capable of crunching the numbers and giving you a clear view of your profits at any given moment.
          Imagine the freedom of knowing that your inventory is always accurate, that you can make informed decisions based on real-time data, and that you can maximize your profits with ease.
          At Start-App, we're not just about creating software; we're about transforming the way you do business. Our team of dedicated professionals is driven by a passion for excellence and a commitment to your success. We're here to support you, to listen to your needs, and to ensure that Start-App is a valuable asset for your business.
          As we continue on this journey, we're excited to help businesses like yours thrive, grow, and prosper. Thank you for being part of our story, and we look forward to being part of yours.
          Welcome to a new era of business management. Welcome to Start-App.
        </p>
      </div>
    </div>
  );
}