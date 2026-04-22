---
title: Opponents
layout: default
parent: Properties
nav_order: 40
---

# Opponents
Always use the full property name, as demonstrated below:

**LovelyPlugin.TeamLINQ.** + `Property Name`
{: .note }

## Properties 

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Session.BestLapOpponentPosition` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.BestLapOpponentSameClassPosition ` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.MultiClass` | `bool` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `Opponents.Count` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Opponents.ClassCount` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Opponents.Ahead` | `Array` of `string` | Returns Array of Driver Positions Ahead | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Opponents.AheadInClass` | `Array` of `string` | Returns Array of Driver Positions Ahead | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Opponents.Behind` | `Array` of `string` | Returns Array of Driver Positions Behind | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Opponents.BehindInClass` | `Array` of `string` | Returns Array of Driver Positions Behind | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |


## Leaderboard
The Opponent Leaderboard properties return an array, representing each driver on the leaderboard. Accessing the data is made easy with the [TeamLINQ JS Functions](../functions.html)

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Opponents.DriverName` | `Array` of `string` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Opponents.Id` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Opponents.Class` | `Array` of `string` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Opponents.ClassColor` | `Array` of `string` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Opponents.ClassColorText` | `Array` of `string` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Opponents.isPlayer` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Opponents.Coordinates` | `Array` of `string` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Opponents.IsConnected` | `Array` of `string` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Opponents.Initials` | `Array` of `string` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Opponents.IsInGarage` | `Array` of `string` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Opponents.TeamName` | `Array` of `string` |   | **PRO**{: .label .label-pro .mx-0 } |
| `Opponents.CarName` | `Array` of `string` |   | **PRO**{: .label .label-pro .mx-0 } |
| `Opponents.Number` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } |
| `Opponents.License` | `Array` of `string` |   | **PRO**{: .label .label-pro .mx-0 } |
| `Opponents.iRating` | `Array` of `string` |   | **PRO**{: .label .label-pro .mx-0 } |
| `Opponents.Category` | `Array` of `string` |   | **PRO**{: .label .label-pro .mx-0 } |

| `Opponents.Position` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Opponents.ClassPosition` | `Array` of `string` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Opponents.PositionGain` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Opponents.ClassPositionGain` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `Opponents.BestLapTime` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Opponents.LastLapTime` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } |

| `Opponents.CurrentLap` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } |
| `Opponents.CurrentLapPrecise` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } |
| `Opponents.TrackPosition` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } |

| `Opponents.SectorIndex` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } |
| `Opponents.SectorsCurrentLap` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } |
| `Opponents.SectorsLastLap` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } |
| `Opponents.SectorsBestLap` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } |
| `Opponents.SectorsBestSplits` | `Array` of `string` |   | **PRO**{: .label .label-pro .mx-0 } |

| `Opponents.PitCount` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } |
| `Opponents.PitLapsSince` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } |
| `Opponents.PitLastDuration` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } |
| `Opponents.IsOutLap` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } |
| `Opponents.IsInPit` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } |
| `Opponents.IsInPitLane` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } |
| `Opponents.IsInGarage` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } |

| `Opponents.DeltaToPlayer` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } |
| `Opponents.DeltaToBest` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Opponents.GapToLeader` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } |
| `Opponents.GapToClassLeader` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } |
| `Opponents.GapToPlayer` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } |
| `Opponents.GapToPlayerRelative` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } |
| `Opponents.DistanceToPlayerRelative` | `Array` of `string ` |   | **PRO**{: .label .label-pro .mx-0 } |

