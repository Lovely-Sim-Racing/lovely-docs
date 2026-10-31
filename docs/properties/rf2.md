---
title: rFactor 2
layout: default
parent: Game Specific
nav_order: 110
---

# rFactor 2
The full inventory of rFactor 2 related properties.

**P**{: .label .label-pro .mx-0 .mb-1 } Available in **Team Pro**{: .mr-6 }
**S**{: .label .label-starter .mx-0 .mb-1 } Available in **Team Starter**

## Session

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Session.Penalty` | `int` | Penalties the player still has to serve (`0` none); the game doesn't say which kind | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.Wetness` | `double` | 0 (Dry) ... 1 (Flooded) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Weather

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Weather.Raining` | `double` | Rain severity now, 0 (none) ... 1 (heaviest) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Weather.DarkCloud` | `double` | Cloud darkness now, 0 (clear) ... 1 (darkest) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Info

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Info.ElectricBoostMotorState` | `int` | Hybrid motor state: `0` unavailable, `1` inactive, `2` deploying, `3` regenerating | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.HeadLights` | `int` | `1` while the headlights are on | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.Overheating` | `int` | `1` while the engine is overheating | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Tyres

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Tyres.CompoundFront` | `int` | Front tyre compound index | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.CompoundRear` | `int` | Rear tyre compound index | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.CompoundFL` | `string` | Front left tyre compound name, same as front right | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.CompoundFR` | `string` | Front right tyre compound name, same as front left | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.CompoundRL` | `string` | Rear left tyre compound name, same as rear right | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.CompoundRR` | `string` | Rear right tyre compound name, same as rear left | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.SlipSpeed01` | `double` | Front left tyre slip speed | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.SlipSpeed02` | `double` | Front right tyre slip speed | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.SlipSpeed03` | `double` | Rear left tyre slip speed | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.SlipSpeed04` | `double` | Rear right tyre slip speed | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
