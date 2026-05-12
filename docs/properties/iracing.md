---
title: iRacing
layout: default
parent: Game Specific
nav_order: 60
---

# iRacing
The full inventory of iRacing related properties.

**P**{: .label .label-pro .mx-0 .mb-1 } Available in **Team Pro**{: .mr-6 }
**S**{: .label .label-starter .mx-0 .mb-1 } Available in **Team Starter**

## Session

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Session.Time` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Session.IsLimitedTime` | `bool` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.IsLimitedLaps` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Session.Skies` | `string` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.WindSpeed` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.WindDirection` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Session.TrackStatus` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## DRS

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `DRS.Status` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Incidents

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Incident.Limit` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Incident.Count` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Incident.Max` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Flags

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Flag.YellowGlobal` | `bool` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Flag.Debris` | `bool` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Info

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Info.FlashingLights` | `bool` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Status

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Status.TrackSurface` | `string` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Fuel

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Fuel.Pressure` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Tyres

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Tyres.Compound` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.PitSv` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Brakes

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Brakes.AttachedToggleFR` | `bool` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Vehicle Settings

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Vehicle.TCToggle` | `int` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.ABSToggle` | `int` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.ERSBattery` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.ShockFL` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.ShockFR` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.ShockRL` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.ShockRR` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.WingRear` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.PlayerP2PCount` | `int` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.PlayerP2PStatus` | `int` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.ThrottleShape` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.FuelMix` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.EnginePower` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.EngineBrake` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.Boost` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.BiasFine` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.BrakeMIG` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.BrakeMAG` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.Diff` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.DiffEntry` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.DiffMid` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.DiffExit` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.FARB` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.RARB` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.FARBArm` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.RARBArm` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.WeightJack` | `double` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |