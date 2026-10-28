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
| `Session.Time` | `double` | In-game time of day, in seconds since midnight | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Session.IsLimitedTime` | `bool` | `true` when the session ends on time | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.IsLimitedLaps` | `int` | `1` when the session ends on laps | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Session.Skies` | `string` | Sky condition (clear, partly cloudy, mostly cloudy, overcast) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.WindSpeed` | `double` | Wind speed, in m/s | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.WindDirection` | `double` | Wind direction, in radians | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TrackStatus` | `double` | Track wetness, from iRacing's `TrackWetness` (`1` dry, higher is wetter) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |


## DRS

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `DRS.Status` | `int` | DRS state: `0` not available, `1` available soon, `2` available, `3` open | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Incidents

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Incident.Limit` | `int` | Incident limit for the event | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Incident.Count` | `int` | The player's incident points this session | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Incident.Max` | `int` | Incident points allowed before a penalty or disqualification | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## iRating

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Player.iRatingChange` | `double` | The player's estimated iRating change for this race, from the current positions in their class (community iRacing SOF iRating formula, the same estimate other iRacing tools use). Updated once a second, races only; `null` in practice, qualifying and when there's no field to compare against | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Flags

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Flag.YellowGlobal` | `bool` | `true` under a full course yellow | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Flag.Debris` | `bool` | `true` while the debris flag is shown | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Info

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Info.FlashingLights` | `bool` | `true` while the headlights are flashing | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.EngineWarnings` | `string` | The car's warning lights, as SimHub gives them: a number (bits: `1` water temp, `2` fuel pressure, `4` oil pressure, `8` engine stalled, `16` pit limiter, `32` rev limiter, `64` oil temp, `128` mandatory repair, `256` optional repair) or the flag names | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Status

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Status.TrackSurface` | `string` | What the player's car is on: on track, off track, pit stall, approaching pits or not in world | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Fuel

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Fuel.Pressure` | `double` | Fuel pressure | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Tyres

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Tyres.Compound` | `int` | Compound of the tyres fitted | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.PitSv` | `int` | Compound selected for the next pit stop | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Brakes

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Brakes.AttachedToggleFR` | `bool` | Front right brake attached toggle (cars with a brake disconnect control) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Vehicle Settings

These are the in-car adjustments (`dc...` values) of cars that have them.

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Vehicle.TCToggle` | `int` | Traction control on/off switch | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.ABSToggle` | `int` | ABS on/off switch | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.ERSBattery` | `double` | ERS battery energy | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.SoC` | `double` | ERS battery state of charge, percentage | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.ShockFL` | `double` | Front left shock setting | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.ShockFR` | `double` | Front right shock setting | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.ShockRL` | `double` | Rear left shock setting | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.ShockRR` | `double` | Rear right shock setting | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.WingRear` | `double` | Rear wing setting | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.PlayerP2PCount` | `int` | Push-to-pass activations left | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.PlayerP2PStatus` | `int` | `1` while push-to-pass is active | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.ThrottleShape` | `double` | Throttle map setting | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.FuelMix` | `double` | Fuel mixture setting | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.EnginePower` | `double` | Engine power setting | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.EngineBrake` | `double` | Engine braking setting | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.Boost` | `double` | Boost level setting | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.BiasFine` | `double` | Brake bias fine adjustment | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.BrakeMIG` | `double` | Brake bias migration, from the car setup | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.BrakePeak` | `double` | Peak brake bias setting, on cars with an in-car adjustment | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.BrakeMAG` | `double` | Brake misc (MAG) setting | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.Diff` | `double` | Differential preload setting | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.DiffEntry` | `double` | Differential entry setting | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.DiffMid` | `double` | Differential middle setting | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.DiffExit` | `double` | Differential exit setting | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.FARB` | `double` | Front anti-roll bar setting | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.RARB` | `double` | Rear anti-roll bar setting | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.FARBArm` | `double` | Front anti-roll bar arm, from the car setup | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.RARBArm` | `double` | Rear anti-roll bar arm, from the car setup | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.WeightJack` | `double` | Weight jacker setting | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
