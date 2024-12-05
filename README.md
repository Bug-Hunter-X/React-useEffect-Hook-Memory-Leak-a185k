# React useEffect Hook Memory Leak
This example demonstrates a common mistake in using the React useEffect hook, resulting in a memory leak.  The component mounts and logs a message, but lacks a cleanup function to release any resources it might hold.

## The Problem
The `useEffect` hook, when used without a cleanup function (the second argument), can lead to resources not being properly released.  In this case, it doesn't immediately cause issues, but in more complex scenarios (like subscriptions, timers, or DOM manipulations), this can lead to memory leaks and performance problems.