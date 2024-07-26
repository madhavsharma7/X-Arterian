const box = new class {
  locked = true;
  #content = [];

  unlock() { this.locked = false; }
  lock() { this.locked = true;  }
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this.#content;
  }
};

function withBoxUnlocked(body) {
  const wasLocked = box.locked;  // Store the initial locked state

  if (wasLocked) box.unlock();   // Unlock the box if it was locked
  
  try {
    return body();              // Execute the provided function
  } finally {
    if (wasLocked) box.lock();  // Lock the box again if it was initially locked
  }
}

// Usage examples:
withBoxUnlocked(() => {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(() => {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}

console.log(box.locked);  // → true
