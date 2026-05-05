# AI Stock Analysis Email Agent

An n8n workflow that provides automated stock market analysis and delivers insights via email.

## Workflow Overview

![Workflow Visualization](ChatGPT%20Image%20May%205,%202026,%2012_35_08%20PM.png)

## How It Works

1. **Chat Trigger** - Receives a stock ticker symbol as a chat input
2. **AI Agent** - Uses Google Gemini to analyze the stock with a structured prompt
3. **Email Delivery** - Sends the analysis report to the configured email address

## Analysis Output Format

The AI agent generates a comprehensive stock analysis including:

- **Stock Symbol** - The ticker being analyzed
- **Market Context** - Brief market overview
- **Technical Analysis** - Price trends, support/resistance, moving averages, volume
- **Fundamental Highlights** - Earnings, financial metrics, industry position, news impact
- **Recommendation** - Buy/Hold/Sell with confidence level, price targets, and time horizon
- **Key Risks** - Main risk factors to monitor
- **Rationale** - 2-3 sentence explanation of the recommendation

## Usage

Import the `stockanalysis_n8n_workflow.json` file into your n8n instance and configure the required credentials:
- Google Gemini (PaLM) API
- Gmail OAuth2

## Output Example

```
**Stock: AAPL**
**Current Context:** Tech sector showing resilience amid broader market volatility

**Technical Analysis:**
- Price trend: Bullish
...
```

## Requirements

- n8n instance
- Google Gemini API credentials
- Gmail API credentials
