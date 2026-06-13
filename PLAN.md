# AgentVault Final Plan

## Project

`AgentVault` is a trust-first launchpad and governance layer for AI agents on 0G.

The product is not another generic marketplace. The product is the missing trust and control layer around agent creation, ownership, listing, execution visibility, and safe monetization.

## Research Basis

This plan is based on current 0G documentation and public 0G ecosystem material reviewed before planning:

- `Agentic ID` is 0G's core primitive for tokenizing AI agents with transferable intelligence, encrypted metadata, and ownership semantics built on `ERC-7857`.
- `Agentic ID` is designed to work across `0G Storage`, `0G Chain`, `0G Compute`, and `0G DA`.
- 0G positions its stack as modular, which supports a clean architecture with isolated adapters instead of a tightly coupled monolith.
- 0G ecosystem signals show the stronger opportunity is not "yet another agent marketplace" but a more operational product around governance, verification, and safe agent usage.

Reference documents:

- https://docs.0g.ai/
- https://docs.0g.ai/concepts/agentic-id
- https://docs.0g.ai/developer-hub/building-on-0g/agentic-id/overview
- https://docs.0g.ai/developer-hub/building-on-0g/agentic-id/integration
- https://0g.ai/blog/agentic-ai-market-infra-2026
- https://0g.ai/blog/0g-private-computer

## Product Thesis

0G already gives builders the infrastructure to own and operate AI agents. What remains underbuilt is the layer that answers:

- who owns the agent
- what the agent is allowed to do
- where the agent manifest and state live
- how execution events are surfaced
- how unsafe agents are paused
- how creators monetize usage safely

AgentVault should solve those problems with one product.

## Final Product Scope

AgentVault will allow a creator to:

- define an AI agent
- attach a structured manifest
- store encrypted metadata on `0G Storage`
- mint the agent as an `Agentic ID`
- publish a public listing
- configure policy controls
- pause or resume the agent
- expose trust and activity signals
- prepare the agent for paid access

AgentVault will allow a user to:

- browse listed agents
- inspect ownership and manifest-derived details
- see trust and status signals
- review recent activity
- understand pricing and access mode

## Core 0G Alignment

### Hard Commit Components

These must be real in the build:

- `Agentic ID`
- `0G Storage`
- `0G Chain`

### Soft Commit Components

These should be designed in from the start but may remain modular during early phases:

- `0G Compute` / `0G Private Computer`
- `0G DA`

### Optional Early Component

This should be architecture-ready but not allowed to destabilize the MVP:

- `0G Pay`

## MVP Boundary

### Must Be Real

- creator can create an agent draft
- system validates a manifest schema
- manifest is encrypted or prepared for encrypted storage
- manifest is uploaded to `0G Storage`
- linked `Agentic ID` mint flow exists
- onchain registry or policy state is written
- public listing is viewable
- owner can pause and resume an agent
- trust panel shows explicit, explainable signals

### Can Be Lightweight in Early Versions

- advanced compute verification
- complex reputation scoring
- full subscription billing
- deep analytics
- multi-agent orchestration
- autonomous execution engine

## Non-Goals

- not a generic NFT marketplace clone
- not a full autonomous trading platform
- not a generalized no-code AI builder
- not a cross-chain hub in V1
- not a monolithic product that couples every 0G module into one fragile flow

## User Roles

### Creator

- launches and manages agents
- uploads manifests
- controls listing and policy
- monitors trust and activity

### User

- discovers agents
- evaluates trust
- uses or subscribes to an agent later

### Operator / Maintainer

- observes runtime events
- manages indexing and storage integrity
- supports trust event ingestion

## System Model

### Onchain

- listing state
- ownership links
- policy state
- emergency controls
- optional billing configuration

### 0G Storage

- encrypted agent manifest
- config snapshots
- optional execution artifacts
- optional public metadata bundles

### App Database

- indexed listings
- queryable activity feeds
- derived trust summaries
- UI-facing aggregates

### Compute Layer

- optional verifiable execution or inference routing
- future execution receipt ingestion

## Domain Model

### Core Entities

- `Agent`
- `AgentManifest`
- `AgentListing`
- `AgentPolicy`
- `ExecutionEvent`
- `TrustProfile`
- `BillingPlan`

### Lifecycle

`draft -> stored -> minted -> listed -> active -> paused -> archived`

## Clean Architecture

### Domain Layer

Pure product rules:

- agent rules
- policy rules
- trust rules
- billing rules

### Application Layer

Use cases:

- create draft
- validate manifest
- upload manifest
- mint agentic id
- publish listing
- update policy
- pause agent
- resume agent
- record execution event
- compute trust summary

### Infrastructure Layer

Adapters:

- `ChainAdapter`
- `AgenticIdAdapter`
- `StorageAdapter`
- `ComputeAdapter`
- `DaProofAdapter`
- `PaymentAdapter`
- `PersistenceAdapter`

### Presentation Layer

Surfaces:

- creator dashboard
- public listing pages
- policy and governance panel
- trust and activity views

