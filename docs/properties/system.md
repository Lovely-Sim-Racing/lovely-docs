---
title: System
layout: default
parent: Properties
nav_order: 10
---

# System
Always use the full property name, as demonstrated below:

**LovelyPlugin.TeamLINQ.** + `Property Name`
{: .note }

## General

| Property Name | Type | Definition | Tier |
| :--- | :---- | :---- | :---- | 
| `PcName` | `string` | Returns the registered name | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `IsStreaming` | `bool` | Returns true when data is remote | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `Time` | `DateTime` | Returns the PC Time | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `SimHubVersion` | `string` | Returns the SimHub Version | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `PluginVersion` | `string` | Returns the Lovely Plugin Version | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `GamePaused` | `int` | Returns `1` or `0` if game is paused | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `GameRunning` | `int` | Returns `1` or `0` if game is running | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |