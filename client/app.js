"use strict";
let greetingEl = document.getElementById("greeting");

async function fetchGreeting() {
  try {
    const res = await fetch("http://localhost:9000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "query {greeting}" }),
    });
    const body = await res.json();
    const {
      data: { greeting },
    } = body;
    console.log(greeting);
    greetingEl.textContent = greeting;
  } catch (err) {
    console.error(err.message);
  }
}

fetchGreeting();
