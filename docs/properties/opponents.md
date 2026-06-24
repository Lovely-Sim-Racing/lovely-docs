---
title: Opponents
layout: default
parent: Properties
nav_order: 40
---

# Opponents
The full inventory of opponent related properties.

**P**{: .label .label-pro .mx-0 .mb-1 } Available in **Team Pro**{: .mr-6 }
**S**{: .label .label-starter .mx-0 .mb-1 } Available in **Team Starter**

## Properties 

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Session.BestLapOpponentPosition` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.BestLapOpponentSameClassPosition ` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.MultiClass` | `bool` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Opponents.Count` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.ClassCount` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.Ahead` | `Array` of `string` | Returns Array of Driver Positions Ahead | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.AheadInClass` | `Array` of `string` | Returns Array of Driver Positions Ahead | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.Behind` | `Array` of `string` | Returns Array of Driver Positions Behind | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.BehindInClass` | `Array` of `string` | Returns Array of Driver Positions Behind | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |


## Leaderboard
The Opponent Leaderboard properties return an array, representing each driver on the leaderboard. Accessing the data is made easy with the [TeamLINQ JS Functions](../functions.html)

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Opponents.DriverName` | `Array` of `string` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.Id` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.Class` | `Array` of `string` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.ClassColor` | `Array` of `string` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.ClassColorText` | `Array` of `string` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.isPlayer` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.Coordinates` | `Array` of `string` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.IsConnected` | `Array` of `string` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.Initials` | `Array` of `string` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.TeamName` | `Array` of `string` |   | **P**{: .label .label-pro .mx-0 } |
| `Opponents.CarName` | `Array` of `string` |   | **P**{: .label .label-pro .mx-0 } |
| `Opponents.Number` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } |
| `Opponents.License` | `Array` of `string` |   | **P**{: .label .label-pro .mx-0 } |
| `Opponents.iRating` | `Array` of `string` |   | **P**{: .label .label-pro .mx-0 } |
| `Opponents.Category` | `Array` of `string` |   | **P**{: .label .label-pro .mx-0 } |
| `Opponents.Speed` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } |

| `Opponents.Position` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.ClassPosition` | `Array` of `string` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.PositionGain` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.ClassPositionGain` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Opponents.BestLapTime` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.LastLapTime` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } |

| `Opponents.CurrentLap` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } |
| `Opponents.CurrentLapPrecise` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } |
| `Opponents.TrackPosition` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } |

| `Opponents.SectorIndex` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } |
| `Opponents.SectorsCurrentLap` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } |
| `Opponents.SectorsLastLap` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } |
| `Opponents.SectorsBestLap` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } |
| `Opponents.SectorsBestSplits` | `Array` of `string` |   | **P**{: .label .label-pro .mx-0 } |

| `Opponents.PitCount` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } |
| `Opponents.PitLapsSince` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } |
| `Opponents.PitLastDuration` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } |
| `Opponents.IsOutLap` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } |
| `Opponents.IsInPit` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } |
| `Opponents.IsInPitLane` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } |
| `Opponents.IsInGarage` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } |

| `Opponents.DeltaToPlayer` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } |
| `Opponents.DeltaToBest` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.GapToLeader` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } |
| `Opponents.GapToClassLeader` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } |
| `Opponents.GapToPlayer` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } |
| `Opponents.GapToPlayerRelative` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } |
| `Opponents.DistanceToPlayerRelative` | `Array` of `string ` |   | **P**{: .label .label-pro .mx-0 } |

