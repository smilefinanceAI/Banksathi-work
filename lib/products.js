// lib/products.js - All Financial Products Data
export const loanProducts = [
  { id: "personal-loan", name: "Personal Loan", minAmount: "10,000", maxAmount: "40 Lakhs", interest: "10.5%", tenure: "1-5 years", processingFee: "1%", icon: "💰" },
  { id: "home-loan", name: "Home Loan", minAmount: "5 Lakhs", maxAmount: "5 Crore", interest: "8.5%", tenure: "5-30 years", processingFee: "0.5%", icon: "🏠" },
  { id: "business-loan", name: "Business Loan", minAmount: "50,000", maxAmount: "2 Crore", interest: "12%", tenure: "1-7 years", processingFee: "1.5%", icon: "💼" },
  { id: "gold-loan", name: "Gold Loan", minAmount: "5,000", maxAmount: "50 Lakhs", interest: "9%", tenure: "1-3 years", processingFee: "0.5%", icon: "✨" },
  { id: "education-loan", name: "Education Loan", minAmount: "1 Lakh", maxAmount: "1.5 Crore", interest: "8.9%", tenure: "5-15 years", processingFee: "0%", icon: "📚" },
  { id: "car-loan", name: "Car Loan", minAmount: "1 Lakh", maxAmount: "2 Crore", interest: "8.9%", tenure: "1-7 years", processingFee: "0.5%", icon: "🚗" },
  { id: "two-wheeler-loan", name: "Two Wheeler Loan", minAmount: "20,000", maxAmount: "2 Lakhs", interest: "12%", tenure: "1-3 years", processingFee: "1%", icon: "🏍️" },
  { id: "loan-against-property", name: "Loan Against Property", minAmount: "10 Lakhs", maxAmount: "10 Crore", interest: "9.5%", tenure: "5-15 years", processingFee: "1%", icon: "🏢" },
  { id: "personal-loan-for-low-cibil", name: "Personal Loan for Low CIBIL", minAmount: "25,000", maxAmount: "5 Lakhs", interest: "14%", tenure: "1-3 years", processingFee: "2%", icon: "📉" },
  { id: "instant-personal-loan", name: "Instant Personal Loan", minAmount: "10,000", maxAmount: "5 Lakhs", interest: "11%", tenure: "6-36 months", processingFee: "1.5%", icon: "⚡" }
];

export const creditCardProducts = [
  { id: "hdfc-credit-card", name: "HDFC Credit Card", bank: "HDFC", joiningFee: "₹0", annualFee: "₹0", rewards: "5% Cashback", features: ["Lounge Access", "Fuel Surcharge Waiver"], icon: "💳" },
  { id: "sbi-credit-card", name: "SBI Credit Card", bank: "SBI", joiningFee: "₹499", annualFee: "₹499", rewards: "10x Rewards", features: ["Movie Ticket", "Dining Discount"], icon: "💳" },
  { id: "icici-credit-card", name: "ICICI Credit Card", bank: "ICICI", joiningFee: "₹0", annualFee: "₹0", rewards: "4% Cashback", features: ["Airport Lounge", "Fuel Surcharge"], icon: "💳" },
  { id: "axis-credit-card", name: "Axis Credit Card", bank: "Axis", joiningFee: "₹500", annualFee: "₹500", rewards: "5% Cashback", features: ["Travel Benefits", "Lounge Access"], icon: "💳" },
  { id: "kotak-credit-card", name: "Kotak Credit Card", bank: "Kotak", joiningFee: "₹0", annualFee: "₹0", rewards: "4% Rewards", features: ["Fuel Surcharge", "Movie Offers"], icon: "💳" },
  { id: "yes-bank-credit-card", name: "YES Bank Credit Card", bank: "YES Bank", joiningFee: "₹0", annualFee: "₹0", rewards: "10x Rewards", features: ["Travel", "Dining"], icon: "💳" },
  { id: "idfc-credit-card", name: "IDFC First Credit Card", bank: "IDFC", joiningFee: "₹0", annualFee: "₹0", rewards: "6% Cashback", features: ["Lounge Access", "Railway Surcharge"], icon: "💳" },
  { id: "rbl-credit-card", name: "RBL Credit Card", bank: "RBL", joiningFee: "₹0", annualFee: "₹0", rewards: "5% Cashback", features: ["Movie Tickets", "Dining"], icon: "💳" }
];

