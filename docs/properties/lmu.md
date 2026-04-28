---
title: LeMans Ultimate
layout: default
parent: Game Specific
nav_order: 120
---

# LeMans Ultimate
The full inventory of LeMans Ultimate related properties.

**P**{: .label .label-pro .mx-0 .mb-1 } Available in **Team Pro**{: .mr-6 }
**S**{: .label .label-starter .mx-0 .mb-1 } Available in **Team Starter**

## Session

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Session.Time` | `DateTime` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.lapInvalidated` | `int` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.Wetness` | `double` | 0 (Dry) ... 1 (Flooded) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Info

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Info.HeadLights` | `int` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.Wiper` | `int` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Info.Torque` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.ElectricBoostMotorState` | `int` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.ElectricMotorTemp` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.ElectricWaterTemp` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.ElectricMotorTorque` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Fuel

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `VE.Current` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Tyres

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Tyres.CompoundFront` | `int` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.CompoundRear` | `int` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.SlipSpeed01` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.SlipSpeed02` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.SlipSpeed03` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.SlipSpeed04` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Vehicle

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Vehicle.SoC` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.LiCo` | `int` | 0-255 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.EngineMapMax` | `int` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Damage

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Damage.Front` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.FrontLeft` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.Left` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.RearLeft` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.Rear` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.RearRight` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.Right` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.FrontRight` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Neored Plugin

Read more about the [NeoRed Plugin](https://lsr.gg/neored)

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Tyres.OptimalTempSoft` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.OptimalTempMedium` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.OptimalTempHard` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.OptimalTempWet` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Tyres.CompoundFL` | `string` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.CompoundFR` | `string` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.CompoundRL` | `string` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.CompoundRR` | `string` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `VE.Max` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `VE.LastLapConsumption` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Vehicle.FuelMix` | `string` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Damage.SuspensionFL` | `double` | 0-1 Front Left Suspension | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.SuspensionFR` | `double` | 0-1 Front Right Suspension  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.SuspensionRL` | `double` | 0-1 Rear Left Suspension | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.SuspensionRR` | `double` | 0-1 Rear Right Suspension | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.Aero` | `double` | 0-1 Damage Aero | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
