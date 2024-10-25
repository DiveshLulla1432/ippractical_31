import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Make sure to import your CSS

const App = () => {
  const [articles, setArticles] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    axios.get('/api/articles')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/contact', formData, {
      headers: {
        'Content-Type': 'application/json', // Ensure content type is JSON
      },
    })
      .then(response => {
        setStatusMessage("Your message has been sent!");
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(error => {
        console.error("Error sending message:", error.response ? error.response.data : error.message);
        setStatusMessage("There was an error. Please try again.");
      });
  };

  return (
  <div>
      <nav className="navbar">
        <ul>
          <li><a href="#about">Career Guidance Blog</a></li>
        </ul>
      </nav>

      <section id="articles">
        <h2>Articles</h2>
        <div className="articles-box">
          <legend>Navigating Career Transitions in a Changing Job Market</legend>
          <p>Career transitions can be challenging but also present unique opportunities for growth and reinvention. In a rapidly evolving job market, professionals may find themselves needing to pivot to new roles or industries due to technological advancements or shifts in demand. To navigate these transitions successfully, individuals should engage in self-reflection to assess their skills, interests, and values. Networking and leveraging connections can also provide insights into new opportunities and trends. Additionally, seeking out training or educational resources can equip individuals with the necessary skills to thrive in their new roles. Embracing change with a proactive mindset allows professionals to turn potential obstacles into stepping stones for career advancement.</p>
        </div>

      <div className="articles-box1">
        <legend>The Importance of Career Development: A Guide for Professionals </legend>
        <p>Mentorship plays a pivotal role in career development by providing guidance, support, and encouragement from more experienced professionals. Engaging with a mentor can offer valuable insights into industry trends, enhance skill sets, and help mentees navigate career challenges. Effective mentorship relationships are built on mutual respect, open communication, and shared goals. Mentors can help mentees set achievable career goals, provide feedback on their performance, and facilitate networking opportunities. By seeking out mentorship, individuals can gain confidence and clarity in their career paths, making informed decisions that align with their aspirations.</p>
      </div>

    <div className="articles-box2">
        <legend> The Impact of Emotional Intelligence on Career Success </legend>
        <p> Emotional intelligence (EI) is increasingly recognized as a crucial factor in career development. It involves the ability to understand and manage one's emotions while also empathizing with others. Professionals with high EI can navigate workplace dynamics more effectively, build strong relationships, and lead teams with compassion and understanding. Employers value candidates who can demonstrate EI because it often correlates with better teamwork, communication, and conflict resolution skills. By cultivating emotional intelligence through self-awareness, active listening, and empathy, individuals can enhance their professional interactions and pave the way for career advancement.</p>
      </div>
      </section>
  

      <section id="contact">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </label>
          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleInputChange} required />
          </label>
          <button type="submit">Send</button>
        </form>
        {statusMessage && <p>{statusMessage}</p>}
      </section>
    </div>
  );
};

export default App;