export const dematProducts = [
  { id: "zerodha-demat", name: "Zerodha Demat", broker: "Zerodha", accountOpen: "₹0", annualMaintenance: "₹0", brokerage: "₹20 per trade", features: ["Lowest Brokerage", "Kite Platform"], icon: "📈" },
  { id: "groww-demat", name: "Groww Demat", broker: "Groww", accountOpen: "₹0", annualMaintenance: "₹0", brokerage: "₹0 for Mutual Funds", features: ["Easy to Use", "No AMC"], icon: "🌱" },
  { id: "angel-one-demat", name: "Angel One Demat", broker: "Angel One", accountOpen: "₹0", annualMaintenance: "₹0", brokerage: "₹20 per trade", features: ["ARQ Advisor", "Mobile App"], icon: "👼" },
  { id: "upstox-demat", name: "Upstox Demat", broker: "Upstox", accountOpen: "₹0", annualMaintenance: "₹0", brokerage: "₹20 per trade", features: ["Low Brokerage", "RKSV"], icon: "📊" },
  { id: "icici-direct-demat", name: "ICICI Direct Demat", broker: "ICICI", accountOpen: "₹999", annualMaintenance: "₹999", brokerage: "0.55%", features: ["3-in-1 Account", "Research"], icon: "🏦" },
  { id: "hdfc-securities-demat", name: "HDFC Securities Demat", broker: "HDFC", accountOpen: "₹999", annualMaintenance: "₹999", brokerage: "0.5%", features: ["3-in-1", "IPO Access"], icon: "🏦" }
];

export const savingProducts = [
  { id: "zero-balance-saving", name: "Zero Balance Savings Account", bank: "Multiple", minBalance: "₹0", interest: "3-4%", features: ["No Minimum Balance", "Free Debit Card"], icon: "💰" },
  { id: "salary-account", name: "Salary Account", bank: "Multiple", minBalance: "₹0", interest: "3-4%", features: ["Zero Balance", "Free Credit Card"], icon: "💼" },
  { id: "women-saving-account", name: "Women's Savings Account", bank: "Multiple", minBalance: "₹0", interest: "4-5%", features: ["Higher Interest", "Shopping Offers"], icon: "👩" },
  { id: "senior-citizen-saving", name: "Senior Citizen Savings", bank: "Multiple", minBalance: "₹0", interest: "4.5-5.5%", features: ["Higher Interest", "Health Benefits"], icon: "👴" }
];

export const insuranceProducts = [
  { id: "term-insurance", name: "Term Insurance", coverage: "1 Crore", premium: "₹500/month", features: ["Tax Benefit", "Family Protection"], icon: "🛡️" },
  { id: "health-insurance", name: "Health Insurance", coverage: "10 Lakhs", premium: "₹600/month", features: ["Cashless Hospital", "Tax Benefit"], icon: "🏥" },
  { id: "car-insurance", name: "Car Insurance", coverage: "Full Cover", premium: "₹4000/year", features: ["Zero Depreciation", "24x7 Support"], icon: "🚗" },
  { id: "life-insurance", name: "Life Insurance", coverage: "50 Lakhs", premium: "₹800/month", features: ["Maturity Benefit", "Tax Saving"], icon: "🌟" }
];

export const fdProducts = [
  { id: "sbi-fd", name: "SBI Fixed Deposit", bank: "SBI", interest: "7.5%", tenure: "1-10 years", features: ["Senior Citizen 7.8%", "Tax Saver"], icon: "📀" },
  { id: "hdfc-fd", name: "HDFC Fixed Deposit", bank: "HDFC", interest: "7.6%", tenure: "1-10 years", features: ["Senior Citizen 8%", "Online Renewal"], icon: "📀" },
  { id: "icici-fd", name: "ICICI Fixed Deposit", bank: "ICICI", interest: "7.5%", tenure: "1-10 years", features: ["Senior Citizen 7.8%", "Tax Benefit"], icon: "📀" }
];

export const getAllProducts = () => [
  ...loanProducts.map(p => ({ ...p, category: "loan" })),
  ...creditCardProducts.map(p => ({ ...p, category: "credit-card" })),
  ...dematProducts.map(p => ({ ...p, category: "demat" })),
  ...savingProducts.map(p => ({ ...p, category: "saving" })),
  ...insuranceProducts.map(p => ({ ...p, category: "insurance" })),
  ...fdProducts.map(p => ({ ...p, category: "fd" }))
];
