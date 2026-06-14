# AgentVault

[![0G](https://img.shields.io/badge/Built%20for-0G%20AI-0f172a?style=for-the-badge)](https://docs.0g.ai/)
[![Agentic ID](https://img.shields.io/badge/Powered%20by-Agentic%20ID-2563eb?style=for-the-badge)](https://docs.0g.ai/concepts/agentic-id)
[![ERC-7857](https://img.shields.io/badge/Standard-ERC--7857-059669?style=for-the-badge)](https://docs.0g.ai/developer-hub/building-on-0g/agentic-id/overview)
[![Status](https://img.shields.io/badge/Status-Planning-f59e0b?style=for-the-badge)](./PLAN.md)

AgentVault is a trust and governance layer for AI agents on 0G.

Instead of launching another generic marketplace, AgentVault helps builders launch, govern, verify, and monetize AI agents backed by Agentic ID. Each agent is tokenized, permissioned, auditable, and designed for safe operation across the 0G stack.

## Why This Exists

0G is pushing hard on agent-native infrastructure:

- `Agentic ID` for tokenized AI ownership and transfer
- `0G Storage` for encrypted agent metadata and persistent state
- `0G Compute` / `0G Private Computer` for secure inference
- `0G Chain` for ownership, policy, and execution rules
- `0G DA` for proof integrity and verifiable data availability

The gap is not another launchpad alone. The gap is a clean trust layer around agents:

- Who owns an agent?
- What is the agent allowed to do?
- How is its state stored and transferred?
- How can a user verify what happened?
- How can an unsafe agent be paused?
- How can an agent be monetized safely?

AgentVault answers those questions.

## Core Product

AgentVault gives builders a launchpad plus an operational control plane:

- Mint AI agents as `Agentic IDs`
- Store encrypted agent manifests and state on `0G Storage`
- Define usage permissions, spending limits, and tool scopes
- Run or verify inference through `0G Compute`
- Record governance actions and trust metadata on `0G Chain`
- Anchor integrity proofs and transfer verification with `0G DA`
- Support pay-per-use and subscriptions through `0G Pay`

## What We Are Building

### MVP

- Agent creation flow
- Agent profile and manifest schema
- Agentic ID minting flow
- Policy-based permissions
- Execution log timeline
- Trust score surface
- Emergency pause / revoke controls
- Monetization hooks for paid agent access

### Out of Scope for V1

- Full multi-agent orchestration
- Autonomous onchain trading
- General-purpose marketplace aggregation
- Cross-chain bridging

## 0G Alignment

This project is based on current 0G documentation:

- `Agentic ID` uses `ERC-7857` and is designed for encrypted AI ownership transfer:
  https://docs.0g.ai/concepts/agentic-id
- The Agentic ID developer guide maps the architecture across `0G Storage`, `0G DA`, `0G Chain`, and `0G Compute`:
  https://docs.0g.ai/developer-hub/building-on-0g/agentic-id/integration
- The high-level Agentic ID overview explains transferability, decentralized control, full asset ownership, and royalty potential:
  https://docs.0g.ai/developer-hub/building-on-0g/agentic-id/overview

## Planned Architecture

See [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md).

The architecture follows a clean separation:

- `apps/web`
  user interface for creators, owners, and consumers
- `apps/api`
  orchestration APIs for metadata, policy, scoring, and logs
- `packages/contracts`
  AgentVault registry, policy, billing, and pause controls
- `packages/agent-runtime`
  execution adapters and verifiable agent session logic
- `packages/storage`
  0G Storage integration for encrypted manifests and records
- `packages/shared`
  shared types, schemas, and SDK utilities

## Plan

See [PLAN.md](./PLAN.md) for the detailed execution plan, milestone breakdown, risks, and success criteria.

## Product Positioning

One-line pitch:

> Launch, govern, and monetize verifiable AI agents on 0G.

Short version:

> AgentVault is the trust layer for Agentic ID, combining launchpad UX with governance, auditability, and safe monetization.

## Repository Status

This repository is currently in the planning and architecture phase.

Next steps:

1. Finalize domain model and contract boundaries
2. Scaffold monorepo and app packages
3. Implement Agentic ID mint + manifest storage flow
4. Add governance and execution proof surfaces
