import React from 'react';

const tips = [
  "Always check the URL carefully before clicking.",
  "Look for HTTPS and a padlock symbol.",
  "Avoid entering personal information on untrusted sites.",
  "Use a reputable antivirus or browser protection tool.",
];

const SafetyTips: React.FC = () => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Safety Tips</h2>
      <ul>
        {tips.map((t, idx) => (
          <li key={idx} style={{ padding: '0.5rem 0' }}>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SafetyTips;
