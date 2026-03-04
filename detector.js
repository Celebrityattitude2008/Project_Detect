export function analyzeURL(url) {
    let score = 0;
    let reasons = [];

    // Clean the URL for analysis
    const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
    const normalized = url.toLowerCase();
    const hostname = urlObj.hostname;
    const path = urlObj.pathname;

    // 1. Length Check (Your Step 1)
    if (url.length > 54) {
        score += 10;
        reasons.push("URL is unusually long (common in phishing)");
    }

    // 2. Suspicious Keywords (Your Step 2)
    const suspiciousTerms = ['secure', 'login', 'verify', 'update', 'banking', 'account', 'signin'];
    suspiciousTerms.forEach(term => {
        if (hostname.includes(term) || path.includes(term)) {
            score += 20;
            reasons.push(`Contains suspicious keyword: "${term}"`);
        }
    });

    // 3. Subdomain Check
    // e.g., "paypal.com.security-update.io" has too many dots
    const dotCount = (hostname.match(/\./g) || []).length;
    if (dotCount > 3) {
        score += 15;
        reasons.push("Excessive subdomains detected");
    }

    // 4. IP Address Check
    // Real banks don't ask you to visit http://192.168.1.1/login
    const ipRegex = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
    if (ipRegex.test(hostname)) {
        score += 40;
        reasons.push("URL uses an IP address instead of a domain name");
    }

    // 5. Dash/Hyphen Check
    // Phishers use dashes to mimic real brands (e.g., "google-login.com")
    if (hostname.includes('-')) {
        score += 10;
        reasons.push("Presence of hyphens in domain (common in fake sites)");
    }

    // Determine Verdict
    let result = "Safe";
    if (score >= 50) result = "High Risk";
    else if (score >= 25) result = "Moderate Risk";

    return {
        url: url,
        riskScore: score,
        verdict: result,
        flags: reasons
    };
}

// Example Usage:
const report = analyzeURL("http://secure-paypal-login.account-update.com/verify");
console.log(report);