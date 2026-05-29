import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CertificationsGrid from '../components/CertificationsGrid';
import { ArrowLeft, Award } from 'lucide-react';
import { useEffect } from 'react';

export default function CertificationsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '120px', paddingBottom: '100px', minHeight: '100vh' }}>
        <section className="detail-container">
          {/* Back Navigation */}
          <div style={{ marginBottom: '2.5rem' }}>
            <Link to="/" className="btn-outline" style={{ display: 'inline-flex', padding: '8px 16px', fontSize: '0.9rem' }}>
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </div>

          {/* Header */}
          <div className="detail-header" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Award size={32} style={{ color: 'var(--accent-purple)' }} />
            <div>
              <h1 className="detail-title" style={{ margin: 0 }}>Licenses & Certifications</h1>
              <p style={{ color: 'var(--text-muted)' }}>Professional accomplishments and credentials validating technical competency in development, cloud, and networking.</p>
            </div>
          </div>

          {/* Grid of Certifications */}
          <div style={{ marginTop: '3rem' }}>
            <CertificationsGrid />
          </div>
        </section>
      </div>
    </>
  );
}
