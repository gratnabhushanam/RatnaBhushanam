import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProjectsGrid from '../components/ProjectsGrid';
import { ArrowLeft, Folder } from 'lucide-react';
import { useEffect } from 'react';

export default function ProjectsPage() {
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
            <Folder size={32} style={{ color: 'var(--accent-cyan)' }} />
            <div>
              <h1 className="detail-title" style={{ margin: 0 }}>My Projects</h1>
              <p style={{ color: 'var(--text-muted)' }}>Explore detailed full-stack applications, client interfaces, and backend systems.</p>
            </div>
          </div>

          {/* Grid of Projects */}
          <div style={{ marginTop: '3rem' }}>
            <ProjectsGrid />
          </div>
        </section>
      </div>
    </>
  );
}
