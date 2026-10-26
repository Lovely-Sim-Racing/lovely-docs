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
| `Session.BestLapOpponentPosition` | `int` | Leaderboard position of the driver with the session's best lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.BestLapOpponentSameClassPosition ` | `int` | Leaderboard position of the driver with the best lap in the player's class | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.MultiClass` | `bool` | `true` when the session has more than one car class | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Opponents.Count` | `int` | Number of cars in the session | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.ClassCount` | `int` | Number of cars in the player's class | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.Ahead` | `Array` of `string` | Leaderboard positions of the cars ahead of the player on track, nearest first | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.AheadInClass` | `Array` of `string` | Leaderboard positions of the cars in the player's class ahead on track, nearest first | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.Behind` | `Array` of `string` | Leaderboard positions of the cars behind the player on track, nearest first | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.BehindInClass` | `Array` of `string` | Leaderboard positions of the cars in the player's class behind on track, nearest first | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |


## Leaderboard
The Opponent Leaderboard properties return an array, representing each driver on the leaderboard. Accessing the data is made easy with the [TeamLINQ JS Functions](../functions.html)

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Opponents.DriverName` | `Array` of `string` | Driver name | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.Id` | `Array` of `string ` | The driver's unique id | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.Class` | `Array` of `string` | Car class | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.ClassColor` | `Array` of `string` | Car class colour (from iRacing, assigned automatically in other games) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.ClassColorText` | `Array` of `string` | Text colour readable over the class colour, white or black | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.isPlayer` | `Array` of `string ` | `true` for the player's own entry | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.Coordinates` | `Array` of `string` | The car's position on the track map | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.IsConnected` | `Array` of `string` | `true` while the driver is connected to the session | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.Initials` | `Array` of `string` | The driver's initials | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.TeamName` | `Array` of `string` | Team name | **P**{: .label .label-pro .mx-0 } |
| `Opponents.CarName` | `Array` of `string` | Car name | **P**{: .label .label-pro .mx-0 } |
| `Opponents.Number` | `Array` of `string ` | Car number | **P**{: .label .label-pro .mx-0 } |
| `Opponents.License` | `Array` of `string` | Licence string (iRacing only) | **P**{: .label .label-pro .mx-0 } |
| `Opponents.iRating` | `Array` of `string` | iRating (iRacing only) | **P**{: .label .label-pro .mx-0 } |
| `Opponents.Category` | `Array` of `string` | Driver category (ACC only) | **P**{: .label .label-pro .mx-0 } |
| `Opponents.Speed` | `Array` of `string ` | Car speed | **P**{: .label .label-pro .mx-0 } |

| `Opponents.Position` | `Array` of `string ` | Overall position | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.ClassPosition` | `Array` of `string` | Position in class | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.PositionGain` | `Array` of `string ` | Positions gained since the start of the race (negative when lost) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.ClassPositionGain` | `Array` of `string ` | Class positions gained since the start of the race (negative when lost) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Opponents.BestLapTime` | `Array` of `string ` | Best lap time this session | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.LastLapTime` | `Array` of `string ` | Last lap time | **P**{: .label .label-pro .mx-0 } |

| `Opponents.CurrentLap` | `Array` of `string ` | The lap the driver is on | **P**{: .label .label-pro .mx-0 } |
| `Opponents.CurrentLapPrecise` | `Array` of `string ` | The lap the driver is on, plus how far around it they are (`12.45`) | **P**{: .label .label-pro .mx-0 } |
| `Opponents.TrackPosition` | `Array` of `string ` | How far around the lap the driver is, `0.0` to `1.0` | **P**{: .label .label-pro .mx-0 } |

| `Opponents.SectorIndex` | `Array` of `string ` | The sector the driver is in, starting from `1` | **P**{: .label .label-pro .mx-0 } |
| `Opponents.SectorsCurrentLap` | `Array` of `string ` | Sector times on the current lap, cumulative | **P**{: .label .label-pro .mx-0 } |
| `Opponents.SectorsLastLap` | `Array` of `string ` | Sector times on the last completed lap, cumulative | **P**{: .label .label-pro .mx-0 } |
| `Opponents.SectorsBestLap` | `Array` of `string ` | Sector times on the driver's best lap, cumulative | **P**{: .label .label-pro .mx-0 } |
| `Opponents.SectorsBestSplits` | `Array` of `string` | The driver's best time in each sector, from any lap | **P**{: .label .label-pro .mx-0 } |

| `Opponents.PitCount` | `Array` of `string ` | Number of pit stops | **P**{: .label .label-pro .mx-0 } |
| `Opponents.PitLapsSince` | `Array` of `string ` | Laps driven since the last pit exit (estimated) | **P**{: .label .label-pro .mx-0 } |
| `Opponents.PitLastDuration` | `Array` of `string ` | Duration of the last pit stop | **P**{: .label .label-pro .mx-0 } |
| `Opponents.IsOutLap` | `Array` of `string ` | `true` while the driver is on an out lap | **P**{: .label .label-pro .mx-0 } |
| `Opponents.IsInPit` | `Array` of `string ` | `true` while the car is in its pit box | **P**{: .label .label-pro .mx-0 } |
| `Opponents.IsInPitLane` | `Array` of `string ` | `true` while the car is in the pit lane | **P**{: .label .label-pro .mx-0 } |
| `Opponents.IsInGarage` | `Array` of `string ` | `true` while the car is in the garage | **P**{: .label .label-pro .mx-0 } |

| `Opponents.DeltaToPlayer` | `Array` of `string ` | Best lap delta to the player's best lap, in seconds | **P**{: .label .label-pro .mx-0 } |
| `Opponents.DeltaToBest` | `Array` of `string ` | Best lap delta to the session's best lap, in seconds | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Opponents.GapToLeader` | `Array` of `string ` | Race gap to the overall leader | **P**{: .label .label-pro .mx-0 } |
| `Opponents.GapToClassLeader` | `Array` of `string ` | Race gap to the class leader | **P**{: .label .label-pro .mx-0 } |
| `Opponents.GapToPlayer` | `Array` of `string ` | Race gap to the player | **P**{: .label .label-pro .mx-0 } |
| `Opponents.GapToPlayerRelative` | `Array` of `string ` | On-track gap to the player, in seconds, regardless of laps | **P**{: .label .label-pro .mx-0 } |
| `Opponents.DistanceToPlayerRelative` | `Array` of `string ` | On-track distance to the player, regardless of laps | **P**{: .label .label-pro .mx-0 } |

