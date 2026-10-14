import React, { useState } from 'react';

import { 
  Sprout, 
  Sun, 
  Droplets, 
  TrendingUp, 
  ShieldAlert, 
  Wheat, 
  LayoutDashboard, 
  LineChart as LineIcon, 
  Bell, 
  Search
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const chartData = [
    { month: 'Jan', Wheat: 3200, Rice: 3800 },
    { month: 'Feb', Wheat: 3400, Rice: 3900 },
    { month: 'Mar', Wheat: 3600, Rice: 4000 },
    { month: 'Apr', Wheat: 3800, Rice: 4200 },
  ];

  const marketPrices = [
    { crop: 'Wheat', price: 'Rs. 3,800 / 40kg', status: 'Up' },
    { crop: 'Rice', price: 'Rs. 4,200 / 40kg', status: 'Stable' },
    { crop: 'Cotton', price: 'Rs. 7,500 / 40kg', status: 'Up' },
    { crop: 'Maize', price: 'Rs. 2,400 / 40kg', status: 'Down' },
  ];

  return (
    <div style={styles.dashboardContainer}>
      {/* 1. LEFT SIDEBAR MENU */}
      <aside style={styles.sidebar}>
        <div style={styles.logoBox}>
          <Sprout size={32} color="#4caf50" />
          <h2 style={styles.logoText}>Farmer Hub</h2>
        </div>

        <nav style={styles.navMenu}>
          <button 
            style={activeTab === 'dashboard' ? styles.navItemActive : styles.navItem}
            onClick={() => setActiveTab('dashboard')}
          >
            <LayoutDashboard size={20} /> Dashboard
          </button>
          
          <button 
            style={activeTab === 'Weather' ? styles.navItemActive : styles.navItem}
            onClick={() => setActiveTab('Weather')}
          >
            <Sun size={20} /> Weather
          </button>

          <button 
            style={activeTab === 'Soil Moisture' ? styles.navItemActive : styles.navItem}
            onClick={() => setActiveTab('Soil Moisture')}
          >
            <Droplets size={20} /> Soil Moisture
          </button>

          <button 
            style={activeTab === 'rates' ? styles.navItemActive : styles.navItem}
            onClick={() => setActiveTab('rates')}
          >
            <TrendingUp size={20} /> Market Rates
          </button>

          <button 
            style={activeTab === 'Expert Advice' ? styles.navItemActive : styles.navItem}
            onClick={() => setActiveTab('Expert Advice')}
          >
            <ShieldAlert size={20} /> Expert Advice
          </button>
        </nav>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main style={styles.mainContent}>
        {/* Top Header Bar */}
        <header style={styles.topBar}>
          <div style={styles.searchBox}>
            <Search size={18} color="#666" />
            <input type="text" placeholder="Find the season or market..." style={styles.searchInput} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Bell size={22} color="#2e7d32" style={{ cursor: 'pointer' }} />
            <div style={styles.userBadge}>Farmer Brother</div>
          </div>
        </header>

        {/* Dashboard Title */}
        <h1 style={styles.pageTitle}>Agriculture Command Dashboard</h1>

        {/* Top Info Cards */}
        <div style={styles.gridCards}>
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <Sun size={24} color="#f57c00" />
              <span>Weather</span>
            </div>
            <h2 style={styles.cardValue}>28°C /Sunny</h2>
            <p style={styles.cardSub}>Optimal weather for crops.</p>
          </div>

          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <Droplets size={24} color="#0288d1" />
              <span>Soil Moisture</span>
            </div>
            <h2 style={styles.cardValue}>65% (Good)</h2>
            <p style={styles.cardSub}>Next irrigaation in 2 days.</p>
          </div>

          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <Wheat size={24} color="#7b1fa2" />
              <span>Active Field</span>
            </div>
            <h2 style={styles.cardValue}>12 Acres</h2>
            <p style={styles.cardSub}>Wheat and Rice crops are active.</p>
          </div>
        </div>

        {/* Graph & Chart Section */}
        <div style={styles.chartSection}>
          <h3 style={{ color: '#1b5e20', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <LineIcon size={20} /> Price Trend
          </h3>
          <div style={{ width: '100%', height: 250 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Wheat" stroke="#2e7d32" strokeWidth={3} />
                <Line type="monotone" dataKey="Rice" stroke="#0288d1" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Table Section */}
        <div style={styles.tableSection}>
          <h3 style={{ color: '#1b5e20', margin: '0 0 15px 0' }}>Price Trend</h3>
          <table style={styles.table}>
            <thead>
              <tr style={{ backgroundColor: '#e8f5e9' }}>
                <th style={styles.th}>Crop</th>
                <th style={styles.th}>Price</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {marketPrices.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={styles.td}>{item.crop}</td>
                  <td style={styles.td}>{item.price}</td>
                  <td style={styles.td}>
                    <span style={item.status === 'Up' ? styles.badgeGreen : styles.badgeRed}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}


           
// CSS styles written as JavaScript object
const styles = {
  dashboardContainer: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f7f5'
  },

  sidebar: {
    width: '230px',
    
    flexShrink: 0,
    backgroundColor: '#B7E4C7',
    padding: '20px',
    borderRight: '1px solid #ddd'
  },

  logoBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '30px'
  },

  logoText: {
    color: '#2e7d32'
  },

  navMenu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },

  navItem: {
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    background: 'transparent',
    textAlign: 'left',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },

  navItemActive: {
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#e8f5e9',
    color: '#2e7d32',
    textAlign: 'left',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },

  mainContent: {
    flex: 1,
    minWidth: 0,
    padding: '25px'
  },

  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '15px',
    flexWrap: 'wrap',
    marginBottom: '25px'
  },

  searchBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ddd'
  },

  searchInput: {
    border: 'none',
    outline: 'none',
    padding: '5px',
    minWidth: '180px'
  },

  userArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },

  userBadge: {
    backgroundColor: '#e8f5e9',
    padding: '10px 15px',
    borderRadius: '8px',
    color: '#2e7d32',
    fontWeight: 'bold'
  },

  pageTitle: {
    color: '#1b5e20',
    marginBottom: '25px'
  },

  gridCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '25px'
  },

  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px #00000010'
  },

  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#444'
  },

  cardValue: {
    color: '#2e7d32'
  },

  cardSub: {
    color: '#666',
    lineHeight: 1.5
  },

  chartSection: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '25px',
    boxShadow: '0 2px 8px #00000010'
  },

  sectionTitle: {
    color: '#1b5e20',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },

  tableSection: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    overflowX: 'auto',
    boxShadow: '0 2px 8px #00000010'
  },

  tableTitle: {
    color: '#1b5e20',
    margin: '0 0 15px 0'
  },

  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left'
  },

  th: {
    padding: '12px',
    whiteSpace: 'nowrap'
  },

  td: {
    padding: '12px',
    whiteSpace: 'nowrap'
  },

  badgeGreen: {
    backgroundColor: '#e8f5e9',
    color: '#2e7d32',
    padding: '5px 10px',
    borderRadius: '6px'
  },

  badgeRed: {
    backgroundColor: '#ffebee',
    color: '#c62828',
    padding: '5px 10px',
    borderRadius: '6px'
  },

  badgeNeutral: {
    backgroundColor: '#eeeeee',
    color: '#555',
    padding: '5px 10px',
    borderRadius: '6px'
  }
};


export default App;
