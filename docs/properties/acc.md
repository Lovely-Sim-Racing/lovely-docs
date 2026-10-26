---
title: Assetto Corsa Competizione
layout: default
parent: Game Specific
nav_order: 50
---

# Assetto Corsa Competizione
The full inventory of Assetto Corsa Competizione related properties.

**P**{: .label .label-pro .mx-0 .mb-1 } Available in **Team Pro**{: .mr-6 }
**S**{: .label .label-starter .mx-0 .mb-1 } Available in **Team Starter**

## System

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `SetupMenu` | `int` | `1` while the setup menu is open | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Session 

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Session.Time` | `double` | In-game time of day, in seconds since midnight | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.WindSpeed` | `double` | Wind speed, in m/s | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.WindDirection` | `double` | Wind direction, in radians | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TrackStatus` | `string` | Track condition as ACC names it (`GREEN`, `FAST`, `OPTIMUM`, `GREASY`, `DAMP`, `WET`, `FLOODED`) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.RT.BestLapOpponentPosition` | `int` | Car index of the session's best lap, from ACC's broadcasting data | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Session.RainIntensity` | `double` | Rain now: `0` none, `1` drizzle, `2` light, `3` medium, `4` heavy, `5` thunderstorm | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.RainIntensityIn10` | `double` | Forecast rain in 10 minutes, same scale | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.RainIntensityIn30` | `double` | Forecast rain in 30 minutes, same scale | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TrackGrip` | `string` | Track grip level, from green to flooded | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Session.Penalty` | `int` | Penalty the player is serving, as ACC's penalty code (`0` none) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Flags 

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Flag.YellowACC` | `int` | `1` while a yellow flag is shown to the player | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Flag.WhiteACC` | `int` | `1` while a white flag is shown to the player | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Flag.WhiteGlobal` | `int` | `1` while a white flag is out anywhere on track | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Flag.Yellow1` | `int` | `1` while sector 1 is under yellow | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Flag.Yellow2` | `int` | `1` while sector 2 is under yellow | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Flag.Yellow3` | `int` | `1` while sector 3 is under yellow | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Info

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Info.HeadLights` | `int` | Headlight stage, `0` off | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.RainLights` | `int` | `1` while the rain light is on | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.FlashingLights` | `int` | `1` while the headlights are flashing | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.Wiper` | `int` | Wiper level, `0` off | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Tyres 

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Tyres.CurrentSet` | `string` | Number of the tyre set fitted | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.Compound` | `string` | Compound of the tyres fitted (`dry_compound` or `wet_compound`) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Lap Times

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `LapTime.iCurrent` | `int` | Current lap time, in milliseconds | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapTime.iLast` | `int` | Last lap time, in milliseconds | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapTime.iBest` | `int` | Best lap time, in milliseconds | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
