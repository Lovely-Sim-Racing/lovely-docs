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

| Property Name | Type | Definition |
| :--- | :---- | :---- |
| `PcName` | `string` | Returns the registered name |
| `IsStreaming` | `bool` | Returns true when data is remote |

| `Time` | `DateTime` | Returns the PC Time |
| `SimHubVersion` | `string` | Returns the SimHub Version |
| `PluginVersion` | `string` | Returns the Lovely Plugin Version |
| `GamePaused` | `int` | Returns `1` or `0` if game is paused |
| `GameRunning` | `int` | Returns `1` or `0` if game is running |