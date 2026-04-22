---
title: LeMans Ultimate
layout: default
parent: Game Specific
nav_order: 120
---

# LeMans Ultimate
Always use the full property name, as demonstrated below:

**LovelyPlugin.TeamLINQ.** + `Property Name`
{: .note }

## Session

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Session.Time` | `DateTime` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.lapInvalidated` | `int` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.Wetness` | `double` | 0 (Dry) ... 1 (Flooded) | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Info

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Info.HeadLights` | `int` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.Wiper` | `int` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `Info.Torque` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.ElectricBoostMotorState` | `int` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.ElectricMotorTemp` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.ElectricWaterTemp` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.ElectricMotorTorque` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Fuel

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `VE.Current` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Tyres

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Tyres.CompoundFront` | `int` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.CompoundRear` | `int` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.SlipSpeed01` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.SlipSpeed02` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.SlipSpeed03` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.SlipSpeed04` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Vehicle

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Vehicle.SoC` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.LiCo` | `int` | 0-255 | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.EngineMapMax` | `int` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Damage

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Damage.Front` | `double` | 0-100 | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Damage.FrontLeft` | `double` | 0-100 | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Damage.Left` | `double` | 0-100 | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Damage.RearLeft` | `double` | 0-100 | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Damage.Rear` | `double` | 0-100 | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Damage.RearRight` | `double` | 0-100 | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Damage.Right` | `double` | 0-100 | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Damage.FrontRight` | `double` | 0-100 | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Neored Plugin

Read more about the [NeoRed Plugin](https://lsr.gg/neored)

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Tyres.OptimalTempSoft` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.OptimalTempMedium` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.OptimalTempHard` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.OptimalTempWet` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `Tyres.CompoundFL` | `string` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.CompoundFR` | `string` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.CompoundRL` | `string` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.CompoundRR` | `string` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `VE.Max` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `VE.LastLapConsumption` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `Vehicle.FuelMix` | `string` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `Damage.SuspensionFL` | `double` | 0-1 Front Left Suspension | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Damage.SuspensionFR` | `double` | 0-1 Front Right Suspension  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Damage.SuspensionRL` | `double` | 0-1 Rear Left Suspension | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Damage.SuspensionRR` | `double` | 0-1 Rear Right Suspension | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Damage.Aero` | `double` | 0-1 Damage Aero | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
