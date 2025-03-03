---
layout: default
title: Join Minecraft Server
---

<style>
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #282c34;
        color: white;
        font-family: Arial, sans-serif;
    }
    .button {
        padding: 15px 25px;
        font-size: 16px;
        text-align: center;
        text-decoration: none;
        color: white;
        background-color: #007bff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .button:hover {
        background-color: #0056b3;
    }
</style>

<div style="text-align: center;">
    <button class="button" onclick="joinServer()">Join Minecraft Server</button>
</div>

<script>
    function joinServer() {
        const serverIP = 'play.dragonmc.biz.id';
        const port = 19132;
        window.location.href = `minecraft://${serverIP}:${port}`;
    }
</script>
