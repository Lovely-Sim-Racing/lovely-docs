---
title: Session
layout: default
parent: Properties
nav_order: 20
---

# Session
The full inventory of session related properties.

**P**{: .label .label-pro .mx-0 .mb-1 } Available in **Team Pro**{: .mr-6 }
**S**{: .label .label-starter .mx-0 .mb-1 } Available in **Team Starter**

## Properties

| Property Name | Type | Definition | Tier|
| :--- | :---- | :---- | :---- |
| `Session.GameId` | `string` | SimHub's id of the running game (`IRacing`, `LMU`, `AssettoCorsaCompetizione`...) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.Type` | `string` | Session name as the game reports it | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TypeNormalised` | `string` | `P`, `Q`, `R` or `[NULL]` | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.AirTemp` | `double` | Air temperature, in `Unit.Temp` | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TrackTemp` | `double` | Track surface temperature, in `Unit.Temp` | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TrackId` | `string` | The game's id of the track | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TrackLength` | `double` | Track length, in meters | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TrackName` | `string` | Track name, from the Lovely track data | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TrackSegment` | `string` | Name of the turn or straight the player is on, from the Lovely track data; empty when the track has no data | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TrackTurn` | `int` | Number of the turn the player is in, from the Lovely track data; empty on a straight or when the track has no data | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TimeLeft` | `TimeSpan` | Time left in the session | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TotalLaps` | `int` | Total laps in a lap-limited session | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.SectorsCount` | `int` | Number of sectors on the track | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.MultiClass` | `string` | `True` when the session has more than one car class | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Units

| Property Name | Type | Definition | Tier |
| :--- | :---- | :---- | :---- |
| `Unit.Speed` | `string` | Unit used for speeds, as set in SimHub | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Unit.Fuel` | `string` | Unit used for fuel, as set in SimHub | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Unit.Pressure` | `string` | Unit used for tyre pressures, as set in SimHub | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Unit.Temp` | `string` | Unit used for temperatures, as set in SimHub | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Unit.OilPressure` | `string` | Unit used for oil pressure, as set in SimHub | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |


## Flags

Each flag is `1` while it's shown to the player, `0` otherwise.

| Property Name | Type | Definition | Tier |
| :--- | :---- | :---- | :---- |
| `Flag.Black` | `int` | Black flag | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Flag.Blue` | `int` | Blue flag | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Flag.Checkered` | `int` | Chequered flag | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Flag.Green` | `int` | Green flag | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Flag.Orange` | `int` | Orange (meatball) flag | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Flag.White` | `int` | White flag | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Flag.Yellow` | `int` | Yellow flag | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
