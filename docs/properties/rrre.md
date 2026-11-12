---
title: RaceRoom
layout: default
parent: Game Specific
nav_order: 100
---

# RaceRoom Racing Experience
The full inventory of RaceRoom Racing Experience related properties.

**P**{: .label .label-pro .mx-0 .mb-1 } Available in **Team Pro**{: .mr-6 }
**S**{: .label .label-starter .mx-0 .mb-1 } Available in **Team Starter**

## Info

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Info.HeadLights` | `int` | `1` while the headlights are on | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Incidents

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Incident.Count` | `int` | The player's incident points this session | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Incident.Max` | `int` | Incident points allowed before a penalty | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## DRS

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `DRS.Available` | `int` | `1` when DRS can be used | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `DRS.Engaged` | `int` | `1` while DRS is open | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `DRS.Equipped` | `int` | `1` when the car has DRS | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `DRS.ActivationsLeft` | `int` | DRS activations left | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `DRS.ActivationsTotal` | `int` | DRS activations allowed in total | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Damage

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Damage.Suspension` | `double` | Suspension damage, 0-1 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.Transmission` | `double` | Transmission damage, 0-1 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.Aero` | `double` | Aero damage, 0-1 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.Engine` | `double` | Engine damage, 0-1 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Tyres 

The temperature thresholds of the tyres fitted: below `ColdTemp` the tyre is cold, around `OptimalTemp` it's in its window, above `HotTemp` it's overheating.

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Tyres.ColdTempFL` | `double` | Front left tyre, cold threshold | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.OptimalTempFL` | `double` | Front left tyre, optimal temperature | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.HotTempFL` | `double` | Front left tyre, hot threshold | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Tyres.ColdTempFR` | `double` | Front right tyre, cold threshold | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.OptimalTempFR` | `double` | Front right tyre, optimal temperature | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.HotTempFR` | `double` | Front right tyre, hot threshold | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Tyres.ColdTempRL` | `double` | Rear left tyre, cold threshold | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.OptimalTempRL` | `double` | Rear left tyre, optimal temperature | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.HotTempRL` | `double` | Rear left tyre, hot threshold | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Tyres.ColdTempRR` | `double` | Rear right tyre, cold threshold | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.OptimalTempRR` | `double` | Rear right tyre, optimal temperature | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.HotTempRR` | `double` | Rear right tyre, hot threshold | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Brakes

The temperature thresholds of the brakes, read the same way as the tyre ones.

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Brakes.ColdTempFL` | `double` | Front left brake, cold threshold | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Brakes.OptimalTempFL` | `double` | Front left brake, optimal temperature | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Brakes.HotTempFL` | `double` | Front left brake, hot threshold | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Brakes.ColdTempFR` | `double` | Front right brake, cold threshold | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Brakes.OptimalTempFR` | `double` | Front right brake, optimal temperature | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Brakes.HotTempFR` | `double` | Front right brake, hot threshold | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Brakes.ColdTempRL` | `double` | Rear left brake, cold threshold | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Brakes.OptimalTempRL` | `double` | Rear left brake, optimal temperature | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Brakes.HotTempRL` | `double` | Rear left brake, hot threshold | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Brakes.ColdTempRR` | `double` | Rear right brake, cold threshold | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Brakes.OptimalTempRR` | `double` | Rear right brake, optimal temperature | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Brakes.HotTempRR` | `double` | Rear right brake, hot threshold | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
