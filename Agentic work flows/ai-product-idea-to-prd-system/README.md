# AI Product Idea to PRD System

An intelligent n8n workflow that transforms raw product ideas into comprehensive Product Requirements Documents (PRD) using multiple AI agents.

## Workflow Overview

![Workflow Visualization](ChatGPT%20Image%20May%205,%202026,%2005_21_43%20PM.png)

## How It Works

The workflow follows a structured multi-agent pipeline to convert product ideas into actionable PRDs:

### 1. Input Collection
- **Trigger:** Google Sheets (polls every minute for new rows)
- **Required Fields:** `idea_description`, `business_context`
- **Optional Fields:** `target_audience`, `constraints`, `timeline_preference`

### 2. Ideation Agent
Refines and expands the original concept:
- Generates 2-3 strategic alternatives
- Identifies core user problems and pain points
- Suggests 4-6 MVP-essential features
- Articulates unique value proposition
- Scores innovation potential (1-10)

### 3. Market Analysis Agent
Provides market intelligence:
- Estimates TAM (Total Addressable Market) and SAM (Serviceable Available Market)
- Identifies direct and indirect competitors with strengths/weaknesses
- Analyzes market trends and consumer behavior shifts
- Evaluates market gaps and white space opportunities
- Assesses market attractiveness (1-10 score)

### 4. Prioritization Agent
Scores the idea using industry frameworks:
- **Business Value:** Revenue potential and strategic alignment
- **User Impact:** Problem significance and user base affected
- **Effort Required:** Development complexity (inverted scoring)
- **Risk Level:** Technical and market feasibility
- **Market Timing:** Readiness and competitive window
- **Strategic Fit:** Alignment with business goals

**Formula:** Priority Score = (Business Value + User Impact + Market Timing + Strategic Fit) - (Effort Required + Risk Level)

**ICE Score:** Impact × Confidence × Ease

### 5. Roadmap Agent
Creates phased execution plan:
- **MVP:** Core features (2-3 months)
- **Phase 2 (Growth):** Scaling features (4-6 months)
- **Phase 3 (Scale):** Advanced features (8-12 months)
- Team requirements per phase
- Dependencies and critical path
- Risk mitigation strategies

### 6. Output Delivery
All results are appended to the Google Sheets Output Sheet with:
- Refined idea description
- Market analysis summary
- Priority/ICE scores
- Roadmap phases
- Success metrics
- Resource allocation estimates

## Output Columns

| Column | Description |
|--------|-------------|
| `idea_id` | Original idea description |
| `refined_idea` | AI-refined product concept |
| `market_analysis` | Full market research results (JSON) |
| `priority_score` | ICE score breakdown |
| `roadmap_phase` | MVP features list |
| `success_metrics` | Key metrics by phase |
| `effort_estimate` | Resource allocation percentages |
| `business_value` | Business context and value |

## Priority Tiers

- **High (Score 15+):** Immediate execution recommended
- **Medium (Score 8-14):** Consider for next planning cycle
- **Low (Score <8):** Revisit when constraints change

## Requirements

- n8n instance
- Google Sheets OAuth2 credentials
- Google Gemini (PaLM) API credentials

## Setup Instructions

1. Create a Google Sheet with two tabs:
   - **Input Sheet** with columns: `idea_description`, `business_context`, `target_audience`, `constraints`, `timeline_preference`
   - **Output Sheet** with headers: `idea_id`, `refined_idea`, `market_analysis`, `priority_score`, `roadmap_phase`, `success_metrics`, `effort_estimate`, `business_value`

2. Import the workflow JSON into n8n

3. Configure credentials:
   - Google Sheets Trigger OAuth2
   - Google Sheets OAuth2
   - Google Gemini (PaLM) API

4. Update the document IDs in the workflow to match your Google Sheet

5. Activate the workflow

## Usage

1. Add a new row to the Input Sheet with your product idea
2. The workflow triggers automatically
3. Results appear in the Output Sheet within a few minutes
