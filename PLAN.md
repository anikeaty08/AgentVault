# AgentVault Plan

## Goal

Build a trust-first launchpad and governance layer for AI agents on 0G.

AgentVault will let creators tokenize agents with `Agentic ID`, attach encrypted manifests, define operating policies, expose monetized usage, and give users a verifiable control surface for trust and safety.

## Problem Statement

0G already makes it possible to build agent-native applications. What remains underbuilt is the trust and governance layer around those agents.

Current pain points:

- agent ownership is not enough without execution controls
- users need proof, logs, and clear permissions before using an agent
- creators need a secure way to publish and monetize agents
- investors, judges, and early users want visible governance primitives
- agent lifecycle actions should be inspectable and reversible when possible

## Product Thesis

The best 0G-native agent product is not another generic marketplace.

The better product is a launchpad with embedded governance:

- creation
- ownership
- permissions
- proof
- reputation
- monetization
- emergency controls

## Users

### Primary Users

- builders launching AI agents on 0G
- early adopters using paid or public agents
- teams that need auditable agent operations

### Secondary Users

- hackathon judges
- ecosystem partners
- future integrators using AgentVault contracts or SDKs

## Core Features

### 1. Agent Launch

- create agent profile
- define name, category, capabilities, pricing, and risk level
- upload encrypted manifest to `0G Storage`
- mint a linked `Agentic ID`

### 2. Governance Controls

- owner-only update controls
- role-based permissions for maintainers
- pause / unpause
- revoke public usage
- usage caps and spend limits

### 3. Trust Surface

- verifiable agent metadata hash
- execution logs
- status history
- trust score and reliability indicators
- proof references for important lifecycle events

### 4. Monetization

- free / paid usage modes
- pay-per-call pricing
- subscription tier hooks
- payout routing for creator revenue

### 5. Discovery

- browse listed agents
- inspect capabilities and risk profile
- compare pricing and status
- review recent execution activity

## Non-Goals

- building a full autonomous trading platform
- creating a generalized no-code AI builder
- replacing 0G-native infrastructure components
- supporting all chains in V1

## 0G Components We Will Use

## `Agentic ID`

- represents agent ownership and transferability
- anchors the agent as a tokenized AI asset

## `0G Storage`

- stores encrypted manifests, config snapshots, and optional execution artifacts

## `0G Chain`

- hosts AgentVault contracts for registry, policy, and lifecycle control

## `0G Compute` / `0G Private Computer`

- powers secure or verifiable inference for managed agent execution

## `0G DA`

- supports integrity verification and transfer-related proof anchoring

## `0G Pay`

- supports agent monetization and billing flows

## Functional Requirements

### Required for MVP

- creators can register an agent
- system stores encrypted metadata on `0G Storage`
- creators can mint an `Agentic ID`
- users can view agent details and current trust status
- owners can pause and resume an agent
- system records execution events in a readable timeline
- paid access model can be represented in product and contract design

### Required for Demo

- one working demo agent
- one creator flow
- one consumer flow
- one lifecycle control action
- one proof or trust surface visible in UI

## Proposed System Design

## Frontend

- creator dashboard
- public agent pages
- governance and activity views
- wallet connection

## Backend / Orchestrator

- manifest encryption and upload pipeline
- execution log ingestion
- trust score calculation
- policy evaluation helpers
- billing coordination

## Smart Contracts

- `AgentVaultRegistry`
- `AgentVaultPolicy`
- `AgentVaultBilling`
- `AgentVaultEmergencyControl`

## Storage and Data

- encrypted agent manifest
- public agent summary
- lifecycle event log
- trust and usage aggregates

## Clean Architecture Direction

The codebase should follow clear boundaries:

- domain layer
  agent, policy, billing, trust, execution event
- application layer
  create agent, mint agentic id, update policy, pause agent, publish listing
- infrastructure layer
  0G Storage adapter, chain adapter, compute adapter, payment adapter
- presentation layer
  web app, admin surfaces, API handlers

This keeps 0G-specific integrations isolated while preserving a stable product core.

## Milestones

## Phase 0: Architecture and Specs

- confirm product scope
- define domain entities
- define storage schema
- define contract boundaries
- document flows

## Phase 1: Repo Scaffold

- create monorepo structure
- add package boundaries
- set up linting, formatting, env management
- add shared schema package

## Phase 2: Agent Launch Flow

- build creator form
- encrypt manifest
- upload to `0G Storage`
- mint `Agentic ID`
- persist listing record

## Phase 3: Governance and Trust

- implement policy model
- add pause / resume action
- show execution log timeline
- calculate simple trust score

## Phase 4: Monetization

- define billing model
- wire `0G Pay` integration points
- show usage plans and paid access flow

## Phase 5: Hackathon Hardening

- polish UI
- add architecture diagram
- prepare demo script
- tighten README and setup docs

## Wave-Oriented Delivery

## Wave 1 Target

- polished concept
- repo setup
- architecture docs
- initial contracts and schemas
- UI mock or starter dashboard

## Wave 2 Target

- testnet flow for create + mint + view
- demo video of agent registration
- basic trust and policy surface

## Wave 3 Target

- mainnet deployment path
- verified addresses
- proof-backed lifecycle actions

## Risks

- `Agentic ID` implementation complexity may exceed generic ERC-721 assumptions
- proof UX can become vague if not grounded in visible artifacts
- `0G Pay` integration details may evolve and should remain modular
- secure key handling must be abstracted carefully in demos

## Risk Mitigation

- keep `Agentic ID` integration isolated in a dedicated module
- treat trust score as transparent and explainable, not magical
- separate product-facing billing abstraction from chain-specific settlement
- prefer one complete flow over many partial flows

## Success Criteria

- clear 0G-native story
- technically coherent architecture
- visible use of at least three 0G components
- differentiated from generic marketplaces
- demoable by judges without deep setup friction

## Immediate Next Build Tasks

1. Create the repo scaffold
2. Define the agent manifest schema
3. Design the contract interfaces
4. Build the first creator dashboard screen
5. Implement `0G Storage` upload path
6. Implement `Agentic ID` mint flow

## Reference Docs

- 0G docs home: https://docs.0g.ai/
- Agentic ID concept: https://docs.0g.ai/concepts/agentic-id
- Agentic ID overview: https://docs.0g.ai/developer-hub/building-on-0g/agentic-id/overview
- Agentic ID integration guide: https://docs.0g.ai/developer-hub/building-on-0g/agentic-id/integration
