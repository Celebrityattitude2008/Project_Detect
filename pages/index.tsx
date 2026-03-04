import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ResultsDashboard, { RiskLevel } from '../components/ResultsDashboard';
import SafetyTips from '../components/SafetyTips';
import { analyzeURL } from '../utils/detector';

const Home: React.FC = () => {
  const [risk, setRisk] = useState<RiskLevel | null>(null);
  const [findings, setFindings] = useState<{ description: string }[]>([]);

  const handleSearch = (url: string) => {
    const report = analyzeURL(url);
    console.log('analysis report', report);   // open browser console to see details

    // Map verdict to RiskLevel
    const riskMap: { [key: string]: RiskLevel } = {
      'Safe': 'Low',
      'Moderate Risk': 'Medium',
      'High Risk': 'High'
    };
    
    setRisk(riskMap[report.verdict] || 'Low');
    setFindings(report.flags.map(flag => ({ description: flag })));
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>URL Safety Checker</h1>
      <SearchBar onSearch={handleSearch} />
      {risk && <ResultsDashboard risk={risk} findings={findings} />}
      <SafetyTips />
    </div>
  );
};

export default Home;