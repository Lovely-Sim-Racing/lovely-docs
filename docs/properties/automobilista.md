---
title: Automobilista 2
layout: default
parent: Game Specific
nav_order: 90
---

# Automobilista 2
The full inventory of Automobilista 2 related properties.

**P**{: .label .label-pro .mx-0 .mb-1 } Available in **Team Pro**{: .mr-6 }
**S**{: .label .label-starter .mx-0 .mb-1 } Available in **Team Starter**

## Session

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Session.Duration` | `double` | Length of a timed session | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.WindSpeed` | `double` | Wind speed | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.WindDirectionY` | `double` | Wind direction, Y component | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.WindDirectionX` | `double` | Wind direction, X component | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Weather.Rain` | `double` | Rain density, 0-1 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## DRS

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `DRS.Status` | `int` | DRS state, as AMS2 reports it | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Info

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Info.Torque` | `double` | Engine torque | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Vehicle

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Vehicle.BoostActive` | `bool` | `true` while push-to-pass boost is active | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.Boost` | `int` | Push-to-pass boost left | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.ERSDeployMode` | `double` | ERS deployment mode | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Damage

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Damage.SuspensionFL` | `double` | Front left suspension damage, 0-1 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.SuspensionFR` | `double` | Front right suspension damage, 0-1 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.SuspensionRL` | `double` | Rear left suspension damage, 0-1 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.SuspensionRR` | `double` | Rear right suspension damage, 0-1 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.Aero` | `double` | Aero damage, 0-1 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.Engine` | `double` | Engine damage, 0-1 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Flags

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Flag.Global` | `int` | AMS2's car flags bitmask (headlights, engine running, speed limiter, ABS, handbrake...) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Tyres 

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Tyres.Compound` | `string` | Compound of the tyres fitted | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.Grip01` | `double` | Front left tyre grip level | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.Grip02` | `double` | Front right tyre grip level | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.Grip03` | `double` | Rear left tyre grip level | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.Grip04` | `double` | Rear right tyre grip level | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
