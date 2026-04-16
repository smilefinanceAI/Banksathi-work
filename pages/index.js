// pages/index.js - Complete Homepage
import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [offers, setOffers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  
  const ADVISER_CODE = "110037218";
  const CONTACT = "9773747761";

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    
    // Demo offers - Banksathi API se connect hoga
    setTimeout(() => {
      setOffers([
        { bankName: "HDFC Bank", interestRate: "8.5%", processingFee: "0.5%", maxAmount: "40 Lakhs", tenure: "1-5 Years" },
        { bankName: "SBI Bank", interestRate: "8.9%", processingFee: "0.35%", maxAmount: "50 Lakhs", tenure: "1-7 Years" },
        { bankName: "ICICI Bank", interestRate: "9.2%", processingFee: "1%", maxAmount: "35 Lakhs", tenure: "1-6 Years" },
        { bankName: "Axis Bank", interestRate: "9.8%", processingFee: "0.75%", maxAmount: "30 Lakhs", tenure: "1-5 Years" }
      ]);
      setLoading(false);
    }, 1000);
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    alert(`✅ Thank you ${formData.name}! Banksathi expert will call you on ${formData.phone} within 1 hour.\n\nAdviser Code: ${ADVISER_CODE}`);
    setShowForm(false);
    setFormData({ name: '', phone: '' });
  };

  const handleCall = () => {
    window.location.href = `tel:${CONTACT}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${CONTACT}?text=Hi, I need loan advice. My adviser code is ${ADVISER_CODE}`, '_blank');
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.logo}>🏦 LoanSearchIndia</div>
        <div style={styles.contactBar}>
          <button onClick={handleCall} style={styles.callBtn}>📞 Call {CONTACT}</button>
          <button onClick={handleWhatsApp} style={styles.wpBtn}>💬 WhatsApp</button>
        </div>
      </div>

      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.title}>Find Best Loan & Financial Products in India</h1>
        <p style={styles.subtitle}>Compare Personal Loan, Home Loan, Credit Card, Demat Account from 50+ Banks</p>
        
        {/* Search Form */}
        <form onSubmit={handleSearch} style={styles.form}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: personal loan 50000, home loan, credit card..."
            style={styles.input}
            disabled={loading}
          />
          <button type="submit" style={styles.searchBtn} disabled={loading}>
            {loading ? 'Searching...' : 'Get Best Offer →'}
          </button>
        </form>
        
        {/* Suggestions */}
        <div style={styles.suggestions}>
          {['💰 Personal Loan 50,000', '🏠 Home Loan 25 Lakhs', '💼 Business Loan', '💳 Best Credit Card', '📈 Demat Account'].map(s => (
            <button key={s} onClick={() => setQuery(s)} style={styles.suggestionChip}>{s}</button>
          ))}
        </div>
      </div>

      {/* Results Section */}
      {offers.length > 0 && (
        <div style={styles.results}>
          <h2 style={styles.sectionTitle}>🎯 Best Offers For You</h2>
          <div style={styles.grid}>
            {offers.map((offer, i) => (
              <div key={i} style={styles.card}>
                <div style={styles.cardHeader}>
                  <span style={styles.bankIcon}>🏦</span>
                  <h3 style={styles.bankName}>{offer.bankName}</h3>
                </div>
                <div style={styles.cardDetails}>
                  <p>Interest: <strong style={styles.highlight}>{offer.interestRate}</strong></p>
                  <p>Processing Fee: {offer.processingFee}</p>
                  <p>Max Amount: {offer.maxAmount}</p>
                  <p>Tenure: {offer.tenure}</p>
                </div>
                <button onClick={() => setShowForm(true)} style={styles.applyBtn}>
                  Apply Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lead Form Modal */}
      {showForm && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h3>Get Expert Call Back</h3>
            <form onSubmit={handleLeadSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={styles.modalInput}
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                required
                pattern="[0-9]{10}"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                style={styles.modalInput}
              />
              <button type="submit" style={styles.modalBtn}>Submit</button>
              <button type="button" onClick={() => setShowForm(false)} style={styles.closeBtn}>Close</button>
            </form>
          </div>
        </div>
      )}

      {/* Categories Section */}
      <div style={styles.categories}>
        <h2 style={styles.sectionTitle}>Popular Financial Products</h2>
        <div style={styles.categoryGrid}>
          {[
            { name: "Personal Loan", icon: "💰", color: "#FF6B35" },
            { name: "Home Loan", icon: "🏠", color: "#28A745" },
            { name: "Business Loan", icon: "💼", color: "#17A2B8" },
            { name: "Credit Card", icon: "💳", color: "#6F42C1" },
            { name: "Demat Account", icon: "📈", color: "#FD7E14" },
            { name: "Savings Account", icon: "💰", color: "#20C997" }
          ].map((cat, i) => (
            <div key={i} style={{...styles.categoryCard, borderTop: `4px solid ${cat.color}`}}>
              <span style={styles.categoryIcon}>{cat.icon}</span>
              <h3>{cat.name}</h3>
              <button onClick={() => setQuery(`${cat.name}`)} style={styles.categoryBtn}>Apply Now →</button>
            </div>
          ))}
        </div>
      </div>

      {/* Cities Section */}
      <div style={styles.cities}>
        <h2 style={styles.sectionTitle}>Pan India Service</h2>
        <div style={styles.cityGrid}>
          {['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'].map(city => (
            <button key={city} onClick={() => setQuery(`Loan in ${city}`)} style={styles.cityBtn}>
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <p>© 2024 LoanSearchIndia | Adviser Code: {ADVISER_CODE}</p>
        <p style={styles.disclaimer}>*Terms & Conditions Apply. Interest rates may vary based on CIBIL score.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  header: {
    background: 'white',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent'
  },
  contactBar: {
    display: 'flex',
    gap: '10px'
  },
  callBtn: {
    padding: '8px 16px',
    background: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer'
  },
  wpBtn: {
    padding: '8px 16px',
    background: '#25D366',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer'
  },
  hero: {
    textAlign: 'center',
    padding: '60px 20px',
    color: 'white'
  },
  title: {
    fontSize: '48px',
    marginBottom: '20px'
  },
  subtitle: {
    fontSize: '18px',
    marginBottom: '30px',
    opacity: 0.9
  },
  form: {
    display: 'flex',
    maxWidth: '600px',
    margin: '0 auto',
    gap: '10px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  input: {
    flex: 1,
    padding: '16px 24px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '50px',
    outline: 'none',
    minWidth: '250px'
  },
  searchBtn: {
    padding: '16px 32px',
    background: '#ff6b35',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  suggestions: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    marginTop: '20px',
    flexWrap: 'wrap'
  },
  suggestionChip: {
    padding: '8px 16px',
    background: 'rgba(255,255,255,0.2)',
    border: '1px solid rgba(255,255,255,0.3)',
    borderRadius: '30px',
    color: 'white',
    cursor: 'pointer'
  },
  results: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px'
  },
  sectionTitle: {
    textAlign: 'center',
    color: 'white',
    marginBottom: '30px',
    fontSize: '32px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px'
  },
  card: {
    background: 'white',
    borderRadius: '20px',
    padding: '24px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    paddingBottom: '15px',
    borderBottom: '2px solid #f0f0f0',
    marginBottom: '15px'
  },
  bankIcon: {
    fontSize: '32px'
  },
  bankName: {
    fontSize: '20px',
    color: '#333'
  },
  cardDetails: {
    marginBottom: '20px'
  },
  highlight: {
    color: '#ff6b35',
    fontSize: '18px'
  },
  applyBtn: {
    width: '100%',
    padding: '12px',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  modalContent: {
    background: 'white',
    padding: '30px',
    borderRadius: '20px',
    width: '90%',
    maxWidth: '400px'
  },
  modalInput: {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '10px',
    fontSize: '16px'
  },
  modalBtn: {
    width: '100%',
    padding: '12px',
    background: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    marginTop: '10px'
  },
  closeBtn: {
    width: '100%',
    padding: '12px',
    background: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    marginTop: '10px'
  },
  categories: {
    maxWidth: '1200px',
    margin: '60px auto',
    padding: '0 20px'
  },
  categoryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px'
  },
  categoryCard: {
    background: 'white',
    borderRadius: '15px',
    padding: '25px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s'
  },
  categoryIcon: {
    fontSize: '40px',
    display: 'block',
    marginBottom: '15px'
  },
  categoryBtn: {
    marginTop: '15px',
    padding: '8px 20px',
    background: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer'
  },
  cities: {
    background: 'white',
    padding: '40px 20px',
    textAlign: 'center'
  },
  cityGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
    marginTop: '20px'
  },
  cityBtn: {
    padding: '10px 20px',
    background: '#f0f0f0',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer'
  },
  footer: {
    background: '#1a1a2e',
    color: 'white',
    padding: '30px 20px',
    textAlign: 'center'
  },
  disclaimer: {
    fontSize: '12px',
    opacity: 0.7,
    marginTop: '10px'
  }
};
