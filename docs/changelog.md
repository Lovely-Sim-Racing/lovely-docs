---
title: Changelog
layout: default
nav_order: 50
---

# Changelog
All notable TeamLINQ changes related to the available properties and features are documented in this file. 

## v4.0.0.0 (Oct 20, 2026) **Latest**{: .label .label-green .mx-0 }

* Added `(TimeSpan) TeamLINQ.LapTime.Average5` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
* Added `(TimeSpan) TeamLINQ.LapTime.Average10` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
* Added `(double) TeamLINQ.Fuel.Average5` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
* New [LMU Properties](/properties/lmu.html)
  * Added `(double) TeamLINQ.VE.Average5` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(double) TeamLINQ.VE.EstimatedLaps` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Changed `(double) TeamLINQ.VE.LastLapConsumption` is now measured by the plugin and no longer needs the NeoRed Plugin **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
* New [iRacing Properties](/properties/iracing.html)
  * Added `(double) TeamLINQ.Player.iRatingChange` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
* New [Lap Review Properties](/properties/player.html#lap-review): the last completed lap, measured by the plugin
  * Added `(string) TeamLINQ.LapReview.Lap` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.LapReview.LapTime` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.LapReview.Delta` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.LapReview.DeltaReference` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.LapReview.Valid` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.LapReview.Incidents` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.LapReview.Sectors` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.LapReview.FuelUsed` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.LapReview.FuelLeft` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.LapReview.VEUsed` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.LapReview.VELeft` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.LapReview.TopSpeed` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.LapReview.TyreWearFL` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.LapReview.TyreWearFR` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.LapReview.TyreWearRL` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.LapReview.TyreWearRR` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.LapReview.Position` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.LapReview.PositionGain` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.LapReview.ClassPosition` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.LapReview.ClassPositionGain` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.LapReview.GapAhead` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.LapReview.GapAheadChange` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.LapReview.GapBehind` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.LapReview.GapBehindChange` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }

## v3.6.0.2 (Oct 12, 2026)

* Added `(string) TeamLINQ.Session.TypeNormalised` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }

## v3.6.0.0 (Sep 10, 2026)

* TeamLINQ is out of **BETA**

## v3.5.0.0 (June 23, 2026) **Beta**{: .label .label-red .mx-0 }

* New [LMU Properties](/properties/lmu.html)
  * Added `(int) TeamLINQ.Flag.Yellow1` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(int) TeamLINQ.Flag.Yellow2` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(int) TeamLINQ.Flag.Yellow3` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }
  * Added `(string) TeamLINQ.Opponents.Speed` **P**{: .label .label-pro .mx-0 }

## v3.4.0.0 (May 28, 2026) **Beta**{: .label .label-red .mx-0 }

* New [iRacing Properties](/properties/iracing.html)
  * Added `(double) TeamLINQ.Vehicle.SoC` **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 }


## v3.3.0.0 (May 12, 2026) **Beta**{: .label .label-red .mx-0 }

* Support for Mutliple Tiers (Team Starter **S**{: .label .label-starter .mx-0 } & Teamp Pro **P**{: .label .label-pro .mx-0 })
* Added `ld_driverdeltatobest()` in [TeamLINQ_extensions.js](/functions.html)
* New [LMU Properties](/properties/lmu.html) 
  * Added `(double) TeamLINQ.Info.Torque`
  * Added `(double) TeamLINQ.Info.ElectricMotorTemp`
  * Added `(double) TeamLINQ.Info.ElectricWaterTemp`
  * Added `(double) TeamLINQ.Info.ElectricMotorTorque`
* New [RRRE Properties](/properties/rrre.html) 
  * Added `(double) TeamLINQ.Damage.Aero`
  * Added `(double) TeamLINQ.Damage.Engine`
  * Added `(double) TeamLINQ.Damage.Suspension`
  * Added `(double) TeamLINQ.Damage.Transmission`
* New [AMS2 Property](/properties/automobilista.html) 
  * Added `(double) TeamLINQ.Damage.Engine`

## v3.2.0.0 (April 16, 2026) **Beta**{: .label .label-red .mx-0 }

* LMU Added `(int) Vehicle.EngineMapMax`

## v3.1.0.0 (April 9, 2026) **Beta**{: .label .label-red .mx-0 }

* LMU Native property updates
* Updated [**TeamLINQ JS Extensions**](/functions.html)
* Added `(string) Opponents.Ahead`
* Added `(string) Opponents.AheadInClass`
* Added `(string) Opponents.Behind`
* Added `(string) Opponents.BehindInClass`
* Added/Removed `Damage` properties across all sims to make them more consistent.

## v3.0.0.0 (April 1, 2026) **Beta**{: .label .label-red .mx-0 }

* Upadted all Damage properties
* Added `(bool) Session.MultipleClass`

## v2.4.0.7 (March 27, 2026) **Beta**{: .label .label-red .mx-0 }

* Added AMS2 Boost

## v2.4.0.6 (March 17, 2026) **Beta**{: .label .label-red .mx-0 }

* Added Acceleration Data
* LMU Session Wetness

## v2.4.0.5 (March 13, 2026) **Beta**{: .label .label-red .mx-0 }

* Added new Formula 1 properties
* Added `NeoRed` and `LMU Electronic Bridge` properties

## v2.4.0.4 (March 06, 2026) **Beta**{: .label .label-red .mx-0 }

* Added `PcName` and `IsStreaming` to docs

## v2.4.0.3 (March 02, 2026) **Beta**{: .label .label-red .mx-0 }

* Initial release of [TeamLINQ](https://lsr.gg/teamlinq) docs
