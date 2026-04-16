// lib/seo-data.js - SEO Content for all pages
export const generateSEOMeta = (title, description, keywords, canonical) => {
  return {
    title: `${title} | Banksathi Financial Services`,
    description: description,
    keywords: keywords,
    canonical: `https://yourdomain.com${canonical}`,
    ogTitle: title,
    ogDescription: description,
    ogType: "website"
  };
};

// Page-specific SEO data
export const seoData = {
  home: {
    title: "Best Financial Products in India - Loans, Credit Cards, Demat, Savings",
    description: "Compare and apply for personal loan, home loan, credit card, demat account, savings account. Get best interest rates and offers from 50+ banks. Pan India service.",
    keywords: "personal loan, home loan, business loan, credit card, demat account, savings account, fixed deposit, insurance, loan India"
  },
  
  personalLoan: {
    title: "Personal Loan - Get Instant Approval Up to ₹40 Lakhs | Low Interest 10.5%",
    description: "Apply for personal loan online. Get instant approval, low interest rates starting 10.5%, flexible tenure. Compare offers from HDFC, SBI, ICICI, Axis Bank.",
    keywords: "personal loan, instant personal loan, personal loan 50000, urgent personal loan, low cibil personal loan"
  },
  
  homeLoan: {
    title: "Home Loan - Lowest Interest Rate 8.5% | Apply Online Up to ₹5 Crore",
    description: "Apply for home loan online. Get lowest interest rates starting 8.5%, maximum loan up to ₹5 Crore, flexible tenure up to 30 years.",
    keywords: "home loan, home loan interest rate, house loan, home loan eligibility, SBI home loan, HDFC home loan"
  },
  
  creditCard: {
    title: "Best Credit Cards in India 2024 - Compare & Apply Online | Zero Annual Fee",
    description: "Compare best credit cards from HDFC, SBI, ICICI, Axis. Get cashback, lounge access, fuel surcharge waiver. Apply online with instant approval.",
    keywords: "credit card, best credit card, credit card apply, HDFC credit card, SBI credit card, ICICI credit card, lifetime free credit card"
  },
  
  demat: {
    title: "Open Demat Account Online - Zero AMC | Compare Zerodha, Groww, Angel One",
    description: "Open free demat account online. Compare Zerodha, Groww, Angel One, Upstox. Zero account opening fees, low brokerage, easy trading platform.",
    keywords: "demat account, open demat account, best demat account, zerodha demat, groww demat, angel one demat, free demat account"
  },
  
  savingAccount: {
    title: "Best Savings Account - Zero Balance | High Interest Up to 5%",
    description: "Open savings account online with zero balance. Get high interest rates, free debit card, mobile banking. Compare HDFC, SBI, ICICI, Axis.",
    keywords: "savings account, zero balance savings account, salary account, women savings account, senior citizen savings account"
  },
  
  insurance: {
    title: "Best Insurance Plans - Term, Health, Car, Life | Compare & Save",
    description: "Compare best insurance plans - term insurance, health insurance, car insurance, life insurance. Get coverage up to ₹1 Crore, low premium.",
    keywords: "term insurance, health insurance, car insurance, life insurance, best insurance, mediclaim"
  },
  
  fd: {
    title: "Fixed Deposit - Best FD Rates 7.5% | Senior Citizen Special Rates",
    description: "Compare fixed deposit rates from SBI, HDFC, ICICI. Get up to 7.5% interest, senior citizen special rates, tax saving FD options.",
    keywords: "fixed deposit, FD rates, best FD, SBI FD, HDFC FD, tax saving FD, senior citizen FD"
  }
};

export const generateCitySEO = (cityName, productType) => {
  const productNames = {
    "personal-loan": "Personal Loan",
    "home-loan": "Home Loan",
    "business-loan": "Business Loan",
    "credit-card": "Credit Card",
    "demat": "Demat Account",
    "saving": "Savings Account"
  };
  
  const product = productNames[productType] || productType;
  
  return {
    title: `Best ${product} in ${cityName} | Apply Online | Low Interest Rates`,
    description: `Get best ${product.toLowerCase()} in ${cityName}. Compare offers from top banks, low interest rates, instant approval. Apply online in 5 minutes.`,
    keywords: `${product.toLowerCase()} in ${cityName}, ${cityName} ${product.toLowerCase()}, apply ${product.toLowerCase()} online ${cityName}, best ${product.toLowerCase()} ${cityName}`
  };
};
