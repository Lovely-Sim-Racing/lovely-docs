---
title: iRacing
layout: default
parent: Game Specific
nav_order: 60
---

# iRacing
Always use the full property name, as demonstrated below:

**LovelyPlugin.TeamLINQ.** + `Property Name`
{: .note }

## Session

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Session.Time` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `Session.IsLimitedTime` | `bool` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.IsLimitedLaps` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `Session.Skies` | `string` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.WindSpeed` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.WindDirection` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `Session.TrackStatus` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## DRS

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `DRS.Status` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Incidents

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Incident.Limit` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Incident.Count` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Incident.Max` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Flags

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Flag.YellowGlobal` | `bool` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Flag.Debris` | `bool` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Info

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Info.FlashingLights` | `bool` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Status

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Status.TrackSurface` | `string` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Fuel

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Fuel.Pressure` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Tyres

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Tyres.Compound` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.PitSv` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Brakes

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Brakes.AttachedToggleFR` | `bool` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Vehicle Settings

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Vehicle.TCToggle` | `int` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.ABSToggle` | `int` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.ERSBattery` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.ShockFL` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.ShockFR` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.ShockRL` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.ShockRR` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.WingRear` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.PlayerP2PCount` | `int` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.PlayerP2PStatus` | `int` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.ThrottleShape` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.FuelMix` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.EnginePower` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.EngineBrake` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.Boost` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.BiasFine` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.BrakeMIG` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.BrakeMAG` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.Diff` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.DiffEntry` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.DiffMid` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.DiffExit` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.FARB` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.RARB` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.FARBArm` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.RARBArm` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.WeightJack` | `double` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |