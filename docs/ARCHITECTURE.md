# AgentVault Architecture

## Summary

AgentVault is a trust-first agent launchpad built on the 0G stack.

The system combines:

- `Agentic ID` for agent ownership and transfer
- `0G Storage` for encrypted agent manifests and state artifacts
- `0G Chain` for registry, policy, and lifecycle enforcement
- `0G Compute` / `0G Private Computer` for verifiable execution
- `0G DA` for integrity and proof anchoring
- `0G Pay` for monetized access

## Architecture Goals

- keep the core product logic independent from vendor-specific adapters
- isolate 0G integrations behind clear infrastructure modules
- support a demoable MVP without blocking on advanced orchestration
- make governance and trust visible in the user experience

## Clean Architecture

## 1. Domain Layer

Pure business concepts with no framework or chain dependencies.

Primary entities:

- `Agent`
- `AgentManifest`
- `AgentPolicy`
- `AgentListing`
- `ExecutionEvent`
- `TrustProfile`
- `BillingPlan`

Primary rules:

- an agent must have a manifest before listing
- a listed agent must map to a valid owner
- a paused agent cannot accept paid usage
- trust signals must be derived from explicit events

## 2. Application Layer

Use cases that coordinate domain rules.

Main use cases:

- create agent draft
- encrypt and publish manifest
- mint agentic id
- publish listing
- update policy
- pause agent
- resume agent
- record execution event
- compute trust summary
- initiate paid usage

## 3. Infrastructure Layer

Concrete adapters to the 0G ecosystem and supporting services.

Adapters:

- `ChainAdapter`
- `AgenticIdAdapter`
- `StorageAdapter`
- `ComputeAdapter`
- `DaProofAdapter`
- `PaymentAdapter`

Responsibilities:

- wallet and chain writes
- metadata upload and retrieval
- proof reference persistence
- execution receipt capture
- billing settlement coordination

## 4. Presentation Layer

User-facing and operator-facing interfaces.

Surfaces:

- creator dashboard
- public listing pages
- owner governance panel
- activity feed
- API endpoints for UI orchestration

## Logical Component Diagram

```text
Web App
  -> API / Orchestrator
      -> Domain Use Cases
          -> Chain Adapter ---------> 0G Chain
          -> Agentic ID Adapter ----> Agentic ID / ERC-7857
          -> Storage Adapter -------> 0G Storage
          -> Compute Adapter -------> 0G Compute / Private Computer
          -> DA Proof Adapter ------> 0G DA
          -> Payment Adapter -------> 0G Pay
```

## Main Flows

## 1. Agent Creation Flow

1. Creator fills in agent details in the dashboard.
2. Backend validates the draft manifest.
3. Manifest is encrypted and uploaded to `0G Storage`.
4. Metadata hash and storage URI are prepared.
5. `Agentic ID` mint transaction is submitted.
6. Registry entry is created on `0G Chain`.
7. Public listing becomes available with trust defaults.

## 2. Governance Update Flow

1. Owner opens agent control panel.
2. Owner changes permission or spending rules.
3. Policy contract update is submitted on `0G Chain`.
4. Event is indexed and displayed in activity feed.
5. Trust profile is recomputed based on current state.

## 3. Execution Logging Flow

1. Agent run is initiated by owner or user.
2. Request is routed through the execution adapter.
3. Execution metadata and proof references are captured.
4. Summary artifact is stored.
5. Result event is appended to the timeline.
6. Trust metrics are updated.

## 4. Emergency Pause Flow

1. Owner or authorized actor triggers pause.
2. Pause state is written onchain.
3. Frontend disables paid usage and highlights risk status.
4. Downstream orchestration rejects new execution requests.

## Domain Model

## `Agent`

- `id`
- `tokenId`
- `owner`
- `status`
- `category`
- `billingPlanId`
- `trustProfileId`

## `AgentManifest`

- `name`
- `description`
- `capabilities`
- `tools`
- `modelInfo`
- `riskLevel`
- `pricing`
- `encryptedUri`
- `metadataHash`

## `AgentPolicy`

- `allowedActions`
- `toolScopes`
- `spendingLimit`
- `rateLimit`
- `pauseState`

## `ExecutionEvent`

- `agentId`
- `actor`
- `type`
- `timestamp`
- `result`
- `proofRef`

## Trust Model

Trust should be understandable, not opaque.

Signals for early versions:

- ownership verified
- manifest hash present
- policy configured
- recent successful executions
- pause / incident history
- proof-backed execution events

The first trust score should be rules-based and explainable.

## Contract Set

## `AgentVaultRegistry`

- maps internal agent records to `Agentic ID` token IDs
- stores listing status and public metadata references

## `AgentVaultPolicy`

- stores permissions and operating constraints
- enforces pause status

## `AgentVaultBilling`

- defines plan metadata and payment routing
- tracks whether an agent is free, metered, or subscribed

## `AgentVaultEmergencyControl`

- privileged safety actions
- optional guardian or co-signer model later

## Data Boundaries

## Onchain

- ownership links
- policy state
- listing state
- emergency status
- payment configuration

## Offchain but Verifiable

- encrypted manifests
- execution summaries
- usage analytics
- trust aggregates

## Security Principles

- least-privilege policy model
- encrypted agent metadata by default
- clear separation between public metadata and sensitive manifests
- explainable trust scoring
- explicit emergency controls

## Suggested Repo Shape

```text
apps/
  web/
  api/
packages/
  contracts/
  agent-runtime/
  storage/
  shared/
docs/
  ARCHITECTURE.md
```

## Implementation Priorities

### Priority 1

- manifest schema
- storage upload path
- Agentic ID mint path
- public listing page

### Priority 2

- policy controls
- pause flow
- execution logging

### Priority 3

- monetization
- trust score
- richer analytics

## Source Alignment

This architecture is grounded in the current 0G documentation:

- Agentic ID concept:
  https://docs.0g.ai/concepts/agentic-id
- Agentic ID overview:
  https://docs.0g.ai/developer-hub/building-on-0g/agentic-id/overview
- Agentic ID integration guide:
  https://docs.0g.ai/developer-hub/building-on-0g/agentic-id/integration
