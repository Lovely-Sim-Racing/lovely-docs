---
title: System
layout: default
parent: Properties
nav_order: 10
---

# System
The full inventory of system related properties.

**P**{: .label .label-pro .mx-0 .mb-1 } Available in **Team Pro**{: .mr-6 }
**S**{: .label .label-starter .mx-0 .mb-1 } Available in **Team Starter**

## General

| Property Name | Type | Definition | Tier |
| :--- | :---- | :---- | :---- | 
| `PcName` | `string` | Returns the registered name | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `IsStreaming` | `bool` | Returns true when data is remote | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Time` | `DateTime` | Returns the PC Time | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `SimHubVersion` | `string` | Returns the SimHub Version | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `PluginVersion` | `string` | Returns the Lovely Plugin Version | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `GamePaused` | `int` | Returns `1` or `0` if game is paused | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `GameRunning` | `int` | Returns `1` or `0` if game is running | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |