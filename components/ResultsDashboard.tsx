import React from 'react';

export type RiskLevel = 'Low' | 'Medium' | 'High';

interface Finding {
  description: string;
}

interface ResultsDashboardProps {
  risk: RiskLevel;
  findings: Finding[];
}

const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ risk, findings }) => {
  const color = risk === 'High' ? '#e74c3c'
              : risk === 'Medium' ? '#f1c40f'
              : '#2ecc71';

  return (
    <div style={{ marginTop: '2rem' }}>
      <div style={{ padding: '1rem', backgroundColor: color, borderRadius: '4px' }}>
        <strong>Risk Level:</strong> {risk}        {/* ← uses the prop */}
      </div>
      <ul style={{ marginTop: '1rem' }}>
        {findings.map((f, idx) => (
          <li key={idx} style={{ padding: '0.5rem 0' }}>
            {f.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsDashboard;