## Real Build Phases

## Phase 0: Product Lock

Goal:
remove ambiguity before code.

Tasks:

- freeze the product statement
- freeze MVP scope
- freeze the first demo agent category
- decide what is real and what is simulated
- define Wave 1 and Wave 2 success criteria

Deliverables:

- final product scope
- user journeys
- entity list
- MVP boundary

## Phase 1: Protocol and Domain Design

Goal:
define the product core and contract boundaries.

Tasks:

- define manifest schema
- define listing schema
- define policy model
- define trust model v1
- define contract responsibilities
- decide onchain vs storage vs database boundaries

Deliverables:

- domain model
- storage schema
- contract interface draft
- trust logic spec

## Phase 2: Repo and Engineering Foundation

Goal:
set stable engineering foundations.

Tasks:

- scaffold monorepo
- set TypeScript boundaries
- add shared schemas
- add linting and formatting
- add environment strategy
- add CI-ready scripts if time allows

Deliverables:

- repo skeleton
- shared package boundaries
- validation strategy

## Phase 3: 0G Core Integration

Goal:
prove the app is genuinely 0G-native.

Integration priority:

1. `0G Storage`
2. `Agentic ID`
3. `0G Chain`
4. `0G Compute` / `0G Private Computer`
5. `0G DA`
6. `0G Pay`

Tasks:

- implement storage adapter
- implement manifest upload path
- implement agentic id mint path
- implement registry write path
- document integration assumptions and edge cases

Deliverables:

- storage flow
- mint flow
- registry flow
- integration notes

## Phase 4: Creator Launch Flow

Goal:
complete one creator journey end to end.

Tasks:

- wallet connect
- create agent form
- manifest review step
- publish flow
- success confirmation
- creator dashboard shell

Deliverables:

- first complete launch flow
- persisted listing
- public agent detail page

## Phase 5: Governance and Trust Layer

Goal:
build the differentiator.

Tasks:

- policy controls
- pause / resume
- trust signal panel
- activity timeline
- visible ownership and manifest hash references

Deliverables:

- governance panel
- trust panel
- lifecycle history

## Phase 6: Execution Visibility

Goal:
show the agent as operational, not just minted.

Tasks:

- connect one demo runtime or execution adapter
- record execution events
- store or index summary artifacts
- surface proof references where possible

Deliverables:

- execution timeline
- one demo runtime path
- visible execution metadata

## Phase 7: Monetization Layer

Goal:
prepare agents to function as products.

Tasks:

- free / paid access model
- metered or subscription-ready plan model
- creator payout design
- modular payment adapter

Deliverables:

- billing model
- pricing UI
- payment integration boundary

## Phase 8: Hackathon Packaging

Goal:
optimize clarity, polish, and judging.

Tasks:

- improve landing and dashboard polish
- tighten README and setup docs
- add architecture visual
- prepare screenshots
- prepare demo script
- prepare submission narrative

Deliverables:

- demo-ready app
- submission-ready repository
- polished documentation

## Phase 9: Mainnet and Hardening

Goal:
prepare for serious delivery beyond concept stage.

Tasks:

- verify deployment flow
- harden policy paths
- improve error handling
- replace soft mocks with real integrations
- document operational assumptions

Deliverables:

- mainnet-ready plan
- verified deployment checklist
- production hardening notes

## Delivery Sequence

The correct build order is:

1. product lock
2. domain and protocol design
3. repo scaffold
4. storage and mint flow
5. listing flow
6. governance and trust
7. execution visibility
8. monetization
9. polish and submission

## Wave Mapping

## Wave 1

- final concept
- repo scaffold
- domain model
- architecture docs
- manifest schema
- early UI or flow prototype

## Wave 2

- working testnet flow
- create -> store -> mint -> list
- trust panel
- governance controls
- demo video

## Wave 3

- mainnet deployment path
- verified addresses
- stronger execution and trust surfaces

## Tech Stack Decision

The final stack is documented separately in [TECHSTACK.md](./TECHSTACK.md).

## Rules for Building

Build constraints and things to avoid are documented separately in [RULES.md](./RULES.md).

## Risks

- `Agentic ID` implementation details may be stricter than a normal NFT flow
- proof surfaces can become vague if not tied to explicit artifacts
- overcommitting to `0G Pay` too early can slow delivery
- coupling app logic too tightly to chain logic will hurt iteration speed
- trying to ship too many agent categories will weaken the demo

## Risk Controls

- isolate every 0G integration behind an adapter
- keep one manifest schema as the source of truth
- use one demo agent category only
- prioritize one complete flow over many incomplete flows
- keep trust scoring explainable and rules-based

## Success Criteria

- clearly 0G-native
- technically coherent
- differentiated from generic marketplaces
- easy to explain in under one minute
- demoable without fragile setup
- uses at least three 0G components in a meaningful way

## Immediate Next Tasks

1. finalize `TECHSTACK.md`
2. finalize `RULES.md`
3. keep the current architecture unless implementation proves otherwise
4. start with manifest schema before any UI over-expansion
