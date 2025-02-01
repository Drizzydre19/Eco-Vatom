export default function LandingPage() {
  return (
    <div style={{ 
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
      minHeight: '100vh',
      padding: '2rem',
      color: 'white',
      textAlign: 'center'
    }}>
      <h1>Welcome to Eco-Vatom</h1>
      <h2 style={{ fontStyle: 'italic' }}>{typography.motto}</h2>
      {/* Interactive elements would go here */}
    </div>
  );
}
